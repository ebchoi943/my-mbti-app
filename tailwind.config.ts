import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          indigo: "#4F46E5",
          cyan: "#06B6D4",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseArrow: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out both",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        pulseArrow: "pulseArrow 1.2s ease-in-out infinite",
        popIn: "popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
