const favicons = require('favicons')
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

const build = gulp.series(
  generateFavicons,
)
exports.build = build
