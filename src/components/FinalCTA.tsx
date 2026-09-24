import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data/assets';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D0D0D]">
      {/* Background Editorial Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.finalCta.poster}
          alt={ASSETS.finalCta.alt}
          className="w-full h-full object-cover scale-[1.01]"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Top spacing buffer */}
      <div className="pt-20" />

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.38em] uppercase text-[#C8A98A] font-medium">
            RESERVATION
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase leading-[0.95] tracking-tight text-[#F4F1EC] mb-6 text-balance"
        >
          YOUR NEXT LOOK
          <br />
          <span className="italic font-normal text-[#C8A98A]">STARTS HERE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md md:max-w-lg text-sm sm:text-base md:text-lg text-[#A9A39B] font-light leading-relaxed mb-10 text-balance"
        >
          “Let’s create something that feels unmistakably you.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={onOpenBooking}
            className="group px-9 py-4 bg-[#F4F1EC] text-[#0D0D0D] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#C8A98A] transition-all duration-300 inline-flex items-center gap-4 active:scale-[0.98] shadow-2xl"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Bar: Location & Quick Links */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pb-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs tracking-[0.24em] uppercase text-[#A9A39B] border-t border-[rgba(244,241,236,0.1)] pt-8">
        <div className="flex items-center gap-3">
          <span className="text-[#F4F1EC] font-medium tracking-[0.28em]">LUMIÈRE</span>
          <span>·</span>
          <span>COIMBATORE</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F1EC] transition-colors"
          >
            Instagram
          </a>
          <span>·</span>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8A98A] transition-colors"
          >
            WhatsApp
          </a>
          <span>·</span>
          <a
            href="https://maps.google.com/?q=Race+Course+Coimbatore"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F1EC] transition-colors"
          >
            Maps
          </a>
        </div>
      </div>
    </section>
  );
};
