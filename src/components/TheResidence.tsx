import React from 'react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { ASSETS } from '../data/content.ts';

export const TheResidence: React.FC = () => {
  return (
    <section
      id="residences"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 lg:py-44 text-[#F5F1E7]"
      aria-label="The Residence"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="01 — THE RESIDENCE" />
          <span className="font-serif text-xs italic text-[#53665A]">SPATIAL PHILOSOPHY</span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Top/Left: Heading & Text */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <Reveal durationMs={700} yOffset={25}>
              <h2 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
                DESIGNED
                <br />
                AROUND
                <br />
                LIGHT.
              </h2>
            </Reveal>

            <Reveal durationMs={700} delayMs={150} yOffset={25}>
              <div className="mt-8 sm:mt-10 max-w-lg">
                <p className="font-sans text-base sm:text-lg leading-relaxed text-[#EAE5D8]/85">
                  Every residence is composed as a sequence of light, proportion and material — creating spaces that feel generous, private and naturally connected.
                </p>
                <p className="mt-6 font-sans text-xs sm:text-sm leading-relaxed text-[#53665A]">
                  From dawn till evening, sunlight tracks across raw granite thresholds and floor-to-ceiling glass expanses, animating each room with the natural rhythm of day and night.
                </p>

                {/* Editorial Specifications List */}
                <div className="mt-12 space-y-4 border-t border-[#53665A]/25 pt-8 text-xs tracking-wider text-[#EAE5D8]/70">
                  <div className="flex items-center justify-between">
                    <span className="font-sans uppercase text-[#53665A]">CEILING VOLUMES</span>
                    <span className="font-serif text-sm text-[#F5F1E7]">3.4M TO 4.2M CLEAR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans uppercase text-[#53665A]">FACADE APERTURES</span>
                    <span className="font-serif text-sm text-[#F5F1E7]">FULL-HEIGHT ACOUSTIC GLASS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans uppercase text-[#53665A]">PRIVATE OUTDOOR</span>
                    <span className="font-serif text-sm text-[#F5F1E7]">DEEP VERANDAS & SKY GARDENS</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Asymmetric Images with Large Negative Space */}
          <div className="lg:col-span-6 space-y-14 lg:space-y-20">
            {/* Large Primary Image */}
            <Reveal durationMs={800} delayMs={100} yOffset={30}>
              <div className="group overflow-hidden bg-[#1C3028]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={ASSETS.hero}
                    alt="Architectural exterior facade of The Address residences"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/60 via-transparent to-transparent" />
                </div>
                <div className="p-4 bg-[#101815] border-t border-[#53665A]/20 flex items-center justify-between text-[11px] tracking-wider text-[#53665A] uppercase">
                  <span>RESIDENTIAL ELEVATION</span>
                  <span className="font-serif italic tabular-nums">01 / EXTERIOR</span>
                </div>
              </div>
            </Reveal>

            {/* Small Offset Secondary Image */}
            <div className="lg:ml-16 max-w-md">
              <Reveal durationMs={800} delayMs={200} yOffset={30}>
                <div className="group overflow-hidden bg-[#1C3028]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={ASSETS.courtyard}
                      alt="Internal botanical reflection courtyard at night"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-4 bg-[#101815] border-t border-[#53665A]/20 flex items-center justify-between text-[11px] tracking-wider text-[#53665A] uppercase">
                    <span>SECLUDED COURTYARD</span>
                    <span className="font-serif italic tabular-nums">02 / BOTANICAL</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
