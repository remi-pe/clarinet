import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,json}",
  ],
  safelist: [
    "bg-red-500",
    "text-3xl",
    "lg:text-4xl",
    "bg-blue-500",
    "text-white",
    "px-4",
    "py-2",
    "rounded",
    "hover:bg-blue-700",
    "transition-colors",
    "duration-300",
  ],
  theme: {
    extend: {
      colors: {
        dark_black: "#1D1D1D", // #242424
        light_black: "#272727",
        regal_green: "#137670",
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
