/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,vue,ts}",
    "./src/layouts/*.vue",
    "./src/pages/*.vue",
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
  important: true,
  darkMode: ["class", '[data-mode="tdark"]'],
};
