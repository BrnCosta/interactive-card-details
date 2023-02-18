/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '750px',
        'md': '960px',
        'lg': '1150px',
        'xl': '1390px',
      },
      backgroundImage: {
        'mobile': "url('../images/bg-main-mobile.png')",
        'desktop': "url('../images/bg-main-desktop.png')",
        'card-back': "url('../images/bg-card-back.png')",
        'card-front': "url('../images/bg-card-front.png')"
      },
      colors: {
        gray: 'hsl(270, 3%, 87%)',
        violet: 'hsl(279, 6%, 55%)',
        dark: 'hsl(278, 68%, 11%)',
      }
    },
    fontFamily: {
      sans: ['"Space Grotesk"', 'sans-serif'],
    }
  },
  plugins: [],
}
