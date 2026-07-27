/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#173B4A",
        "navy-deep": "#0E2933",
        green: {
          DEFAULT: "#2E8B57",
          dark: "#1F5D3E",
          pale: "#E8F2EC",
        },
        cream: "#FAF8F3",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
