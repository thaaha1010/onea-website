// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output — no adapter needed for Cloudflare Pages static hosting.
// Cloudflare Pages will serve the dist/ directory directly.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
});
