/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    boxShadow: {
      light: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      normal: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    },
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
