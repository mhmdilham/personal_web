/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050F16',       // Deep blue-black (ground)
          surface: '#0B1721',    // Dark industrial surface
          surface2: '#132230',   // Slightly elevated surface
          border: '#1B2C3C',     // Subtle structural edge
          orange: '#FF7A1F',     // Hot Signal Orange (fiber optic jacket & field gear)
          'orange-hover': '#FF8E3D',
          muted: '#8C9BA8',      // Muted technical slate
          ink: '#F4F7FA',        // High-contrast text
        }
      },
      fontFamily: {
        sans: ['"Archivo Variable"', '"Archivo"', 'system-ui', 'sans-serif'],
        display: ['"Archivo Variable"', '"Archivo"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      }
    },
  },
  plugins: [],
};
