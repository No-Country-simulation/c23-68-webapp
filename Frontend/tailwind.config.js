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
        'verdeoscuro':'#109B4B',
        'plomo':'#1E1E1E26',
        'grisclaro':'#1E1E1E80',
        'gris2':'#1E1E1E4D',
        'gris':'#1E1E1ECC',
        'negro':'#1E1E1E',
        'amarillo':'#FFC107CC',
        'amarillooscuro':'#E3AB00',
        'rosa':'#FF007FB2',
        'celeste':'#4285F4CC',
        'rojo':'#FF4049',
        'rojooscuro':'##CA373E',
      },

    },
  },
  plugins: [],
}
