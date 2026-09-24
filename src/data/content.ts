import heroImg from '../assets/images/hero_exterior_dusk_1790257190530.jpg';
import residenceImg from '../assets/images/residence_living_light_1790257210212.jpg';
import facadeImg from '../assets/images/architecture_stone_facade_1790257223410.jpg';
import courtyardImg from '../assets/images/botanical_courtyard_night_1790257242125.jpg';
import conceptImg from '../assets/images/architecture_concept_render_1790257253305.jpg';

// Lifestyle Choreography of a Day Images
import lifestyleMorningImg from '../assets/images/lifestyle_morning_dawn_1790258181267.jpg';
import lifestyleMiddayLightImg from '../assets/images/lifestyle_midday_light_1790258193023.jpg';
import lifestyleLivingVerandaImg from '../assets/images/lifestyle_living_veranda_1790258204733.jpg';
import lifestyleCityNightImg from '../assets/images/lifestyle_city_night_1790258216910.jpg';

// Dedicated Amenity Images
import amenityLobbyImg from '../assets/images/amenity_private_lobby_1790258232983.jpg';
import amenityFitnessImg from '../assets/images/amenity_fitness_studio_1790258247875.jpg';
import amenityRooftopImg from '../assets/images/amenity_rooftop_lounge_1790258262847.jpg';
import amenityLoungeImg from '../assets/images/amenity_residents_lounge_1790258275194.jpg';
import amenityParkingImg from '../assets/images/amenity_subterranean_ev_parking_1790258287153.jpg';

import { ResidenceConfig, AmenityItem, LifestyleMoment, CityTransitItem, GalleryItem } from '../types.ts';

export const ASSETS = {
  hero: heroImg,
  residence: residenceImg,
  facade: facadeImg,
  courtyard: courtyardImg,
  concept: conceptImg,
  // Lifestyle
  lifestyleMorning: lifestyleMorningImg,
  lifestyleMiddayLight: lifestyleMiddayLightImg,
  lifestyleLivingVeranda: lifestyleLivingVerandaImg,
  lifestyleCityNight: lifestyleCityNightImg,
  // Amenities
  amenityLobby: amenityLobbyImg,
  amenityFitness: amenityFitnessImg,
  amenityRooftop: amenityRooftopImg,
  amenityLounge: amenityLoungeImg,
  amenityParking: amenityParkingImg,
};

export const RESIDENCE_CONFIGS: ResidenceConfig[] = [
  {
    id: 'residence-01',
    number: '01',
    name: 'ONE BEDROOM',
    headline: 'THE GARDEN SUITE',
    area: '1,120 SQ. FT.',
    bedrooms: '01',
    bathrooms: '01',
    outdoor: 'EAST VERANDA',
    aspect: 'EAST / GARDEN FACING',
    ceilingHeight: '3.4 METERS',
    price: 'FROM ₹88 L*',
    description: 'An expansive open-plan suite opening directly onto a private botanical veranda. Intimate living proportions unified by smoked timber, basalt thresholds, and morning sunlight.',
    keyFeatures: ['Private East-facing veranda', 'Basalt stone bath pavilion', 'Integrated timber joinery', 'Floor-to-ceiling acoustic glass'],
    floorPlanKey: '1br',
  },
  {
    id: 'residence-02',
    number: '02',
    name: 'TWO BEDROOM',
    headline: 'THE COURTYARD HOME',
    area: '1,540 SQ. FT.',
    bedrooms: '02',
    bathrooms: '02',
    outdoor: 'INTERNAL PATIO',
    aspect: 'NORTH-EAST / INTERNAL COURTYARD',
    ceilingHeight: '3.6 METERS',
    price: 'FROM ₹1.08 CR*',
    description: 'Centred around a secluded light-well and reflection court, creating two private wings buffered by verdant greenery and uninterrupted natural cross-ventilation.',
    keyFeatures: ['Central sky-lit internal court', 'Dual ensuite bedroom suites', 'Concealed preparatory pantry', 'Fluted granite focal fireplace'],
    floorPlanKey: '2br',
  },
  {
    id: 'residence-03',
    number: '03',
    name: 'THREE BEDROOM',
    headline: 'THE PAVILION RESIDENCE',
    area: '1,860 SQ. FT.',
    bedrooms: '03',
    bathrooms: '03',
    outdoor: 'DUAL ASPECT TERRACE',
    aspect: 'DUAL ASPECT / NORTH-SOUTH',
    ceilingHeight: '3.8 METERS',
    price: 'FROM ₹1.24 CR*',
    description: 'A grand architectural home defined by sweeping dual-aspect apertures. Deep cantilevered overhangs shield the living pavilion from direct heat while welcoming gentle coastal breezes.',
    keyFeatures: ['32-foot continuous glass frontage', 'Private arrival vestibule', 'Deep cantilevered shade terraces', 'Butler gallery and wine cellar'],
    floorPlanKey: '3br',
  },
  {
    id: 'residence-04',
    number: '04',
    name: 'PENTHOUSE',
    headline: 'THE CROWN RESIDENCE',
    area: '3,420 SQ. FT.',
    bedrooms: '04',
    bathrooms: '04.5',
    outdoor: 'SKY GARDEN & LAP POOL',
    aspect: '360° PANORAMIC HORIZON',
    ceilingHeight: '4.2 METERS',
    price: 'FROM ₹2.65 CR*',
    description: 'Occupying the uppermost tier, The Crown Residence is an architectural sanctuary with an elevated private lap pool, lush indigenous sky garden, and uninterrupted horizon views over Chennai.',
    keyFeatures: ['Private 12-meter horizon pool', 'Dedicated direct elevator access', 'Sub-tropical rooftop garden pavilion', 'Master retreat with dual outdoor shower'],
    floorPlanKey: 'penthouse',
  },
];

