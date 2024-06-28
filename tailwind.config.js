/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray50: '#F9FAFB',
        heading: '#1D2939',
        paragraph: '#667085',
        primary: '#039855',
        secondary: '#D1FADF',
        tertiary: '#027A48',
        dashSide: '#334054',
        border: '#D0D5DD'
      }
    },
  },
  plugins: [],
}