import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Konfigurasi utama Astro untuk GitHub Pages
export default defineConfig({
  site: 'https://mhmdilham.github.io',
  base: '/personal_web',
  integrations: [tailwind()],
});
