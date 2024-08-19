/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "prompt": ['Prompt', 'sans-serif']
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      roman: {
        50: "#fef2f2",
        100: "#fde3e3",
        200: "#fccccc",
        300: "#f9a8a9",
        400: "#f37677",
        500: "#ea5455",
        600: "#d52d2e",
        700: "#b32223",
        800: "#942021",
        900: "#7b2122",
        950: "#430c0c",
      },
    },
  },
  plugins: [],
};
