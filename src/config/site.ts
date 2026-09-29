/**
 * Global site settings. Update links here — every CTA on the site reads from this file.
 */
export const site = {
  name: 'Marieli Galleani',
  role: 'Product Designer',
  url: 'https://marieligalleani.com.br',
  // TODO: replace with the real Cal.com link (e.g. https://cal.com/marieligalleani/intro)
  bookingUrl: 'https://cal.com/marieligalleani/30min',
  email: 'hello@marieligalleani.com.br',
  social: {
    // TODO: replace with the real LinkedIn profile URL
    linkedin: 'https://www.linkedin.com/in/marieligalleani',
    github: 'https://github.com/MarieliGalleani',
    dribbble: 'https://dribbble.com/MarieliGalleani_',
  },
  ogImage: '/og-default.png',
};

export type Site = typeof site;
