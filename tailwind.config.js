// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4EBD7",
        secondary: "#D7A53F",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
