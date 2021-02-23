const defaultTheme = require('tailwindcss/defaultTheme')

const sizing = () => {
  const obj = {}
  for (i of new Array(9).keys()) {
    obj[`${i + 1}/10`] = `${(i + 1) * 10}%`
  }
  return obj
}

const fontFamily = {
  title: [
    'Montserrat',
    ...defaultTheme.fontFamily.sans,
  ],
  sans: [
    'Roboto',
    ...defaultTheme.fontFamily.sans,
  ],
  mono: [
    'Inconsolata',
    ...defaultTheme.fontFamily.mono,
  ],
}

const colors = {
  'kmb-blue': {
    50: '#F2F8FE',
    100: '#E6F1FC',
    200: '#C0DCF8',
    300: '#9AC7F4',
    400: '#4E9DEB',
    500: '#0273E3',
    600: '#0268CC',
    700: '#014588',
    800: '#013466',
    900: '#012344',
  },
  'kmb-gray': {
    50: '#F7F7F7',
    100: '#EFEFEF',
    200: '#D7D7D7',
    300: '#BFBFBF',
    400: '#908F8F',
    500: '#605F5F',
    600: '#565656',
    700: '#3A3939',
    800: '#2B2B2B',
    900: '#1D1D1D',
  },
}

module.exports = {
  purge: ['./**/*.{css,pcss}', './{pages,components,www}/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'xxl': {'min': '1480px'}
      },
      fontFamily,
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing(),
      },
      borderRadius: {
        'xl': '1rem',
        'full': '10010px',
      },

      inset: {
        '-15': '-3.75rem',
        '2': '0.5rem',
        '1/2': '50%',
        '1/4': '20%',
        '2/5': '40%',
        ...sizing(),
        'full': '100%',
      },
      zIndex: {
        '-10': '-10',
      },
      colors,
    },
  },
  plugins: [require('tailwindcss-safe-area')],
}
