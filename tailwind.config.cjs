/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpledark: "#231942",
        purplemedium: "#5e548e",
        purple: "#9f86c0",
        purpleplus: "#e95c4",
        purpleclear: "#e0b1cb",
      },
      fontFamily: {
        jetbrains: "JetBrains Mono, monospace",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
