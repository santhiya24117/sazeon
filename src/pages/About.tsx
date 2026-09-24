import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { ASSETS } from '../data/assets';
import { Sparkles, Shield, Compass, Feather, ArrowRight, Check } from 'lucide-react';

export const About: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const pillars = [
    {
      num: '01',
      title: 'Radical Individuality',
      desc: 'We reject generic trend-following. Every cut, tint, and dermal treatment is calculated against your unique bone structure, skin undertone, and personal rhythm.',
    },
    {
      num: '02',
      title: 'Acoustic Sanctuary',
      desc: 'No cacophony, blaring commercial music, or chaotic floor traffic. Honed volcanic travertine surfaces and private pavilions ensure total auditory peace.',
    },
    {
      num: '03',
      title: 'Pure Formulation Integrity',
      desc: 'We curate only world-class, biologically active botanical lines: Biologique Recherche, Oribe Haute Luxury, and Davines Sustainable Alchemy.',
    },
    {
      num: '04',
      title: 'Unhurried Craftsmanship',
      desc: 'We do not double-book. Your artisan’s hands and focus belong entirely to you, beginning with a complimentary 15-minute diagnostic tea ritual.',
    },
  ];

  const artisans = [
    {
      name: 'ÉLODIE RAMACHANDRAN',
      role: 'Creative Director & Master Colorist',
      experience: '14 Years · Paris & London Academies',
      specialty: 'Micro-Fine Dimensional Balayage, Complexion Harmonizing & French Soft Silhouette',
      image: ASSETS.hero.poster,
    },
    {
      name: 'DR. VANYA MEHRA',
      role: 'Head Dermal Aesthetician',
      experience: '11 Years · Zurich & Milan Dermatological Institutes',
      specialty: 'Cellular Hydro-Infusion, Buccal Sculpting, Enzymatic Barrier Therapy',
      image: ASSETS.services.skin,
    },
    {
      name: 'ARJUN DEVRAJ',
      role: 'Master Texture Architect',
      experience: '9 Years · Tokyo & Mumbai Editorial Studios',
      specialty: 'Precision Japanese Silk Smoothing, Curly Hair Texture Geometry, Bespoke Bob Architecture',
      image: ASSETS.services.hair,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1EC] selection:bg-[#C8A98A] selection:text-[#0D0D0D]">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 border-b border-[rgba(244,241,236,0.1)] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src={ASSETS.studio.poster}
            alt="Studio Interior Architecture"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-4">
              THE LUMIÈRE PHILOSOPHY · EST. 2026
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase leading-[1] tracking-tight mb-8">
              BEAUTY AS LIVING
              <br />
              <span className="italic font-normal text-[#C8A98A]">ARCHITECTURE.</span>
            </h1>
            <p className="text-[#A9A39B] text-base md:text-xl font-light leading-relaxed max-w-2xl">
              LUMIÈRE was founded in Coimbatore with a singular conviction: luxury is not excess,
              but intention. We created a sanctuary where time decelerates, individuality is revered,
              and craftsmanship reigns supreme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story & Narrative */}
      <section className="py-24 md:py-32 border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden border border-white/10 relative group">
                <img
                  src={ASSETS.studio.poster}
                  alt="Architectural salon interior in Coimbatore"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0D0D0D]/85 backdrop-blur-sm border border-white/10 text-xs">
                  <p className="text-[#C8A98A] tracking-widest uppercase font-medium">Race Course Atelier</p>
                  <p className="text-[#A9A39B] text-[11px] mt-0.5">Designed with acoustic basalt and daylight calibration.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[#C8A98A] block mb-4">
                THE FOUNDING VISION
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#F4F1EC] mb-6">
                BORN FROM QUIET LUXURY & BOTANICAL SCIENCE
              </h2>
              <div className="space-y-5 text-sm sm:text-base text-[#A9A39B] font-light leading-relaxed">
                <p>
                  For years, salon experiences have been defined by hurried turnaround, sterile smells,
                  and loud, mirrored corridors. At LUMIÈRE, we dismantled the convention entirely.
                </p>
                <p>
                  Situated beneath the canopy of Race Course Road in Coimbatore, our studio merges the
                  exacting precision of Parisian haute coiffure with the restorative serenity of South
                  Indian wellness heritage. We believe that your hair, skin, and presence deserve
                  architectural consideration — where proportions are analyzed, textures are nurtured,
                  and your authentic spirit takes center stage.
                </p>
                <p>
                  Every guest is welcomed into an acoustic pavilion where conversations happen in
                  whispers, drinks are served from our bespoke Nilgiri tea and vintage champagne bar,
                  and every treatment is tailored to the millimetre.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <span className="font-serif-editorial text-3xl sm:text-4xl text-[#C8A98A] block">2026</span>
                  <span className="text-[11px] tracking-widest text-[#A9A39B] uppercase">Founded in Coimbatore</span>
                </div>
                <div>
                  <span className="font-serif-editorial text-3xl sm:text-4xl text-[#C8A98A] block">4</span>
                  <span className="text-[11px] tracking-widest text-[#A9A39B] uppercase">Private Pavilions</span>
                </div>
                <div>
                  <span className="font-serif-editorial text-3xl sm:text-4xl text-[#C8A98A] block">100%</span>
                  <span className="text-[11px] tracking-widest text-[#A9A39B] uppercase">Bespoke Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Core Pillars */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-xs tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-3">
              OUR MANIFESTO
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#F4F1EC]">
              THE PRINCIPLES THAT GOVERN US
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 bg-[#0D0D0D] border border-[rgba(244,241,236,0.12)] hover:border-[#C8A98A]/50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <span className="font-serif-editorial text-3xl text-[#C8A98A]/60 block mb-6 group-hover:text-[#C8A98A] transition-colors">
                    {pillar.num}
                  </span>
                  <h3 className="font-serif-editorial text-2xl uppercase text-[#F4F1EC] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A9A39B] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Master Artisans */}
      <section className="py-24 md:py-32 border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#C8A98A] block mb-2">
                THE TALENT
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#F4F1EC]">
                MASTER ARTISANS
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-xs text-[#A9A39B] max-w-xs uppercase tracking-wider">
              Trained at global fashion capitals, united under the LUMIÈRE aesthetic doctrine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {artisans.map((artisan) => (
              <div key={artisan.name} className="flex flex-col group">
                <div className="aspect-[3/4] overflow-hidden border border-white/10 bg-[#141414] mb-6">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A98A] font-semibold mb-1">
                  {artisan.role}
                </span>
                <h3 className="font-serif-editorial text-2xl uppercase text-[#F4F1EC] mb-1">
                  {artisan.name}
                </h3>
                <p className="text-[11px] text-[#A9A39B]/70 tracking-widest uppercase mb-3">
                  {artisan.experience}
                </p>
                <p className="text-xs text-[#A9A39B] font-light leading-relaxed">
                  {artisan.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Amenities */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#C8A98A] block mb-3">
                THE SANCTUARY
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#F4F1EC] mb-6">
                CONSIDERED AMENITIES FOR COMPLETE TRANQUILITY
              </h2>
              <p className="text-sm text-[#A9A39B] font-light leading-relaxed mb-8">
                Every detail of our studio has been scrutinized to respect your senses and elevate your state of mind.
              </p>

              <div className="space-y-4 text-xs tracking-wider">
                <div className="flex items-start gap-3 p-4 bg-[#0D0D0D] border border-white/5">
                  <Check size={16} className="text-[#C8A98A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F4F1EC] font-semibold block uppercase mb-0.5">Acoustic Travertine Pavilions</span>
                    <span className="text-[#A9A39B]">Sound-dampened surfaces ensure total conversational privacy and zero noise fatigue.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#0D0D0D] border border-white/5">
                  <Check size={16} className="text-[#C8A98A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F4F1EC] font-semibold block uppercase mb-0.5">5000K Daylight Calibration</span>
                    <span className="text-[#A9A39B]">Lighting that mirrors direct morning sunlight, avoiding misleading warm salon bulbs.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#0D0D0D] border border-white/5">
                  <Check size={16} className="text-[#C8A98A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F4F1EC] font-semibold block uppercase mb-0.5">Bespoke Nilgiri Beverage Bar</span>
                    <span className="text-[#A9A39B]">Complimentary single-origin white tea, freshly pressed botanicals, and vintage champagne.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#0D0D0D] border border-white/5">
                  <Check size={16} className="text-[#C8A98A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F4F1EC] font-semibold block uppercase mb-0.5">Private Dressing Chamber</span>
                    <span className="text-[#A9A39B]">Dedicated suite with private wardrobe, refreshment storage, and ensuite wash basin.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img
                  src={ASSETS.experience.poster}
                  alt="Lumiere salon atmospheric styling"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.35em] uppercase text-[#C8A98A] block mb-3">
            EXPERIENCE LUMIÈRE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#F4F1EC] mb-6">
            YOUR BESPOKE JOURNEY AWAITS
          </h2>
          <p className="text-[#A9A39B] text-sm sm:text-base font-light mb-10 max-w-md mx-auto">
            Reserve a diagnostic consultation with our master artisans at our Race Course atelier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="px-8 py-4 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.24em] uppercase hover:bg-[#d5bba0] transition-colors w-full sm:w-auto"
            >
              RESERVE AN APPOINTMENT
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-[#F4F1EC] text-xs font-semibold tracking-[0.24em] uppercase hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors w-full sm:w-auto"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
};
