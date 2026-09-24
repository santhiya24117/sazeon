import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu.tsx';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'PROJECT', id: 'project' },
    { label: 'RESIDENCES', id: 'residences' },
    { label: 'ARCHITECTURE', id: 'architecture' },
    { label: 'AMENITIES', id: 'amenities' },
    { label: 'LOCATION', id: 'location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-out ${
          isScrolled
            ? 'bg-[#101815]/95 backdrop-blur-md border-b border-[#53665A]/20 py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Zone 1: Single element brand wordmark */}
          <button
            onClick={() => onNavigate('hero')}
            className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
            aria-label="THE ADDRESS home"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.22em] text-[#F5F1E7] transition-opacity duration-300 group-hover:opacity-85">
              THE ADDRESS
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="relative group py-1 text-xs font-medium tracking-[0.2em] text-[#F5F1E7]/80 hover:text-[#F5F1E7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-3 bg-[#9B7657] transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                  {!isActive && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[#53665A]/50 group-hover:w-3 transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('visit')}
              className="group hidden sm:inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.2em] text-[#F5F1E7] hover:text-[#EAE5D8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657] py-1"
            >
              <span className="whitespace-nowrap">BOOK A VISIT</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#9B7657] transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#F5F1E7] hover:text-[#9B7657] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />
    </>
  );
};
