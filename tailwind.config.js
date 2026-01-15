/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",                           // root html files
    "./**/*.html",                        // all subfolder html files
    "./**/*.js",                        // optional : scan js files too
  ],
  theme: {
    extend: {
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      SGraytext: "#5f6c7d",
      suppBG: "#f5f8ff",
    },},
  },
  plugins: [],
}
