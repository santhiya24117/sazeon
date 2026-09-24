import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { ASSETS } from '../data/content.ts';

interface HeroProps {
  onExplore: () => void;
  onBookVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onBookVisit }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPrefersReducedMotion(true);
      setIsLoaded(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-between overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 pt-28 pb-10"
      aria-label="Hero - The Arrival"
    >
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.hero}
          alt="The Address architectural exterior at dusk in Chennai"
          referrerPolicy="no-referrer"
          loading="eager"
          className={`h-full w-full object-cover object-center transition-all duration-1200 ease-out ${
            prefersReducedMotion
              ? 'scale-100 opacity-65'
              : isLoaded
              ? 'scale-100 opacity-65'
              : 'scale-[1.04] opacity-0'
          }`}
        />
        {/* Editorial Gradients & Tonal Scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#101815] via-[#101815]/60 to-[#101815]/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#101815]/80 via-transparent to-[#101815]/50"
          aria-hidden="true"
        />
      </div>

      {/* Top Location Kicker */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-4">
        <div
          className={`inline-flex items-center gap-3 transition-all duration-700 ease-out ${
            prefersReducedMotion || isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="h-px w-6 bg-[#9B7657]" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium tracking-[0.28em] text-[#EAE5D8]/80 uppercase">
            CHENNAI · INDIA
          </span>
        </div>
      </div>

      {/* Center Cinematic Editorial Statements */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl py-6">
        <div className="max-w-4xl">
          {/* Main Huge Display Serif Heading */}
          <h1
            className={`font-serif tracking-[0.02em] text-[#F5F1E7] transition-all duration-900 ease-out leading-[0.92] ${
              prefersReducedMotion || isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <span className="block text-[clamp(3.8rem,11vw,9.5rem)] font-normal uppercase select-none">
              THE
            </span>
            <span className="block text-[clamp(3.8rem,11vw,9.5rem)] font-normal uppercase select-none">
              ADDRESS
            </span>
          </h1>

          {/* Supporting Headline & Description */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div
              className={`md:col-span-7 transition-all duration-700 ease-out ${
                prefersReducedMotion || isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <p className="font-serif text-lg sm:text-xl lg:text-2xl text-[#F5F1E7]/90 tracking-wide uppercase leading-tight">
                A NEW PERSPECTIVE
                <br />
                ON URBAN LIVING.
              </p>
            </div>

            <div
              className={`md:col-span-5 transition-all duration-700 ease-out ${
                prefersReducedMotion || isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '850ms' }}
            >
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#EAE5D8]/75 max-w-md">
                A considered collection of residences shaped by light, space and the rhythm of the city.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 transition-all duration-700 ease-out ${
              prefersReducedMotion || isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <button
              onClick={onExplore}
              className="group inline-flex items-center justify-between sm:justify-start gap-4 border border-[#F5F1E7]/30 bg-[#F5F1E7]/10 hover:bg-[#F5F1E7] px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#F5F1E7] hover:text-[#101815] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
            >
              <span>EXPLORE THE RESIDENCE</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#9B7657] group-hover:text-[#101815] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onBookVisit}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#EAE5D8]/80 hover:text-[#F5F1E7] border border-transparent hover:border-[#53665A]/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
            >
              BOOK A PRIVATE VISIT
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Metadata & Scroll Indicator */}
      <div className="relative z-10 mx-auto w-full max-w-7xl border-t border-[#53665A]/25 pt-4">
        <div className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[#53665A] uppercase">
          <span>EST. 2027</span>
          <button
            onClick={onExplore}
            className="group flex items-center gap-2 hover:text-[#EAE5D8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="h-3 w-3 text-[#9B7657] transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
