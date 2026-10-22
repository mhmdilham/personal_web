import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Konfigurasi utama Astro untuk Custom Domain GitHub Pages & Performa Maksimal
export default defineConfig({
  site: 'https://mhmdilham.web.id',
  base: '/',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'always',
  },
});
