// Keep config file extension as '.js' so the tailwind extension works properly.
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/{app,error}.vue', './src/{components,layouts,pages,composables,plugins}/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {},
    },
  },
};
