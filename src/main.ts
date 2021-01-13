import App from './App.svelte'
import wf from 'webfontloader'
import HMR from '@roxi/routify/hmr'

wf.load({
  google: {
    families: ['Oxygen:300,400', 'Ubuntu', 'Inconsolata']
  }
})

// const app = new App({
//   target: document.getElementById('app'),
// })

const app = HMR(App, {
  target: document.body
}, 'routify-app')

export default app
