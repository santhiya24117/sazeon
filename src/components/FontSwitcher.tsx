/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Type, Check, X, Sparkles } from 'lucide-react';

export type FontPresetKey = 'monograph' | 'lapidary' | 'warm-contemporary' | 'milanese-editorial';

interface FontOption {
  id: FontPresetKey;
  name: string;
  tagline: string;
  serifName: string;
  sansName: string;
  previewHeading: string;
}

const FONT_OPTIONS: FontOption[] = [
  {
    id: 'monograph',
    name: 'Architectural Monograph',
    tagline: 'Recommended — Chiseled quiet luxury, museum-grade serenity',
    serifName: 'Cormorant Garamond',
    sansName: 'Plus Jakarta Sans',
    previewHeading: 'The Address',
  },
  {
    id: 'lapidary',
    name: 'Monumental Lapidary',
    tagline: 'Classical stone-carved capitals & Roman inscriptions',
    serifName: 'Cinzel',
    sansName: 'Plus Jakarta Sans',
    previewHeading: 'THE ADDRESS',
  },
  {
    id: 'warm-contemporary',
    name: 'Warm Sanctuary',
    tagline: 'Refined humanist flare & Nordic-Japanese calm',
    serifName: 'Tenor Sans',
    sansName: 'Plus Jakarta Sans',
    previewHeading: 'THE ADDRESS',
  },
  {
    id: 'milanese-editorial',
    name: 'Milanese Haute',
    tagline: 'High-contrast fashion drama & razor-sharp verticality',
    serifName: 'Bodoni Moda',
    sansName: 'Manrope',
    previewHeading: 'The Address',
  },
];

export const FontSwitcher: React.FC = () => {
  const [activePreset, setActivePreset] = useState<FontPresetKey>('monograph');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sazeon_font_preset') as FontPresetKey | null;
    if (saved && ['monograph', 'lapidary', 'warm-contemporary', 'milanese-editorial'].includes(saved)) {
      setActivePreset(saved);
      document.documentElement.setAttribute('data-font-preset', saved);
    } else {
      document.documentElement.setAttribute('data-font-preset', 'monograph');
    }
  }, []);

  const handleSelect = (id: FontPresetKey) => {
    setActivePreset(id);
    document.documentElement.setAttribute('data-font-preset', id);
    localStorage.setItem('sazeon_font_preset', id);
  };

  const currentOption = FONT_OPTIONS.find((f) => f.id === activePreset) || FONT_OPTIONS[0];

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Typography Selection"
          className="mb-3 w-80 sm:w-96 rounded-none border border-[#53665A]/50 bg-[#101815]/95 p-5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200 text-[#F5F1E7]"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#53665A]/30 mb-4">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-[#9B7657]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9B7657]">
                Architectural Typography
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#53665A] hover:text-[#F5F1E7] transition-colors"
              aria-label="Close typography panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#EAE5D8]/70 leading-relaxed mb-4">
            Select a tailored typography pair suited for the architectural character of THE ADDRESS.
          </p>

          <div className="space-y-2.5">
            {FONT_OPTIONS.map((opt) => {
              const isSelected = activePreset === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full text-left p-3.5 border transition-all duration-200 group flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'border-[#9B7657] bg-[#1C3028]/60 shadow-inner'
                      : 'border-[#53665A]/30 hover:border-[#53665A] bg-[#101815]/40 hover:bg-[#1C3028]/30'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wider text-[#F5F1E7] font-medium">
                        {opt.name}
                      </span>
                      {opt.id === 'monograph' && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-[#9B7657] uppercase tracking-wider bg-[#9B7657]/15 px-1.5 py-0.5">
                          <Sparkles className="w-2.5 h-2.5" />
                          Recommended
                        </span>
                      )}
                    </div>

                    <div className="text-[10px] font-mono text-[#9B7657]/90 tracking-wide">
                      {opt.serifName} + {opt.sansName}
                    </div>

                    <p className="text-[11px] text-[#53665A] group-hover:text-[#EAE5D8]/80 transition-colors leading-snug">
                      {opt.tagline}
                    </p>
                  </div>

                  <div className="shrink-0 mt-0.5">
                    {isSelected ? (
                      <div className="w-4 h-4 border border-[#9B7657] flex items-center justify-center bg-[#9B7657]">
                        <Check className="w-3 h-3 text-[#101815]" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 border border-[#53665A]/50 group-hover:border-[#9B7657]/50" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#53665A]/30 flex items-center justify-between text-[10px] font-mono text-[#53665A]">
            <span>ACTIVE: {currentOption.serifName.toUpperCase()}</span>
            <span className="text-[#9B7657]">LIVE PREVIEW</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change font style"
        className="group flex items-center gap-2.5 border border-[#53665A]/60 bg-[#101815]/90 hover:bg-[#1C3028] px-3.5 py-2.5 shadow-xl backdrop-blur-md transition-all duration-200 hover:border-[#9B7657] text-[#F5F1E7]"
      >
        <span className="w-5 h-5 flex items-center justify-center text-xs font-serif font-bold text-[#9B7657] border border-[#9B7657]/50 group-hover:border-[#9B7657]">
          Aa
        </span>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#9B7657]">
            Font Style
          </span>
          <span className="text-xs font-serif leading-none tracking-wide text-[#F5F1E7]">
            {currentOption.serifName}
          </span>
        </div>
      </button>
    </div>
  );
};
