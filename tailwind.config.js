module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //backgroundImage: (theme) => ({
      // "black-pattern": "url('/public/img/bg-black.svg')",
      // }),
      textColor: (theme) => theme("colors"),
      textColor: {
        primary: "#FFFFFF",
        secondary: {
          200: "#FAA307", //orange dark
        },
      },
      fontFamily: {
        playfaire: ["Playfair Display"],
        roboto: ["Roboto"],
      },
      spacing: {
        600: "35rem",
        500: "30rem",
        400: "23rem",
        700: "47rem",
        350: "23.5rem",
      },
      colors: {
        secondary: {
          100: "#03071e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
