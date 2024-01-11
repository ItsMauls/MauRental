/** @type {import('tailwindcss').Config} */
import defaultTheme from './src/assets/fonts/Manrope'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        manrope : ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

