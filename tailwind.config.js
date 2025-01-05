/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
    },
    extend: {
      colors: {
        primary: "#1C0452",
        secondary: "#AB9FBB",
        gray: "#F1F1F1",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1rem", md: "2rem", lg: "4rem" },
      },
    },
  },
  plugins: [],
};
