/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.17rem',
        h4: '1rem',
        h5: '0.83rem',
        h6: '0.67rem'
      },
      colors : {
        mainColor : '#6EC8ED',
        dark : '#0F172A',
      },
      zIndex : {
        n1 : -1
      }
      ,
      container: {
        padding: {
          DEFAULT: 'calc(var(--gutter-x) * 1) !important',
          sm : 'calc(var(--gutter-x) * 0.5) !important'
        },
        center: true
      }
    },
  },
  plugins: [],
  important: true,
  darkMode : 'class'

}

