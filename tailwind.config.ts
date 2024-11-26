import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        prata: ["var(--font-prata)"],
      },
      fontWeight: {
        semibold: "500",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        grey: {
          600: "#FFFFFF",
          500: "#B5B5B5",
          400: "#5B5B5B",
          300: "#353535",
          200: "#252525",
          100: "#212121",
        },
        teal: {
          300: "#00EBDD",
          200: "#137670",
          100: "#0A4D49",
        },
        red: {
          400: "#FC7070",
          300: "#FF4545",
          200: "#FF4805",
          100: "#562716",
        },
        blue: {
          300: "#2554FF",
          200: "#0105F8",
          100: "#0508B3",
        },
        yellow: {
          600: "#FECF00",
        },
        orange: {
          600: "#FF9B04",
        },
        pink: {
          600: "#F025FF",
          500: "#FF007B",
        },
        green: {
          600: "#37FF25",
        },
      },
    },
  },
  plugins: [],
};

export default config;
