/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "hsl(209, 23%, 22%)",
        "blue-very-dark": "hsl(207, 26%, 17%)",
        "blue-very-dark-lm": "hsl(200, 15%, 8%)",
        "gray-dark": "hsl(0, 0%, 52%)",
        "gray-very-light-lm": "hsl(0, 0%, 98%)",
        white: " hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
