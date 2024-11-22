import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_black: "#1D1D1D", // #242424
        light_black: "#272727",
        lightest_black: "#4F4F4F",
        regal_green: "#137670",
        border_stroke: "#353535",
        blue_dark: "#0508B3",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        prata: ["var(--font-prata)"],
      },
    },
  },
  plugins: [],
};

export default config;
