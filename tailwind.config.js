/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purpledark: "#231942",
        purplemedium: "#5e548e",
        purple: "#9f86c0",
        purpleplus: "#e95c4",
        purpleclear: "#e0b1cb",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
}
