/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,scss}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
      },
      colors: {
        'anti-flash-white': '#f3f6f6',
        'brandeis-blue': '#1773EA',
        'ruddy-blue': '#60a5fa',
        'indigo-dye': '#144679',
        'payne-s-grey': '#44566C',
        'eerie-black': '#1d1d1d',
        'silver': '#a6a6a6',
      }
    }
  },
  plugins: [
  ],
}

