import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { ASSETS } from '../data/assets';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { Clock, Tag, Sparkles, ChevronDown, Check, Search, ArrowRight } from 'lucide-react';

interface DetailedService {
  id: string;
  category: string;
  categoryTitle: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  steps: string[];
  recommendedFor: string;
  brand: string;
}

const DETAILED_SERVICES: DetailedService[] = [
  // 01 HAIR
  {
    id: 'hair-balayage',
    category: 'hair',
    categoryTitle: 'HAIR ARCHITECTURE',
    title: 'Dimensional Haute Balayage & Gloss Melting',
    subtitle: 'Freehand French Highlighting with Acidic Tone Sculpting',
    duration: '180 – 210 min',
    price: '₹9,500',
    description: 'Custom hand-painted luminescence adapted to facial bone structure and natural root depth. Finished with an organic amino-acid gloss seal for high-mirror reflectivity.',
    steps: ['Diagnostic tone analysis', 'Bond-protecting lightening', 'Custom dual-zone gloss formulation', 'Botanical moisture barrier lock'],
    recommendedFor: 'Guests seeking low-maintenance, organic depth with sunlit dimension.',
    brand: 'Oribe Gold Lust & Redken Shades EQ',
  },
  {
    id: 'hair-cut',
    category: 'hair',
    categoryTitle: 'HAIR ARCHITECTURE',
    title: 'Bespoke Editorial Cut & Texture Sculpt',
    subtitle: 'Dry and Wet Architectural Precision',
    duration: '75 min',
    price: '₹3,500',
    description: 'A structural silhouette tailored to movement, growth direction, and personal aesthetics. Includes a scalp invigorating cleanse and signature editorial blowout.',
    steps: ['Morphological face shape consultation', 'Aromatherapeutic head bath', 'Dry precision detailing', 'Aerated blow-dry styling'],
    recommendedFor: 'All hair textures seeking bespoke definition and effortless home styling.',
    brand: 'Davines OI & Oribe Serene Scalp',
  },
  {
    id: 'hair-silk',
    category: 'hair',
    categoryTitle: 'HAIR ARCHITECTURE',
    title: 'Japanese Caviar & Silk Smoothing Thermal Therapy',
    subtitle: 'Formaldehyde-Free Molecular Hair Alignment',
    duration: '180 min',
    price: '₹12,500',
    description: 'Reconstructs damaged keratin chains with caviar extract and silk proteins. Eliminates frizz while retaining natural volume and dynamic movement.',
    steps: ['Clarifying follicle detox', 'Nano-caviar peptide infusion', 'Sub-infrared plate seal', 'Cold botanical gloss rinse'],
    recommendedFor: 'Coarse, frizzy, or humidity-sensitive hair seeking glass-like fluidity.',
    brand: 'Milbon Gold Line & Davines Nourishing',
  },
  {
    id: 'hair-gloss',
    category: 'hair',
    categoryTitle: 'HAIR ARCHITECTURE',
    title: 'Botanical Color Melting & Mirror Gloss',
    subtitle: 'Zero-Ammonia Tone Refresh & High-Shine Glaze',
    duration: '60 min',
    price: '₹4,200',
    description: 'Refreshes existing undertones, neutralizes unwanted warmth, and coats every strand in botanical lipid gloss with zero lift or hair damage.',
    steps: ['Diagnostic undertone match', 'Scalp protectant veil', 'Gloss bath application', 'Cold water cuticle seal'],
    recommendedFor: 'In-between balayage appointments or for natural hair craving diamond shine.',
    brand: 'Wella Illumina & Davines Alchemic',
  },

  // 02 SKIN
  {
    id: 'skin-cryo',
    category: 'skin',
    categoryTitle: 'CELLULAR SKINCARE',
    title: 'Cryo-Sculpt & Microcurrent Facial Lift',
    subtitle: 'Sub-Zero Thermal Shock & Dermal Muscle Contouring',
    duration: '90 min',
    price: '₹7,800',
    description: 'Cold-temperature shock triggers immediate vasoconstriction and micro-circulation, followed by microcurrent muscular toning for an architectural jawline and cheekbone lift.',
    steps: ['Double enzymatic milk cleanse', 'Sub-zero cryo probe sculpt', 'Microcurrent meridian lift', 'Cellular collagen hydro-gel sheet'],
    recommendedFor: 'Puffiness, loss of contour, and dull stressed complexion.',
    brand: 'Biologique Recherche & Intraceuticals',
  },
  {
    id: 'skin-hydra',
    category: 'skin',
    categoryTitle: 'CELLULAR SKINCARE',
    title: 'LUMIÈRE Signature Cellular Hydra-Infusion',
    subtitle: 'Multi-Depth Hyaluronic Osmosis & Hyperbaric Oxygen',
    duration: '75 min',
    price: '₹6,200',
    description: 'Delivers pressurized medical-grade oxygen and low-molecular hyaluronic acid deep into the dermis. Plumps dehydrated skin cells from within for glass-skin radiance.',
    steps: ['Ultrasonic dermal exfoliation', 'Hyperbaric oxygen peptide jet', 'Aromatic lymphatic drainage', 'Barrier repair lipid barrier'],
    recommendedFor: 'Dehydrated, fatigued skin or pre-event red carpet radiance.',
    brand: 'Intraceuticals Rejuvenate & Valmont',
  },
  {
    id: 'skin-buccal',
    category: 'skin',
    categoryTitle: 'CELLULAR SKINCARE',
    title: 'Intra-Oral Buccal & Fascial Sculpting Therapy',
    subtitle: 'Deep Muscle Release & Architectural Cheekbone Sculpting',
    duration: '90 min',
    price: '₹8,500',
    description: 'A specialized French intra-oral massage targeting deep facial ligaments. Releases jaw clenching (TMJ tension), lifts the nasolabial folds, and restores facial symmetry.',
    steps: ['Neck and clavicle lymphatic opening', 'Intra-oral myofascial sculpt', 'Cooling jade stone soothing', 'Antioxidant peptide veil'],
    recommendedFor: 'Facial tension, teeth grinders, and natural non-surgical face lifting.',
    brand: 'Yakov Gershkovich Technique & Biologique Recherche',
  },
  {
    id: 'skin-peel',
    category: 'skin',
    categoryTitle: 'CELLULAR SKINCARE',
    title: 'Enzymatic Resurfacing & 24K Gold Collagen Infusion',
    subtitle: 'Gentle Botanical Keratolytic Peel with Pure Gold Foil',
    duration: '80 min',
    price: '₹7,200',
    description: 'Papaya and pumpkin enzymes dissolve dead keratinocytes without irritation, followed by 24-karat gold leaf sheets driven into the dermis for cellular revitalization.',
    steps: ['Botanical enzyme warm compress', 'Micro-peel exfoliation', '24K gold foil application', 'Ultrasound cellular infusion'],
    recommendedFor: 'Hyperpigmentation, textural unevenness, and fine dry lines.',
    brand: 'Biologique Recherche Lotion P50 & 24K Artisan Gold',
  },

  // 03 BEAUTY
  {
    id: 'beauty-makeup',
    category: 'beauty',
    categoryTitle: 'BEAUTY & ARTISTRY',
    title: 'Haute Red Carpet & Editorial Gala Makeup',
    subtitle: 'Skin-First Architectural Enhancements',
    duration: '90 min',
    price: '₹5,500',
    description: 'Editorial complexion prep, seamless airbrush dimension, individual flare lash placement, and customized lip couture that stays luminous through midnight.',
    steps: ['Custom skin prep & cryo de-puff', 'Micro-coverage base formulation', 'Bone-structure light sculpting', 'Individual silk lash design'],
    recommendedFor: 'Galas, editorial portraits, and high-fashion soirees.',
    brand: 'Pat McGrath Labs, Tom Ford & Charlotte Tilbury',
  },
  {
    id: 'beauty-brows',
    category: 'beauty',
    categoryTitle: 'BEAUTY & ARTISTRY',
    title: 'High-Definition Brow Micro-Lamination & Tint',
    subtitle: 'Keratin Brow Architecture & Customized Hue',
    duration: '60 min',
    price: '₹2,800',
    description: 'Re-aligns the natural brow growth pattern for a full, feathered runway look. Includes precision tweezing and custom vegetable-based tinting.',
    steps: ['Brow symmetry mapping', 'Keratin directional lamination', 'Custom pigment formulation', 'Nourishing botanical oil set'],
    recommendedFor: 'Thin, unruly, or sparse brows seeking symmetry and fullness.',
    brand: 'InLei Italy & Thuya Professional',
  },
  {
    id: 'beauty-lash',
    category: 'beauty',
    categoryTitle: 'BEAUTY & ARTISTRY',
    title: 'Keratin Lash Infusion & Midnight Tint',
    subtitle: 'Zero-Damage Natural Lash Elevation',
    duration: '60 min',
    price: '₹3,200',
    description: 'Gently lifts your natural lashes from root to tip, infusing organic keratin peptides that strengthen lash fibers while tinting them in deep midnight black.',
    steps: ['Silicone shield contouring', 'Keratin lifting serum', 'Intense black gloss tint', 'Collagen lash mask'],
    recommendedFor: 'Guests wanting an awake, lifted gaze without extensions.',
    brand: 'Yumi Lashes France',
  },
  {
    id: 'beauty-hands',
    category: 'beauty',
    categoryTitle: 'BEAUTY & ARTISTRY',
    title: 'Couture Hand & Foot Sensory Ceremony',
    subtitle: 'Volcanic Scrub, Warm Paraffin & Precision Buff',
    duration: '75 min',
    price: '₹3,400',
    description: 'Rejuvenates tired hands and feet with warm botanical soaks, volcanic basalt exfoliation, deep acupressure massage, and clean breathable polish.',
    steps: ['Rosewater & Epsom salt immersion', 'Volcanic scrub', 'Acupressure foot and calf massage', 'Non-toxic high-gloss finish'],
    recommendedFor: 'Complete nail hygiene and extremity tension relief.',
    brand: 'Kure Bazaar Paris & Margaret Dabbs London',
  },

  // 04 RITUALS
  {
    id: 'rituals-headspa',
    category: 'rituals',
    categoryTitle: 'SCALP & SENSORY WELLNESS',
    title: 'Japanese Hydro-Spa Scalp Purifying Ceremony',
    subtitle: 'Circulation Cascade & Microscopic Follicle Reset',
    duration: '90 min',
    price: '₹5,800',
    description: 'A transformative water-halo ceremony. Continuous circulating herbal warm water cascades over the scalp while micro-bubbles purge sebum and buildup from follicle roots.',
    steps: ['Micro-camera scalp diagnostic', 'Exfoliating botanical clay scrub', 'Waterfall hydro-halo bath', 'High-frequency scalp stimulation'],
    recommendedFor: 'Scalp irritation, hair thinning, stress, or digital eye strain.',
    brand: 'Takara Belmont Spa Mists & Davines Naturaltech',
  },
  {
    id: 'rituals-obsidian',
    category: 'rituals',
    categoryTitle: 'SCALP & SENSORY WELLNESS',
    title: 'Warm Obsidian Stone Neck & Shoulder Release',
    subtitle: 'Volcanic Heat & Herbal Tension Dissolving',
    duration: '60 min',
    price: '₹4,200',
    description: 'Combines heated volcanic obsidian stones with cold-pressed sesame and brahmi oils to dissolve neck, shoulder, and cranial tension accumulated from screen work.',
    steps: ['Warm essential oil compress', 'Obsidian glide along trapezius', 'Scalp meridian acupressure', 'Herbal steam towel wrap'],
    recommendedFor: 'Chronic desk posture, tension headaches, and deep stress.',
    brand: 'Bespoke Nilgiri Herbals & Kama Ayurveda Pure Botanicals',
  },
  {
    id: 'rituals-frequency',
    category: 'rituals',
    categoryTitle: 'SCALP & SENSORY WELLNESS',
    title: 'Acoustic Sound Frequency Scalp Rebalance',
    subtitle: 'Tibetan Singing Bowls & Cranial Rhythms',
    duration: '75 min',
    price: '₹4,800',
    description: 'Integrates 432Hz sound frequencies and vibrational bowls placed at the crown of the head with restorative scalp oils to bring the nervous system into deep theta state.',
    steps: ['432Hz acoustic alignment', 'Warm jojoba scalp infusion', 'Vibrational bowl conduction', 'Restorative cold herbal mist'],
    recommendedFor: 'Nervous system resets, insomnia, and sensory overload.',
    brand: 'Singing Bowl Atelier & Organic Cold-Pressed Oils',
  },
];

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedInitialService, setSelectedInitialService] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'ALL DISCIPLINES' },
    { id: 'hair', label: '01 HAIR ARCHITECTURE' },
    { id: 'skin', label: '02 CELLULAR SKINCARE' },
    { id: 'beauty', label: '03 BEAUTY & ARTISTRY' },
    { id: 'rituals', label: '04 SENSORY RITUALS' },
  ];

  const filteredServices = useMemo(() => {
    return DETAILED_SERVICES.filter((srv) => {
      const matchesCategory = activeCategory === 'all' || srv.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleBookService = (service: DetailedService) => {
    navigate(`/book?category=${service.category}&service=${encodeURIComponent(service.title)}`);
  };

  const faqs = [
    {
      q: 'Do I need a prior consultation before high-lift color or balayage?',
      a: 'Yes, for significant color transformations or sensitive scalps, we require a complimentary 15-minute diagnostic consultation and patch test at least 48 hours in advance to protect your hair fiber integrity.',
    },
    {
      q: 'What is your cancellation and rescheduling etiquette?',
      a: 'Because our master artisans dedicate up to three uninterrupted hours per appointment, we request at least 24 hours advance notice for cancellations or rescheduling.',
    },
    {
      q: 'Can I request a silent appointment?',
      a: 'Absolutely. We understand that our studio is your decompression sanctuary. When booking, select the "Silent Appointment" preference and your artisan will conduct only essential diagnostic checks.',
    },
    {
      q: 'Are your formulations cruelty-free and clean?',
      a: 'Every product used in LUMIÈRE—from Biologique Recherche and Oribe to Davines—is strictly cruelty-free, sustainable, and free of harmful sulfates, parabens, and synthetic phthalates.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1EC] selection:bg-[#C8A98A] selection:text-[#0D0D0D]">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Header Banner */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 border-b border-[rgba(244,241,236,0.1)] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-4">
            CURATED ATELIER MENU · COIMBATORE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight mb-6">
            THE EDITORIAL DISCIPLINES
          </h1>
          <p className="text-[#A9A39B] text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Each discipline is executed with architectural consideration and botanical science.
            Prices reflect master artisan time, single-source formulations, and private suite tranquility.
          </p>

          {/* Search & Category Filter */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/10">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-200 border ${
                    activeCategory === cat.id
                      ? 'border-[#C8A98A] bg-[#C8A98A] text-[#0D0D0D] font-semibold'
                      : 'border-white/10 text-[#A9A39B] hover:border-white/30 hover:text-[#F4F1EC]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search treatments or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#141414] border border-white/10 py-2.5 pl-9 pr-4 text-xs text-[#F4F1EC] placeholder-[#A9A39B]/60 focus:outline-none focus:border-[#C8A98A] transition-colors"
              />
              <Search size={14} className="absolute left-3 top-3 text-[#A9A39B]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 md:py-28 border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredServices.length === 0 ? (
            <div className="py-20 text-center text-[#A9A39B]">
              <p className="text-lg font-light mb-4">No treatments matched your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs uppercase tracking-widest text-[#C8A98A] underline underline-offset-4"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="p-8 md:p-10 bg-[#121212] border border-[rgba(244,241,236,0.12)] hover:border-[#C8A98A]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="text-[10px] tracking-[0.28em] uppercase text-[#C8A98A] font-semibold">
                        {service.categoryTitle}
                      </span>
                      <div className="text-right">
                        <span className="font-serif-editorial text-2xl text-[#F4F1EC] font-light block">
                          {service.price}
                        </span>
                        <span className="text-[10px] tracking-wider text-[#A9A39B] flex items-center justify-end gap-1">
                          <Clock size={11} />
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif-editorial text-2xl md:text-3xl uppercase text-[#F4F1EC] mb-1 group-hover:text-[#C8A98A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#C8A98A]/80 italic mb-4">
                      {service.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#A9A39B] font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Steps Protocol */}
                    <div className="mb-6 pt-5 border-t border-white/5">
                      <span className="text-[10px] tracking-widest uppercase text-[#A9A39B]/70 block mb-2 font-medium">
                        TREATMENT PROTOCOL
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#F4F1EC]/90">
                        {service.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#C8A98A] rounded-full shrink-0" />
                            <span className="truncate">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brand used */}
                    <div className="flex items-center justify-between text-[11px] text-[#A9A39B] bg-[#0A0A0A] p-3 border border-white/5 mb-6">
                      <span className="tracking-wider uppercase text-[10px] text-[#A9A39B]/80">FORMULATION</span>
                      <span className="text-[#F4F1EC] font-medium">{service.brand}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-[#A9A39B] italic max-w-[200px] truncate">
                      {service.recommendedFor}
                    </span>

                    <button
                      onClick={() => handleBookService(service)}
                      className="px-5 py-2.5 bg-[#F4F1EC] text-[#0D0D0D] text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-[#C8A98A] transition-colors flex items-center gap-2"
                    >
                      <span>RESERVE</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Consultations & Etiquette Section */}
      <section className="py-24 bg-[#0A0A0A] border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] uppercase text-[#C8A98A] block mb-2">
              CLIENT PROTOCOL
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#F4F1EC]">
              CONSULTATIONS & ETIQUETTE
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 bg-[#0D0D0D] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-[#C8A98A] transition-colors"
                >
                  <span className="font-serif-editorial text-lg md:text-xl uppercase text-[#F4F1EC]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#C8A98A] shrink-0 transition-transform duration-300 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-[#A9A39B] font-light leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Booking Callout */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#F4F1EC] mb-6">
            BEGIN YOUR EXPERIENCE
          </h2>
          <p className="text-[#A9A39B] text-sm sm:text-base font-light mb-10 max-w-md mx-auto">
            Book online with our bespoke concierge or speak directly with our Coimbatore atelier reception.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="px-8 py-4 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.24em] uppercase hover:bg-[#d5bba0] transition-colors w-full sm:w-auto"
            >
              BOOK ONLINE CONCIERGE
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-[#F4F1EC] text-xs font-semibold tracking-[0.24em] uppercase hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors w-full sm:w-auto"
            >
              WHATSAPP CONCIERGE
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedInitialService}
      />
    </div>
  );
};
