/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./public/**/*.{html,js}"],
  darkMode:'class',

  //Theme Area
  theme: {

    //Container Stats
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px'
      }
    },

    //Global Elements Stats
    extend: {

      //Fonts
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
      },

      //Colors
      colors:{
        'prize-black':'#000000',
        'prize-purple': '#7000FF',
        'prize-pink': '#FF67E7',
        'prize-fosfor':'#52FF6E',
      },

      animation: {
        slideDown501s: 'slideDown50 1s ease-in-out 1',
        autoMove: 'autoMove 5s ease-in-out infinite'
      },

      keyframes: {

        slideDown50: {
          '0%': { transform: 'translateY(-5%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },

        autoMove:{
          '0%': { transform: 'translateX(-15%)',},
          '50%': { transform: 'translateX(0%)',},
          '100%': { transform: 'translateX(-15%)', },
        }

      },

    },

  },
  plugins: [],
}

