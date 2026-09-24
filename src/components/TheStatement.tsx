import React from 'react';
import { Reveal } from './Reveal.tsx';
import { ASSETS } from '../data/content.ts';

export const TheStatement: React.FC = () => {
  return (
    <section
      id="project"
      className="relative overflow-hidden bg-[#EAE5D8] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-40 text-[#101815]"
      aria-label="The Statement"
    >
      <div className="mx-auto max-w-7xl">
        {/* Editorial Index Kicker */}
        <div className="mb-12 flex items-center justify-between border-b border-[#53665A]/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#9B7657]" aria-hidden="true" />
            <span className="font-sans text-[11px] font-medium tracking-[0.25em] text-[#53665A] uppercase">
              STATEMENT / PERSPECTIVE
            </span>
          </div>
          <span className="font-serif text-xs italic text-[#53665A]">00</span>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-7">
            <Reveal durationMs={700} yOffset={30}>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.01em] uppercase text-[#101815]">
                NOT JUST
                <br />
                A PLACE
                <br />
                TO LIVE.
                <br />
                <br />
                <span className="text-[#1C3028]/85">
                  A PLACE
                  <br />
                  TO BELONG.
                </span>
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Small Paragraph & Architectural Detail */}
          <div className="lg:col-span-5 lg:pt-6 flex flex-col justify-between">
            <Reveal durationMs={700} delayMs={150} yOffset={30}>
              <div className="max-w-md">
                <p className="font-sans text-base sm:text-lg leading-relaxed text-[#1C3028]/85">
                  THE ADDRESS brings together architecture, landscape and everyday living in one considered environment.
                </p>
                <p className="mt-6 font-sans text-xs sm:text-sm leading-relaxed text-[#53665A]">
                  Conceived as an urban sanctuary in Chennai, each residence frames natural stone, native botanical microclimates, and deliberate architectural stillness away from the metropolitan tempo.
                </p>

                <div className="mt-10 pt-6 border-t border-[#53665A]/20 flex items-center justify-between text-xs tracking-widest text-[#53665A] uppercase">
                  <span>RESIDENTIAL PORTFOLIO CONCEPT</span>
                  <span>SAZEON ARCHITECTURE</span>
                </div>
              </div>
            </Reveal>

            {/* Overlapping Architectural Visual */}
            <div className="mt-12 lg:mt-16">
              <Reveal durationMs={800} delayMs={250} yOffset={30}>
                <div className="relative overflow-hidden bg-[#1C3028] shadow-sm">
                  <img
                    src={ASSETS.residence}
                    alt="Living area sequence with natural light and courtyard connection"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-900 ease-out hover:scale-[1.03]"
                  />
                  <div className="p-4 bg-[#EAE5D8] border-t border-[#53665A]/20 flex items-center justify-between text-[11px] tracking-wider text-[#53665A] uppercase">
                    <span>NATURAL LIGHT SEQUENCE</span>
                    <span className="tabular-nums">FIG. 00A</span>
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
