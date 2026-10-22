import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Konfigurasi utama Astro dengan integrasi Tailwind CSS
export default defineConfig({
  integrations: [tailwind()],
});
