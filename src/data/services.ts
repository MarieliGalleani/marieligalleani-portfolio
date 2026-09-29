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

export const services: Service[] = [
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
];
