import { ASSETS } from './assets';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  subServices: string[];
  duration: string;
  startingPrice: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hair',
    number: '01',
    title: 'HAIR',
    subtitle: 'CUT · COLOUR · STYLE',
    description: 'Precision architecture tailored to your bone structure, hair fabric, and lifestyle. From dimensional French balayage to couture Japanese silk smoothing.',
    subServices: [
      'Bespoke Editorial Cut & Sculpt',
      'Dimensional Balayage & Gloss Melting',
      'Japanese Caviar & Keratin Infusion',
      'Sculptural Updos & Fashion Editorial Finish',
      'Scalp Dermabrasion & Follicle Therapy',
    ],
    duration: '60 – 180 min',
    startingPrice: '₹3,500',
    image: ASSETS.services.hair,
  },
  {
    id: 'skin',
    number: '02',
    title: 'SKIN',
    subtitle: 'FACIALS · TREATMENTS',
    description: 'Cellular rejuvenation combining clinical European biotech with restorative botanical lymphatic draining. Non-invasive, luminous, skin-barrier perfecting.',
    subServices: [
      'LUMIÈRE Signature Cellular Hydra-Infusion',
      'Cryo-Sculpt & Microcurrent Firming',
      'Enzymatic Resurfacing & Peel Protocol',
      'High-Frequency Oxygen Detox Therapy',
      'Aromatic Lymphatic Facial Contouring',
    ],
    duration: '75 – 120 min',
    startingPrice: '₹4,800',
    image: ASSETS.services.skin,
  },
  {
    id: 'beauty',
    number: '03',
    title: 'BEAUTY',
    subtitle: 'MAKEUP · BROWS',
    description: 'The art of natural elevation. Redefining your distinctive facial features with micro-feathered brows, bespoke tinting, and luminous skin-first makeup.',
    subServices: [
      'Bespoke Red Carpet & Gala Makeup',
      'High-Definition Brow Micro-Lamination',
      'Keratin Lash Lift & Lash Tinting',
      'Airbrush Complexion Artistry',
      'Personal Makeup Wardrobe Masterclass',
    ],
    duration: '45 – 90 min',
    startingPrice: '₹2,800',
    image: ASSETS.services.beauty,
  },
  {
    id: 'rituals',
    number: '04',
    title: 'RITUALS',
    subtitle: 'SCALP · SENSORY WELLNESS',
    description: 'Bespoke restorative rituals combining Ayurvedic scalp botanicals, Japanese head spa hydrotherapy, and acoustic frequency meditation.',
    subServices: [
      'Japanese Hydro-Spa Scalp Purifying Ceremony',
      'Botanical Trichology Infusion & Follicle Reset',
      'Warm Obsidian Stone Neck & Shoulder Release',
      'Diamond Dust & Caviar Hair Gloss Mask',
      'Acoustic Sound Frequency Scalp Rebalance',
    ],
    duration: '60 – 120 min',
    startingPrice: '₹4,200',
    image: ASSETS.services.rituals,
  },
];
