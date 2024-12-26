/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#ccccc",
        secondary:"#172154",
        tertiary:"#6FB745",
        mainbg:"#cfd8dc",
        blurry:"#1976d2",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"2rem",
          sm:"1rem",
        },
      }
    },

  },
  plugins: [],
}

