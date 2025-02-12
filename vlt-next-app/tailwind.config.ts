import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#2a152a",
        lightgray: "#e5e7eb", 
        green: "#37c21b", 
        darkgreen: "#257c13", 
        brightred: "#ed1818", 
        darkred: "#b31616",
      },
      animation: {
        'gradient-animation': 'gradient-animation 20s ease infinite',
        "jump-sequence": "jump 0.5s ease-out forwards",
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%', 'background-color': '#ffafcc' }, // Light Pink
          '25%': { 'background-position': '50% 50%', 'background-color': '#ff94a4' }, // Darker Pink
          '50%': { 'background-position': '100% 50%', 'background-color': '#ff6b81' }, // Reddish Pink
          '75%': { 'background-position': '50% 50%', 'background-color': '#ff94a4' }, // Back to Darker Pink
          '100%': { 'background-position': '0% 50%', 'background-color': '#ffafcc' }, // Back to Light Pink
        },
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
