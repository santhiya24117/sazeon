import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal.tsx';

interface CTASectionProps {
  onBookVisit: () => void;
  onExploreResidences: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onBookVisit,
  onExploreResidences,
}) => {
  return (
    <section
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-32 sm:py-44 lg:py-52 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Final Call to Action"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <Reveal durationMs={800} yOffset={30}>
            <h2 className="font-serif text-[clamp(3.2rem,8.5vw,7.5rem)] font-normal leading-[0.92] tracking-[-0.02em] uppercase text-[#F5F1E7]">
              FIND
              <br />
              YOUR
              <br />
              ADDRESS.
            </h2>
          </Reveal>

          <Reveal durationMs={800} delayMs={150} yOffset={25}>
            <p className="mt-8 sm:mt-10 font-sans text-base sm:text-xl text-[#EAE5D8]/80 max-w-xl leading-relaxed">
              Discover a residence designed around how you want to live.
            </p>
          </Reveal>

          <Reveal durationMs={800} delayMs={300} yOffset={25}>
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <button
                onClick={onBookVisit}
                className="group inline-flex items-center justify-between sm:justify-start gap-5 bg-[#F5F1E7] hover:bg-[#EAE5D8] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#101815] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
              >
                <span>BOOK A PRIVATE VISIT</span>
                <ArrowRight className="h-4 w-4 text-[#9B7657] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onExploreResidences}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-medium tracking-[0.2em] text-[#EAE5D8]/80 hover:text-[#F5F1E7] border border-[#53665A]/40 hover:border-[#F5F1E7]/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
              >
                EXPLORE RESIDENCES
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