export const ARCHITECTURE_DETAILS = [
  {
    number: '01',
    title: 'NATURAL STONE',
    subtitle: 'TACTILE MONOLITHIC MASONS',
    description: 'Hand-selected black basalt and textured granite sourced from regional quarries, anchoring the lower elevations in deep geologic weight and thermal insulation.',
    image: facadeImg,
    spec: 'Honel-dressed basalt · Thermal inertia massing',
  },
  {
    number: '02',
    title: 'FLOOR-TO-CEILING GLASS',
    subtitle: 'SEAMLESS TRANSPARENCY',
    description: 'Double-glazed acoustic low-emissivity glass panels reaching up to 4.2 meters, framing framed botanical vignettes while mitigating solar gain by 74%.',
    image: residenceImg,
    spec: 'Acoustic lamination · Low-E solar shield coating',
  },
  {
    number: '03',
    title: 'LANDSCAPED COURTYARDS',
    subtitle: 'NIGHT GARDEN BIOPHILIA',
    description: 'Sunken internal courts layered with indigenous Tamil flora, frangipani groves, and shallow dark reflection pools that naturally cool ambient air.',
    image: courtyardImg,
    spec: 'Shallow mirror water elements · Native Tamil flora',
  },
  {
    number: '04',
    title: 'PRIVATE TERRACES',
    subtitle: 'EXTENDED URBAN SANCTUARIES',
    description: 'Deep architectural cantilevers provide year-round outdoor sanctuary from monsoon showers and equatorial sun, connecting interiors directly to open sky.',
    image: heroImg,
    spec: 'Deep overhang shading · Integrated bronze planter wells',
  },
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    number: '01',
    title: 'PRIVATE LOBBY',
    subtitle: 'THE ARRIVAL SEQUENCE',
    description: 'A quiet double-height entrance pavilion clad in cleft-faced basalt, featuring 24/7 dedicated concierge assistance and discrete parcel staging vaults.',
    specs: 'Double-height volume · Basalt stone portal · Concierge curation',
    highlight: 'Acoustic linen wall treatments that silence the city within three paces.',
    image: amenityLobbyImg,
  },
  {
    number: '02',
    title: 'FITNESS STUDIO',
    subtitle: 'HOLISTIC WELLNESS',
    description: 'Fully equipped movement studio with Technogym Artis series apparatus, dedicated yoga courtyard pavilion, and private steam sanctuary.',
    specs: 'Technogym biomechanics · Teak sprung flooring · Garden outlook',
    highlight: 'Floor-to-ceiling foliage screens for private meditation and training.',
    image: amenityFitnessImg,
  },
  {
    number: '03',
    title: 'LANDSCAPED COURTYARD',
    subtitle: 'BOTANICAL HEART',
    description: 'A 6,000 sq. ft. central microclimate garden filled with ancient frangipani, bird-attracting flora, and running stone stream channels.',
    specs: 'Native botanical ecosystem · Microclimate temperature buffering',
    highlight: 'Natural ambient cooling lowers courtyard temperature by up to 3°C.',
    image: courtyardImg,
  },
  {
    number: '04',
    title: 'ROOFTOP LOUNGE',
    subtitle: 'TWILIGHT HORIZONS',
    description: 'An open-air crown terrace complete with sunken copper fire tables, private chef catering station, and quiet telescopes for coastal stargazing.',
    specs: 'Sunken conversation pits · Wind-buffered glass perimeter',
    highlight: 'Spectacular sunset views toward the Bay of Bengal coastline.',
    image: amenityRooftopImg,
  },
  {
    number: '05',
    title: "RESIDENTS' LOUNGE",
    subtitle: 'INTELLECTUAL SANCTUARY',
    description: 'A private salon curated with design monographs, architectural archives, espresso bar, and acoustically isolated meeting chambers.',
    specs: 'Acoustically tuned study chambers · Library of art & design books',
    highlight: 'Reserved exclusively for residents and their invited guests.',
    image: amenityLoungeImg,
  },
  {
    number: '06',
    title: 'SECURE PARKING',
    subtitle: 'EFFORTLESS TRANSIT',
    description: 'Subterranean dual-level garage with extra-wide bays, dedicated 22kW bidirectional EV fast chargers, and high-speed private elevator access.',
    specs: '22kW EV charging at every bay · Automated license recognition',
    highlight: 'Direct contactless lift access straight to private residence vestibules.',
    image: amenityParkingImg,
  },
];

