import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 sm:py-36 bg-[#0C0B0A] relative border-t border-[#332D28]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#332D28]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043] block mb-3">
              CAPABILITIES & EXPERTISE
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] tracking-[-0.035em] text-[#F5F1E8]">
              WHAT WE CREATE
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A8A198] max-w-md font-normal leading-relaxed">
            Six disciplined creative offerings engineered to give your company an unmistakable digital and tactile presence.
          </p>
        </div>

        {/* Editorial Full-Width Rows */}
        <div className="flex flex-col border-t border-[#332D28]">
          {servicesData.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectService?.(service.title)}
                data-cursor="project"
                className={`group relative border-b border-[#332D28] transition-all duration-400 cursor-pointer overflow-hidden ${
                  isHovered
                    ? 'bg-[#1D1A17] px-6 sm:px-10 border-[#6A4336]'
                    : 'bg-[#151311] px-4 sm:px-6'
                }`}
              >
                {/* Growing Burnt Orange Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#FF7043] transition-all duration-400 ease-out shadow-[0_0_10px_rgba(255,112,67,0.5)]"
                  style={{
                    width: isHovered ? '100%' : '0%',
                  }}
                />

                <div className="py-8 sm:py-11 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left: Service Number & Title */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-sm sm:text-base font-mono font-medium text-[#FF7043] transition-colors">
                      {service.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F5F1E8] tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle: Short Description Preview */}
                  <div className="hidden lg:block max-w-md">
                    <p className="text-sm text-[#A8A198] group-hover:text-[#F5F1E8]/90 transition-colors leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Circular Arrow Action */}
                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <span className="text-xs font-mono text-[#A8A198] group-hover:text-[#FF7043] transition-colors">
                      EXPLORE SCOPE
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#332D28] group-hover:border-[#FF7043] group-hover:bg-[#25211D] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#A8A198] group-hover:text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Mobile / Expanded Deliverables Details */}
                <div className="lg:hidden pb-4">
                  <p className="text-sm text-[#A8A198]">
                    {service.description}
                  </p>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="overflow-hidden pb-8 pt-1"
                    >
                      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#332D28]/60 text-xs font-mono text-[#A8A198]">
                        <span className="text-[#FF7043]">DELIVERABLES:</span>
                        {service.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="bg-[#25211D] border border-[#332D28] px-3 py-1 rounded-sm text-[#F5F1E8]/90"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
