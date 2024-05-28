import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '3xl': '2rem',
      },
      colors: {
        'white': '#FEF7EE',
        'gray': '#6F757C',
        'black': '#111315',
      },
      backgroundColor: {
        'dark-black': '#111315',
        'light-black': '#1B1D1F',
        'gold': '#F6C768',
        'lime': '#BEE3CC',
        'carrot': '#ED735D',
      }
    },
  },
  plugins: [],
};
export default config;
