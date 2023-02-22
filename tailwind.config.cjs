/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0.75rem',
        screens: {
          xl: '1200px'
        }
      },
    },
  },
  plugins: [],
}
