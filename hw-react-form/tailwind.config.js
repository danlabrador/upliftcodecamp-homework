/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '75px': '75px',
      },
      visibility: {
        'hidden': 'hidden',
        'visible': 'visible'
      },
      colors: {
        warn: '#ef5350',
      }
    },
  },
  plugins: [],
}