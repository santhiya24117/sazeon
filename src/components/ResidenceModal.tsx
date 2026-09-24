import React, { useEffect } from 'react';
import { X, ArrowRight, Check, Compass } from 'lucide-react';
import { ResidenceConfig } from '../types.ts';
import { ASSETS } from '../data/content.ts';

interface ResidenceModalProps {
  config: ResidenceConfig | null;
  onClose: () => void;
  onBookVisitForResidence: (residenceName: string) => void;
}

export const ResidenceModal: React.FC<ResidenceModalProps> = ({
  config,
  onClose,
  onBookVisitForResidence,
}) => {
  useEffect(() => {
    if (!config) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [config, onClose]);

  if (!config) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${config.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#101815]/90 backdrop-blur-md transition-opacity"
    >
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1C3028] border border-[#53665A]/40 text-[#F5F1E7] shadow-2xl p-6 sm:p-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#53665A]/30 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm italic text-[#9B7657] tabular-nums">
              {config.number}
            </span>
            <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#53665A]">
              PORTFOLIO CONFIGURATION DOSSIER
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#EAE5D8]/70 hover:text-[#F5F1E7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
            aria-label="Close dialog"
          >
            <X className="h-6 w-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-8">
          <div>
            <span className="font-serif text-xs italic tracking-widest text-[#53665A] uppercase block mb-1">
              {config.headline}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#F5F1E7]">
              {config.name}
            </h3>
            <p className="mt-1 font-serif text-2xl text-[#9B7657] tabular-nums">
              {config.area} · {config.price}
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#EAE5D8]/85">
            {config.description}
          </p>

          {/* Quick Specs Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-[#53665A]/30 py-6 text-xs">
            <div>
              <span className="block text-[#53665A] uppercase tracking-wider">BEDROOMS</span>
              <span className="mt-1 block font-serif text-lg text-[#F5F1E7]">{config.bedrooms}</span>
            </div>
            <div>
              <span className="block text-[#53665A] uppercase tracking-wider">BATHROOMS</span>
              <span className="mt-1 block font-serif text-lg text-[#F5F1E7]">{config.bathrooms}</span>
            </div>
            <div>
              <span className="block text-[#53665A] uppercase tracking-wider">OUTDOOR</span>
              <span className="mt-1 block font-serif text-sm text-[#F5F1E7]">{config.outdoor}</span>
            </div>
            <div>
              <span className="block text-[#53665A] uppercase tracking-wider">ORIENTATION</span>
              <span className="mt-1 block font-serif text-xs text-[#F5F1E7]">{config.aspect}</span>
            </div>
          </div>

          {/* Key Architectural Provisions */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-[#53665A] mb-3">
              ARCHITECTURAL PROVISIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#EAE5D8]">
              {config.keyFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9B7657]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => {
                onClose();
                onBookVisitForResidence(`${config.name} (${config.area})`);
              }}
              className="flex-1 bg-[#F5F1E7] hover:bg-[#EAE5D8] text-[#101815] py-3.5 px-6 text-xs font-semibold tracking-[0.2em] transition-colors flex items-center justify-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
            >
              <span>SCHEDULE PRIVATE VIEWING</span>
              <ArrowRight className="h-4 w-4 text-[#9B7657]" />
            </button>
            <button
              onClick={onClose}
              className="border border-[#53665A]/40 text-[#EAE5D8] hover:text-[#F5F1E7] py-3.5 px-6 text-xs font-medium tracking-[0.2em] transition-colors text-center"
            >
              RETURN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
