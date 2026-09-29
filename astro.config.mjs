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
  // Ready for Portuguese later: add 'pt' to locales and create src/pages/pt/.
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  integrations: [mdx(), sitemap()],
});
