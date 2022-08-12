/* eslint-disable */
// https://github.com/michael-ciniawsky/postcss-load-config

// These are the conflicting classes between Quasar and Tailwind. They may change in the future.
const conflictingClasses = [
  "flex",
  "dark",
  "order-first",
  "order-last",
  "cursor-not-alowed",
  "cursor-pointer",
  "block",
  "inline-block",
  "text-justify",
  "hidden",
  "invisible",
  "overflow-auto",
  "overflow-hidden",
  "justify-start",
  "justify-center",
  "justify-end",
  "justify-between",
  "justify-around",
  "justify-evenly",
  "items-center",
  "items-start",
  "items-end",
];
// The plugin takes an object where the keys are the selectors and the values are the properties (or list of properties) to remove or all properties with "*".
const removeObj = {
  ...Object.fromEntries(conflictingClasses.map((cc) => [`.${cc}`, "*"])), // Removes all properties from conflicting classes
  body: ["font-family", "font-size"], // You can also remove things like fonts and colors.
};

module.exports = {
  plugins: [
    require("postcss-remove-declaration")({ remove: removeObj }), // The plugin must be placed before Tailwind import!
    require("tailwindcss"),
    // https://github.com/postcss/autoprefixer
    require("autoprefixer")({
      overrideBrowserslist: [
        "last 4 Chrome versions",
        "last 4 Firefox versions",
        "last 4 Edge versions",
        "last 4 Safari versions",
        "last 4 Android versions",
        "last 4 ChromeAndroid versions",
        "last 4 FirefoxAndroid versions",
        "last 4 iOS versions",
      ],
    }),

    // https://github.com/elchininet/postcss-rtlcss
    // If you want to support RTL css, then
    // 1. yarn/npm install postcss-rtlcss
    // 2. optionally set quasar.config.js > framework > lang to an RTL language
    // 3. uncomment the following line:
    // require('postcss-rtlcss')
  ],
};
