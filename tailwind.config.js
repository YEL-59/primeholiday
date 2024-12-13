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
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      maxWidth: {
        container: "1640px",
      },
    },
    container: {
      center: true, // Center the container
      padding: "1rem", // Optional padding
      screens: {
        sm: "480px", 
        md: "768px", 
        lg: "1024px", 
        xl: "1440px", 
        "2xl": "1640px", 
      },
    },
  },
  corePlugins: {
    backgroundOpacity: false,
    textOpacity: false, // Disables `bg-opacity-*` utilities.
  },
  plugins: [],
};
