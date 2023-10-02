/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      bold: ['AROneSansBold'],
      semibold: ['AROneSansSemiBold'],
      medium: ['AROneSansMedium'],
      regular: ['AROneSansRegular'],
    },
    extend: {},
  },
  plugins: [],
}

