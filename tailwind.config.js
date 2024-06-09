/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF8F00",
          secondary: "#EEEEEE",
        },

        dark: {
          primary: "#37474F",
          secondary: "#E0E0E0",
        },
      },
    ],
  },
};
