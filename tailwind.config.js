/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#ccccc",
        secondary:"#172154"
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

