import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#07344E",
          secondary: "#1A6B8A",
          accent: "#0D9488",
          accentDark: "#0B7A70",
          light: "#E0F2F1",
          bg: "#F8FAFC",
          text: "#1E293B",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 12px rgba(7, 52, 78, 0.08)",
        cardHover: "0 12px 28px rgba(7, 52, 78, 0.15)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(7,52,78,0.85) 0%, rgba(26,107,138,0.75) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #07344E 0%, #1A6B8A 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-in-up": "fadeInUp 0.7s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
