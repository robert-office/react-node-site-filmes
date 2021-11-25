// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      // Configure your color palette here
      bgColor: '#f8f9fa',
      ...colors
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
