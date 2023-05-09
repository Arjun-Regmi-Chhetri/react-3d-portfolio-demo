/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors:{
        primary: "#3E91F5",
        secondary: "#CCD6F6",
        tertiary: "#aaa6c3",
        "blue-light":"rgb(174 190 255)",
        "white-light":"#8892b0",
        "glass":"rgb(255 255 255 / 8%)",
        "black-200": "#090325",
      },
      letterSpacing:{
        normal:'1.3px',
        wide:'2.3px',
      },
      screens: {
        xs: "420px",
      },
      backgroundImage:{
        "bg-image":"url('/src/assets/herobg.png')"
      },
    },
  },
  plugins: [],
}
