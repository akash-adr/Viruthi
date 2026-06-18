import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "-apple-system", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
      },
      letterSpacing: {
        "hero": "-0.03em",
        "micro": "0.25em",
        "label": "0.2em",
      },
      lineHeight: {
        "hero": "0.9",
      },
    },
  },
  plugins: [],
};

export default config;
