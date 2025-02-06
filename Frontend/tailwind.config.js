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
        'verdeclaro':'#2ECC7180',
        'verdesemioscuro':'#2ECC71C9',
        'plomo':'#1E1E1E26',
        'grisclaro':'#1E1E1E80',
        'gris2':'#1E1E1E4D',
        'gris':'#1E1E1ECC',   
        'gris3':'#EEEEEE',
        'gris4':'#868B93', 
        'negro':'#1E1E1E',
        'amarillo':'#FFC107CC',
        'amarilloclaro':'#FFC10780',
        'amarillomasclaro':'#FFC1074D', 
        'rosa':'#FF007FB2',
        'rosaclaro':'#FF007F80',
        'celeste':'#4285F4CC',
        'celeste2':  '#4285F4',
      },
      
    },
  },
  plugins: [],
}
