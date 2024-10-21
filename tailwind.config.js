/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        "neon-green": "0px 0px 6px rgba(0, 255, 0, 0.3)",
        "small-neon-green": "0px 0px 2px rgba(0, 255, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
