export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  year: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'the-address',
    number: '01',
    title: 'The Address',
    category: 'Website / UI / Digital Experience',
    description: 'An architectural digital experience celebrating modern structural form, spatial rhythm, and restrained luxury interior narratives.',
    url: 'https://the-address.vercel.app/',
    image: '/src/assets/images/project_the_address_1790316549111.jpg',
    tags: ['Architecture', 'Digital Experience', 'Editorial Layout'],
    year: '2026',
  },
  {
    id: 'lumiere',
    number: '02',
    title: 'Lumière',
    category: 'Website / UI / Digital Experience',
    description: 'A haute-parfumerie boutique web interface marrying editorial fragrance storytelling with tactile product curation.',
    url: 'https://lumiere-beta-umber.vercel.app/',
    image: '/src/assets/images/project_lumiere_1790316565803.jpg',
    tags: ['Luxury E-Commerce', 'Brand Identity', 'Sensory UI'],
    year: '2026',
  },
  {
    id: 'mira-and-crumb',
    number: '03',
    title: 'MIRA & CRUMB',
    category: 'Website / UI / Digital Experience',
    description: 'A contemporary artisanal patisserie showcase pairing warm visual aesthetics with a streamlined culinary ordering journey.',
    url: 'https://mira-crumb-website.vercel.app/',
    image: '/src/assets/images/project_mira_crumb_1790316580004.jpg',
    tags: ['Artisanal Food', 'E-Commerce', 'Visual Identity'],
    year: '2026',
  },
];
