/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'translate-x': 'transform',
      },
      translate: {
        '0': '0',
        full: '-75%',
      },
    },
  },
  plugins: [],
  important: true,
}