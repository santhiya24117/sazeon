import heroImg from '../assets/images/lumiere_hero_editorial_1790251331683.jpg';
import studioImg from '../assets/images/lumiere_studio_interior_1790251344436.jpg';
import hairImg from '../assets/images/lumiere_hair_editorial_1790251356037.jpg';
import facialImg from '../assets/images/lumiere_facial_treatment_1790251377838.jpg';
import transBeforeImg from '../assets/images/lumiere_trans_before_1790251413647.jpg';
import transAfterImg from '../assets/images/lumiere_trans_after_1790251425372.jpg';
import atmosphereImg from '../assets/images/lumiere_gallery_atmosphere_1790251436133.jpg';

export const ASSETS = {
  hero: {
    poster: '/images/lumiere-hero-salon-poster.jpg',
    video: '/videos/lumiere-hero.mp4',
    alt: 'LUMIÈRE Luxury Salon Ambience and Beauty Atelier Atmosphere',
  },
  experience: {
    poster: hairImg,
    video: '/videos/lumiere-experience.mp4',
    alt: 'LUMIÈRE Experience Atmosphere',
  },
  studio: {
    poster: studioImg,
    video: '/videos/lumiere-studio.mp4',
    alt: 'LUMIÈRE Architectural Studio Interior, Coimbatore',
  },
  finalCta: {
    poster: atmosphereImg,
    video: '/videos/lumiere-cta.mp4',
    alt: 'LUMIÈRE Haute Beauty Consultation',
  },
  services: {
    hair: hairImg,
    skin: facialImg,
    beauty: atmosphereImg,
    rituals: studioImg,
  },
  transformation: {
    before: transBeforeImg,
    after: transAfterImg,
  },
  gallery: [
    {
      id: 'g1',
      title: 'Espresso Balayage & Silk Precision',
      category: 'Couture Hair',
      image: hairImg,
      aspect: '3/4',
      span: 'col-span-12 md:col-span-7',
      offset: '',
    },
    {
      id: 'g2',
      title: 'Botanical Sculpting & Cryo Lift',
      category: 'Advanced Skin',
      image: facialImg,
      aspect: '4/3',
      span: 'col-span-12 md:col-span-5',
      offset: 'md:mt-16',
    },
    {
      id: 'g3',
      title: 'Architectural Solitude & Acoustic Travertine',
      category: 'The Space',
      image: studioImg,
      aspect: '16/9',
      span: 'col-span-12 md:col-span-8',
      offset: '',
    },
    {
      id: 'g4',
      title: 'Elixirs & Sensory Botanical Alchemy',
      category: 'Sensory Rituals',
      image: atmosphereImg,
      aspect: '1/1',
      span: 'col-span-12 md:col-span-4',
      offset: 'md:-mt-24',
    },
    {
      id: 'g5',
      title: 'Sculptural Editorial Silhouette',
      category: 'Haute Styling',
      image: hairImg,
      aspect: '3/4',
      span: 'col-span-12 md:col-span-6',
      offset: '',
    },
    {
      id: 'g6',
      title: 'The Signature Silk Press & Gloss Architecture',
      category: 'Editorial Finish',
      image: transAfterImg,
      aspect: '4/5',
      span: 'col-span-12 md:col-span-6',
      offset: 'md:mt-12',
    },
  ],
};
