import React, { useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle ESC key and scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { label: 'PROJECT', id: 'project' },
    { label: 'RESIDENCES', id: 'residences' },
    { label: 'ARCHITECTURE', id: 'architecture' },
    { label: 'AMENITIES', id: 'amenities' },
    { label: 'LOCATION', id: 'location' },
    { label: 'AVAILABILITY', id: 'availability' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      ref={menuRef}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#101815] px-6 py-8 text-[#F5F1E7] transition-opacity duration-300 md:hidden"
    >
      {/* Header zone */}
      <div className="flex items-center justify-between border-b border-[#53665A]/25 pb-6">
        <span className="font-serif text-xl tracking-[0.2em] text-[#F5F1E7]">THE ADDRESS</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#F5F1E7] hover:text-[#9B7657] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
        >
          <X className="h-6 w-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Nav list */}
      <nav className="my-auto flex flex-col gap-6 py-8" aria-label="Mobile navigation">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                onClose();
              }}
              className="flex items-center justify-between text-left group py-1"
            >
              <span
                className={`font-serif text-3xl tracking-wide transition-colors ${
                  isActive ? 'text-[#F5F1E7]' : 'text-[#F5F1E7]/70 group-hover:text-[#F5F1E7]'
                }`}
              >
                {link.label}
              </span>
              {isActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#9B7657]" aria-label="Current section" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer action zone */}
      <div className="border-t border-[#53665A]/25 pt-6 flex flex-col gap-4">
        <button
          onClick={() => {
            onNavigate('visit');
            onClose();
          }}
          className="flex w-full items-center justify-between bg-[#1C3028] px-6 py-4 text-xs font-medium tracking-[0.2em] text-[#F5F1E7] transition-colors hover:bg-[#53665A]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
        >
          <span>BOOK A VISIT</span>
          <ArrowRight className="h-4 w-4 text-[#9B7657]" />
        </button>
        <div className="flex items-center justify-between text-[11px] tracking-widest text-[#53665A] uppercase">
          <span>CHENNAI · INDIA</span>
          <span>EST. 2027</span>
        </div>
      </div>
    </div>
  );
};
