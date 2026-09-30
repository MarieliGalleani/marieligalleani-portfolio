/**
 * Global site settings. Update links here — every CTA on the site reads from this file.
 */
export const site = {
  /** Agency brand (wordmark, titles). TODO: confirm the final agency name. */
  name: 'Galleani',
  /** Short descriptor shown next to the brand. */
  role: 'Brazil & LatAm market entry',
  founder: 'Marieli Galleani',
  url: 'https://marieligalleani.com.br',
  // TODO: replace with the real Cal.com link (e.g. https://cal.com/galleani/strategy)
  bookingUrl: 'https://cal.com/marieligalleani/30min',
  email: 'hello@marieligalleani.com.br',
  // TODO: add the real WhatsApp Business number (digits only, with country code), e.g. 5511999999999
  whatsapp: '',
  social: {
    // TODO: replace with the real LinkedIn page URL
    linkedin: 'https://www.linkedin.com/in/marieligalleani',
    github: 'https://github.com/MarieliGalleani',
    dribbble: 'https://dribbble.com/MarieliGalleani_',
  },
  ogImage: '/og-default.png',
};

export type Site = typeof site;
