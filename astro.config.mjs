import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: process.env.ASTRO_SITE ?? 'https://velitasluna.com',
  base: process.env.ASTRO_BASE ?? '/',
});
