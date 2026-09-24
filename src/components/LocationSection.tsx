import React, { useState } from 'react';
import { Compass, MapPin, Navigation } from 'lucide-react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';

export const LocationSection: React.FC = () => {
  const [activePoi, setActivePoi] = useState<string | null>(null);

  const landmarks = [
    {
      id: 'metro',
      name: 'METRO STATION',
      time: '08 MIN',
      x: 32,
      y: 28,
      type: 'Transit',
    },
    {
      id: 'airport',
      name: 'AIRPORT ACCESS',
      time: '12 MIN',
      x: 78,
      y: 72,
      type: 'Aviation',
    },
    {
      id: 'school',
      name: 'INTERNATIONAL ACADEMY',
      time: '05 MIN',
      x: 22,
      y: 65,
      type: 'Education',
    },
    {
      id: 'hospital',
      name: 'TERTIARY HOSPITAL',
      time: '07 MIN',
      x: 74,
      y: 32,
      type: 'Healthcare',
    },
    {
      id: 'business',
      name: 'COMMERCIAL DISTRICT',
      time: '10 MIN',
      x: 48,
      y: 82,
      type: 'Commercial',
    },
  ];

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Location and Conceptual Map"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="06 — LOCATION" />
          <span className="font-serif text-xs italic text-[#53665A]">CONCEPTUAL CARTOGRAPHY</span>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <Reveal durationMs={700} yOffset={25}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E7]">
              ENCLAVE AT CHENNAI
            </h2>
            <p className="mt-3 font-sans text-xs sm:text-sm text-[#53665A] tracking-wider uppercase">
              SECLUDED BOTANICAL SANCTUARY WITH REGIONAL CONNECTIVITY
            </p>
          </Reveal>
        </div>

        {/* Custom Architectural Map Treatment Canvas */}
        <div className="relative overflow-hidden bg-[#1C3028] border border-[#53665A]/30 p-6 sm:p-10 shadow-2xl">
          {/* Top Cartographic Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#53665A]/25 pb-4 mb-8 text-[11px] font-mono tracking-wider text-[#53665A]">
            <div className="flex items-center gap-3">
              <Compass className="h-4 w-4 text-[#9B7657]" />
              <span className="text-[#EAE5D8]">CHENNAI METROPOLITAN AXIS · 13.0827° N, 80.2707° E REF</span>
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <span className="text-[#9B7657]">ISOCHRONIC RADIUS: 5–15 MIN</span>
              <span>SCALE: CONCEPTUAL</span>
            </div>
          </div>

          {/* SVG Map Graphic */}
          <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full bg-[#101815] border border-[#53665A]/20 overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 1000 550"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle Concentric Isochronic Distance Rings */}
              <circle cx="500" cy="275" r="80" stroke="#53665A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="500" cy="275" r="170" stroke="#53665A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="500" cy="275" r="260" stroke="#53665A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.2" />

              {/* Radial Coordinate Lines */}
              <line x1="500" y1="20" x2="500" y2="530" stroke="#53665A" strokeWidth="0.5" opacity="0.2" />
              <line x1="20" y1="275" x2="980" y2="275" stroke="#53665A" strokeWidth="0.5" opacity="0.2" />

              {/* Major Arterial Roads in Moss (#53665A) */}
              <path
                d="M 50 180 Q 300 240 500 275 T 950 360"
                stroke="#53665A"
                strokeWidth="2.5"
                opacity="0.85"
              />
              <path
                d="M 120 480 Q 380 380 500 275 T 880 80"
                stroke="#53665A"
                strokeWidth="2.5"
                opacity="0.85"
              />
              <path
                d="M 280 40 L 420 220 L 500 275 L 620 380 L 800 520"
                stroke="#53665A"
                strokeWidth="1.5"
                opacity="0.6"
              />

              {/* Secondary Street Network */}
              <path d="M 350 140 L 650 140" stroke="#53665A" strokeWidth="0.8" opacity="0.4" />
              <path d="M 280 410 L 720 410" stroke="#53665A" strokeWidth="0.8" opacity="0.4" />
              <path d="M 200 220 L 200 360" stroke="#53665A" strokeWidth="0.8" opacity="0.3" />
              <path d="M 800 180 L 800 340" stroke="#53665A" strokeWidth="0.8" opacity="0.3" />

              {/* Bay of Bengal Stylized Coastal Edge (Right side) */}
              <path
                d="M 920 10 Q 940 280 910 540"
                stroke="#53665A"
                strokeWidth="3"
                strokeDasharray="6 4"
                opacity="0.5"
              />
              <text
                x="940"
                y="300"
                fill="#53665A"
                fontSize="10"
                fontFamily="var(--font-sans-active)"
                letterSpacing="3"
                transform="rotate(90, 940, 300)"
              >
                BAY OF BENGAL
              </text>

              {/* Center Focal Point: THE ADDRESS */}
              <g transform="translate(500, 275)">
                {/* Subtle pulse ring */}
                <circle cx="0" cy="0" r="16" stroke="#9B7657" strokeWidth="1" opacity="0.6" />
                <circle cx="0" cy="0" r="6" fill="#9B7657" />
                <circle cx="0" cy="0" r="2" fill="#F5F1E7" />

                {/* Callout Flag */}
                <line x1="0" y1="-8" x2="0" y2="-45" stroke="#9B7657" strokeWidth="1.5" />
                <rect x="-70" y="-72" width="140" height="26" fill="#101815" stroke="#9B7657" strokeWidth="1" />
                <text
                  x="0"
                  y="-55"
                  fill="#F5F1E7"
                  fontSize="11"
                  fontFamily="var(--font-serif-active)"
                  letterSpacing="2"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  THE ADDRESS
                </text>
              </g>

              {/* Surrounding Landmark Markers */}
              {landmarks.map((lm) => {
                const posX = (lm.x / 100) * 1000;
                const posY = (lm.y / 100) * 550;
                const isHovered = activePoi === lm.id;

                return (
                  <g
                    key={lm.id}
                    transform={`translate(${posX}, ${posY})`}
                    className="cursor-pointer group"
                    onMouseEnter={() => setActivePoi(lm.id)}
                    onMouseLeave={() => setActivePoi(null)}
                  >
                    <circle
                      cx="0"
                      cy="0"
                      r={isHovered ? '7' : '4'}
                      fill={isHovered ? '#9B7657' : '#53665A'}
                      className="transition-all duration-300"
                    />
                    <text
                      x="10"
                      y="-4"
                      fill="#F5F1E7"
                      fontSize="10"
                      fontFamily="var(--font-sans-active)"
                      letterSpacing="1"
                      fontWeight="500"
                    >
                      {lm.name}
                    </text>
                    <text
                      x="10"
                      y="10"
                      fill="#9B7657"
                      fontSize="9"
                      fontFamily="monospace"
                      letterSpacing="1"
                    >
                      {lm.time}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Conceptual Disclaimer & Quick Guide */}
          <div className="mt-6 flex flex-col sm:flex-row items-baseline justify-between text-xs text-[#53665A]">
            <p className="max-w-xl">
              *Conceptual architectural cartography. Fictional residential development created as a high-end portfolio project for SAZEON.
            </p>
            <div className="mt-2 sm:mt-0 flex items-center gap-4 text-[11px] font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#9B7657]" />
                <span className="text-[#F5F1E7]">RESIDENCE</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#53665A]" />
                <span>TRANSIT NODES</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
