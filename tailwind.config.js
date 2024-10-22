/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "rgba(30, 144, 255, 1)",
        primary100: "#AED7FF",
        pale: " #C0E0FF80",
      }
    },
  },
  plugins: [],
}