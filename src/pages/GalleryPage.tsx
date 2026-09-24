import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { Transformation } from '../components/Transformation';
import { ASSETS } from '../data/assets';
import { X, Maximize2, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  aspect: string;
  artisan: string;
  technique: string;
  products: string;
  notes: string;
}

const GALLERY_WORKS: GalleryItem[] = [
  {
    id: 'gw-1',
    title: 'Espresso Balayage & Silk Precision',
    category: 'Hair Architecture',
    categorySlug: 'hair',
    image: ASSETS.services.hair,
    aspect: 'aspect-[3/4]',
    artisan: 'Élodie Ramachandran',
    technique: 'Freehand French Balayage, Root Shadowing, Glass Glaze',
    products: 'Oribe Gold Lust, Redken Shades EQ 09N + 08GI',
    notes: 'Calculated contrast tailored for deep brunette hair with natural golden olive undertones.',
  },
  {
    id: 'gw-2',
    title: 'Cellular Cryo-Sculpt & Lymphatic Glow',
    category: 'Cellular Skincare',
    categorySlug: 'skin',
    image: ASSETS.services.skin,
    aspect: 'aspect-[4/3]',
    artisan: 'Dr. Vanya Mehra',
    technique: 'Sub-Zero Cryo Probe, Intra-Oral Buccal Drainage, Oxygen Infusion',
    products: 'Biologique Recherche Masque Vivant + Serum VG Tensil',
    notes: 'Immediate jawline sharpening and de-puffing without down-time, creating radiant bare skin.',
  },
  {
    id: 'gw-3',
    title: 'Acoustic Travertine Pavilion',
    category: 'The Space',
    categorySlug: 'space',
    image: ASSETS.studio.poster,
    aspect: 'aspect-[16/9]',
    artisan: 'Studio Atelier Design',
    technique: 'Honed Volcanic Basalt, Daylight Calibration, Sound Dampening',
    products: 'Bespoke Custom Architectural Joinery',
    notes: 'Designed to deliver unbroken acoustic calm and total visual serenity in Coimbatore.',
  },
  {
    id: 'gw-4',
    title: 'Botanical Elixirs & Sensory Alchemy',
    category: 'Sensory Rituals',
    categorySlug: 'rituals',
    image: ASSETS.services.beauty,
    aspect: 'aspect-[1/1]',
    artisan: 'Arjun Devraj',
    technique: 'Japanese Head Spa Hydro-Halo, Scalp Micro-Infusion',
    products: 'Davines Naturaltech Renewing & Organic Cold-Pressed Oils',
    notes: 'Holistic scalp purification designed to clear stress points and stimulate follicle density.',
  },
  {
    id: 'gw-5',
    title: 'Architectural Bob & Feathered Fringe',
    category: 'Hair Architecture',
    categorySlug: 'hair',
    image: ASSETS.hero.poster,
    aspect: 'aspect-[3/4]',
    artisan: 'Élodie Ramachandran',
    technique: 'Dry Precision Shear Carving, Internal Weight Removal',
    products: 'Davines OI Oil, Oribe Dry Texturizing Spray',
    notes: 'A sculpted silhouette that flows naturally with head movement and retains weightless volume.',
  },
  {
    id: 'gw-6',
    title: 'The Signature Silk Press & Gloss Finish',
    category: 'Editorial Finish',
    categorySlug: 'finish',
    image: ASSETS.transformation.after,
    aspect: 'aspect-[4/5]',
    artisan: 'Arjun Devraj',
    technique: 'Caviar Keratin Infusion, Micro-Vapor Ceramic Smoothing',
    products: 'Milbon Supreme Gold Silk Sealer',
    notes: 'High-mirror reflectivity with complete thermal protection and zero frizz even in humidity.',
  },
  {
    id: 'gw-7',
    title: 'Hydra-Infused Luminous Dermis',
    category: 'Cellular Skincare',
    categorySlug: 'skin',
    image: ASSETS.services.skin,
    aspect: 'aspect-[3/4]',
    artisan: 'Dr. Vanya Mehra',
    technique: 'Hyperbaric Low-Molecular Hyaluronic Acid Osmosis',
    products: 'Intraceuticals Rejuvenate 3-Step Hyaluronic Layering',
    notes: 'Glass-skin hydration prepped for high-definition photography under studio strobe lighting.',
  },
  {
    id: 'gw-8',
    title: 'Daylight Calibrated Mirror Pavilion',
    category: 'The Space',
    categorySlug: 'space',
    image: ASSETS.studio.poster,
    aspect: 'aspect-[4/3]',
    artisan: 'LUMIÈRE Architecture',
    technique: '5000K Color-CRI 98 Luminaire Geometry',
    products: 'Architectural Glazing & Travertine Pillars',
    notes: 'Eliminates color distortion, so hair highlights appear identical indoors and outdoors.',
  },
];

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const navigate = useNavigate();

  const filterTabs = [
    { id: 'all', label: 'ALL WORKS' },
    { id: 'hair', label: 'HAIR ARCHITECTURE' },
    { id: 'skin', label: 'CELLULAR SKINCARE' },
    { id: 'space', label: 'THE SPACE' },
    { id: 'rituals', label: 'SENSORY RITUALS' },
    { id: 'finish', label: 'EDITORIAL FINISH' },
  ];

  const filteredItems = GALLERY_WORKS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.categorySlug === activeFilter;
  });

  const handleRequestLook = (item: GalleryItem) => {
    setActiveModalItem(null);
    navigate(`/book?service=${encodeURIComponent(item.title)}`);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1EC] selection:bg-[#C8A98A] selection:text-[#0D0D0D]">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Header Banner */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 border-b border-[rgba(244,241,236,0.1)] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-4">
            EDITORIAL PORTFOLIO · COIMBATORE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight mb-6">
            CURATED WORKS
          </h1>
          <p className="text-[#A9A39B] text-base md:text-lg font-light leading-relaxed max-w-2xl">
            A visual anthology of sculpted hair architecture, restorative dermal transformations,
            and the tranquil interior geometry of our Race Course studio.
          </p>

          {/* Filter tabs */}
          <div className="mt-12 flex flex-wrap gap-2 pt-8 border-t border-white/10">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-200 border ${
                  activeFilter === tab.id
                    ? 'border-[#C8A98A] bg-[#C8A98A] text-[#0D0D0D] font-semibold'
                    : 'border-white/10 text-[#A9A39B] hover:border-white/30 hover:text-[#F4F1EC]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Gallery Grid */}
      <section className="py-20 md:py-28 border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer bg-[#121212] border border-white/10 overflow-hidden flex flex-col"
                onClick={() => setActiveModalItem(item)}
              >
                <div className={`${item.aspect} w-full overflow-hidden relative bg-[#181818]`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 p-2.5 bg-[#0D0D0D]/80 backdrop-blur-sm text-[#F4F1EC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-[#0F0F0F]">
                  <div>
                    <span className="text-[9px] tracking-[0.28em] uppercase text-[#C8A98A] font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif-editorial text-2xl uppercase text-[#F4F1EC] group-hover:text-[#C8A98A] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A9A39B] font-light line-clamp-2">
                      {item.notes}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-[#A9A39B] tracking-wider uppercase">
                    <span>{item.artisan}</span>
                    <span className="text-[#C8A98A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      VIEW DETAILS <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Transformation Comparison Section */}
      <Transformation />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-[#141414] border border-white/20 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-[#0D0D0D]/80 text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {/* Image side */}
              <div className="lg:col-span-7 bg-[#0A0A0A] flex items-center justify-center overflow-hidden max-h-[50vh] lg:max-h-[90vh]">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover max-h-[90vh]"
                />
              </div>

              {/* Details side */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto bg-[#121212]">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] font-medium block mb-2">
                    {activeModalItem.category}
                  </span>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase text-[#F4F1EC] mb-4">
                    {activeModalItem.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A9A39B] font-light leading-relaxed mb-6">
                    {activeModalItem.notes}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#A9A39B]/70 block mb-1">
                        MASTER ARTISAN
                      </span>
                      <p className="text-[#F4F1EC] font-medium">{activeModalItem.artisan}</p>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#A9A39B]/70 block mb-1">
                        TECHNIQUE EXECUTED
                      </span>
                      <p className="text-[#F4F1EC] font-light">{activeModalItem.technique}</p>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#A9A39B]/70 block mb-1">
                        PRODUCTS & FORMULATION
                      </span>
                      <p className="text-[#F4F1EC] font-light">{activeModalItem.products}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <button
                    onClick={() => handleRequestLook(activeModalItem)}
                    className="w-full py-3.5 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#d5bba0] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>REQUEST THIS LOOK</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
};
