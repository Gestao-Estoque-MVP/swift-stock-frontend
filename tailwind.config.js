/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'default-font': ['Montserrat', 'sans-serif'],
    },
    colors: {
      brand: {
        100: '#3B79FF',
        200: '#3026DC',
        300: '#25238C',
        400: '#09081F',
        500: '#9AAFFF',
      },
      success: {
        100: '#59D256',
        200: '#36C633',
        300: '#20771E',
        400: '#194E19',
      },
      alert: {
        100: '#FFD246',
        200: '#FFBD1B',
        300: '#FA9600',
        400: '#E27200',
      },
      error: {
        100: '#FF3C2B',
        200: '#ED2615',
        300: '#C81C0D',
        400: '#881D14',
      },
      white: {
        primary: '#EDEDED',
        bg: '#E4E4E4',
      },
      grey: {
        text: '#6A6A6A',
      },
    },
    animation: {
      showMenu: 'showMenu .3s forwards',
    },
    keyframes: {
      showMenu: {
        from: { right: '-50px', opacity: '0' },
        to: { right: '0', opacity: '1' },
      },
    },
  },
  plugins: [],
};
