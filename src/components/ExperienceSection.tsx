import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../data/assets';
import { Sparkles, X } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  const [showPillarsModal, setShowPillarsModal] = useState(false);

  const pillars = [
    {
      num: '01',
      title: 'DIAGNOSTIC CONSULTATION',
      desc: '30 minutes of deep observation. Hair elasticity, facial geometry, scalp microbiome, and daily lifestyle are mapped prior to any service.',
    },
    {
      num: '02',
      title: 'ACOUSTIC & SENSORY CALM',
      desc: 'Engineered acoustics and curated soundscapes shield you from city clamor. No harsh salon chemical odors; pure botanical distillations.',
    },
    {
      num: '03',
      title: 'TAILORED FORMULATION',
      desc: 'Colour pigments and restorative proteins custom-blended in front of you at our alchemy bar, adjusted for your natural undertones.',
    },
    {
      num: '04',
      title: 'ATELIER AFTERCARE ARCHIVE',
      desc: 'You depart not just with transformed hair, but a bespoke routine guide and digital formulation record for effortless maintenance.',
    },
  ];

  return (
    <section id="experience" className="relative w-full h-[80vh] min-h-[580px] flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Background Editorial Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.experience.poster}
          alt={ASSETS.experience.alt}
          className="w-full h-full object-cover scale-[1.01]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#C8A98A] font-medium inline-flex items-center gap-2">
            <Sparkles size={13} className="text-[#C8A98A]" />
            THE LUMIÈRE STANDARD
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase leading-[0.98] tracking-tight text-[#F4F1EC] mb-6 text-balance"
        >
          MORE THAN
          <br />
          A SALON.
          <br />
          <span className="italic font-normal text-[#C8A98A]">
            AN EXPERIENCE
          </span>
          <br />
          DESIGNED AROUND YOU.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-sm sm:text-base md:text-lg text-[#A9A39B] font-light leading-relaxed mb-8 text-balance"
        >
          “From consultation to final look, every detail is considered.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => setShowPillarsModal(true)}
            className="group px-7 py-3.5 border border-[#C8A98A] text-xs font-semibold tracking-[0.24em] uppercase text-[#F4F1EC] hover:bg-[#C8A98A] hover:text-[#0D0D0D] transition-all duration-300"
          >
            DISCOVER THE EXPERIENCE →
          </button>
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 bg-[#F4F1EC] text-[#0D0D0D] text-xs font-semibold tracking-[0.24em] uppercase hover:bg-[#C8A98A] transition-all duration-300"
          >
            BOOK YOUR VISIT
          </button>
        </motion.div>
      </div>

      {/* Interactive Experience Modal / Drawer */}
      <AnimatePresence>
        {showPillarsModal && (
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
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full bg-[#121212] border border-[rgba(244,241,236,0.15)] p-8 md:p-12 relative shadow-2xl"
            >
              <button
                onClick={() => setShowPillarsModal(false)}
                className="absolute top-6 right-6 p-2 text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <span className="text-xs tracking-[0.3em] uppercase text-[#C8A98A] block mb-2">
                FOUR PILLARS OF LUMIÈRE
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F4F1EC] uppercase mb-8">
                THE SENSORY PROTOCOL
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                {pillars.map((p) => (
                  <div key={p.num} className="border-l border-[#C8A98A]/40 pl-5">
                    <span className="text-xs tracking-widest text-[#C8A98A] font-semibold block mb-1">
                      {p.num}
                    </span>
                    <h4 className="font-serif-editorial text-xl text-[#F4F1EC] uppercase mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#A9A39B] font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[rgba(244,241,236,0.12)] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#A9A39B] tracking-wider">
                  LOCATION: RACE COURSE, COIMBATORE
                </span>
                <button
                  onClick={() => {
                    setShowPillarsModal(false);
                    onOpenBooking();
                  }}
                  className="px-6 py-3 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#d5bba0] transition-colors"
                >
                  RESERVE YOUR APPOINTMENT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
