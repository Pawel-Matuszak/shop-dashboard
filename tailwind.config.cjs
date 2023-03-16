/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        cartList: "1fr 1fr 1fr 2fr .5fr",
        cartListSm: "1fr 1fr 1fr .5fr",
      },
    },
  },
  plugins: [],
};
