/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.php"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0284c7", // sky-600
        secondry: "#475569", // slate-600
        thrid: "#f4f4f5", // zink-100
        dark: "#0f172a", // slate-900
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
