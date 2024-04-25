/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('e-commerce-rtk\src\assets\f.png')",
      }
    },
    fontFamily: {
      
    },
  },
  plugins: [],
}

