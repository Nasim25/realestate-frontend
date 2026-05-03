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
        ink: "#0f0e0c",
        cream: "#f5f2ec",
        gold: "#b8975a",
        "gold-light": "#d4b47a",
        sage: "#7a8c76",
        mist: "#e8e3db",
        charcoal: "#2c2b28",
        "text-secondary": "#6b6660",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "slide-in": "slideIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        soft: "0 4px 32px rgba(15,14,12,0.10)",
        strong: "0 12px 60px rgba(15,14,12,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
