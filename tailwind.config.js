/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "library-black": "#030303",
        "bg-navar": "#26282A",
        "library-logo": "#059669",
      },
    },
  },
  plugins: [require("daisyui")],
};
