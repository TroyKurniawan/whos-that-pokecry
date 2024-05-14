/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 200ms ease-in-out',
      },

      keyframes: theme => ({
        fadeIn: {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 },
        },
      }),

      backgroundImage:
      {
        'low-poly': "url('./assets/low-poly-bg.svg')"
      }
    },
  },
  plugins: [],
}

