/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        lightGray: "#F0F0F0",
        creamyGray: "#F0EEED",
      },
      borderRadius: {
        default: "20px",
      },
      gridTemplateColumns: {
        dressStyles: "minmax(0, 1fr) minmax(0, 1.7fr)",
        dressStylesReverse: "minmax(0, 1.7fr) minmax(0, 1fr)",
      },
      height: {
        dressStyleHeight: "289px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
