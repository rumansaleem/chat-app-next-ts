module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Catamaran', 'sans-serif'],
      },
      width: {
        sidebar: '20rem',
      },
      translate: {
        '-sidebar': '-20rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      margin: ['last', 'first'],
    },
  },
  plugins: [],
};
