export interface ResidenceConfig {
  id: string;
  number: string;
  name: string;
  headline: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  outdoor: string;
  aspect: string;
  ceilingHeight: string;
  price: string;
  description: string;
  keyFeatures: string[];
  floorPlanKey: '1br' | '2br' | '3br' | 'penthouse';
}

export interface AmenityItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string;
  highlight: string;
  image?: string;
}

export interface LifestyleMoment {
  time: string;
  label: string;
  title: string;
  quote: string;
  description: string;
  image?: string;
}

export interface CityTransitItem {
  time: string;
  unit: string;
  destination: string;
  distance: string;
  route: string;
}

export interface GalleryItem {
  id: string;
  number: string;
  caption: string;
  category: string;
  aspect: string;
  image: string;
}
