/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark Mode Elements
        "blue-dark": "hsl(209, 23%, 22%)",
        // Dark Mode Background
        "blue-very-dark": "hsl(207, 26%, 17%)",
        // Light Mode Text
        "blue-very-dark-lm": "hsl(200, 15%, 8%)",
        // Light Mode Input
        "gray-dark": "hsl(0, 0%, 52%)",
        // Light Mode Background
        "gray-very-light": "hsl(0, 0%, 98%)",
        // Dark Mode Text & Light Mode Elements
        white: " hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
