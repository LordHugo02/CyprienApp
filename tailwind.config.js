/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  safelist: [{
      pattern: /nm-.+/
    }
  ],
  content: [
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'material': ['Material Icons', 'arial'],
      'text': ['Nunito', 'sans-serif'],
      'title': ['Ubuntu', 'sans-serif'],
    },
    neumorphismColor: {...colors,
      'blue':{
        "base": "#335F8A",
      }
    },
    extend: {
      colors: {
        'blue':{
          "sky": '#55D5E0',
          "DEFAULT": "#335F8A",
          "dark": "#2F4558",
        },
        'orange': {"DEFAULT":"#F26619"},
        'yellow': {"DEFAULT":"#F6B12D"}
      },
      inset: {
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%"
      },
      spacing:{
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%"
      },
      width:{
        'screen': "100vw",
        'aside-close': "calc(100vw - var(--wAsideClosed))",
        'aside-open': "calc(100vw - var(--wAsideOpen))"
      },
      height:{
        'screen': "100vh"
      },
      minWidth: {
        '1/2': '50%',
      },
      minHeight: {
        '0': '0.125rem',
        '1': '0.25rem',
        '1': '0.375rem',
        '2': '0.5rem',
        '2': '0.625rem',
        '3': '0.75rem',
        '3': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem'
      },
      minWidth: {
        '0': '0.125rem',
        '1': '0.25rem',
        '1': '0.375rem',
        '2': '0.5rem',
        '2': '0.625rem',
        '3': '0.75rem',
        '3': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem'
      },
      boxShadow: {
        'component': '0 1px 6px 1px rgba(69,65,78,.1);',
      },
      backgroundImage: {
        'logo': "url('../images/logo.png')",
      },
      transformOrigin:{
        '404-first': '62% 100%',
        '404-last': '62% 71%',
      }
    }
  },
  plugins: [require("tailwind-neumorphism"), require('./glassmorph')],
  darkMode: 'class'
}
