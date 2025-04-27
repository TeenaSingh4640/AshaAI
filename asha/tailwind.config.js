// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // light blue
          DEFAULT: '#3b82f6', // blue
          dark: '#2563eb', // dark blue
        },
        secondary: {
          light: '#f9fafb', // light gray
          DEFAULT: '#f3f4f6', // gray
          dark: '#d1d5db', // dark gray
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
}