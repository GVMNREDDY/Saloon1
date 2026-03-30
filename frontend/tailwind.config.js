/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#212219',
        },
        accent: {
          DEFAULT: '#9ed83c',
        },
        text: {
          DEFAULT: '#212219',
          dark: '#ffffff',
          darkMuted: '#cccccc'
        }
      }
    },
  },
  plugins: [],
}
