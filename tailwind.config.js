/** @type {import('tailwindcss').Config} */
import { customFonts } from "./src/tailwind-theme-objects/index";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
    },
    extend: {
      fontFamily: {
        header: customFonts.sans,
        body: customFonts.serif,
      },
    },
  },
  plugins: [],
};
