import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

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
        lightgray: "#c4c4c4",
        green: "#37c21b",
        darkgreen: "#257c13",
        brightred: "#ed1818",
        darkred: "#b31616",
        lightblue: '#5abae1',
        blue: '#2eace0',
        lightpurple: '#c1c1ff',
        yellow: '#ffbf00',
        pink: '#fe9be7',
      },
      animation: {
        'gradient-animation': 'gradient-animation 20s ease infinite',
        "jump-sequence": "jump 0.5s ease-out forwards",
        "flip": 'flip 0.6s forwards',
        "unflip": 'unflip 0.6s forwards',
        "shake": 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        "fadein": "fadein 2s forwards",
        "blinker": "blink 1.4s infinite",
        "blob-1-slow": "blob-1 40s infinite ease-in-out",
        "blob-1-normal": "blob-1 32s infinite ease-in-out",
        "blob-1-fast": "blob-1 26s infinite ease-in-out",
        "blob-2-slow": "blob-2 37s infinite ease-in-out", 
        "blob-2-normal": "blob-2 30s infinite ease-in-out", 
        "blob-2-fast": "blob-2 22s infinite ease-in-out", 
        "pulse": "pulse 3s infinite ease-in-out",
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%', 'background-color': '#ffafcc' }, // Light Pink
          '25%': { 'background-position': '50% 50%', 'background-color': '#ff94a4' }, // Darker Pink
          '50%': { 'background-position': '100% 50%', 'background-color': '#ff6b81' }, // Reddish Pink
          '75%': { 'background-position': '50% 50%', 'background-color': '#ff94a4' }, // Back to Darker Pink
          '100%': { 'background-position': '0% 50%', 'background-color': '#ffafcc' }, // Back to Light Pink
        },
        "jump": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "flip": {
          '0%': { transform: 'rotateY(0deg)' },
          '25%': { transform: 'scale(1.1)' },
          '75%': { transform: 'scale(1.1) rotateY(180deg)' },
          '100%': { transform: 'scale(1) rotateY(180deg)' },
        },
        "unflip": {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
        "fadein": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
        "blink": {
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
        "blob-1": {
          "0%": {
            transform: "translate(0vw, 0vh) scale(1)",
          },
          "25%": {
            transform: "translate(30vw, -50vh) scale(0.8)", 
          },
          "50%": {
            transform: "translate(110vw, 60vh) scale(1.4)",
          },
          "75%": {
            transform: "translate(-100vw, 30vh) scale(1.1)", 
          },
          "100%": {
            transform: "translate(0vw, 0vh) scale(1)",
          },
        },
        "blob-2": {
          "0%": {
            transform: "translate(0vw, 0vh) scale(1)",
          },
          "20%": {
            transform: "translate(-80vw, 10vh) scale(1.4)",
          },
          "40%": {
            transform: "translate(20vw, -20vh) scale(0.9)", 
          },
          "60%": {
            transform: "translate(-110vw, 110vh) scale(1.2)",
          },
          "80%": {
            transform: "translate(50vw, 50vh) scale(1.3)", 
          },
          "100%": {
            transform: "translate(0vw, 0vh) scale(1)",
          },
        },
        "pulse": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible !important',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden !important',
        },
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        }
      });
    }),
  ],
} satisfies Config;
