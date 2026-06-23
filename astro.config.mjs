import { defineConfig } from 'astro/config';

// Set this to your real domain before deploying.
export default defineConfig({
  site: 'https://justinnassiri.com',
  build: { inlineStylesheets: 'auto' },
});
