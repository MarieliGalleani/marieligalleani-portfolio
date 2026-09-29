import type { Lang } from '@/i18n/ui';

/**
 * Testimonials. Replace placeholders with real quotes (ask permission to use name + photo).
 * Keep real quotes in their original language in every locale, or translate with the client's OK.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
}

export const testimonials: Record<Lang, Testimonial[]> = {
  en: [
    { quote: 'Placeholder — a short quote about the result Marieli delivered, ideally with a number (e.g. “we launched in 6 weeks”).', name: 'Client Name', role: 'Founder & CEO', company: 'AI Startup', placeholder: true },
    { quote: 'Placeholder — a quote about working together: communication, speed, ownership and how the team felt during the project.', name: 'Client Name', role: 'Head of Product', company: 'SaaS Company', placeholder: true },
    { quote: 'Placeholder — a quote from a non-technical founder about going from idea to a working product they could sell.', name: 'Client Name', role: 'Founder', company: 'Early-stage startup', placeholder: true },
  ],
  pt: [
    { quote: 'Placeholder — uma frase curta sobre o resultado que a Marieli entregou, de preferência com um número (ex.: “lançamos em 6 semanas”).', name: 'Nome do Cliente', role: 'Founder & CEO', company: 'Startup de IA', placeholder: true },
    { quote: 'Placeholder — uma frase sobre trabalhar junto: comunicação, velocidade, autonomia e como o time se sentiu no projeto.', name: 'Nome do Cliente', role: 'Head de Produto', company: 'Empresa SaaS', placeholder: true },
    { quote: 'Placeholder — uma frase de um fundador não técnico sobre sair da ideia para um produto funcionando que dava para vender.', name: 'Nome do Cliente', role: 'Fundador', company: 'Startup em estágio inicial', placeholder: true },
  ],
  es: [
    { quote: 'Placeholder — una frase corta sobre el resultado que entregó Marieli, idealmente con un número (ej.: “lanzamos en 6 semanas”).', name: 'Nombre del Cliente', role: 'Founder & CEO', company: 'Startup de IA', placeholder: true },
    { quote: 'Placeholder — una frase sobre trabajar juntos: comunicación, velocidad, autonomía y cómo se sintió el equipo en el proyecto.', name: 'Nombre del Cliente', role: 'Head of Product', company: 'Empresa SaaS', placeholder: true },
    { quote: 'Placeholder — una frase de un fundador no técnico sobre pasar de la idea a un producto funcionando que podía vender.', name: 'Nombre del Cliente', role: 'Fundador', company: 'Startup en etapa temprana', placeholder: true },
  ],
};
