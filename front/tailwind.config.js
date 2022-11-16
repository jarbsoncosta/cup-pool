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
      backgroundImage:{
        app: 'url(/app-bg.png)'
      },
      colors: {
        ignite: {
          500: '#129e57'
        },
        yellow: {
          500: ' #F7DD43',
          700: '#E5CD3D'
        },
        gray: {
          50: '#E1E1E6',
          100: '#C4C4CC',
          300: '#8D8D99',
          600: '#323238',
          700: '#323238',
          800: ' #202024',
          900: '#121214'
        }
      }
    },
  },
  plugins: [],
}
