import React, { useState } from 'react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { LIFESTYLE_MOMENTS, ASSETS } from '../data/content.ts';

export const LifestyleGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="lifestyle"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Lifestyle — The Daily Ritual"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="07 — LIFESTYLE" />
          <span className="font-serif text-xs italic text-[#53665A]">THE DAILY RITUAL</span>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <Reveal durationMs={700} yOffset={25}>
            <h2 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
              CHOREOGRAPHY
              <br />
              OF A DAY.
            </h2>
          </Reveal>
        </div>

        {/* Desktop Presentation: Interactive Cinematic Sequence */}
        <div className="hidden md:block">
          {/* Timeline Bar (Quiet Editorial Stepper) */}
          <div className="grid grid-cols-6 border-b border-[#53665A]/25 mb-10">
            {LIFESTYLE_MOMENTS.map((moment, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={moment.label}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative text-left py-4 px-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]`}
                >
                  <span className="block font-mono text-[10px] text-[#53665A] mb-1 tabular-nums">
                    {moment.time}
                  </span>
                  <span
                    className={`block font-serif text-sm uppercase tracking-wider transition-colors ${
                      isActive ? 'text-[#F5F1E7]' : 'text-[#53665A] group-hover:text-[#EAE5D8]'
                    }`}
                  >
                    {moment.label}
                  </span>

                  {/* Active Muted Copper Underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                      isActive ? 'bg-[#9B7657]' : 'bg-transparent group-hover:bg-[#53665A]/40'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Active Moment Visual & Story Frame */}
          <div className="grid grid-cols-12 gap-12 items-center bg-[#1C3028] border border-[#53665A]/25 p-8 sm:p-12">
            {/* Left: Large Cinematic Image */}
            <div className="col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#101815]">
                {LIFESTYLE_MOMENTS.map((moment, idx) => (
                  <img
                    key={moment.label}
                    src={moment.image || ASSETS.residence}
                    alt={moment.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                      activeTab === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03] pointer-events-none'
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Narrative Editorial Prose */}
            <div className="col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-[#9B7657]">
                <span>MOMENT // 0{activeTab + 1}</span>
                <span aria-hidden="true">·</span>
                <span>{LIFESTYLE_MOMENTS[activeTab].time} IST</span>
              </div>

              <h3 className="font-serif text-3xl lg:text-4xl uppercase tracking-wide text-[#F5F1E7]">
                {LIFESTYLE_MOMENTS[activeTab].title}
              </h3>

              <blockquote className="font-serif text-lg italic text-[#EAE5D8]/90 border-l border-[#9B7657] pl-4">
                "{LIFESTYLE_MOMENTS[activeTab].quote}"
              </blockquote>

              <p className="font-sans text-sm leading-relaxed text-[#EAE5D8]/75">
                {LIFESTYLE_MOMENTS[activeTab].description}
              </p>

              <div className="pt-4 flex items-center justify-between text-xs text-[#53665A] border-t border-[#53665A]/20">
                <span>STAGE: {LIFESTYLE_MOMENTS[activeTab].label}</span>
                <span className="tabular-nums">0{activeTab + 1} / 06</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Presentation: Stacked Large Vertical Editorial Images */}
        <div className="md:hidden space-y-12">
          {LIFESTYLE_MOMENTS.map((moment, idx) => (
            <Reveal key={moment.label} delayMs={idx * 60} durationMs={700}>
              <div className="overflow-hidden bg-[#1C3028] border border-[#53665A]/25">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={moment.image || ASSETS.residence}
                    alt={moment.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#101815]/80 px-2.5 py-1 text-[11px] font-mono text-[#9B7657]">
                    {moment.time}
                  </div>
                </div>

                <div className="p-6 space-y-3 bg-[#101815]">
                  <span className="font-serif text-xs uppercase tracking-widest text-[#53665A]">
                    {moment.label}
                  </span>
                  <h3 className="font-serif text-2xl uppercase tracking-wide text-[#F5F1E7]">
                    {moment.title}
                  </h3>
                  <p className="font-serif text-sm italic text-[#9B7657]">
                    "{moment.quote}"
                  </p>
                  <p className="font-sans text-xs leading-relaxed text-[#EAE5D8]/80">
                    {moment.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
