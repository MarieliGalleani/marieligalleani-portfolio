import type { Lang } from '@/i18n/ui';

/** Steps shown in the "How I work" section. */
export const processSteps: Record<Lang, { name: string; description: string }[]> = {
  en: [
    { name: 'Research', description: 'Interviews, data and competitor review to find the problem worth solving — and the one to skip.' },
    { name: 'Design', description: 'Flows, prototypes and UI, tested with real users early so decisions are grounded, not guessed.' },
    { name: 'Build', description: 'I ship with you: design systems in code, no-code builds or a close handoff to your engineers.' },
    { name: 'Measure', description: 'Analytics and feedback loops to prove impact and decide what to improve next.' },
  ],
  pt: [
    { name: 'Pesquisa', description: 'Entrevistas, dados e análise de concorrentes para achar o problema que vale resolver — e o que deixar de lado.' },
    { name: 'Design', description: 'Fluxos, protótipos e UI testados cedo com usuários reais, para decidir com base em evidência, não em achismo.' },
    { name: 'Build', description: 'Eu lanço junto com você: design system em código, builds no-code ou um handoff próximo aos seus devs.' },
    { name: 'Medição', description: 'Analytics e ciclos de feedback para provar impacto e decidir o que melhorar em seguida.' },
  ],
  es: [
    { name: 'Investigación', description: 'Entrevistas, datos y análisis de competidores para encontrar el problema que vale la pena resolver — y cuál dejar de lado.' },
    { name: 'Diseño', description: 'Flujos, prototipos y UI probados temprano con usuarios reales, para decidir con evidencia, no con suposiciones.' },
    { name: 'Build', description: 'Lanzo contigo: design systems en código, builds no-code o un handoff cercano con tus devs.' },
    { name: 'Medición', description: 'Analytics y ciclos de feedback para demostrar impacto y decidir qué mejorar después.' },
  ],
};
