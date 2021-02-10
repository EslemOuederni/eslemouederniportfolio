module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'black-pattern': "url('/public/img/bg-black.svg')",
       }),
       textColor: theme => theme('colors'),
      textColor: {
       'primary': '#FFFFFF',
       'secondary': {
         100: '#FF2E00', //orange light
         200: '#FF2E00' //orange dark
       },
     },
     fontFamily : {
       playfaire : ['Playfair Display']
     },
     spacing:{
       '600': '35rem',
       '500': '30rem',
       '400': '23rem',
       '700': '47rem',
       '350': '23.5rem'
     },
     colors:{
      'secondary': {
        100: '#FF2E00',
        200: '#FF2E00'
     }
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
