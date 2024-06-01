/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 100ms ease-in-out',
        bump: 'bump 200ms',
        load: 'load 1000ms ease-out',
        spinInLight: 'spinInLight 2000ms ease-in-out',
        spinInDark: 'spinInDark 2000ms ease-in-out',
        greenFade: 'greenFade 2000ms ease-in-out',
        redFade: 'redFade 2000ms ease-in-out',
      },

      keyframes: theme => ({
        fadeIn: {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 },
        },
        bump: {
          '0%, 100%': { scale: "1" },
          '10%': { scale: "1.02" },
        },
        load: {
          '100%': { opacity: 1, scale: "1" },
          '30%': { opacity: 0, scale: "1.1" },
          '0%': { opacity: 0, scale: "1.1" },
        },
        spinInLight: {
          '100%': { opacity: 0.03, scale: "1", transform: 'rotate(0deg)' },
          '30%': { opacity: 0, scale: "2", transform: 'rotate(20deg)' },
          '0%': { opacity: 0, scale: "2", transform: 'rotate(20deg)' },
        },
        spinInDark: {
          '100%': { opacity: 0.01, scale: "1", transform: 'rotate(0deg)' },
          '30%': { opacity: 0, scale: "2", transform: 'rotate(20deg)' },
          '0%': { opacity: 0, scale: "2", transform: 'rotate(20deg)' },
        },
        greenFade: {
          '100%': { color: 'white' },
          '50%': { color: 'rgb(34 197 94)' },
          '0%': { color: 'rgb(34 197 94)' },
        },
        redFade: {
          '100%': { color: 'white' },
          '50%': { color: 'rgb(239 68 68)' },
          '0%': { color: 'rgb(239 68 68)' },
        },
      }),

      backgroundImage:
      {
        'pokeball': "url('./assets/pokeball.svg')"
      }
    },
  },
  plugins: [],
}

