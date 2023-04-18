/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/app.blade.php",
    "./resources/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "section":"75vh",
        "card":"475px",
        "card_image":"350px",
        "card_title":"50px",
        "card_price":"75px",
      },
      width:{
        "maxWidth":"1920px"
      }
    },
  },
  plugins: [],
}