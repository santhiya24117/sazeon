import React, { useState, useRef, useCallback } from 'react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { ASSETS } from '../data/content.ts';

export const ConceptRealitySlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(prev - 5, 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(prev + 5, 95));
    }
  };

  return (
    <section
      id="transformation"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Architectural Transformation: Concept to Reality"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="10 — ARCHITECTURAL TRANSFORMATION" />
          <span className="font-serif text-xs italic text-[#53665A]">SCHEMATIC TO BUILT FORM</span>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <Reveal durationMs={700} yOffset={25}>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
              CONCEPT
              <br />
              TO REALITY.
            </h2>
          </Reveal>
          <p className="mt-4 font-sans text-xs sm:text-sm text-[#53665A] tracking-wider uppercase">
            COMPARE THE ARCHITECTURAL STUDY RENDERING WITH THE FINISHED BUILT ELEVATION
          </p>
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="relative mx-auto max-w-5xl">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            tabIndex={0}
            role="slider"
            aria-label="Concept to reality comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            onKeyDown={handleKeyDown}
            className="group relative aspect-[16/10] sm:aspect-[21/11] w-full select-none overflow-hidden bg-[#1C3028] border border-[#53665A]/30 cursor-ew-resize focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
          >
            {/* Base Underneath Layer: Completed Photography (Reality) */}
            <div className="absolute inset-0">
              <img
                src={ASSETS.hero}
                alt="The Address completed architectural photography"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-6 right-6 z-10 bg-[#101815]/90 px-3 py-1.5 border border-[#53665A]/30">
                <span className="font-serif text-xs tracking-[0.2em] text-[#F5F1E7] uppercase">
                  REALITY // COMPLETED ELEVATION
                </span>
              </div>
            </div>

            {/* Top Clipped Layer: Concept Study (Render) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={ASSETS.concept}
                alt="The Address architectural blueprint concept visualization"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full object-cover object-center filter contrast-110"
              />
              <div className="absolute inset-0 bg-[#101815]/30" />
              <div className="absolute bottom-6 left-6 z-10 bg-[#101815]/90 px-3 py-1.5 border border-[#53665A]/30">
                <span className="font-serif text-xs tracking-[0.2em] text-[#9B7657] uppercase">
                  CONCEPT // ARCHITECTURAL STUDY
                </span>
              </div>
            </div>

            {/* Vertical Divider Line with DRAG Indicator */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[1.5px] bg-[#F5F1E7]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Minimal Knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="flex h-10 w-24 items-center justify-center bg-[#101815] border border-[#9B7657] text-[10px] font-mono tracking-[0.2em] text-[#F5F1E7] shadow-xl">
                  ← DRAG →
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Minimal Status */}
          <div className="mt-4 flex items-center justify-between text-xs text-[#53665A]">
            <span className="font-sans">DRAG SLIDER OR USE ARROW KEYS TO EXPLORE TRANSFORMATION</span>
            <span className="font-mono text-[11px] tabular-nums text-[#9B7657]">
              ALIGNMENT {Math.round(sliderPosition)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
