import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C1F3F",
          mid: "#1A2F50",
        },
        grey: {
          accent: "#607080",
        },
        white: "#FAFBFC",
      },
      fontFamily: {
        heading: ["'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
        body: ["'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
