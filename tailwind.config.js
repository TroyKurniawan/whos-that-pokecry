/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        'low-poly': "url('./assets/low-poly-bg.svg')"
      }
    },
  },
  plugins: [],
}

