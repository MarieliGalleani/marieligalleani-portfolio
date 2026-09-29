/**
 * UI strings. The site ships in English; to add Portuguese:
 *  1. Add a `pt` object with the same keys below.
 *  2. Add 'pt' to `i18n.locales` in astro.config.mjs.
 *  3. Create localized pages under src/pages/pt/ that call useTranslations('pt').
 */
export const languages = {
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.skip': 'Skip to content',
    'cta.book': 'Book a call',
    'cta.seeWork': 'See my work',
    'cta.bookSub': '30 min · free · no strings attached',

    'hero.eyebrow': 'Marieli Galleani — Product Designer',
    'hero.title': 'Product Designer who ships.',
    'hero.subtitle':
      'I design AI-powered products, scalable design systems and functional MVPs — from research to a working product.',
    'hero.proof': 'For AI startups, growing SaaS teams and non-technical founders.',

    'services.eyebrow': 'Services',
    'services.title': 'Fixed-scope offers. Clear price, clear timeline.',
    'services.lead': 'Pick the engagement that fits where you are. Not sure? Book a call and we’ll figure it out together.',
    'services.for': 'For',
    'services.deliverables': 'What you get',
    'services.timeline': 'Timeline',
    'services.from': 'from',

    'work.eyebrow': 'Selected work',
    'work.title': 'Products designed, systems scaled, MVPs shipped.',
    'work.lead': 'A few recent projects — each one with the problem, the decisions and the result.',
    'work.readCase': 'Read case study',

    'process.eyebrow': 'How I work',
    'process.title': 'From a fuzzy idea to a product people use.',

    'about.eyebrow': 'About',
    'about.title': 'Hi, I’m Marieli.',

    'testimonials.eyebrow': 'Testimonials',
    'testimonials.title': 'What clients say',

    'final.title': 'Have a product to design — or to ship?',
    'final.lead': 'Tell me where you are and where you want to go. In 30 minutes you’ll leave with a clear next step, whether we work together or not.',

    'footer.rights': 'All rights reserved.',
    'footer.email': 'Email',

    'case.client': 'Client',
    'case.role': 'Role',
    'case.timeline': 'Timeline',
    'case.tools': 'Tools',
    'case.outcome': 'Outcome',
    'case.next': 'Next case',
    'case.back': 'All work',
    'case.ctaTitle': 'Want results like this for your product?',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang = 'en') {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui.en[key];
  };
}
