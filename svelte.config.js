const path = require('path')
const { mdsvex } = require('mdsvex')
const { typescript, postcss } = require('svelte-preprocess')
module.exports = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    typescript(),
    postcss(),
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: path.join(__dirname, 'src', 'layouts', 'MarkdownLayout.svelte'),
    }),
  ],
};
