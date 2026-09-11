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
        ivory: {
          DEFAULT: "#F7F3EA",
          light: "#FCFAF6",
          dark: "#EDE7D8",
        },
        green: {
          DEFAULT: "#214D33",
          deep: "#1A3D28",
          light: "#2C6342",
        },
        gold: {
          DEFAULT: "#C49A3A",
          light: "#D4AF57",
          dark: "#A6802C",
        },
        redAccent: {
          DEFAULT: "#8F2D24",
          light: "#A8362B",
          dark: "#75241C",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
        serif: ["var(--font-seasons)", "'The Seasons'", "'Cormorant Garamond'", "Georgia", "serif"],
        editorial: ["var(--font-seasons)", "'The Seasons'", "'Cormorant Garamond'", "Georgia", "serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.025em",
        snug: "-0.01em",
        normal: "0",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
