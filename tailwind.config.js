const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindUI = require('@tailwindcss/ui')

const sizing = {
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%',
}

module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.svelte',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.svx',
      './src/**/*.svexy',
    ],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g)
        const matchedTokens = [];
        let match = regExp.exec(content)
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6))
          } else {
            matchedTokens.push(match[0])
          }
          match = regExp.exec(content)
        }
        return matchedTokens
      },
    },
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  theme: {
    extend: {
      screens: {
        'xxl': {'min': '1480px'}
      },
      fontFamily: {
        'title': [
          'Oxygen',
          ...defaultTheme.fontFamily.sans,
        ],
        sans: [
          'Oxygen',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'Inconsolata',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing,
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
        ...sizing,
        'full': '100%',
      },
      zIndex: {
        '-10': '-10',
      },

      colors: {
        'yes-blue': {
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
        'yes-gray': {
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
        'yes-orange': {
          50: '#FFF7F5',
          100: '#FFF0EC',
          200: '#FED8CF',
          300: '#FEC1B2',
          400: '#FD9379',
          500: '#FC643F',
          600: '#E35A39',
          700: '#973C26',
          800: '#712D1C',
          900: '#4C1E13',
        },
      },
    },
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'hover', 'disabled'],
    borderColor: ['dark', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
  },
  dark: 'class',
  plugins: [
    tailwindUI({}),
    function({ addVariant, e }) {
      const variants = [
        {
          name: 'focus-not-active',
          rule: 'focus:not(:active)',
        },
        {
          name: 'hover-not-focus',
          rule: 'hover:not(:focus)',
        },
        {
          name: 'not-first',
          css: 'not(:first-child)',
        },
        {
          name: 'not-last',
          css: 'not(:last-child)',
        },
      ]

      variants.forEach((variant) => {
        addVariant(variant.name, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${variant.parent ? `${variant.parent} ` : ''}.${e(`${variant.name}${separator}${className}`)}${variant.rule ? `:${variant.rule}` : ''}`
          })
        })
      })
    },
  ]
}
