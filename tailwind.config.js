/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#F0F0F0",
      primary: "#FFFFFF",
      red: "#FF0000",
      yellow: "#FFD700",
      green: "#008000",
      gray: "#808080",
    },
    extend: {
      dropShadow: {
        primary: "0 0.5em 0.5em rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
