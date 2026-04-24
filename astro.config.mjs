// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nicolasrodriguez.dev',
  integrations: [
    sitemap(),
    icon({
      include: {
        devicon: ['*'],
        lucide: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
