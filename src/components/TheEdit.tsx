import React from 'react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { GALLERY_ITEMS } from '../data/content.ts';

export const TheEdit: React.FC = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="The Edit Architectural Gallery"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="09 — THE EDIT" />
          <span className="font-serif text-xs italic text-[#53665A]">EDITORIAL CURATION</span>
        </div>

        {/* Heading */}
        <div className="mb-16 sm:mb-24">
          <Reveal durationMs={700} yOffset={25}>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
              ARCHITECTURAL
              <br />
              MONOGRAPH.
            </h2>
          </Reveal>
        </div>

        {/* Asymmetrical Magazine Layout */}
        <div className="space-y-16 sm:space-y-24">
          {/* Row 1: Large Offset Hero Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 lg:col-start-3">
              <Reveal durationMs={800} yOffset={30}>
                <div className="group relative overflow-hidden bg-[#1C3028]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={GALLERY_ITEMS[0].image}
                      alt={GALLERY_ITEMS[0].caption}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-full w-full object-cover filter saturate-75 brightness-95 transition-all duration-900 ease-out group-hover:scale-[1.03] group-hover:saturate-100 group-hover:brightness-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/70 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-4 sm:p-6 bg-[#101815] border-t border-[#53665A]/25 flex items-baseline justify-between transition-transform duration-500">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl uppercase tracking-wider text-[#F5F1E7]">
                        {GALLERY_ITEMS[0].caption}
                      </h3>
                      <p className="font-sans text-xs text-[#53665A]">
                        {GALLERY_ITEMS[0].category}
                      </p>
                    </div>
                    <span className="font-serif text-xs italic text-[#9B7657] tabular-nums">
                      {GALLERY_ITEMS[0].number}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Row 2: Small Image (Left) + Portrait Image (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Small Landscape Image */}
            <div className="lg:col-span-5">
              <Reveal durationMs={800} delayMs={100} yOffset={30}>
                <div className="group relative overflow-hidden bg-[#1C3028]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={GALLERY_ITEMS[1].image}
                      alt={GALLERY_ITEMS[1].caption}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-full w-full object-cover filter saturate-75 brightness-95 transition-all duration-900 ease-out group-hover:scale-[1.03] group-hover:saturate-100 group-hover:brightness-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/70 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-4 sm:p-5 bg-[#101815] border-t border-[#53665A]/25 flex items-baseline justify-between">
                    <div>
                      <h3 className="font-serif text-base uppercase tracking-wider text-[#F5F1E7]">
                        {GALLERY_ITEMS[1].caption}
                      </h3>
                      <p className="font-sans text-xs text-[#53665A]">
                        {GALLERY_ITEMS[1].category}
                      </p>
                    </div>
                    <span className="font-serif text-xs italic text-[#9B7657] tabular-nums">
                      {GALLERY_ITEMS[1].number}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Vertical Portrait Image */}
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal durationMs={800} delayMs={200} yOffset={30}>
                <div className="group relative overflow-hidden bg-[#1C3028] max-w-md lg:ml-auto">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={GALLERY_ITEMS[2].image}
                      alt={GALLERY_ITEMS[2].caption}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-full w-full object-cover filter saturate-75 brightness-95 transition-all duration-900 ease-out group-hover:scale-[1.03] group-hover:saturate-100 group-hover:brightness-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/70 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-4 sm:p-5 bg-[#101815] border-t border-[#53665A]/25 flex items-baseline justify-between">
                    <div>
                      <h3 className="font-serif text-base uppercase tracking-wider text-[#F5F1E7]">
                        {GALLERY_ITEMS[2].caption}
                      </h3>
                      <p className="font-sans text-xs text-[#53665A]">
                        {GALLERY_ITEMS[2].category}
                      </p>
                    </div>
                    <span className="font-serif text-xs italic text-[#9B7657] tabular-nums">
                      {GALLERY_ITEMS[2].number}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Row 3: Detail Image Centered with Negative Space */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 lg:col-start-4">
              <Reveal durationMs={800} yOffset={30}>
                <div className="group relative overflow-hidden bg-[#1C3028]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={GALLERY_ITEMS[4].image}
                      alt={GALLERY_ITEMS[4].caption}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-full w-full object-cover filter saturate-75 brightness-95 transition-all duration-900 ease-out group-hover:scale-[1.03] group-hover:saturate-100 group-hover:brightness-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/70 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-4 sm:p-5 bg-[#101815] border-t border-[#53665A]/25 flex items-baseline justify-between">
                    <div>
                      <h3 className="font-serif text-base uppercase tracking-wider text-[#F5F1E7]">
                        {GALLERY_ITEMS[4].caption}
                      </h3>
                      <p className="font-sans text-xs text-[#53665A]">
                        {GALLERY_ITEMS[4].category}
                      </p>
                    </div>
                    <span className="font-serif text-xs italic text-[#9B7657] tabular-nums">
                      {GALLERY_ITEMS[4].number}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Row 4: Full-Width Image */}
          <div>
            <Reveal durationMs={900} yOffset={30}>
              <div className="group relative overflow-hidden bg-[#1C3028]">
                <div className="relative aspect-[21/9] sm:aspect-[24/9] overflow-hidden">
                  <img
                    src={GALLERY_ITEMS[3].image}
                    alt={GALLERY_ITEMS[3].caption}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-cover filter saturate-75 brightness-95 transition-all duration-900 ease-out group-hover:scale-[1.03] group-hover:saturate-100 group-hover:brightness-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/80 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 bg-[#101815] border-t border-[#53665A]/25 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-wider text-[#F5F1E7]">
                      {GALLERY_ITEMS[3].caption}
                    </h3>
                    <p className="font-sans text-xs text-[#53665A]">
                      {GALLERY_ITEMS[3].category}
                    </p>
                  </div>
                  <span className="font-serif text-sm italic text-[#9B7657] tabular-nums">
                    {GALLERY_ITEMS[3].number}
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
