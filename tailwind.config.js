module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        spotify: '#1DB954',
        instagram: '#C13584',
        youtube: '#FF0000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
