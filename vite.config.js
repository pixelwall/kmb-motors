import path from 'path'
// import svite from 'svite'

// const sviteConfig = {
//   hot: true,
//   useTransformCache: false, // default is true, but HMR is broken then
// }

let config = {
  alias: {
    '~/': path.resolve(__dirname, './src'),
    '~collections/': path.resolve(__dirname, './src/collections'),
    '~components/': path.resolve(__dirname, './src/components'),
  },
  // plugins: [
  //   svite(sviteConfig),
  // ],
  optimizeDeps: {
    include: ['paper/dist/paper-core'],
    exclude: ['@roxi/routify'],
  },
}

export default config
