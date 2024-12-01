/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'display' : ['Poppins'],
        'body': ['Inter']

      },
      boxShadow: {
        spread: '0 4px 20px 5px rgba(0, 0, 0, 0.1)', // 5px is the spread radius
      },
      colors:{
        'primary' : "#3238f2"
      }
    },
  },
  plugins: [],
}

