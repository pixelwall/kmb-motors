const color = '#1E1E1E'

const iconsProps = {
  // background: color,
  offset: 5,
}

module.exports = {
  appName: 'KMB Motors',
  appShortName: 'KMB Motors',
  appDescription: 'Our large selection ensure that we have a vehicle just for you. Whether you are looking for a sedan, coupe, truck, or SUV. We look forward to seeing you soon!',

  developerName: '',
  developerURL: '',

  path: '/favicons/',

  background: color,
  theme_color: color,
  appleStatusBarStyle: 'default',

  scope: '/',
  start_url: '/',

  display: 'standalone',
  orientation: 'portrait',

  logging: false,
  html: 'icons.html',
  pipeHTML: true,
  replace: true,

  icons: {
    android: {
      ...iconsProps,
    },
    appleIcon: {
      ...iconsProps,
    },
    appleStartup: {
      ...iconsProps,
      offset: 10
    },
    favicons: {
      ...iconsProps,
    },
    firefox: {
      ...iconsProps,
      offset: 10,
      overlayGlow: false
    },
    windows: {
      ...iconsProps,
    },
  }
}
