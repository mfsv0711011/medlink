/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blueml : '#5680e9',
        aquaml : '#84ceeb',
        lightblueml : '#5ab9ea',
        greyml : '#c1c8e4',
        purpleml : '#8860d0',
        blackml : '#191919'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

