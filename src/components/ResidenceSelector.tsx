import React, { useState } from 'react';
import { ArrowRight, Compass, Maximize2, Shield } from 'lucide-react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { RESIDENCE_CONFIGS, ASSETS } from '../data/content.ts';
import { ResidenceConfig } from '../types.ts';

interface ResidenceSelectorProps {
  onSelectFloorPlan: (config: ResidenceConfig) => void;
  onInquire: (config: ResidenceConfig) => void;
}

export const ResidenceSelector: React.FC<ResidenceSelectorProps> = ({
  onSelectFloorPlan,
  onInquire,
}) => {
  const [selectedId, setSelectedId] = useState<string>(RESIDENCE_CONFIGS[2].id); // Default to 3 Bedroom

  const activeResidence =
    RESIDENCE_CONFIGS.find((r) => r.id === selectedId) || RESIDENCE_CONFIGS[0];

  const getImageForResidence = (config: ResidenceConfig) => {
    switch (config.floorPlanKey) {
      case '1br':
        return ASSETS.courtyard;
      case '2br':
        return ASSETS.facade;
      case '3br':
        return ASSETS.residence;
      case 'penthouse':
        return ASSETS.hero;
      default:
        return ASSETS.residence;
    }
  };

  return (
    <section
      id="configurations"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 text-[#F5F1E7]"
      aria-label="Residence Configurations"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="03 — RESIDENCES" />
          <span className="font-serif text-xs italic text-[#53665A]">CONFIGURATIONS</span>
        </div>

        {/* Heading */}
        <div className="mb-14 sm:mb-20">
          <Reveal durationMs={700} yOffset={25}>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
              FIND YOUR
              <br />
              CONFIGURATION.
            </h2>
          </Reveal>
        </div>

        {/* Large Editorial Selector & Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Selection List (NO CARDS) */}
          <div className="lg:col-span-5 space-y-1">
            <span className="font-sans text-[11px] tracking-[0.25em] text-[#53665A] uppercase block mb-4">
              SELECT RESIDENCE TYPE
            </span>

            {RESIDENCE_CONFIGS.map((config) => {
              const isSelected = selectedId === config.id;
              return (
                <button
                  key={config.id}
                  onClick={() => setSelectedId(config.id)}
                  className={`group relative w-full text-left py-6 sm:py-8 border-b border-[#53665A]/25 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657] ${
                    isSelected ? 'bg-[#1C3028]/40 pl-6' : 'hover:bg-[#1C3028]/20 pl-2'
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* Selected Muted Copper vertical line */}
                  {isSelected && (
                    <span
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#9B7657]"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-baseline justify-between pr-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-serif text-sm italic text-[#53665A] tabular-nums">
                        {config.number}
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#F5F1E7]">
                        {config.name}
                      </span>
                    </div>

                    <span className="font-serif text-sm text-[#EAE5D8]/80 tabular-nums">
                      {config.area}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-3 text-xs text-[#53665A]">
                    <span className="tracking-wider uppercase">{config.headline}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#9B7657]">{config.price}</span>
                  </div>
                </button>
              );
            })}

            <p className="pt-6 font-sans text-[11px] tracking-wide text-[#53665A]">
              *Illustrative portfolio pricing only. Concept created for SAZEON.
            </p>
          </div>

          {/* Right Column: Dynamic crossfade specifications & associated visual */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden bg-[#1C3028] border border-[#53665A]/25">
              {/* Image Preview with Tonal Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#101815]">
                <img
                  key={activeResidence.id}
                  src={getImageForResidence(activeResidence)}
                  alt={`${activeResidence.name} - ${activeResidence.headline}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-full w-full object-cover transition-opacity duration-700 ease-out"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815] via-[#101815]/30 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-6 left-6 flex items-center gap-2 text-xs tracking-widest text-[#EAE5D8] uppercase bg-[#101815]/80 px-3 py-1.5 backdrop-blur-sm border border-[#53665A]/30">
                  <Compass className="h-3.5 w-3.5 text-[#9B7657]" />
                  <span>{activeResidence.aspect}</span>
                </div>
              </div>

              {/* Specifications Block */}
              <div className="p-8 sm:p-10 space-y-8 bg-[#101815]">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#F5F1E7]">
                      {activeResidence.name}
                    </h3>
                    <span className="font-serif text-2xl text-[#9B7657] tabular-nums">
                      {activeResidence.price}
                    </span>
                  </div>
                  <p className="mt-2 font-serif text-xs italic tracking-widest text-[#53665A] uppercase">
                    {activeResidence.headline} · {activeResidence.area}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base leading-relaxed text-[#EAE5D8]/80">
                  {activeResidence.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-[#53665A]/25 py-6">
                  <div>
                    <span className="block font-sans text-[11px] tracking-widest uppercase text-[#53665A]">
                      BEDROOMS
                    </span>
                    <span className="mt-1 block font-serif text-xl text-[#F5F1E7] tabular-nums">
                      {activeResidence.bedrooms}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[11px] tracking-widest uppercase text-[#53665A]">
                      BATHROOMS
                    </span>
                    <span className="mt-1 block font-serif text-xl text-[#F5F1E7] tabular-nums">
                      {activeResidence.bathrooms}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[11px] tracking-widest uppercase text-[#53665A]">
                      OUTDOOR
                    </span>
                    <span className="mt-1 block font-serif text-sm text-[#F5F1E7] uppercase truncate">
                      {activeResidence.outdoor}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[11px] tracking-widest uppercase text-[#53665A]">
                      CEILING
                    </span>
                    <span className="mt-1 block font-serif text-xl text-[#F5F1E7] tabular-nums">
                      {activeResidence.ceilingHeight}
                    </span>
                  </div>
                </div>

                {/* Key Architectural Highlights */}
                <div>
                  <span className="block font-sans text-[11px] tracking-widest uppercase text-[#53665A] mb-3">
                    ARCHITECTURAL PROVISIONS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#EAE5D8]/80">
                    {activeResidence.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-[#9B7657]" aria-hidden="true" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => onSelectFloorPlan(activeResidence)}
                    className="group flex items-center justify-center gap-3 bg-[#1C3028] hover:bg-[#53665A]/40 px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#F5F1E7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
                  >
                    <Maximize2 className="h-3.5 w-3.5 text-[#9B7657]" />
                    <span>VIEW DETAILED FLOOR PLAN</span>
                  </button>

                  <button
                    onClick={() => onInquire(activeResidence)}
                    className="group flex items-center justify-center gap-2 border border-[#53665A]/30 hover:border-[#F5F1E7]/40 px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#EAE5D8] hover:text-[#F5F1E7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
                  >
                    <span>REQUEST DOSSIER</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#9B7657] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
