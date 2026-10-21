import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://inntratec.com',
  base: '/',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-EC', en: 'en' } } })],
});
