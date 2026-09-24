import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'PROJECT', id: 'project' },
    { label: 'RESIDENCES', id: 'residences' },
    { label: 'ARCHITECTURE', id: 'architecture' },
    { label: 'AMENITIES', id: 'amenities' },
    { label: 'LOCATION', id: 'location' },
    { label: 'CONTACT', id: 'visit' },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-[#1C3028] px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28 pb-12 text-[#F5F1E7] border-t border-[#53665A]/25"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#53665A]/25">
          {/* Brand Wordmark & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-[#F5F1E7]">
              THE ADDRESS
            </h2>
            <p className="font-serif text-xs sm:text-sm tracking-widest uppercase text-[#9B7657]">
              A NEW PERSPECTIVE ON URBAN LIVING.
            </p>
            <p className="font-sans text-xs text-[#53665A] max-w-sm pt-2">
              Chennai, India · Curated architectural luxury residence by SAZEON.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#53665A] block mb-4">
              INDEX
            </span>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs font-medium tracking-[0.18em]" aria-label="Footer Navigation">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.id)}
                  className="text-left text-[#EAE5D8]/75 hover:text-[#F5F1E7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-[#EAE5D8]/70 hover:text-[#F5F1E7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5 text-[#9B7657] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-baseline justify-between text-xs text-[#53665A] gap-4">
          <div className="space-y-1">
            <p className="tracking-wide">
              © 2027 THE ADDRESS
            </p>
            <p className="font-serif italic text-[#9B7657]/80">
              A SAZEON PORTFOLIO CONCEPT
            </p>
          </div>

          <div className="text-left sm:text-right font-sans text-[11px] text-[#53665A] max-w-md">
            This website is a speculative luxury portfolio experience created to demonstrate high-end digital real-estate design. Not an active commercial real-estate offering.
          </div>
        </div>
      </div>
    </footer>
  );
};
