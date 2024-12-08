/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEBF00",
        secondary: "#BD1F17",
        green: "#135029",
        "text-primary": "#FFFFF0",
        black:"#191A19"
      },
      fontFamily: {
        salvager: ["Salvager", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      maxWidth: {
        container: "1620px",
      },
    },
    container: {
      center: true, // Center the container
      padding: "1rem", // Optional padding
      screens: {
        sm: "100%", // Full width for small screens
        md: "768px", // Medium screen size
        lg: "1024px", // Large screen size
        xl: "1280px", // Extra large screen size
        "2xl": "1620px", // Custom size for larger screens
      },
    },
  },
  plugins: [],
};
