module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#111827",
        surface2: "#1f2937",
        border: "#1f2937",
        border2: "#374151",
        cyan: "#06b6d4",
        cyanDark: "#0891b2",
        text: "#e2e8f0",
        muted: "#94a3b8",
        subtle: "#4b5563",
      },
    },
  },
  plugins: [],
};
