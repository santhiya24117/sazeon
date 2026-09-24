import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data/assets';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="relative py-28 md:py-40 bg-[#0D0D0D] overflow-hidden border-b border-[rgba(244,241,236,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & Scroll-Triggered Text Reveal */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#C8A98A]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#C8A98A] font-medium">
                  PHILOSOPHY
                </span>
              </div>

              <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-tight uppercase text-[#F4F1EC] mb-10 text-balance">
                BEAUTY IS NOT
                <br />
                <span className="italic font-normal">ONE-SIZE-FITS-ALL.</span>
              </h2>
            </motion.div>

            {/* Staggered personal manifest text */}
            <div className="space-y-4 font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#F4F1EC]/90 border-l border-[#C8A98A]/40 pl-6 my-8">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-light italic"
              >
                It’s personal.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-light italic"
              >
                It’s expressive.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="font-normal text-[#C8A98A]"
              >
                It’s yours.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 max-w-xl"
            >
              <p className="text-sm md:text-base text-[#A9A39B] font-light leading-relaxed">
                Founded in Coimbatore, LUMIÈRE was conceived to dismantle standard salon conformity.
                Here, consultations are unhurried conversations. We analyze bone angles, hair texture,
                and personal aesthetic to compose a signature visual identity uniquely attuned to you.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Vertically Cropped Looping Visual / Media */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden border border-[rgba(244,241,236,0.15)] shadow-2xl group"
            >
              <img
                src={ASSETS.services.hair}
                alt="Editorial Hair Artistry at LUMIÈRE"
                className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              {/* Subtle architectural frame badge */}
              <div className="absolute bottom-4 left-4 z-10 text-[10px] tracking-[0.25em] text-[#F4F1EC]/80 uppercase bg-[#0D0D0D]/80 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                HAUTE COIFFURE · 2026
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
