/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#F78C2A", // orange
        "secondary": "#860063", // purple
      }
    },
  },
  plugins: [
    require('autoprefixer')
  ],
}

