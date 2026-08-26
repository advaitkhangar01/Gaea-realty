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
        gaea: {
          blue: {
            DEFAULT: "#03356C",
            deep: "#022A55",
            mid: "#05407F",
            accent: "#0A599E",
            light: "#3D7FC4",
            subtle: "#A6C4E6",
            surface: "#E3ECF7",
          },
          olive: {
            DEFAULT: "#566038",
            deep: "#3F482B",
            mid: "#6E774D",
            light: "#8A946A",
            subtle: "#B8BEA0",
            surface: "#E6E8DF",
          },
          gold: {
            DEFAULT: "#906B3B",
            deep: "#7A572E",
            mid: "#B8864C",
            light: "#D6AE73",
            subtle: "#E9D2A9",
            surface: "#F4E9D6",
          },
          charcoal: {
            DEFAULT: "#222529",
            darkest: "#111315",
            medium: "#3E4146",
            light: "#5E6166",
            subtle: "#8D9096",
            surface: "#F2F3F5",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        secondary: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-literata)", "Georgia", "serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
        wide: "0.12em",
      },
      lineHeight: {
        tight: "0.98",
        snug: "1.05",
      },
      borderRadius: {
        architectural: "32px",
        hero: "80px",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(3, 53, 108, 0.05)",
        card: "0 12px 32px -4px rgba(3, 53, 108, 0.08)",
        floating: "0 20px 40px -8px rgba(34, 37, 41, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
