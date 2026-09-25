import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface DifferenceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
}

const differenceData: DifferenceItem[] = [
  {
    id: 'distinctive',
    number: '01',
    title: 'DISTINCTIVE BY DESIGN',
    description: 'We create visual experiences that make brands recognizable.',
    details: 'Rejecting boilerplate templates and mass-produced motifs in favor of custom editorial compositions that stand out in crowded markets.',
  },
  {
    id: 'intention',
    number: '02',
    title: 'BUILT WITH INTENTION',
    description: 'Every layout, interaction, and detail has a reason behind it.',
    details: 'From micro-typography kerning to user flow logic, nothing is accidental. Every pixel works directly toward conversion and comprehension.',
  },
  {
    id: 'technology',
    number: '03',
    title: 'TECHNOLOGY WITH PURPOSE',
    description: 'Modern tools chosen to solve real business needs.',
    details: 'Zero fluff, zero unnecessary dependencies. We engineer with modern high-performance frameworks that deliver sub-second response times.',
  },
  {
    id: 'future',
    number: '04',
    title: 'READY FOR WHAT’S NEXT',
    description: 'Flexible digital experiences designed to grow with your brand.',
    details: 'Architected with scalable codebases and design systems so your digital footprint seamlessly evolves with your company ambition.',
  },
];

export const SazeonDifference: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="difference" className="py-24 sm:py-36 bg-[#0C0B0A] relative border-t border-[#332D28]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#332D28]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043] block mb-3">
              CORE PHILOSOPHY
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] tracking-[-0.035em] text-[#F5F1E8] leading-tight">
              THE SAZEON <br className="hidden sm:inline" />
              DIFFERENCE
            </h2>
          </div>
          <p className="text-base sm:text-lg font-display text-[#FF7043] max-w-sm font-medium">
            Not just another website.
          </p>
        </div>

        {/* Full-width Editorial Rows */}
        <div className="flex flex-col border-t border-[#332D28]">
          {differenceData.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative border-b border-[#332D28] transition-all duration-300 cursor-pointer overflow-hidden ${
                  isHovered ? 'bg-[#1D1A17] px-6 sm:px-8 border-[#6A4336]' : 'bg-transparent px-2 sm:px-4'
                }`}
              >
                {/* Thin orange progress line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#FF7043] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(255,112,67,0.5)]"
                  style={{ width: isHovered ? '100%' : '0%' }}
                />

                <div className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left: Number and Title */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-sm sm:text-base font-mono text-[#FF7043]">
                      {item.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F5F1E8] tracking-tight group-hover:translate-x-1.5 transition-all duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Middle / Right: Description & Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-8">
                    <p className="hidden lg:block text-sm sm:text-base text-[#A8A198] group-hover:text-[#F5F1E8]/90 max-w-md transition-colors">
                      {item.description}
                    </p>

                    <div className="w-10 h-10 rounded-full border border-[#332D28] group-hover:border-[#FF7043] group-hover:bg-[#25211D] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#A8A198] group-hover:text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Mobile / Tablet Description */}
                <div className="lg:hidden pb-6">
                  <p className="text-sm text-[#A8A198]">
                    {item.description}
                  </p>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="overflow-hidden pb-6 pt-1 text-xs sm:text-sm text-[#A8A198] max-w-2xl"
                    >
                      <span className="text-[#FF7043] mr-2">↳</span>
                      <span>{item.details}</span>
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
