import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101010",
        // foreground: "var(--foreground)",
        main_color: "#FF2E2E",
        custom_gray: "#A8A9AB",
        card_background: "#2E2E2E"
      },
      screens: {
        mobile: "512px",
        tablet: "960px"
      }
    },
  },
  plugins: [],
};
export default config;
