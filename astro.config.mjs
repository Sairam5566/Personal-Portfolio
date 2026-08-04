// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Astro config — KINETIC/MOTION-FIRST portfolio
 * Output: static (no server required — deploys to Vercel/Netlify/GitHub Pages/Cloudflare Pages)
 *
 * HOW TO CHANGE SITE URL:
 *   Update the `site` field below with your actual domain before deployment.
 */
export default defineConfig({
  output: 'static',
  site: 'https://sairam-lakshmanan.vercel.app', // ← update with your actual URL
  vite: {
    plugins: [tailwindcss()],
  },
});