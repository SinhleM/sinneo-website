import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        hero: {
          DEFAULT: "hsl(var(--hero-bg))",
          accent: "hsl(var(--hero-accent))",
        },
        navy: {
          dark: "hsl(var(--navy-dark))",
        },
        "teal-glow": "hsl(var(--teal-glow))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;