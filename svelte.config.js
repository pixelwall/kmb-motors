const path = require('path')
const { mdsvex } = require('mdsvex')
const { typescript } = require('svelte-preprocess')
const seqPreprocess = require('svelte-sequential-preprocessor')

const windicss = {
  markup: require('svelte-windicss-preprocess').preprocess({
    compile: true,          // false: interpretation mode; true: compilation mode
    globalPreflight: true,  // set preflight style is global or scoped
    globalUtility: true,    // set utility style is global or scoped
    prefix: 'tw-'           // set compilation mode style prefix
  }),
  style: ({content, }) => {
    return new Promise((resolve, _) => {
      resolve({ code: content.replace(/@apply[\s\S]+?;/g, '') })
    })
  }
}

module.exports = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: seqPreprocess([
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: path.join(__dirname, 'src', 'layouts', 'MarkdownLayout.svelte'),
    }),
    typescript(),
    windicss,
  ]),
};
