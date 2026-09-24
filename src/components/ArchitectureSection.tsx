import React, { useState } from 'react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { ARCHITECTURE_DETAILS } from '../data/content.ts';

export const ArchitectureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 lg:py-44 text-[#F5F1E7]"
      aria-label="Architecture Form and Function"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="02 — ARCHITECTURE" />
          <span className="font-serif text-xs italic text-[#53665A]">MATERIAL DISCIPLINE</span>
        </div>

        {/* Top Heading & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <Reveal durationMs={700} yOffset={25}>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
                FORM
                <br />
                MEETS
                <br />
                FUNCTION.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal durationMs={700} delayMs={150} yOffset={25}>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#EAE5D8]/80 max-w-md">
                A restrained architectural language built around natural materials, generous openings and carefully considered transitions between inside and out.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Interactive Material Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Material List with hover/tap states */}
          <div className="lg:col-span-6 space-y-2">
            {ARCHITECTURE_DETAILS.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative cursor-pointer border-b border-[#53665A]/25 py-6 sm:py-8 transition-colors ${
                    isActive ? 'bg-[#1C3028]/40' : 'hover:bg-[#1C3028]/20'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  aria-expanded={isActive}
                >
                  {/* Left Muted Copper Indicator */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#9B7657]"
                      aria-hidden="true"
                    />
                  )}

                  <div className="px-4 sm:px-6">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-serif text-sm italic text-[#53665A] tabular-nums">
                          {item.number}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide text-[#F5F1E7]">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-sans text-[11px] tracking-widest uppercase text-[#9B7657] opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW DETAIL
                      </span>
                    </div>

                    {/* Collapsible detail on mobile or active state */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isActive ? 'max-h-48 pt-4 opacity-100' : 'max-h-0 pt-0 opacity-0'
                      }`}
                    >
                      <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#EAE5D8]/75 pl-8 sm:pl-10">
                        {item.description}
                      </p>
                      <div className="mt-3 pl-8 sm:pl-10 text-[11px] font-mono tracking-wider text-[#53665A]">
                        {item.spec}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Preview */}
          <div className="lg:col-span-6">
            <Reveal durationMs={800} yOffset={25}>
              <div className="relative overflow-hidden bg-[#1C3028] shadow-2xl">
                <div className="relative aspect-[16/11] overflow-hidden">
                  {ARCHITECTURE_DETAILS.map((item, idx) => (
                    <img
                      key={item.number}
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                        activeIndex === idx
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-[1.03] pointer-events-none'
                      }`}
                    />
                  ))}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/75 via-transparent to-transparent" />
                </div>

                {/* Bottom Architectural Caption */}
                <div className="p-6 bg-[#101815] border-t border-[#53665A]/25 flex items-center justify-between">
                  <div>
                    <span className="block font-serif text-sm tracking-wide uppercase text-[#F5F1E7]">
                      {ARCHITECTURE_DETAILS[activeIndex].subtitle}
                    </span>
                    <span className="font-sans text-xs text-[#53665A]">
                      {ARCHITECTURE_DETAILS[activeIndex].spec}
                    </span>
                  </div>
                  <span className="font-serif text-sm italic text-[#9B7657] tabular-nums">
                    SPEC // {ARCHITECTURE_DETAILS[activeIndex].number}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
