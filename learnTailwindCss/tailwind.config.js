module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-base': '#00a5e1',
        'green-base': '#5aaa4e',
        'background-body': '#f7fafc'
      }
    },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
