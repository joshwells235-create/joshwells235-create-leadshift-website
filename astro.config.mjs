// @ts-check
import { defineConfig } from 'astro/config';

// Static HTML only. `assets/` from the handoff kit is served as the public folder,
// so fonts, logos and images keep one copy each (/fonts, /logos, /images, /client-logos).
export default defineConfig({
  site: 'https://leadshift.com',
  publicDir: './assets',
  trailingSlash: 'never',
  build: { format: 'file' },
});
