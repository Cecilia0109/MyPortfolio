const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-publicSans)", ...defaultTheme.fontFamily.sans],
        derif:['var(--font-dmSerif)', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        'yellow':'#e2b975',
        'borderBlack':"rgba(255, 255, 255, 0.05)",
        'lightWhite':"rgba(255,255,255,0.75)"
      }
    },
  },
  plugins: [],
};
