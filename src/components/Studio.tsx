import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../data/assets';
import { X, MapPin, Compass, Clock } from 'lucide-react';

interface StudioProps {
  onOpenBooking: () => void;
}

export const Studio: React.FC<StudioProps> = ({ onOpenBooking }) => {
  const [showTourModal, setShowTourModal] = useState(false);

  return (
    <section id="studio" className="relative py-28 md:py-40 bg-[#0D0D0D] overflow-hidden border-b border-[rgba(244,241,236,0.08)]">
      {/* Oversized background typography partially cropped for an editorial effect */}
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-12 select-none pointer-events-none font-serif-editorial text-[14vw] font-bold text-[#F4F1EC]/[0.03] uppercase leading-none whitespace-nowrap z-0"
      >
        COIMBATORE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Premium Salon Interior Image */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[rgba(244,241,236,0.15)] shadow-2xl group"
            >
              <img
                src={ASSETS.studio.poster}
                alt="LUMIÈRE Studio interior in Coimbatore"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs tracking-widest text-[#F4F1EC]">
                <div className="flex items-center gap-2 text-[#C8A98A]">
                  <MapPin size={14} />
                  <span>RACE COURSE BOULEVARD</span>
                </div>
                <span className="text-[#A9A39B] text-[10px]">ACOUSTIC TRAVERTINE ARCHITECTURE</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs tracking-[0.38em] uppercase text-[#C8A98A] font-medium block mb-4">
                THE SPACE
              </span>

              <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#F4F1EC] mb-6">
                THE STUDIO
              </h2>

              <blockquote className="font-serif-editorial text-2xl sm:text-3xl text-[#F4F1EC] italic font-light leading-snug mb-6 border-l-2 border-[#C8A98A] pl-5">
                “A space created for confidence, creativity and transformation.”
              </blockquote>

              <p className="text-sm md:text-base text-[#A9A39B] font-light leading-relaxed mb-8">
                “Designed with intention. Experienced with you.”
                <br /><br />
                Constructed with raw black travertine stone, brushed champagne metals, and sound-absorbing natural linens, the studio provides an intimate sanctuary removed from commercial haste.
              </p>

              {/* Badges / Sub-details */}
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-[rgba(244,241,236,0.12)] mb-8 text-xs tracking-wider">
                <div>
                  <span className="text-[#A9A39B] block text-[10px] uppercase mb-1">LOCATION</span>
                  <span className="text-[#F4F1EC] font-medium">COIMBATORE</span>
                </div>
                <div>
                  <span className="text-[#A9A39B] block text-[10px] uppercase mb-1">FOUNDATION</span>
                  <span className="text-[#F4F1EC] font-medium">EST. 2026</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowTourModal(true)}
                  className="px-8 py-4 border border-[#C8A98A] text-[#F4F1EC] text-xs font-semibold tracking-[0.24em] uppercase hover:bg-[#C8A98A] hover:text-[#0D0D0D] transition-all duration-300"
                >
                  EXPLORE THE STUDIO
                </button>
                <Link
                  to="/about"
                  className="px-6 py-4 border border-white/20 text-[#A9A39B] text-xs font-semibold tracking-[0.24em] uppercase hover:text-[#F4F1EC] hover:border-white/50 transition-all duration-300"
                >
                  OUR PHILOSOPHY
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Studio Architectural Tour Modal */}
      <AnimatePresence>
        {showTourModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-3xl w-full bg-[#121212] border border-[rgba(244,241,236,0.15)] p-8 md:p-12 relative shadow-2xl"
            >
              <button
                onClick={() => setShowTourModal(false)}
                className="absolute top-6 right-6 p-2 text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <span className="text-xs tracking-[0.3em] uppercase text-[#C8A98A] block mb-2">
                ARCHITECTURAL NOTES
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F4F1EC] uppercase mb-6">
                SANCTUARY AT RACE COURSE
              </h3>

              <div className="space-y-6 text-xs sm:text-sm text-[#A9A39B] font-light leading-relaxed">
                <p>
                  Conceived by award-winning architectural minimalists, LUMIÈRE was designed around
                  the sensation of decompression. Rather than an open floor of mirrored benches, our space is
                  subdivided into four private styling pavilions that preserve discretion and sound privacy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-start gap-3">
                    <Compass size={18} className="text-[#C8A98A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#F4F1EC] font-semibold block mb-0.5">Private VIP Atelier Suite</span>
                      <span>Separate entrance, daylight-calibrated lighting, bespoke private dressing chamber.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#C8A98A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#F4F1EC] font-semibold block mb-0.5">Acoustic Travertine</span>
                      <span>Honed volcanic finishes dampening reflection for tranquil conversation.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#A9A39B] tracking-wider">
                  Open Tuesday – Sunday · 09:30 to 20:30
                </span>
                <button
                  onClick={() => {
                    setShowTourModal(false);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-widest uppercase hover:bg-[#d5bba0]"
                >
                  SCHEDULE VISIT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
