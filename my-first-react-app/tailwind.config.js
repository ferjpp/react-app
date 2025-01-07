/ @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'genos': ['Genos', 'sans-serif'],
        'audiowide': ['Audiowide', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(red|blue|green|yellow|purple|slate|gray|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|fuchsia|pink|rose)/,
    },
  ],
};