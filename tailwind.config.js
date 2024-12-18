/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F49D2A",
        secondary: "#BD1F17",
        green: "#135029",
        "ivory-white": "#FFFFF0",
        black:"#191A19"
      },
      fontFamily: {
        salvager: ["Salvager", "sans-serif"],
        helvetica:["Helvetica", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      container: {
        maxWidth: "1640px",
      },
    },
  },
  corePlugins: {
    backgroundOpacity: false,
    textOpacity: false, // Disables `bg-opacity-*` utilities.
  },
  plugins: [],
};
