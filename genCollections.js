"use strict"

const fs = require('fs')
const path = require('path')
const cfg = require('./svits.config.json')
const matter = require('gray-matter')

function init() {
  const cPath = path.resolve(__dirname, '.collections')
  if (fs.existsSync(cPath)) {
    fs.rmdirSync(cPath, { recursive: true })
  }
  fs.mkdirSync(cPath)
  const names = []
  cfg.collections.forEach(c => {
    const p = path.resolve(__dirname, c.path)
    names.push(c.name)
    let urls = []
    if (fs.existsSync(p)) {
      const dir = fs.readdirSync(p)
      const md = !!c.markdown
      urls = getUrls(c, dir, md)
    }
    const data = JSON.stringify(JSON.parse(JSON.stringify(urls)), null, 2)
    fs.writeFileSync(path.join(cPath, `${c.name}.json`), data)
    fs.writeFileSync(path.join(cPath, 'index.js'), getIndex(names))
  })
}

const getIndex = names => {
  const imports = n => {
    let buffer = ''
    n.forEach(n => {
      buffer += `import ${n} from './${n}.json'\n`
    })
    return buffer
  }
  const exports = n => {
    let buffer = 'export {'
    n.forEach(n => {
      buffer += `${n}, `
    })
    buffer += '}'
    return buffer
  }
  return imports(names) + exports(names)
}

const getUrls = (c, dir, md) => {
  let urls = []
  let ext = md ? '.md' : '.json'
  const files = dir
    .filter(n => isFile(n, md))
    .map(d => ({
      url: c.url ? path.join(c.url, d).split(ext).join('') : undefined,
      path: path.resolve(__dirname, c.path, d)
    }))
  files.forEach(f => {
    const data = readContent(f.path, md)
    let params = {}
    if (c.params) {
      Object.keys(c.params).map(k => {
        params[k] = data[c.params[k]]
      })
    }
    urls.push({url: c.params ? parseUrl(f.url, params) : f.url, ...data})
  })
  return urls
}

const parseUrl = (url, expects) => {
  const slices = new String(url).split('/')
  const replaced = slices.map(s => {
    if (s[0] === ':') {
      const extract = s.slice(1, s.length)
      return expects[extract]
    }
    return s
  })
  return replaced.join('/')
}

const isFile = (name, md) => (md ? /\.md/ : /\.json/).test(name) && name !== `index.${md ? 'md' : 'json'}`

const readContent = (path, md) => {
  const buffer = fs.readFileSync(path)
  const data = md ? matter(buffer).data : JSON.parse(buffer)
  return { ...data }
}

if (cfg.collections && cfg.collections.length) {
  init()
}
