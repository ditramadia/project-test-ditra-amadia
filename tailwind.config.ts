import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        "primary-500": "#FF6600",
        "neutral-100": "#FDFEFF",
        "neutral-400": "#B0B5BB",
        "neutral-900": "#1F1F1F",
        "border": "#D1D6DC",
        "shadow": "#D1D6DC",
      },
    },
  },
  plugins: [],
};
export default config;
