import React from 'react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { CITY_TRANSIT } from '../data/content.ts';

export const CityWithinReach: React.FC = () => {
  return (
    <section
      id="city"
      className="relative overflow-hidden bg-[#EAE5D8] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 text-[#101815]"
      aria-label="The City, Within Reach"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="05 — CONNECTIVITY" theme="light" />
          <span className="font-serif text-xs italic text-[#53665A]">CHENNAI TRANSIT MATRIX</span>
        </div>

        {/* Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <Reveal durationMs={700} yOffset={25}>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#101815]">
                THE CITY,
                <br />
                WITHIN REACH.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal durationMs={700} delayMs={150} yOffset={25}>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-[#1C3028]/85 max-w-md">
                A residential address connected to the places that shape everyday Chennai.
              </p>
              <p className="mt-4 font-sans text-xs text-[#53665A]">
                Positioned in a quiet enclave buffered from major thoroughfares, yet effortlessly accessible to international transit hubs, cultural avenues, and premier medical districts.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Editorial Transit Metrics Table (NO CARDS) */}
        <div className="border-t border-[#53665A]/25 divide-y divide-[#53665A]/20">
          {CITY_TRANSIT.map((item, idx) => (
            <Reveal key={item.destination} delayMs={idx * 80} durationMs={600}>
              <div className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-[#101815]/[0.02] px-2 sm:px-4">
                {/* Time & Unit */}
                <div className="flex items-baseline gap-4 sm:gap-6 min-w-[200px]">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101815] tabular-nums">
                    {item.time}
                  </span>
                </div>

                {/* Destination */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-wide text-[#1C3028]">
                    {item.destination}
                  </h3>
                  <p className="mt-1 font-sans text-xs text-[#53665A]">
                    {item.route}
                  </p>
                </div>

                {/* Distance & Metric */}
                <div className="text-left md:text-right">
                  <span className="font-serif text-sm italic text-[#9B7657] tabular-nums block">
                    {item.distance}
                  </span>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-[#53665A]">
                    APPROXIMATE TRANSIT
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Illustrative Disclaimer */}
        <div className="mt-12 pt-6 border-t border-[#53665A]/20 flex flex-col sm:flex-row items-baseline justify-between text-xs text-[#53665A]">
          <span>*Illustrative travel approximations under standard traffic flow.</span>
          <span className="mt-2 sm:mt-0 font-serif italic">SAZEON PORTFOLIO GEODATA</span>
        </div>
      </div>
    </section>
  );
};
