/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        headingGradient: "radial-gradient(circle, #E4E4E4, #9AAFFF)"
      },
    },
    fontFamily: {
      'default-font': ['Montserrat', 'sans-serif'],
    },
    colors: {
      transparent: "transparent",
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
        primary: '#E4E4E4',
        total: '#FFFFFF',
      },
      grey: {
        100: '#9A9A9A',
        200: '#6A6A6A',
        300: '#4E4E4E',
      },
    },
    animation: {
      showMenu: 'showMenu .3s forwards',
      bounce: 'bounce 2s ease infinite',
    },
    keyframes: {
      showMenu: {
        from: { right: '-50px', opacity: '0' },
        to: { right: '0', opacity: '1' },
      },
      bounce: {
        "0%": {
          transform: "translateY(0)",
          opacity: 0.8
        },
        "50%": { 
          transform: "translateY(-10px)",
          opacity: 0.6
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 0.8
        }
      }
    },
  },
  plugins: [],
};
