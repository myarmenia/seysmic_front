/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    boxShadow: {
      light: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      normal: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    },
    extend: {
      maxWidth: {
        container: '1250px',
      },
      backgroundColor: {
        'dark-blue': '#002687',
      },
      colors: {
        'dark-blue': '#002687',
        'light-grey': '#938E97',
        black: '#000',
      },
      screens: {
        'med-1440': { max: '1440px' },
        'med-1255': { max: '1255px' },
        'med-1200': { max: '1200px' },
        'med-1025': { max: '1025px' },
        'med-965': { max: '965px' },
        'med-900': { max: '1065px' },
        'med-600': { max: '600px' },
        'med-560': { max: '560px' },
        'med-500': { max: '500px' },
        'med-470': { max: '470px' },
        'med-450': { max: '450px' },
        'med-400': { max: '400px' },
      },
    },
  },
  plugins: [],
};
