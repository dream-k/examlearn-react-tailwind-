module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        success: '#86bd39',
        error: '#eb5446',
        warning: '#efd13c',
        gray: {
          3: '#f7f7f8',
          5: '#F0F5FA',
          10: '#e5e7ea',
          20: '#e6edf5',
          40: '#99a2ad',
          50: '#65696A',
          70: '#4c5c6f'
        },
        brand: {
          text: '#001833',
          bg: '#f0f5fa',
          darkorange: '#A26202',
          orange: '#f89706',
          darkblue: '#265899',
          blue: '#3d8bf2',
        }
      },
      width: {
        68: '17rem',
        76: '19rem',
        500: '500px',
        fit: 'fit-content'
      },
      maxWidth: {
        8: '8rem',
        13: '13rem',
        12: '12rem',
        15: '15rem',
        16: '16rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
