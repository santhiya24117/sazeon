export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  service: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'I walked in wanting a change. I walked out feeling like myself again.',
    author: 'AISHWARYA S.',
    role: 'Creative Director, Coimbatore',
    service: 'Bespoke Balayage & Cut',
  },
  {
    id: 't2',
    quote: 'The level of craftsmanship and architectural quiet in the studio is unlike anything in South India. They listened before touching a single hair.',
    author: 'MEERA KRISHNAN',
    role: 'Architect & Collector',
    service: 'Cellular Hydra-Infusion & Sculpt',
  },
  {
    id: 't3',
    quote: 'The bespoke gloss treatment and quiet architectural ambiance transformed my salon experience into pure rejuvenation.',
    author: 'PRIYA RAMESH',
    role: 'Fashion Consultant',
    service: 'Sensory Hydro-Spa & Bespoke Gloss',
  },
  {
    id: 't4',
    quote: 'They don’t follow fast trends. They look at your bone structure, your routine, and curate something truly timeless.',
    author: 'DIVYA CHETTIAR',
    role: 'Textile Designer',
    service: 'Dimensional Color & Silk Smoothing',
  },
];
