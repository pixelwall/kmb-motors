const favicons = require('favicons')
const webp = require('gulp-webp')
const faviconsConfig = require('./favicons.config')
const gulp = require('gulp')
const packageJson = require('./package.json')

const generateFavicons = () => {
  faviconsConfig.version = packageJson.version
  // faviconsConfig.url = svitsConfig.hostname

  return gulp.src('./favicon.*')
    .pipe(favicons.stream(faviconsConfig))
    .pipe(gulp.dest(`public${faviconsConfig.path}`))
}
exports.generateFavicons = generateFavicons

const generateWebps = (path) => {
  return gulp.src(`${path}/**/*`)
    .pipe(webp({
      quality: 60,
    }))
    .pipe(gulp.dest(path))
}

const generateWebpsPublic = () => generateWebps('public')
exports.generateWebpsPublic = generateWebpsPublic
