/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2b63d9',
        primary2: '#151B28',
        primary3: '#3971E7',
        primary4: '#B1CCFB',

        gray: '#5F6D7E',
        darkGrey: '#272D37',
        gray2: '#A5ACBA',
        neutral: '#F8F9FB',
      },
      fontFamily: 'inter',
    },
  },
  screens: {
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1060px',
    lg: '1200px',
    xl: '1700px',
  },
  plugins: [],
};
