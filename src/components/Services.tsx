import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  const activeService: ServiceItem = SERVICES_DATA[hoveredIndex] || SERVICES_DATA[0];

  const toggleMobileAccordion = (idx: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#0D0D0D] border-b border-[rgba(244,241,236,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[rgba(244,241,236,0.12)]">
          <div>
            <span className="text-xs tracking-[0.34em] uppercase text-[#C8A98A] font-medium block mb-3">
              THE DISCIPLINES
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#F4F1EC]">
              WHAT WE DO
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A9A39B] max-w-sm tracking-wider leading-relaxed">
            Curated hair sculpture, cellular dermal therapies, and couture finishing rituals.
          </p>
        </div>

        {/* Desktop Interactive Editorial Service Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
          {/* Left: Interactive List */}
          <div className="col-span-7 flex flex-col divide-y divide-[rgba(244,241,236,0.12)]">
            {SERVICES_DATA.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`group py-9 transition-all duration-500 cursor-pointer ${
                    hoveredIndex !== null && !isHovered ? 'opacity-35 hover:opacity-100' : 'opacity-100'
                  }`}
                  onClick={() => onSelectService(item.id)}
                >
                  <div className="flex items-baseline justify-between transition-transform duration-500 group-hover:translate-x-4">
                    <div className="flex items-baseline gap-8">
                      <span className="text-xs tracking-[0.28em] font-medium text-[#C8A98A] tabular-nums">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-serif-editorial text-4xl xl:text-5xl font-light tracking-wide uppercase text-[#F4F1EC] group-hover:text-[#C8A98A] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-[11px] tracking-[0.22em] text-[#A9A39B] uppercase mt-2">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-[#A9A39B] group-hover:text-[#F4F1EC] transition-colors">
                      <span className="hidden xl:inline text-[#C8A98A]">From {item.startingPrice}</span>
                      <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#C8A98A]" />
                    </div>
                  </div>

                  {/* Sub-services preview on active */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-5 pl-14 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#A9A39B] font-light"
                    >
                      {item.subServices.slice(0, 3).map((sub, sIdx) => (
                        <span key={sIdx} className="flex items-center gap-2">
                          <span className="text-[#C8A98A] text-[9px]">■</span>
                          {sub}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Hover Image & Editorial Card */}
          <div className="col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[rgba(244,241,236,0.15)] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay description badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent flex flex-col justify-end p-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] mb-2">
                  DISCIPLINE {activeService.number}
                </span>
                <h4 className="font-serif-editorial text-2xl text-[#F4F1EC] mb-2 uppercase">
                  {activeService.title}
                </h4>
                <p className="text-xs text-[#A9A39B] font-light leading-relaxed mb-4 line-clamp-3">
                  {activeService.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                  <span className="text-[#F4F1EC] tracking-widest">{activeService.duration}</span>
                  <button
                    onClick={() => onSelectService(activeService.id)}
                    className="text-[#C8A98A] tracking-[0.2em] uppercase underline underline-offset-4 hover:text-[#F4F1EC] transition-colors"
                  >
                    RESERVE THIS RITUAL →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion List */}
        <div className="lg:hidden flex flex-col divide-y divide-[rgba(244,241,236,0.12)]">
          {SERVICES_DATA.map((item, idx) => {
            const isOpen = mobileExpandedIndex === idx;

            return (
              <div key={item.id} className="py-6">
                <button
                  onClick={() => toggleMobileAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs tracking-[0.25em] font-medium text-[#C8A98A]">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl font-light uppercase text-[#F4F1EC]">
                        {item.title}
                      </h3>
                      <p className="text-[10px] tracking-[0.2em] text-[#A9A39B] uppercase mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#C8A98A] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-6 pt-4 border-t border-white/5 space-y-4"
                  >
                    {/* Visual */}
                    <div className="aspect-[16/9] w-full overflow-hidden border border-white/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-xs text-[#A9A39B] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 py-2">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A98A] block">
                        SIGNATURE OFFERINGS
                      </span>
                      {item.subServices.map((sub, sIdx) => (
                        <div key={sIdx} className="text-xs text-[#F4F1EC]/90 flex items-center gap-2">
                          <span className="text-[#C8A98A] text-[8px]">•</span>
                          {sub}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-xs text-[#A9A39B]">
                        <span>Starting from </span>
                        <span className="text-[#F4F1EC] font-semibold">{item.startingPrice}</span>
                      </div>
                      <button
                        onClick={() => onSelectService(item.id)}
                        className="px-4 py-2 bg-[#C8A98A] text-[#0D0D0D] text-[10px] tracking-[0.2em] font-semibold uppercase"
                      >
                        BOOK THIS
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Explore Full Services Menu Callout */}
        <div className="mt-16 pt-10 border-t border-[rgba(244,241,236,0.1)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#A9A39B] font-light">
            Consultations, pricing details, and custom multi-hour atelier protocols available in our full menu.
          </p>
          <Link
            to="/services"
            className="group px-6 py-3.5 border border-[#C8A98A]/50 text-[#C8A98A] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#C8A98A] hover:text-[#0D0D0D] transition-all flex items-center gap-3 shrink-0"
          >
            <span>VIEW FULL EDITORIAL MENU</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
