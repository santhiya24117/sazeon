import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data/assets';

export const Transformation: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#0D0D0D] border-b border-[rgba(244,241,236,0.08)] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-8 border-b border-[rgba(244,241,236,0.12)]">
          <div>
            <span className="text-xs tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-3">
              REAL ARTISTRY
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#F4F1EC]">
              THE TRANSFORMATION
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A9A39B] max-w-sm tracking-wider leading-relaxed">
            Drag the line to unveil the metamorphosis. Undone raw texture refined into molten dimensional gloss.
          </p>
        </div>

        {/* Comparison Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden border border-[rgba(244,241,236,0.15)] shadow-2xl cursor-ew-resize bg-[#141414] comparison-slider-container"
          >
            {/* AFTER Image (Full Background) */}
            <img
              src={ASSETS.transformation.after}
              alt="After transformation at LUMIÈRE"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* BEFORE Image (Clipped by Slider Position) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src={ASSETS.transformation.before}
                alt="Before transformation at LUMIÈRE"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-[1.5px] h-full bg-[#C8A98A] shadow-[0_0_10px_rgba(200,169,138,0.5)]" />

              {/* Minimal UI Handle */}
              <div className="absolute w-10 h-10 rounded-full bg-[#0D0D0D]/90 border border-[#C8A98A] backdrop-blur-md flex items-center justify-center text-[#C8A98A] text-xs font-serif tracking-widest shadow-xl transition-transform duration-150 hover:scale-110">
                <span className="text-[10px] tracking-tight">◀ ▶</span>
              </div>
            </div>

            {/* BEFORE / AFTER Labels */}
            <div className="absolute top-6 left-6 z-20 pointer-events-none">
              <span className="px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-medium bg-[#0D0D0D]/80 backdrop-blur-sm border border-white/10 text-[#F4F1EC]">
                BEFORE
              </span>
            </div>
            <div className="absolute top-6 right-6 z-20 pointer-events-none">
              <span className="px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-medium bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#C8A98A]/40 text-[#C8A98A]">
                AFTER
              </span>
            </div>

            {/* Drag helper hint on bottom */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-75">
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#F4F1EC] bg-[#0D0D0D]/75 backdrop-blur-sm px-4 py-1 border border-white/10">
                DRAG OR SLIDE
              </span>
            </div>
          </div>

          {/* Editorial Specs Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A9A39B] border-t border-[rgba(244,241,236,0.08)] pt-6">
            <div className="flex items-center gap-6">
              <span className="text-[#F4F1EC] font-medium">GUEST: Aishwarya M.</span>
              <span>·</span>
              <span>PROTOCOL: Molten Balayage & Silk Cut</span>
              <span>·</span>
              <span>SESSION: 150 min</span>
            </div>
            <div className="text-[11px] tracking-widest uppercase text-[#C8A98A]">
              ATELIER COIMBATORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
