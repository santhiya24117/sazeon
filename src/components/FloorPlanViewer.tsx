import React, { useState } from 'react';
import { Compass, Download, Layers, Ruler, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { RESIDENCE_CONFIGS } from '../data/content.ts';
import { ResidenceConfig } from '../types.ts';

interface FloorPlanViewerProps {
  initialConfig?: ResidenceConfig;
  onBookTourForPlan: (config: ResidenceConfig) => void;
}

export const FloorPlanViewer: React.FC<FloorPlanViewerProps> = ({
  initialConfig,
  onBookTourForPlan,
}) => {
  const [selectedKey, setSelectedKey] = useState<string>(
    initialConfig?.floorPlanKey || '3br'
  );
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  const currentConfig =
    RESIDENCE_CONFIGS.find((r) => r.floorPlanKey === selectedKey) ||
    RESIDENCE_CONFIGS[2];

  return (
    <section
      id="floorplans"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Architectural Floor Plan Viewer"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="04 — ARCHITECTURAL DRAWINGS" />
          <span className="font-serif text-xs italic text-[#53665A]">SCALE 1:100 SCHEMATIC</span>
        </div>

        {/* Heading & Config Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <Reveal durationMs={700} yOffset={20}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E7]">
                SCHEMATIC FLOOR PLAN
              </h2>
              <p className="mt-3 font-sans text-xs sm:text-sm text-[#53665A] tracking-wider uppercase">
                PRECISION STRUCTURAL PROPORTIONS & DAYLIGHT ORIENTATION
              </p>
            </Reveal>
          </div>

          {/* Config Switcher */}
          <div className="flex flex-wrap items-center gap-2 border border-[#53665A]/30 p-1 bg-[#1C3028]/40">
            {RESIDENCE_CONFIGS.map((res) => {
              const isSelected = selectedKey === res.floorPlanKey;
              return (
                <button
                  key={res.id}
                  onClick={() => setSelectedKey(res.floorPlanKey)}
                  className={`px-4 py-2 text-xs font-medium tracking-[0.16em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657] ${
                    isSelected
                      ? 'bg-[#101815] text-[#F5F1E7] border-b-2 border-[#9B7657]'
                      : 'text-[#EAE5D8]/70 hover:text-[#F5F1E7]'
                  }`}
                >
                  {res.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Floor Plan Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-[#1C3028]/30 border border-[#53665A]/30 p-6 sm:p-10">
          {/* Main Vector Architectural Blueprint SVG */}
          <div className="lg:col-span-8 bg-[#101815] border border-[#53665A]/25 p-6 sm:p-10 relative overflow-hidden">
            {/* Blueprint Grid Lines Background */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #F5F1E7 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Compass & Scale Overlay */}
            <div className="flex items-center justify-between border-b border-[#53665A]/20 pb-4 mb-8 text-[11px] font-mono tracking-wider text-[#53665A]">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#9B7657]" />
                <span className="text-[#EAE5D8]">NORTH / 18° DEVIATION</span>
              </div>
              <div className="flex items-center gap-4">
                <span>GRID: 1.00 METER</span>
                <span className="hidden sm:inline">STRUCTURAL AXIS A–D</span>
              </div>
            </div>

            {/* Interactive Vector Floor Plan */}
            <div className="relative aspect-[16/11] w-full flex items-center justify-center">
              <svg
                viewBox="0 0 800 550"
                className="w-full h-full text-[#F5F1E7]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Structural Boundary Walls */}
                <rect
                  x="50"
                  y="40"
                  width="700"
                  height="460"
                  stroke="#53665A"
                  strokeWidth="4"
                  fill="#1C3028"
                  fillOpacity="0.15"
                />

                {/* Shaded Outdoor Veranda / Terrace Zone */}
                <rect
                  x="52"
                  y="42"
                  width="220"
                  height="456"
                  stroke="#9B7657"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="#101815"
                  fillOpacity="0.4"
                  onMouseEnter={() => setHoveredRoom('Veranda / Private Garden')}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-opacity hover:opacity-80"
                />
                <text
                  x="160"
                  y="260"
                  fill="#9B7657"
                  fontSize="12"
                  fontFamily="var(--font-sans-active)"
                  letterSpacing="2"
                  textAnchor="middle"
                >
                  DEEP SHADED VERANDA
                </text>
                <text
                  x="160"
                  y="280"
                  fill="#53665A"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {selectedKey === 'penthouse' ? '7.8m × 5.2m · SKY LAP POOL' : '6.4m × 3.2m · BOTANICAL'}
                </text>

                {/* Grand Living & Dining Pavilion */}
                <rect
                  x="280"
                  y="45"
                  width="270"
                  height="260"
                  stroke="#53665A"
                  strokeWidth="2"
                  fill={hoveredRoom === 'Living Pavilion' ? '#1C3028' : '#101815'}
                  fillOpacity="0.7"
                  onMouseEnter={() => setHoveredRoom('Living Pavilion')}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-colors"
                />
                <text
                  x="415"
                  y="165"
                  fill="#F5F1E7"
                  fontSize="13"
                  fontFamily="var(--font-serif-active)"
                  letterSpacing="1.5"
                  textAnchor="middle"
                >
                  GRAND LIVING SALON
                </text>
                <text
                  x="415"
                  y="185"
                  fill="#53665A"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  8.6m × 5.8m · 3.8M CEILING
                </text>

                {/* Sliding Glass Glazing Line */}
                <line
                  x1="272"
                  y1="45"
                  x2="272"
                  y2="305"
                  stroke="#EAE5D8"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />

                {/* Primary Master Suite */}
                <rect
                  x="560"
                  y="45"
                  width="185"
                  height="260"
                  stroke="#53665A"
                  strokeWidth="2"
                  fill={hoveredRoom === 'Master Bedroom' ? '#1C3028' : '#101815'}
                  fillOpacity="0.7"
                  onMouseEnter={() => setHoveredRoom('Master Bedroom')}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-colors"
                />
                <text
                  x="652"
                  y="155"
                  fill="#F5F1E7"
                  fontSize="12"
                  fontFamily="var(--font-serif-active)"
                  letterSpacing="1"
                  textAnchor="middle"
                >
                  MASTER SUITE
                </text>
                <text
                  x="652"
                  y="175"
                  fill="#53665A"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  5.4m × 4.6m
                </text>

                {/* Ensuite Stone Bath Sanctuary */}
                <rect
                  x="560"
                  y="315"
                  width="185"
                  height="180"
                  stroke="#53665A"
                  strokeWidth="2"
                  fill={hoveredRoom === 'Ensuite Sanctuary' ? '#1C3028' : '#101815'}
                  fillOpacity="0.7"
                  onMouseEnter={() => setHoveredRoom('Ensuite Sanctuary')}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-colors"
                />
                <circle cx="652" cy="385" r="28" stroke="#9B7657" strokeWidth="1" strokeDasharray="3 3" />
                <text
                  x="652"
                  y="435"
                  fill="#EAE5D8"
                  fontSize="11"
                  fontFamily="var(--font-sans-active)"
                  letterSpacing="1"
                  textAnchor="middle"
                >
                  STONE BATH PAVILION
                </text>

                {/* Secondary Bedroom / Study */}
                <rect
                  x="280"
                  y="315"
                  width="140"
                  height="180"
                  stroke="#53665A"
                  strokeWidth="2"
                  fill={hoveredRoom === 'Guest Suite' ? '#1C3028' : '#101815'}
                  fillOpacity="0.7"
                  onMouseEnter={() => setHoveredRoom('Guest Suite')}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-colors"
                />
                <text
                  x="350"
                  y="400"
                  fill="#F5F1E7"
                  fontSize="11"
                  fontFamily="var(--font-serif-active)"
                  letterSpacing="1"
                  textAnchor="middle"
                >
                  {selectedKey === '1br' ? 'LIBRARY / STUDY' : 'BEDROOM 02'}
                </text>
                <text
                  x="350"
                  y="418"
                  fill="#53665A"
                  fontSize="9"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  4.2m × 3.6m
                </text>

                {/* Gourmet Prep Kitchen & Pantry */}
                <rect
                  x="430"
                  y="315"
                  width="120"
                  height="180"
                  stroke="#53665A"
                  strokeWidth="2"
                  fill={hoveredRoom === 'Culinary Gallery' ? '#1C3028' : '#101815'}
                  fillOpacity="0.7"
                  onMouseEnter={() => setHoveredRoom('Culinary Gallery')}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-colors"
                />
                <text
                  x="490"
                  y="400"
                  fill="#F5F1E7"
                  fontSize="11"
                  fontFamily="var(--font-serif-active)"
                  letterSpacing="1"
                  textAnchor="middle"
                >
                  CULINARY
                </text>
                <text
                  x="490"
                  y="418"
                  fill="#53665A"
                  fontSize="9"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  PREP GALLERY
                </text>

                {/* Entrance Vestibule Arrow */}
                <path d="M 490 515 L 490 496 M 486 502 L 490 496 L 494 502" stroke="#9B7657" strokeWidth="2" />
                <text
                  x="490"
                  y="535"
                  fill="#9B7657"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  PRIVATE FOYER ENTRY
                </text>

                {/* Dimension Ticks & Markers */}
                <line x1="50" y1="25" x2="750" y2="25" stroke="#53665A" strokeWidth="1" />
                <line x1="50" y1="20" x2="50" y2="30" stroke="#53665A" strokeWidth="1" />
                <line x1="750" y1="20" x2="750" y2="30" stroke="#53665A" strokeWidth="1" />
                <text
                  x="400"
                  y="20"
                  fill="#53665A"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  TOTAL WIDTH: 21.8 METERS
                </text>
              </svg>
            </div>

            {/* Hover Room Callout */}
            <div className="mt-4 pt-4 border-t border-[#53665A]/20 flex items-center justify-between text-xs text-[#53665A]">
              <span>
                {hoveredRoom ? (
                  <span className="text-[#9B7657]">ACTIVE INSPECTION: {hoveredRoom}</span>
                ) : (
                  <span>HOVER ROOM SECTIONS TO INSPECT PROPORTIONS</span>
                )}
              </span>
              <span className="font-mono text-[11px] text-[#53665A]">SCHEMATIC REF. AD-2027-{selectedKey.toUpperCase()}</span>
            </div>
          </div>

          {/* Right Specifications Column (Matching User Prompt specs) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div>
              <span className="font-serif text-xs italic tracking-widest text-[#9B7657] uppercase block mb-1">
                ARCHITECTURAL SPECIFICATION
              </span>
              <h3 className="font-serif text-3xl uppercase tracking-wide text-[#F5F1E7]">
                {currentConfig.name}
              </h3>
              <p className="mt-1 font-serif text-2xl text-[#9B7657] tabular-nums">
                {currentConfig.area}
              </p>
            </div>

            {/* Clean Specifications Table with thin separators */}
            <div className="border-t border-[#53665A]/30 divide-y divide-[#53665A]/20 text-xs">
              <div className="py-3.5 flex items-center justify-between">
                <span className="font-sans text-[#53665A] uppercase tracking-wider">BEDROOMS</span>
                <span className="font-serif text-base text-[#F5F1E7] tabular-nums">{currentConfig.bedrooms}</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="font-sans text-[#53665A] uppercase tracking-wider">BATHROOMS</span>
                <span className="font-serif text-base text-[#F5F1E7] tabular-nums">{currentConfig.bathrooms}</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="font-sans text-[#53665A] uppercase tracking-wider">TERRACE</span>
                <span className="font-serif text-base text-[#F5F1E7]">YES</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="font-sans text-[#53665A] uppercase tracking-wider">PRIMARY ASPECT</span>
                <span className="font-serif text-xs text-[#EAE5D8]">{currentConfig.aspect}</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="font-sans text-[#53665A] uppercase tracking-wider">CLEAR CEILING</span>
                <span className="font-serif text-sm text-[#F5F1E7]">{currentConfig.ceilingHeight}</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="font-sans text-[#53665A] uppercase tracking-wider">EST. PORTFOLIO PRICE</span>
                <span className="font-serif text-sm text-[#9B7657]">{currentConfig.price}</span>
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onBookTourForPlan(currentConfig)}
                className="w-full bg-[#1C3028] hover:bg-[#53665A]/30 text-[#F5F1E7] py-3.5 px-6 text-xs font-medium tracking-[0.2em] transition-colors flex items-center justify-center gap-3 border border-[#53665A]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
              >
                <span>REQUEST COMPLETE CAD DOSSIER</span>
              </button>
              <p className="text-[11px] leading-relaxed text-[#53665A] text-center">
                *Conceptual architectural drawing for SAZEON design evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
