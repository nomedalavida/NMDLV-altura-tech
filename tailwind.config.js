module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        'title': ['League Spartan', 'sans-serif'],
        'text': ['Kollektif', 'sans-serif']
      },
      colors: {
        primary: {
          500: '#3221AB'
        },
        secondary: {
          500: '#D2489E'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
