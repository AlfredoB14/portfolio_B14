// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio pendiente: define SITE_URL al desplegar (p. ej. SITE_URL=https://tudominio.dev npm run build).
const SITE_URL = process.env.SITE_URL ?? 'https://alfredo-barranco.example';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      // La raíz la resuelve public/_redirects (301 a /en/) en Cloudflare; src/pages/index.astro es el respaldo.
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
});
