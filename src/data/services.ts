import type { Lang } from '@/i18n/ui';

/** Fixed-scope offers shown in the Services section. Prices are placeholders. */
export interface Service {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  deliverables: string[];
  timeline: string;
  priceFrom: string;
  featured?: boolean;
}

export const services: Record<Lang, Service[]> = {
  en: [
    {
      id: 'ai-product-design',
      name: 'AI Product Design',
      tagline: 'UX for agents, automations and AI-powered flows that people actually trust.',
      forWho: 'AI startups and SaaS teams adding AI features who need them to be understandable and usable.',
      deliverables: [
        'Agent & AI flow mapping (states, errors, human-in-the-loop)',
        'High-fidelity UI for the core AI experience',
        'Clickable prototype + usability test with 5 users',
        'Dev-ready handoff and specs',
      ],
      timeline: '3–5 weeks',
      priceFrom: '$X,XXX',
      featured: true,
    },
    {
      id: 'design-system-sprint',
      name: 'Design System Sprint',
      tagline: 'The foundations your product needs to scale without UI debt.',
      forWho: 'Growing SaaS teams whose product looks inconsistent and whose devs rebuild the same components.',
      deliverables: [
        'UI audit and inventory',
        'Design tokens (color, type, spacing) ready for code',
        'Core component library in Figma',
        'Usage documentation and adoption plan',
      ],
      timeline: '4–6 weeks',
      priceFrom: '$X,XXX',
    },
    {
      id: 'functional-mvp',
      name: 'Functional MVP',
      tagline: 'From Figma to a working product you can put in front of users.',
      forWho: 'Non-technical founders who need to validate an idea with a real product, fast.',
      deliverables: [
        'Product scoping and key user flows',
        'UI design in Figma',
        'Build in Webflow, FlutterFlow or code',
        'Launch support and analytics setup',
      ],
      timeline: '6–8 weeks',
      priceFrom: '$X,XXX',
    },
  ],

  pt: [
    {
      id: 'ai-product-design',
      name: 'AI Product Design',
      tagline: 'UX de agentes, automações e fluxos com IA em que as pessoas realmente confiam.',
      forWho: 'Startups de IA e times de SaaS adicionando IA ao produto, que precisam que ela seja compreensível e usável.',
      deliverables: [
        'Mapeamento de agentes e fluxos com IA (estados, erros, humano no loop)',
        'UI em alta fidelidade da experiência principal com IA',
        'Protótipo navegável + teste de usabilidade com 5 usuários',
        'Handoff e especificações prontos para desenvolvimento',
      ],
      timeline: '3–5 semanas',
      priceFrom: 'US$ X.XXX',
      featured: true,
    },
    {
      id: 'design-system-sprint',
      name: 'Design System Sprint',
      tagline: 'A base que o seu produto precisa para escalar sem dívida de UI.',
      forWho: 'Times de SaaS em crescimento com produto inconsistente e devs recriando os mesmos componentes.',
      deliverables: [
        'Auditoria e inventário de UI',
        'Design tokens (cor, tipografia, espaçamento) prontos para código',
        'Biblioteca de componentes principais no Figma',
        'Documentação de uso e plano de adoção',
      ],
      timeline: '4–6 semanas',
      priceFrom: 'US$ X.XXX',
    },
    {
      id: 'functional-mvp',
      name: 'MVP Funcional',
      tagline: 'Do Figma a um produto funcionando que você pode colocar na frente de usuários.',
      forWho: 'Fundadores não técnicos que precisam validar uma ideia com um produto real, rápido.',
      deliverables: [
        'Escopo do produto e fluxos principais',
        'Design de UI no Figma',
        'Build em Webflow, FlutterFlow ou código',
        'Apoio no lançamento e configuração de analytics',
      ],
      timeline: '6–8 semanas',
      priceFrom: 'US$ X.XXX',
    },
  ],

  es: [
    {
      id: 'ai-product-design',
      name: 'AI Product Design',
      tagline: 'UX de agentes, automatizaciones y flujos con IA en los que la gente realmente confía.',
      forWho: 'Startups de IA y equipos SaaS que suman IA a su producto y necesitan que sea comprensible y usable.',
      deliverables: [
        'Mapeo de agentes y flujos con IA (estados, errores, humano en el loop)',
        'UI de alta fidelidad de la experiencia principal con IA',
        'Prototipo navegable + test de usabilidad con 5 usuarios',
        'Handoff y especificaciones listos para desarrollo',
      ],
      timeline: '3–5 semanas',
      priceFrom: 'US$ X.XXX',
      featured: true,
    },
    {
      id: 'design-system-sprint',
      name: 'Design System Sprint',
      tagline: 'Las bases que tu producto necesita para escalar sin deuda de UI.',
      forWho: 'Equipos SaaS en crecimiento con un producto inconsistente y devs que rehacen los mismos componentes.',
      deliverables: [
        'Auditoría e inventario de UI',
        'Design tokens (color, tipografía, espaciado) listos para código',
        'Librería de componentes principales en Figma',
        'Documentación de uso y plan de adopción',
      ],
      timeline: '4–6 semanas',
      priceFrom: 'US$ X.XXX',
    },
    {
      id: 'functional-mvp',
      name: 'MVP Funcional',
      tagline: 'De Figma a un producto que funciona y que puedes poner frente a usuarios.',
      forWho: 'Fundadores no técnicos que necesitan validar una idea con un producto real, rápido.',
      deliverables: [
        'Alcance del producto y flujos principales',
        'Diseño de UI en Figma',
        'Build en Webflow, FlutterFlow o código',
        'Apoyo en el lanzamiento y configuración de analytics',
      ],
      timeline: '6–8 semanas',
      priceFrom: 'US$ X.XXX',
    },
  ],
};
