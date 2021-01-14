const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-extend'),
    require('postcss-preset-env')({
      // Full list of features: https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
      features: {
        'nesting-rules': true, // delete if you don’t want nesting (optional)
      },
    }),

    !dev &&
    require('cssnano')({
      preset: ['default', { discardComments: { removeAll: true } }],
    }),
  ]
}
