/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1250px",
      },
      backgroundColor: {
        "dark-blue": "#002687",
      },
      colors: {
        "dark-blue": "#002687",
      },
    },
  },
  plugins: [],
};
