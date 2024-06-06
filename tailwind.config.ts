import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "yellow-50": "#FFFAED",
      "yellow-100": "#FFF0C8",
      "yellow-200": "#FFE9AD",
      "yellow-300": "#FFDF88",
      "yellow-400": "#FFD971",
      "yellow-500": "#FFCF4D",
      "yellow-600": "#E8BC46",
      "yellow-700": "#B59337",
      "yellow-800": "#8C722A",
      "yellow-900": "#6B5720",
      "red-50": "#FEE9E9",
      "red-100": "#FABBBB",
      "red-200": "#F89B9B",
      "red-300": "#F56D6D",
      "red-400": "#F35151",
      "red-500": "#F02525",
      "red-600": "#DA2222",
      "red-700": "#AA1A1A",
      "red-800": "#841414",
      "red-900": "#651010",
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
