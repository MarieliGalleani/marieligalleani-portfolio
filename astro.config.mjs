// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marieligalleani.com.br',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // /work/slug/index.html — works on any static host without rewrites
    format: 'directory',
  },
  // English at /, Portuguese at /pt/, Spanish at /es/. Keep in sync with src/i18n/ui.ts.
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', pt: 'pt-BR', es: 'es' },
      },
    }),
  ],
});
