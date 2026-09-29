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
  'nav.process': 'Process',
  'nav.about': 'About',
  'nav.skip': 'Skip to content',
  'nav.main': 'Main',
  'nav.language': 'Language',
  'a11y.newTab': '(opens in a new tab)',
  'a11y.tags': 'Tags',
  'a11y.home': 'home',
  'a11y.social': 'Social and contact',
  'cta.book': 'Book a call',
  'cta.bookShort': 'Book a call',
  'cta.seeWork': 'See my work',
  'cta.bookSub': '30 min · free · no strings attached',

  'home.title': 'Marieli Galleani — Product Designer who ships',
  'home.description':
    'Product Designer for AI startups, growing SaaS and non-technical founders. AI product design, design system sprints and functional MVPs — from research to a working product.',

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
  'about.p1':
    'I’m a Product Designer who likes to see things live. I work with AI startups, growing SaaS teams and non-technical founders to turn fuzzy ideas into products people understand and use.',
  'about.p2':
    'My sweet spot is the space between design and build: I research, design and then help ship — with design systems your engineers love, no-code builds or working code. Lately I’ve been focused on AI products: making agents and automations visible, trustworthy and useful.',
  'about.p3':
    'I’m based in <strong>Brazil</strong>, which means my working hours overlap with <strong>US mornings</strong> and <strong>European afternoons</strong> — real-time calls, fast feedback loops, no waiting a day for answers.',
  'about.basedLabel': 'Based in',
  'about.basedValue': 'Brazil (UTC−3)',
  'about.overlapLabel': 'Overlap',
  'about.overlapValue': 'US mornings · EU afternoons',
  'about.langsLabel': 'Languages',
  'about.langsValue': 'English · Portuguese',

  'testimonials.eyebrow': 'Testimonials',
  'testimonials.title': 'What clients say',

  'final.title': 'Have a product to design — or to ship?',
  'final.lead':
    'Tell me where you are and where you want to go. In 30 minutes you’ll leave with a clear next step, whether we work together or not.',

  'footer.rights': 'All rights reserved.',

  'case.client': 'Client',
  'case.role': 'Role',
  'case.timeline': 'Timeline',
  'case.tools': 'Tools',
  'case.outcome': 'Outcome',
  'case.next': 'Next case',
  'case.back': 'All work',
  'case.ctaTitle': 'Want results like this for your product?',
};

export type UIKey = keyof typeof en;

