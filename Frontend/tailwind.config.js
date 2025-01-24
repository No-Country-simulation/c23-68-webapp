/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#1E1E1E80',
        'btn-green': '#2ECC71',
        'btn-green-hover': '#109B4B',
      }
    },

  },
  plugins: [],
}
