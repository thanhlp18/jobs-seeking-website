/** @type {import('tailwindcss').Config} */
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  TEXT_COLOR_BOLD,
  TEXT_COLOR_NORMAL,
  BG_COLOR_DISABLED,
} from "./src/utils/constants";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: COLOR_PRIMARY,
        secondary: COLOR_SECONDARY,
        bold: TEXT_COLOR_BOLD,
        normal: TEXT_COLOR_NORMAL,
      },
      backgroundColor: {
        disabled: BG_COLOR_DISABLED,
      },
    },
  },
  plugins: [],
};
