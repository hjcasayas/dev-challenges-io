module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EFF0F4",
          200: "#E0E2EA",
          300: "#B4B7C0",
          400: "#777A82",
          500: "#2a2b2f",
          600: "#1E2028",
          700: "#151721",
          800: "#0D0F1B",
          900: "#080916",
        },
        secondary: {
          100: "#FBFDFE",
          200: "#F8FBFD",
          300: "#F3F7FA",
          400: "#EDF1F6",
          500: "#E5EAF0",
          600: "#A7B7CE",
          700: "#7388AC",
          800: "#495E8B",
          900: "#2B3F73",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
