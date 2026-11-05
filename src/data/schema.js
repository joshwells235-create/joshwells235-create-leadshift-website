// Structured data, built from site.js so it always matches what the pages say.
// The organization block reproduces the concept's JSON-LD.
import { firm, partners, staff, coaches, programs } from './site.js';

const FIRM_ID = 'https://leadshift.com/#firm';

export function organization() {
  return {
    '@type': 'ProfessionalService',
    '@id': FIRM_ID,
    name: firm.name,
    url: firm.url,
    description: firm.descriptor,
    foundingDate: firm.founded,
    telephone: firm.phoneIntl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: firm.address.street,
      addressLocality: firm.address.city,
      addressRegion: firm.address.region,
      postalCode: firm.address.postal,
      addressCountry: firm.address.country,
    },
    knowsAbout: [
      'Leadership performance',
      'Team performance',
      'Frontline manager development',
      'Leadership development',
      'Team alignment',
      'Executive coaching',
      'Sales coaching',
    ],
    employee: [...partners, ...staff].map((p) => ({
      '@type': 'Person',
      name: p.name,
      jobTitle: p.title,
      worksFor: { '@id': FIRM_ID },
    })),
    member: coaches.map((p) => ({ '@type': 'Person', name: p.name, jobTitle: p.title })),
    areaServed: { '@type': 'Country', name: firm.areaServed },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'LeadShift programs',
      itemListElement: programs.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: p.schema.name, description: p.schema.description },
        priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', ...p.schema.price },
      })),
    },
  };
}

// FAQ structured data must match the questions and answers visible on the page.
export function faqPage(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  };
}

export function graph(...nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}
