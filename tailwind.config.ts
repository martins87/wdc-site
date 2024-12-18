import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			// background: "hsl(var(--background))",
  			// background: "#101010", // old dark theme
  			background: "#FFFFFF",
				background_gray: "#EDEDED",
				primary_text: "#282A46", // new light theme
				secondary_text: "#1E1F4B",
  			// main_color: "#FF2E2E",
  			main_color: "#4241C2", // new light theme
  			custom_gray: "#A8A9AB",
  			custom_gray_2: "#2E3E5C",
				custom_gray_3: "#EAEEF3",
  			card_background: "#2E2E2E",
  			card_background_hover: "#424242",
				message_background: "#D37F7F",
  			foreground: "hsl(var(--foreground))",
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))"
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))"
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))"
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))"
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))"
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))"
  			},
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			chart: {
  				"1": "hsl(var(--chart-1))",
  				"2": "hsl(var(--chart-2))",
  				"3": "hsl(var(--chart-3))",
  				"4": "hsl(var(--chart-4))",
  				"5": "hsl(var(--chart-5))"
  			}
  		},
  		screens: {
  			mobile: "512px",
  			tablet: "960px"
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		},
  		keyframes: {
  			"accordion-down": {
  				from: {
  					height: "0"
  				},
  				to: {
  					height: "var(--radix-accordion-content-height)"
  				}
  			},
  			"accordion-up": {
  				from: {
  					height: "var(--radix-accordion-content-height)"
  				},
  				to: {
  					height: "0"
  				}
  			}
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out"
  		}
  	}
  },
  plugins: [
		require("tailwindcss-animate"),
		require("daisyui")
	],
};
export default config;
