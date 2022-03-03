module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "JIT",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "Open Sans"],
        body: ["Montserrat", "Open Sans"],
        sans: ["Montserrat", "Open Sans"],
      },
      backgroundImage: {
        main: "url('/images/bg.jpg')",
        card: "url('/images/card.jpeg')",
        soon: "url('/images/construction.svg')",
      },
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
