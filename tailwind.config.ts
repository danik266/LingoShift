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
        primary: "#6366f1", // Твой Indigo
        "primary-hover": "#4f46e5",
        accent: "#a855f7", // Твой Purple
        success: "#10b981",
        "text-main": "#1e293b",
        "text-muted": "#64748b",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
export default config;