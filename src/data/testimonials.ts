/**
 * Testimonials. Replace placeholders with real quotes (ask permission to use name + photo).
 * Set `placeholder: false` once a quote is real.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Placeholder — a short quote about the result Marieli delivered, ideally with a number (e.g. “we launched in 6 weeks”).',
    name: 'Client Name',
    role: 'Founder & CEO',
    company: 'AI Startup',
    placeholder: true,
  },
  {
    quote:
      'Placeholder — a quote about working together: communication, speed, ownership and how the team felt during the project.',
    name: 'Client Name',
    role: 'Head of Product',
    company: 'SaaS Company',
    placeholder: true,
  },
  {
    quote:
      'Placeholder — a quote from a non-technical founder about going from idea to a working product they could sell.',
    name: 'Client Name',
    role: 'Founder',
    company: 'Early-stage startup',
    placeholder: true,
  },
];
