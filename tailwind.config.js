/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontSize: {
      'sm': '14px',
      'md': '16px',
      'lg': '18px',
      'xl': '20px',
      'xxl': '2rem',
      'xxxl' : '3rem',
    },
    lineHeight: {
      'loose' : '3rem',
    },
    
    extend: {
      textColor:{
        'Primary-Color' : '#800000',
        'text-PineGreen' : '#01796F',
      },
      backgroundColor:{
        'customRed' : '#800000',
        'PineGreen' : '#01796F',
        'offWhite' : '#FAF9F6',
      },

      top:{
        '76': '76px'
      },

      height:{
        'extrasmall':'20rem',
        'small' : '29.15rem',
        'medium': '35rem',
        'large': '40rem', 
        'extralarge': '50rem', 
      },
      width:{
        'extrasmall':'20rem',
        'small' : '25rem',
        'medium' : '30rem',
        'large' : '40rem',
        'extralarge' : '50rem',
      },  
      margin: {
        auto: 'auto',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '20rem',
        '65': '25rem',
        '66': '26rem',
      },
    },
  },
  plugins: [],
}
