module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2a2b2f",
        secondary: "#e5eaf0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
