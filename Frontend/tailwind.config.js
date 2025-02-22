/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        anybody:['Anybody','sans-serif'],
        onest:['Onest','sans-serif']
    },
  },
  plugins: [],
}
  
}