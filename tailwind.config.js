/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // scans all your React components
  ],
  theme: {
extend: {
      colors: {
        olive: {
          DEFAULT: '#556B2F',
          light: '#A2B27F',
          muted: '#8F9779',
        },
        cream: '#F9F9F0',
      },
      keyframes: {
        'gradient-rotate': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-rotate': 'gradient-rotate 25s ease infinite',
      },
    },
  },
  plugins: [],
}
