/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        anybody:['Anybody','sans-serif'],
        onest:['Onest','sans-serif']

      },
      colors:{
        'verde':'#2ECC71',
        'plomo':'#1E1E1E26',
        'grisclaro':'#1E1E1E80',
        'gris2':'#1E1E1E4D',
        'gris':'#1E1E1ECC'
      },

    },
  },
  plugins: [],
}
  
}