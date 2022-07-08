module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",
    "./Layout/**/*.{ts,tsx}",
    './public/index.html',
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      screens: {
        'phone': '300px',
      },
      fontSize: {
        'bigHello': '35rem',

      },
      spacing: {
        'laptop_view_1920': '100vh',
        'project-card-height': '36rem',
        'project-card-width': '29rem',
        'project-card-line-width': '26rem',
        'contact-me-height': '40rem',
        'contact-me-width': '40rem'
      },
      colors: {
        'regal-blue': '#243c5a',
        'grey-default': '#505050',
        'darker-gray': '#3b3b3b',
        'components-gray': '#6a6a6a',
        'footer-gray': '#666565',
        'nav-gray': '#292929',
        'table-gray': "#444444",
        'project-card-grey': '#818181',
        'project-card-field-gray': '#BEBEBE'
      },
      fontFamily: {
        Exo_2: 'Exo_2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};