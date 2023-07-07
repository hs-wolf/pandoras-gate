// Keep config file extension as '.js' so the tailwind extension works properly.
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/{app,error}.vue', './src/{components,layouts,pages,composables,plugins}/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D0D0D',
          light: '#3A3A3A',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#EBEDF2',
          light: '#FFFFFF',
          dark: '#BABBBF',
        },
        accent: {
          DEFAULT: '#6F6BF2',
          light: '#AAA7F2',
          dark: '#5852F2',
        },
        danger: {
          DEFAULT: '#EF233C',
          light: '#FE6D73',
          dark: '#D90429',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-show': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',
          /* Firefox */
          'scrollbar-width': 'auto',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
      }, ['responsive'])
    }),
  ],
}
