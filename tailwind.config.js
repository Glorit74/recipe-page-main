/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "375px",
      md: "750px",
    },
    colors: {
      primary: "hsl(14, 45%, 36%)",
      primaryDark: "hsl(332, 51%, 32%)",
      white: "hsl(0, 0%, 100%)",
      myBlack: "hsl(0, 0%, 10%)",
      roseWhite: "hsl(330, 100%, 98%)",
      eggshell: "hsl(30, 54%, 90%)",
      grey: "hsl(30, 18%, 87%)",
      brown: "hsl(30, 10%, 34%)",
      charcoalDark: "hsl(24, 5%, 18%)",
    },
    extend: {
      fontFamily: {
        serif: ["Young", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
