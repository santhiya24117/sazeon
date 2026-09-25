export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'BUSINESS WEBSITES',
    description: 'Modern, responsive websites built around your business.',
    deliverables: ['Custom Architecture', 'Mobile-Responsive', 'Fast Load Times', 'CMS Ready'],
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'LANDING PAGES',
    description: 'Focused digital experiences designed to communicate clearly and drive action.',
    deliverables: ['High-Conversion Hierarchy', 'Performance-Tuned', 'Clear Value Narrative'],
  },
  {
    id: 'ecommerce-websites',
    number: '03',
    title: 'E-COMMERCE WEBSITES',
    description: 'Online stores designed for smooth browsing and buying.',
    deliverables: ['Product Discovery', 'Seamless Checkout Flows', 'Catalog Structuring'],
  },
  {
    id: 'logo-design',
    number: '04',
    title: 'LOGO DESIGN',
    description: 'Distinctive visual identities that make brands recognizable.',
    deliverables: ['Vector Wordmarks', 'Iconic Monograms', 'Brand Guidelines', 'Typography Scale'],
  },
  {
    id: 'business-card-design',
    number: '05',
    title: 'BUSINESS CARD DESIGN',
    description: 'Professional business cards that extend your brand beyond the screen.',
    deliverables: ['Tactile Print Layouts', 'Foil & Emboss Specs', 'Digital V-Card Integration'],
  },
  {
    id: 'poster-design',
    number: '06',
    title: 'POSTER DESIGN',
    description: 'Eye-catching digital and print posters designed to communicate with impact.',
    deliverables: ['High-Resolution Print', 'Social Campaign Formats', 'Editorial Typography'],
  },
];
