/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:'Roboto, sans-serif'
      },
     colors:{
      ignite:{
        500: '#129e57'
      },
      gray:{
        100:'#E1E1E6',
        700:'#323238',
        800:' #202024',
        900: '#121214'
      }
     }
    },
  },
  plugins: [],
}
