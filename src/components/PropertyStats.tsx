import React from 'react';
import { Reveal } from './Reveal.tsx';

export const PropertyStats: React.FC = () => {
  const stats = [
    {
      number: '28',
      label: 'PRIVATE RESIDENCES',
      detail: 'Curated boutique collection',
    },
    {
      number: '03',
      label: 'BEDROOM CONFIGURATIONS',
      detail: 'From suites to penthouses',
    },
    {
      number: '1,420+',
      label: 'SQ. FT. FROM',
      detail: 'Spacious floor plates',
    },
    {
      number: '2027',
      label: 'EXPECTED COMPLETION',
      detail: 'Under architectural curation',
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-y border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Property Key Statistics"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delayMs={idx * 120} durationMs={700}>
              <div className="flex flex-col border-l border-[#53665A]/30 pl-6 sm:pl-8">
                <span className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-none tracking-tight text-[#F5F1E7] tabular-nums">
                  {stat.number}
                </span>
                <span className="mt-4 font-sans text-xs font-semibold tracking-[0.2em] text-[#EAE5D8]/90 uppercase">
                  {stat.label}
                </span>
                <span className="mt-1 font-sans text-[11px] tracking-wide text-[#53665A]">
                  {stat.detail}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
