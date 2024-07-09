/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "NetSan-light":["NetSan Light"] ,
        "NetSan-mid":["NetSan Mid"] ,
        "NetSan-bold":["NetSan Bold"] ,
        "NetSan-reg":["NetSan Reg"] ,
    },
  },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

