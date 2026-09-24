import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data/assets';
import { CinematicMedia } from './CinematicMedia';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToExplore = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#0D0D0D]">
      {/* 1. Cinematic Background Video Focused on Luxury Salon Ambience & Atelier Atmosphere */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <CinematicMedia
          srcVideo={ASSETS.hero.video}
          poster={ASSETS.hero.poster}
          alt={ASSETS.hero.alt}
          overlayOpacity="bg-black/55"
          lazy={false}
        />
      </motion.div>

      {/* Top buffer for navbar */}
      <div className="pt-24 z-10" />

      {/* Hero Center Editorial Copy */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-start justify-center flex-1 my-auto">
        {/* 2. Logo / Overline Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 md:mb-6"
        >
          <span className="text-xs md:text-sm tracking-[0.38em] uppercase font-medium text-[#C8A98A]">
            LUMIÈRE STUDIO
          </span>
        </motion.div>

        {/* 3. Headline animates upward */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 md:mb-8"
        >
          <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.03em] uppercase leading-[0.92] text-[#F4F1EC]">
            BEAUTY,
            <br />
            <span className="italic font-normal text-[#F4F1EC]">REDEFINED.</span>
          </h1>
        </motion.div>

        {/* 4. Description fades in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md md:max-w-xl text-sm sm:text-base md:text-lg text-[#A9A39B] font-light leading-relaxed mb-8 md:mb-10 text-balance"
        >
          A modern beauty studio where your individuality takes center stage.
          High-fashion precision, restorative rituals, and bespoke architectural care.
        </motion.p>

        {/* 5. CTA appears last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#F4F1EC] text-[#0D0D0D] text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#C8A98A] hover:text-[#0D0D0D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A98A]"
          >
            <span>BOOK AN EXPERIENCE</span>
            <span className="w-6 h-px bg-[#0D0D0D] transition-all duration-300 group-hover:w-9" />
          </button>
        </motion.div>
      </div>

      {/* Hero Bottom Bar: Location & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.6 }}
        className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pb-8 md:pb-10 flex items-end justify-between text-[11px] tracking-[0.24em] uppercase text-[#A9A39B]"
      >
        {/* Bottom Left */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[#F4F1EC] font-medium tracking-[0.28em]">COIMBATORE</span>
          <span className="text-[10px] text-[#A9A39B]/80 tracking-[0.2em]">EST. 2026</span>
        </div>

        {/* Bottom Right */}
        <button
          onClick={scrollToExplore}
          className="group flex items-center gap-2 hover:text-[#F4F1EC] transition-colors focus-visible:outline-none"
          aria-label="Scroll to explore"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="inline-block transform group-hover:translate-y-1 transition-transform duration-300">
            ↓
          </span>
        </button>
      </motion.div>
    </section>
  );
};