export const LIFESTYLE_MOMENTS: LifestyleMoment[] = [
  {
    time: '06:30',
    label: 'MORNING',
    title: 'DAWN SHADOWS',
    quote: 'The day begins before the city stirs.',
    description: 'Soft coastal dawn light filters across hone-finished basalt, warming linen draperies and private courtyard gardens.',
    image: lifestyleMorningImg,
  },
  {
    time: '10:00',
    label: 'COURTYARD',
    title: 'WATER & FOLIAGE',
    quote: 'A microclimate of calm.',
    description: 'Gentle breezes carry the subtle fragrance of frangipani blossoms across the still dark mirror pools.',
    image: courtyardImg,
  },
  {
    time: '14:15',
    label: 'LIGHT',
    title: 'ARCHITECTURAL PROPORTION',
    quote: 'Sculpted by geometric shade.',
    description: 'Deep cantilevered roof overhangs intercept the midday heat, keeping the living pavilion calm, airy, and naturally cooled.',
    image: lifestyleMiddayLightImg,
  },
  {
    time: '17:30',
    label: 'LIVING',
    title: 'INSIDE TURNS OUTWARD',
    quote: 'Dissolving spatial barriers.',
    description: 'Full-height glass panels slide seamlessly into pocket walls, uniting the timber salon with shaded outdoor verandas.',
    image: lifestyleLivingVerandaImg,
  },
  {
    time: '19:45',
    label: 'EVENING',
    title: 'NIGHT GARDEN AMBIENCE',
    quote: 'Warm amber in obsidian stillness.',
    description: 'Concealed copper uplighting illuminates tree barks and water edges, transforming the garden into a private nocturnal haven.',
    image: facadeImg,
  },
  {
    time: '22:00',
    label: 'CITY LIGHTS',
    title: 'TWILIGHT SKYLINE',
    quote: 'The city pulses softly in the distance.',
    description: 'High above Chennai, the rooftop pavilion frames the quiet coastal horizon under a canopy of southern stars.',
    image: lifestyleCityNightImg,
  },
];

