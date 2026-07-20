/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./foundry/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "text-primary": "var(--color-text-primary)",
        "text-muted": "var(--color-text-muted)",
        accent: "var(--color-accent)",
        "accent-contrast": "var(--color-accent-contrast)",
        rule: "var(--color-rule)",
        live: "var(--color-live)",
        "live-soft": "var(--color-live-soft)",
        building: "var(--color-building)",
        "building-soft": "var(--color-building-soft)",
        early: "var(--color-early)",
        "early-soft": "var(--color-early-soft)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
      },
    },
  },
  plugins: [],
};
