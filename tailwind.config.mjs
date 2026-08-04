/**
 * ============================================================
 * TAILWIND CONFIG — KINETIC/MOTION-FIRST DESIGN SYSTEM
 * ============================================================
 * Color Palette: Dark & Cool-Neon
 *   --bg              #0D0F0F  near-black base
 *   --surface         #111414  card/surface layer
 *   --accent-primary  #00E5CC  electric cyan (signature color)
 *   --accent-secondary#A8FF78  lime green (secondary highlight)
 *   --text-primary    #E8F5F4  near-white body text
 *   --text-muted      #5A7070  subdued/meta text
 *   --border          #1E2828  subtle borders
 *
 * Fonts:
 *   Display: Space Grotesk (expressive, slightly technical)
 *   Mono/accent: DM Mono (reinforces kinetic/technical voice)
 * ============================================================
 *
 * HOW TO CHANGE COLORS:
 *   Edit the `colors.brand` object below and run `npm run dev`.
 *
 * HOW TO CHANGE FONTS:
 *   Update the `fontFamily` values and the Google Fonts link in Layout.astro.
 * ============================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:       "#0D0F0F",
          surface:  "#111414",
          surfaceHi:"#161C1C",
          border:   "#1E2828",
          cyan:     "#00E5CC",
          lime:     "#A8FF78",
          purple:   "#C084FC",
          text:     "#E8F5F4",
          muted:    "#5A7070",
          dim:      "#2A3A3A",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        mono:    ['"DM Mono"', "monospace"],
      },
      animation: {
        "cursor-ping": "cursor-ping 1s cubic-bezier(0,0,0.2,1) infinite",
        "fade-up":     "fadeUp 0.6s ease forwards",
        "scramble":    "scramble 0.04s steps(1) infinite",
      },
      keyframes: {
        "cursor-ping": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-lg": "80px 80px",
      },
    },
  },
  plugins: [],
};