export const CITY_TRANSIT: CityTransitItem[] = [
  {
    time: '08 MIN',
    unit: 'MINUTES',
    destination: 'METRO STATION',
    distance: '1.4 KM',
    route: 'Direct arterial access via Cathedral Road corridor',
  },
  {
    time: '12 MIN',
    unit: 'MINUTES',
    destination: 'INTERNATIONAL AIRPORT',
    distance: '8.2 KM',
    route: 'Signal-free expressway transit route',
  },
  {
    time: '05 MIN',
    unit: 'MINUTES',
    destination: 'INTERNATIONAL SCHOOL',
    distance: '1.1 KM',
    route: 'Quiet tree-lined residential avenue access',
  },
  {
    time: '07 MIN',
    unit: 'MINUTES',
    destination: 'TERTIARY CARE HOSPITAL',
    distance: '2.5 KM',
    route: 'Premier multispecialty medical center',
  },
  {
    time: '10 MIN',
    unit: 'MINUTES',
    destination: 'BUSINESS DISTRICT',
    distance: '3.6 KM',
    route: 'Leading financial centers and diplomatic missions',
  },
];

export const AVAILABILITY_ITEMS = [
  {
    code: 'RESIDENCE 01',
    type: 'ONE BEDROOM',
    area: '1,120 SQ. FT.',
    floor: 'LEVEL 02',
    status: 'AVAILABLE',
    statusColor: 'text-[#9B7657]',
    price: '₹88 L*',
    orientation: 'EAST VERANDA',
    configId: 'residence-01',
  },
  {
    code: 'RESIDENCE 02',
    type: 'TWO BEDROOM',
    area: '1,540 SQ. FT.',
    floor: 'LEVEL 03',
    status: 'AVAILABLE',
    statusColor: 'text-[#9B7657]',
    price: '₹1.08 CR*',
    orientation: 'INTERNAL COURTYARD',
    configId: 'residence-02',
  },
  {
    code: 'RESIDENCE 03',
    type: 'THREE BEDROOM',
    area: '1,860 SQ. FT.',
    floor: 'LEVEL 05',
    status: 'AVAILABLE',
    statusColor: 'text-[#9B7657]',
    price: '₹1.24 CR*',
    orientation: 'DUAL ASPECT TERRACE',
    configId: 'residence-03',
  },
  {
    code: 'RESIDENCE 04',
    type: 'PENTHOUSE',
    area: '3,420 SQ. FT.',
    floor: 'LEVEL 08',
    status: 'AVAILABLE',
    statusColor: 'text-[#9B7657]',
    price: '₹2.65 CR*',
    orientation: 'PRIVATE ROOFTOP & POOL',
    configId: 'residence-04',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'edit-1',
    number: '01 / 06',
    caption: 'THE COURTYARD',
    category: 'Water Mirror & Indigenous Flora',
    aspect: 'aspect-[16/10]',
    image: courtyardImg,
  },
  {
    id: 'edit-2',
    number: '02 / 06',
    caption: 'THE LIVING SEQUENCE',
    category: 'Monolithic Stone & Natural Light',
    aspect: 'aspect-[4/3]',
    image: residenceImg,
  },
  {
    id: 'edit-3',
    number: '03 / 06',
    caption: 'MATERIALITY',
    category: 'Basalt Texture & Bronze Finishes',
    aspect: 'aspect-[3/4]',
    image: facadeImg,
  },
  {
    id: 'edit-4',
    number: '04 / 06',
    caption: 'LIGHT AT DUSK',
    category: 'Twilight Façade Illumination',
    aspect: 'aspect-[16/9]',
    image: heroImg,
  },
  {
    id: 'edit-5',
    number: '05 / 06',
    caption: 'THE SKY PAVILION',
    category: 'Horizon Sanctuary',
    aspect: 'aspect-[4/3]',
    image: conceptImg,
  },
  {
    id: 'edit-6',
    number: '06 / 06',
    caption: 'QUIET STILLNESS',
    category: 'Nocturnal Garden Reflection',
    aspect: 'aspect-[16/9]',
    image: courtyardImg,
  },
];
