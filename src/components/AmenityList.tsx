import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { AMENITIES_LIST, ASSETS } from '../data/content.ts';

export const AmenityList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Amenities"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="08 — AMENITIES" />
          <span className="font-serif text-xs italic text-[#53665A]">RESIDENTIAL CURATION</span>
        </div>

        {/* Heading */}
        <div className="mb-14 sm:mb-20">
          <Reveal durationMs={700} yOffset={25}>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
              SHARED
              <br />
              SANCTUARIES.
            </h2>
          </Reveal>
        </div>

        {/* Large Editorial List & Hover Preview (NO CARDS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial List */}
          <div className="lg:col-span-7 space-y-1">
            {AMENITIES_LIST.map((amenity, idx) => {
              const isSelected = hoveredIndex === idx;
              return (
                <div
                  key={amenity.number}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setHoveredIndex(idx)}
                  className={`group relative cursor-pointer border-b border-[#53665A]/25 py-6 sm:py-7 transition-colors focus-within:bg-[#1C3028]/30 ${
                    isSelected ? 'bg-[#1C3028]/40 pl-4 sm:pl-6' : 'hover:bg-[#1C3028]/20 pl-2'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setHoveredIndex(idx);
                    }
                  }}
                  aria-expanded={isSelected}
                >
                  {/* Selected State: Thin Muted Copper Line */}
                  {isSelected && (
                    <span
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#9B7657]"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-baseline justify-between pr-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-serif text-sm italic text-[#53665A] tabular-nums">
                        {amenity.number}
                      </span>
                      <h3
                        className={`font-serif text-2xl sm:text-3xl uppercase tracking-wide transition-colors ${
                          isSelected ? 'text-[#F5F1E7]' : 'text-[#F5F1E7]/75 group-hover:text-[#F5F1E7]'
                        }`}
                      >
                        {amenity.title}
                      </h3>
                    </div>

                    <span className="hidden sm:inline font-sans text-[11px] tracking-widest uppercase text-[#53665A]">
                      {amenity.subtitle}
                    </span>
                  </div>

                  {/* Expandable Content for Mobile / Active View */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isSelected ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 pt-0 opacity-0'
                    }`}
                  >
                    {/* Mobile Image Reveal */}
                    {amenity.image && (
                      <div className="lg:hidden pl-8 sm:pl-10 mb-4 pr-2">
                        <div className="relative aspect-[16/9] overflow-hidden border border-[#53665A]/30">
                          <img
                            src={amenity.image}
                            alt={amenity.title}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#EAE5D8]/80 pl-8 sm:pl-10">
                      {amenity.description}
                    </p>
                    <p className="mt-2 text-[11px] font-mono text-[#9B7657] pl-8 sm:pl-10">
                      {amenity.specs}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Reveal (Desktop Synchronized) */}
          <div className="lg:col-span-5 hidden lg:block sticky top-32">
            <div className="overflow-hidden bg-[#1C3028] border border-[#53665A]/25">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#101815]">
                {AMENITIES_LIST.map((amenity, idx) => (
                  <img
                    key={amenity.number}
                    src={amenity.image || ASSETS.facade}
                    alt={amenity.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                      hoveredIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03] pointer-events-none'
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/70 via-transparent to-transparent" />
              </div>

              <div className="p-6 bg-[#101815] border-t border-[#53665A]/25 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#9B7657]">
                  <span>AMENITY REF: 0{hoveredIndex + 1}</span>
                  <span>THE ADDRESS CHENNAI</span>
                </div>
                <h4 className="font-serif text-xl uppercase tracking-wide text-[#F5F1E7]">
                  {AMENITIES_LIST[hoveredIndex].subtitle}
                </h4>
                <p className="font-sans text-xs text-[#53665A]">
                  {AMENITIES_LIST[hoveredIndex].highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
