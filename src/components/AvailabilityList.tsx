import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { AVAILABILITY_ITEMS, RESIDENCE_CONFIGS, ASSETS } from '../data/content.ts';
import { ResidenceConfig } from '../types.ts';

interface AvailabilityListProps {
  onSelectResidence: (config: ResidenceConfig) => void;
  onBookVisit: (residenceCode: string) => void;
}

export const AvailabilityList: React.FC<AvailabilityListProps> = ({
  onSelectResidence,
  onBookVisit,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const previewImages = [
    ASSETS.courtyard,
    ASSETS.facade,
    ASSETS.residence,
    ASSETS.hero,
  ];

  return (
    <section
      id="availability"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Residence Availability"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="11 — AVAILABILITY" />
          <span className="font-serif text-xs italic text-[#53665A]">BOUTIQUE INVENTORY</span>
        </div>

        {/* Heading */}
        <div className="mb-14 sm:mb-20">
          <Reveal durationMs={700} yOffset={25}>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
              SELECT YOUR
              <br />
              RESIDENCE.
            </h2>
          </Reveal>
        </div>

        {/* Minimalist Editorial List (NO CARDS) */}
        <div className="border-t border-[#53665A]/30 divide-y divide-[#53665A]/20">
          {AVAILABILITY_ITEMS.map((item, idx) => {
            const config =
              RESIDENCE_CONFIGS.find((r) => r.id === item.configId) ||
              RESIDENCE_CONFIGS[0];

            return (
              <div
                key={item.code}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative py-6 sm:py-8 transition-colors hover:bg-[#1C3028]/30 px-3 sm:px-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Code & Type */}
                  <div className="flex items-baseline gap-4 sm:gap-6 min-w-[240px]">
                    <span className="font-serif text-sm italic text-[#53665A] tabular-nums">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-wider text-[#F5F1E7]">
                        {item.code}
                      </h3>
                      <p className="font-sans text-xs tracking-wider text-[#53665A] uppercase mt-0.5">
                        {item.type}
                      </p>
                    </div>
                  </div>

                  {/* Floor Plate Area & Orientation */}
                  <div className="min-w-[160px]">
                    <span className="font-serif text-base text-[#EAE5D8] tabular-nums block">
                      {item.area}
                    </span>
                    <span className="font-sans text-[11px] tracking-wider text-[#53665A] uppercase">
                      {item.orientation}
                    </span>
                  </div>

                  {/* Floor Level */}
                  <div className="min-w-[120px] hidden sm:block">
                    <span className="font-mono text-xs text-[#EAE5D8]/80 block">
                      {item.floor}
                    </span>
                    <span className="font-sans text-[10px] text-[#53665A] uppercase tracking-wider">
                      ELEVATION
                    </span>
                  </div>

                  {/* Status Indicator with Muted Copper Accent */}
                  <div className="flex items-center gap-2 min-w-[120px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B7657]" aria-hidden="true" />
                    <span className="font-sans text-xs tracking-widest text-[#9B7657] uppercase font-medium">
                      {item.status}
                    </span>
                  </div>

                  {/* Action Link: VIEW → with 5px shift */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectResidence(config)}
                      className="group/btn inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-[#F5F1E7] hover:text-[#9B7657] transition-colors py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
                    >
                      <span>VIEW</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#9B7657] transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 pt-4 border-t border-[#53665A]/20 flex flex-col sm:flex-row items-baseline justify-between text-xs text-[#53665A]">
          <span>*Illustrative portfolio pricing and fictional residence inventory.</span>
          <span className="mt-1 sm:mt-0 font-serif italic">SAZEON CURATED ARCHITECTURE</span>
        </div>
      </div>
    </section>
  );
};
