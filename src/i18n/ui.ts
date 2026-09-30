/**
 * UI strings and i18n helpers.
 * English is the default locale (served at /). Portuguese lives under /pt/ and Spanish under /es/.
 * To add a language: add it to `languages` and `locales`, add a strings object below with the
 * same keys, add it to astro.config.mjs and create translated cases in src/content/cases/<lang>/.
 */
export const languages = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** Order of the language switcher. */
export const langs = Object.keys(languages) as Lang[];

/** BCP 47 tags for hreflang / og:locale. */
export const locales: Record<Lang, { hreflang: string; og: string }> = {
  en: { hreflang: 'en', og: 'en_US' },
  pt: { hreflang: 'pt-BR', og: 'pt_BR' },
  es: { hreflang: 'es', og: 'es_ES' },
};

const en = {
  'nav.services': 'Services',
  'nav.work': 'Work',
  'nav.process': 'How it works',
  'nav.pricing': 'Plans',
  'nav.faq': 'FAQ',
  'nav.about': 'About',
  'nav.skip': 'Skip to content',
  'nav.main': 'Main',
  'nav.language': 'Language',
  'a11y.newTab': '(opens in a new tab)',
  'a11y.tags': 'Tags',
  'a11y.home': 'home',
  'cta.book': 'Book a call',
  'cta.bookShort': 'Book a call',

  'services.from': 'from',

  'work.readCase': 'Read case study',
  'case.watch': 'Walkthrough',

  'footer.rights': 'All rights reserved.',

  'case.client': 'Client',
  'case.role': 'Role',
  'case.timeline': 'Timeline',
  'case.tools': 'Tools',
  'case.outcome': 'Outcome',
  'case.next': 'Next case',
  'case.back': 'All work',
  'case.ctaTitle': 'Want results like this for <em>your product?</em>',
  'case.gallery': 'Screens',
  'case.repo': 'View the code on GitHub',
  'video.play': 'Play',
  'video.pause': 'Pause',
};

export type UIKey = keyof typeof en;

export const ui: Record<Lang, Record<UIKey, string>> = {
  en,

  pt: {
    'nav.services': 'Serviços',
    'nav.work': 'Projetos',
    'nav.process': 'Como funciona',
    'nav.pricing': 'Planos',
    'nav.faq': 'Dúvidas',
    'nav.about': 'Sobre',
    'nav.skip': 'Pular para o conteúdo',
    'nav.main': 'Principal',
    'nav.language': 'Idioma',
    'a11y.newTab': '(abre em nova aba)',
    'a11y.tags': 'Tags',
    'a11y.home': 'início',
    'cta.book': 'Agendar uma call',
    'cta.bookShort': 'Agendar',

    'services.from': 'a partir de',

    'work.readCase': 'Ler o case',
    'case.watch': 'Vídeo',

    'footer.rights': 'Todos os direitos reservados.',

    'case.client': 'Cliente',
    'case.role': 'Papel',
    'case.timeline': 'Duração',
    'case.tools': 'Ferramentas',
    'case.outcome': 'Resultado',
    'case.next': 'Próximo case',
    'case.back': 'Todos os projetos',
    'case.ctaTitle': 'Quer resultados assim no <em>seu produto?</em>',
    'case.gallery': 'Telas',
    'case.repo': 'Ver o código no GitHub',
    'video.play': 'Reproduzir',
    'video.pause': 'Pausar',
  },

  es: {
    'nav.services': 'Servicios',
    'nav.work': 'Proyectos',
    'nav.process': 'Cómo funciona',
    'nav.pricing': 'Planes',
    'nav.faq': 'Preguntas',
    'nav.about': 'Nosotros',
    'nav.skip': 'Saltar al contenido',
    'nav.main': 'Principal',
    'nav.language': 'Idioma',
    'a11y.newTab': '(se abre en una nueva pestaña)',
    'a11y.tags': 'Etiquetas',
    'a11y.home': 'inicio',
    'cta.book': 'Agendar una llamada',
    'cta.bookShort': 'Agendar',

    'services.from': 'desde',

    'work.readCase': 'Leer el caso',
    'case.watch': 'Video',

    'footer.rights': 'Todos los derechos reservados.',

    'case.client': 'Cliente',
    'case.role': 'Rol',
    'case.timeline': 'Duración',
    'case.tools': 'Herramientas',
    'case.outcome': 'Resultado',
    'case.next': 'Siguiente caso',
    'case.back': 'Todos los proyectos',
    'case.ctaTitle': '¿Quieres resultados así para <em>tu producto?</em>',
    'case.gallery': 'Pantallas',
    'case.repo': 'Ver el código en GitHub',
    'video.play': 'Reproducir',
    'video.pause': 'Pausar',
  },
};

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: UIKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in languages;
}

/** Remove the language prefix from a pathname: "/pt/work/x/" → "/work/x/". */
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (isLang(first) && first !== defaultLang) return '/' + rest.join('/');
  return pathname;
}

/** Build a localized path: localizePath('pt', '/work/x/') → "/pt/work/x/". English has no prefix. */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}
