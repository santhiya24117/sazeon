import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const totalCount = String(TESTIMONIALS_DATA.length).padStart(2, '0');

  return (
    <section className="relative py-28 md:py-36 bg-[#0D0D0D] border-b border-[rgba(244,241,236,0.08)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[rgba(244,241,236,0.1)]">
          <span className="text-xs tracking-[0.35em] uppercase text-[#C8A98A] font-medium">
            CLIENT PERSPECTIVES
          </span>
          <span className="text-xs tracking-[0.25em] text-[#A9A39B] font-mono tabular-nums">
            {formattedIndex} / {totalCount}
          </span>
        </div>

        {/* Carousel Content: One Testimonial at a Time */}
        <div className="min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F4F1EC] font-light leading-[1.15] italic tracking-tight mb-10 text-balance">
                “{current.quote}”
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-6 border-t border-[rgba(244,241,236,0.08)]">
                <div>
                  <h4 className="font-serif-editorial text-2xl tracking-[0.2em] uppercase text-[#F4F1EC] font-normal">
                    {current.author}
                  </h4>
                  <p className="text-xs text-[#A9A39B] tracking-widest uppercase mt-1">
                    {current.role}
                  </p>
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#C8A98A]">
                  {current.service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Simple Previous/Next Controls */}
          <div className="flex items-center gap-6 mt-12 pt-8">
            <button
              onClick={handlePrev}
              className="p-3 border border-[rgba(244,241,236,0.2)] text-[#F4F1EC] hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A98A]"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-[rgba(244,241,236,0.2)] text-[#F4F1EC] hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A98A]"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
