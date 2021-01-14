const del = require('del')
const favicons = require('favicons')
const faviconsConfig = require('./favicons.config')
const fs = require('fs')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const inject = require('gulp-inject')
const packageJson = require('./package.json')
const svitsConfig = require('./svits.config.json')
const routerUrls = require('./.routify/urlIndex.json')
const rename = require('gulp-rename')
const replace = require('gulp-string-replace')
const webp = require('gulp-webp')
const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')

const updateServiceWorker = () => {
  const root = 'dist'

  const skip = [
    'favicons',
  ]

  const flatDeep = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), [])

  const tree = (root) => fs.readdirSync(root, { withFileTypes: true })
    .filter(element => ! skip.includes(element.name) && ! element.name.endsWith('.map'))
    .map(element => element.isDirectory()
      ? tree(`${root}/${element.name}`)
      : `${root}/${element.name}`)

  const listAllFiles = flatDeep(fs.readdirSync(root, { withFileTypes: true })
    .filter(dir => dir.isDirectory() && ! skip.includes(dir.name))
    .map(dir => tree(`${root}/${dir.name}`)))
    .map(path => path.substring(root.length))

  const filesToPreCache = [
    '/',
    '/index.html',
    ...listAllFiles,
  ]

  return gulp.src(`${root}/service-worker.js`)
    .pipe(replace(/'cache-.*'/, `'cache-${packageJson.name}-${(+new Date).toString(36)}'`))
    .pipe(replace(/filesToPreCache = \[(.*\n)*\]/, `filesToPreCache = [\n    '${filesToPreCache.join('\',\n    \'')}'\n]`))
    .pipe(gulp.dest(root))
}
exports.updateServiceWorker = updateServiceWorker

const generateFavicons = () => {
  faviconsConfig.appName = svitsConfig.name
  faviconsConfig.appShortName = svitsConfig.shortName
  faviconsConfig.appDescription = svitsConfig.description
  faviconsConfig.developerName = svitsConfig.author.name
  faviconsConfig.developerURL = svitsConfig.author.url
  faviconsConfig.version = packageJson.version
  faviconsConfig.url = svitsConfig.hostname

  return gulp.src('./favicon.*')
    .pipe(favicons.stream(faviconsConfig))
    .pipe(gulp.dest(`dist${faviconsConfig.path}`))
}
exports.generateFavicons = generateFavicons

const clean = () => {
  return del([
    'dist',
    'public/**/*.webp',
  ])
}
exports.clean = clean

const generateWebps = (path) => {
  return gulp.src(`${path}/**/*`)
    .pipe(webp({
      quality: 60,
    }))
    .pipe(gulp.dest(path))
}

const generateWebpsPublic = () => generateWebps('public')
exports.generateWebpsPublic = generateWebpsPublic

const generateWebpsDist = () => generateWebps('dist')
exports.generateWebpsDist = generateWebpsDist

const injectFavicons = () => {
  return gulp.src('dist/index.html')
    .pipe(inject(gulp.src([`dist${faviconsConfig.path}${faviconsConfig.html}`]), {
      starttag: '<!-- inject:favicons -->',
      transform: (filepath, file) => {
        return file.contents.toString()
      }
    }))
    .pipe(gulp.dest('dist'))
}
exports.injectFavicons = injectFavicons

const metadataContent = (cfg) => {
  return `<title>${cfg.name}</title>
  <meta name="description" content="${cfg.description}" />`
}

const injectMetadata = () => {
  return gulp.src('dist/index.html')
    .pipe(replace('<!-- inject:metadata -->', metadataContent(svitsConfig)))
    .pipe(gulp.dest('dist'))
}
exports.injectMetadata = injectMetadata


const replacePreload = () => {
  const { readFileSync } = fs
  const html = readFileSync('./dist/index.html', 'utf-8')
  const script = html.match(/src="\/(_assets\/index.\w+.js)"/)[1]
  const scriptBuff = readFileSync('./dist/'+script, 'utf-8')
  console.log(scriptBuff)
  const folder = scriptBuff.match(/(_folder.\w+.js)/)[1]
  console.log(folder)
  const dest = `<link rel="modulepreload" href="/${script}" />
<link rel="modulepreload" href="/_assets/${folder}" />`
  return gulp.src('dist/index.html')
    .pipe(replace('<!-- inject:preload -->', dest))
    .pipe(gulp.dest('dist'))
}
exports.replacePreload = replacePreload

const replaceRobotsTXT = () => {
  return gulp.src('dist/robots.txt')
    .pipe(replace('{{host}}', svitsConfig.hostname))
    .pipe(gulp.dest('dist'))
}
exports.replaceRobotsTXT = replaceRobotsTXT

const cleanFaviconsHTML = () => {
  return del([
    'dist/favicons/*.html',
  ])
}
exports.cleanFaviconsHTML = cleanFaviconsHTML

const optimizeImages = () => {
  return gulp.src('dist/**/*.+(jpeg|jpg|png|gif)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist'))
}

const generateSitemapXML = () => {
  const smStream = new SitemapStream({
    hostname: svitsConfig.hostname,
  })

  const urls = routerUrls.map(url => {
    const urlObj = {
      url: url === '/index' ? '/' : url.split('/index').join(''),
      changefreq: 'daily',
      priority: 0.7,
    }
    const configUrl = svitsConfig.sitemapUrls.filter(url => url.url === urlObj.url)[0]
    return { ...urlObj, ...configUrl }
  })
  console.log(urls)

  smStream.pipe(createWriteStream('./dist/sitemap.xml'))

  urls.forEach(url => {
    if (svitsConfig.routifyRuntimeConfig && svitsConfig.routifyRuntimeConfig.useHash && url.url !== '/') {
      url.url = `/#${url.url}`
    }
    smStream.write(url)
  })

  return smStream.end()
}
exports.generateSitemapXML = generateSitemapXML

exports.optimizeImages = optimizeImages

const dev = gulp.series(
  clean,
  generateWebpsPublic,
)
exports.dev = dev

const prod = gulp.series(
  //optimizeImages,
  generateWebpsDist,
  generateFavicons,
  injectFavicons,
  injectMetadata,
  cleanFaviconsHTML,
  updateServiceWorker,
  generateSitemapXML,
  replaceRobotsTXT,
  replacePreload,
)
exports.prod = prod

exports.default = dev
