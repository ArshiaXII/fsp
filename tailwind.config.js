/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        customRed: "#cc1927",
        customGray: "#59595c",
        customDarkGray: "#444444",
        customBlack: "#333333",
        customWhite: "#ffffff",
        customLightGray: "#f2f2f2",
      }
    },
  },
  plugins: [],
}