export const ui: Record<Lang, Record<UIKey, string>> = {
  en,

  pt: {
    'nav.services': 'Serviços',
    'nav.work': 'Projetos',
    'nav.process': 'Processo',
    'nav.about': 'Sobre',
    'nav.skip': 'Pular para o conteúdo',
    'nav.main': 'Principal',
    'nav.language': 'Idioma',
    'a11y.newTab': '(abre em nova aba)',
    'a11y.tags': 'Tags',
    'a11y.home': 'início',
    'a11y.social': 'Redes e contato',
    'cta.book': 'Agendar uma call',
    'cta.bookShort': 'Agendar',
    'cta.seeWork': 'Ver projetos',
    'cta.bookSub': '30 min · gratuita · sem compromisso',

    'home.title': 'Marieli Galleani — Product Designer que entrega',
    'home.description':
      'Product Designer para startups de IA, SaaS em crescimento e fundadores não técnicos. Design de produtos com IA, sprints de design system e MVPs funcionais — da pesquisa ao produto no ar.',

    'hero.eyebrow': 'Marieli Galleani — Product Designer',
    'hero.title': 'Product Designer que entrega.',
    'hero.subtitle':
      'Desenho produtos com IA, design systems escaláveis e MVPs funcionais — da pesquisa ao produto funcionando.',
    'hero.proof': 'Para startups de IA, times de SaaS em crescimento e fundadores não técnicos.',

    'services.eyebrow': 'Serviços',
    'services.title': 'Ofertas fechadas. Preço claro, prazo claro.',
    'services.lead': 'Escolha o formato que combina com o seu momento. Na dúvida? Agende uma call e a gente descobre junto.',
    'services.for': 'Para quem',
    'services.deliverables': 'O que você recebe',
    'services.timeline': 'Prazo',
    'services.from': 'a partir de',

    'work.eyebrow': 'Projetos selecionados',
    'work.title': 'Produtos desenhados, sistemas escalados, MVPs no ar.',
    'work.lead': 'Alguns projetos recentes — cada um com o problema, as decisões e o resultado.',
    'work.readCase': 'Ler o case',

    'process.eyebrow': 'Como eu trabalho',
    'process.title': 'De uma ideia vaga a um produto que as pessoas usam.',

    'about.eyebrow': 'Sobre',
    'about.title': 'Oi, eu sou a Marieli.',
    'about.p1':
      'Sou Product Designer e gosto de ver as coisas no ar. Trabalho com startups de IA, times de SaaS em crescimento e fundadores não técnicos para transformar ideias vagas em produtos que as pessoas entendem e usam.',
    'about.p2':
      'Meu ponto forte é o espaço entre design e construção: pesquiso, desenho e ajudo a lançar — com design systems que os devs adoram, builds em no-code ou código funcionando. Ultimamente tenho focado em produtos com IA: tornar agentes e automações visíveis, confiáveis e úteis.',
    'about.p3':
      'Moro no <strong>Brasil</strong>, então meu horário de trabalho coincide com as <strong>manhãs nos EUA</strong> e as <strong>tardes na Europa</strong> — calls em tempo real, feedback rápido, sem esperar um dia por respostas.',
    'about.basedLabel': 'Base',
    'about.basedValue': 'Brasil (UTC−3)',
    'about.overlapLabel': 'Sobreposição',
    'about.overlapValue': 'Manhãs nos EUA · tardes na Europa',
    'about.langsLabel': 'Idiomas',
    'about.langsValue': 'Inglês · Português',

    'testimonials.eyebrow': 'Depoimentos',
    'testimonials.title': 'O que dizem os clientes',

    'final.title': 'Tem um produto para desenhar — ou para lançar?',
    'final.lead':
      'Me conta onde você está e onde quer chegar. Em 30 minutos você sai com um próximo passo claro, trabalhando comigo ou não.',

    'footer.rights': 'Todos os direitos reservados.',

    'case.client': 'Cliente',
    'case.role': 'Papel',
    'case.timeline': 'Duração',
    'case.tools': 'Ferramentas',
    'case.outcome': 'Resultado',
    'case.next': 'Próximo case',
    'case.back': 'Todos os projetos',
    'case.ctaTitle': 'Quer resultados assim no seu produto?',
  },

  es: {
    'nav.services': 'Servicios',
    'nav.work': 'Proyectos',
    'nav.process': 'Proceso',
    'nav.about': 'Sobre mí',
    'nav.skip': 'Saltar al contenido',
    'nav.main': 'Principal',
    'nav.language': 'Idioma',
    'a11y.newTab': '(se abre en una nueva pestaña)',
    'a11y.tags': 'Etiquetas',
    'a11y.home': 'inicio',
    'a11y.social': 'Redes y contacto',
    'cta.book': 'Agendar una llamada',
    'cta.bookShort': 'Agendar',
    'cta.seeWork': 'Ver proyectos',
    'cta.bookSub': '30 min · gratis · sin compromiso',

    'home.title': 'Marieli Galleani — Product Designer que lanza productos',
    'home.description':
      'Product Designer para startups de IA, SaaS en crecimiento y fundadores no técnicos. Diseño de productos con IA, sprints de design system y MVPs funcionales — de la investigación al producto funcionando.',

    'hero.eyebrow': 'Marieli Galleani — Product Designer',
    'hero.title': 'Product Designer que lanza productos.',
    'hero.subtitle':
      'Diseño productos con IA, design systems escalables y MVPs funcionales — de la investigación a un producto que funciona.',
    'hero.proof': 'Para startups de IA, equipos SaaS en crecimiento y fundadores no técnicos.',

    'services.eyebrow': 'Servicios',
    'services.title': 'Ofertas cerradas. Precio claro, plazo claro.',
    'services.lead': 'Elige el formato que encaja con tu momento. ¿Tienes dudas? Agenda una llamada y lo vemos juntos.',
    'services.for': 'Para quién',
    'services.deliverables': 'Qué recibes',
    'services.timeline': 'Plazo',
    'services.from': 'desde',

    'work.eyebrow': 'Proyectos seleccionados',
    'work.title': 'Productos diseñados, sistemas escalados, MVPs lanzados.',
    'work.lead': 'Algunos proyectos recientes — cada uno con el problema, las decisiones y el resultado.',
    'work.readCase': 'Leer el caso',

    'process.eyebrow': 'Cómo trabajo',
    'process.title': 'De una idea difusa a un producto que la gente usa.',

    'about.eyebrow': 'Sobre mí',
    'about.title': 'Hola, soy Marieli.',
    'about.p1':
      'Soy Product Designer y me gusta ver las cosas funcionando. Trabajo con startups de IA, equipos SaaS en crecimiento y fundadores no técnicos para convertir ideas difusas en productos que la gente entiende y usa.',
    'about.p2':
      'Mi punto fuerte es el espacio entre el diseño y la construcción: investigo, diseño y ayudo a lanzar — con design systems que tus devs adoran, builds no-code o código funcionando. Últimamente me enfoco en productos con IA: hacer que agentes y automatizaciones sean visibles, confiables y útiles.',
    'about.p3':
      'Vivo en <strong>Brasil</strong>, así que mi horario coincide con las <strong>mañanas en EE. UU.</strong> y las <strong>tardes en Europa</strong> — llamadas en tiempo real, feedback rápido, sin esperar un día por respuestas.',
    'about.basedLabel': 'Ubicación',
    'about.basedValue': 'Brasil (UTC−3)',
    'about.overlapLabel': 'Horario',
    'about.overlapValue': 'Mañanas en EE. UU. · tardes en Europa',
    'about.langsLabel': 'Idiomas',
    'about.langsValue': 'Inglés · Portugués',

    'testimonials.eyebrow': 'Testimonios',
    'testimonials.title': 'Lo que dicen los clientes',

    'final.title': '¿Tienes un producto para diseñar — o para lanzar?',
    'final.lead':
      'Cuéntame dónde estás y a dónde quieres llegar. En 30 minutos te llevas un próximo paso claro, trabajemos juntos o no.',

    'footer.rights': 'Todos los derechos reservados.',

    'case.client': 'Cliente',
    'case.role': 'Rol',
    'case.timeline': 'Duración',
    'case.tools': 'Herramientas',
    'case.outcome': 'Resultado',
    'case.next': 'Siguiente caso',
    'case.back': 'Todos los proyectos',
    'case.ctaTitle': '¿Quieres resultados así para tu producto?',
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
