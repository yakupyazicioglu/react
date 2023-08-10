import type { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
  locales: ['en', 'nb', 'fi'],
  catalogs: [
    {
      include: ['packages/breadcrumbs/src/**/*.{ts,tsx}'],
      path: 'packages/breadcrumbs/src/locales/{locale}/messages',
    },
    {
      include: ['packages/button/src/**/*.{ts,tsx}'],
      path: 'packages/button/src/locales/{locale}/messages',
    },
    {
      include: ['packages/combobox/src/**/*.{ts,tsx}'],
      path: 'packages/combobox/src/locales/{locale}/messages',
    },
    {
      include: ['packages/modal/src/**/*.{ts,tsx}'],
      path: 'packages/modal/src/locales/{locale}/messages',
    },
    {
      include: ['packages/pill/src/**/*.{ts,tsx}'],
      path: 'packages/pill/src/locales/{locale}/messages',
    },
    {
      include: ['packages/textarea/src/**/*.{ts,tsx}'],
      path: 'packages/textarea/src/locales/{locale}/messages',
    },
  ],
  compileNamespace: 'es',
};

export default config;
