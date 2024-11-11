/** @type {import('tailwindcss').Config} */
import { customFonts } from "./src/tailwind-theme-objects/index";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: customFonts.sans,
        body: customFonts.serif,
      },
    },
  },
  plugins: [],
};
