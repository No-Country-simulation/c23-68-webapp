import colors from 'tailwindcss/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/*/.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        anybody: ['Anybody', 'sans-serif'],
        onest: ['Onest', 'sans-serif'],
      },
      colors: {
        rojo: '#FF4049',
        rojooscuro: '#CA373E',
        verdeoscuro: '#109B4B',
        verde: '#2ECC71',
        verdeclaro: '#2ECC7180',
        verdesemioscuro: '#2ECC71C9',
        plomo: '#1E1E1E26',
        grisclaro: '#1E1E1E80',
        gris2: '#1E1E1E4D',
        gris: '#1E1E1ECC',
        gris3: '#EEEEEE',
        gris4: '#868B93',
        negro: '#1E1E1E',
        amarillo: '#FFC107CC',
        amarilloclaro: '#FFC10780',
        amarillomasclaro: '#FFC1074D',
        amarillooscuro: '#FFC107',
        rosa: '#FF007FB2',
        rosa2: '#FF007F',
        rosaclaro: '#FF007F80',
        celeste: '#4285F4CC',
        celeste2: '#4285F4',
        // light mode
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },
    },
    fontSize: {
      'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
      'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
      'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
      'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
    },
  },

  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],

  variants: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}
