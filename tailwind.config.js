/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 100ms ease-in-out',
        bump: 'bump 300ms'
      },

      keyframes: theme => ({
        fadeIn: {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 },
        },
        bump: {
          '0%, 100%': { scale: "1" },
          '10%': { scale: "1.05" },
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

