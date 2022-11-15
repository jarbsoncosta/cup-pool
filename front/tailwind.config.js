/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        ignite: {
          500: '#129e57'
        },
        yellow: {
          500: ' #F7DD43'
        },
        gray: {
          50: '#E1E1E6',
          100: '#C4C4CC',
          200: '#323238',
          700: '#323238',
          800: ' #202024',
          900: '#121214'
        }
      }
    },
  },
  plugins: [],
}
