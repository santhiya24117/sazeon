import React, { useState } from 'react';
import { motion } from 'motion/react';

interface Stage {
  number: string;
  name: string;
  description: string;
  focus: string;
}

const loopStages: Stage[] = [
  {
    number: '01',
    name: 'SPARK',
    description: 'Every project begins with an idea, a challenge, or an ambition worth pursuing.',
    focus: 'Inquiry & Context',
  },
  {
    number: '02',
    name: 'FRAME',
    description: 'We turn that starting point into a clear vision, direction, and purpose.',
    focus: 'Strategy & Architecture',
  },
  {
    number: '03',
    name: 'SHAPE',
    description: 'We craft the visual language, experience, and identity that bring the vision to life.',
    focus: 'Visual Systems & UI',
  },
  {
    number: '04',
    name: 'FORGE',
    description: 'We build it into a fast, responsive, and functional digital experience.',
    focus: 'Engineering & Code',
  },
  {
    number: '05',
    name: 'TUNE',
    description: 'We test, refine, and fine-tune every detail until everything feels right.',
    focus: 'Performance & Polish',
  },
  {
    number: '06',
    name: 'LAUNCH',
    description: 'We take the finished experience from our studio to the real world.',
    focus: 'Production & Scale',
  },
];

export const SazeonLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 sm:py-36 bg-[#151311] relative border-t border-[#332D28] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-[#332D28]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043] block mb-3">
              METHODOLOGY
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] tracking-[-0.035em] text-[#F5F1E8]">
              THE SAZEON LOOP
            </h2>
          </div>
          <p className="text-sm sm:text-base font-display text-[#A8A198] max-w-md font-normal leading-relaxed">
            HOW WE BRING IDEAS TO LIFE — A seamless iterative continuum from raw ambition to production reality.
          </p>
        </div>

        {/* Desktop Connected Horizontal Journey */}
        <div className="hidden lg:block relative mb-12">
          {/* Base connecting line */}
          <div className="absolute top-7 left-[8%] right-[8%] h-[2px] bg-[#332D28] z-0" />
          {/* Animated active progress line */}
          <motion.div
            className="absolute top-7 left-[8%] h-[2px] bg-[#FF7043] z-0 shadow-[0_0_10px_rgba(255,112,67,0.7)]"
            animate={{
              width: `${(activeStep / (loopStages.length - 1)) * 84}%`,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {loopStages.map((stage, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx <= activeStep;

              return (
                <div
                  key={stage.name}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group flex flex-col items-center text-center focus-visible:outline-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveStep(idx)}
                  aria-label={`Step ${stage.number}: ${stage.name}`}
                >
                  {/* Step Node Marker */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-300 mb-6 ${
                      isActive
                        ? 'bg-[#25211D] border-2 border-[#FF7043] text-[#FF7043] shadow-[0_0_16px_rgba(255,112,67,0.4)] scale-110'
                        : isPast
                        ? 'bg-[#1D1A17] border border-[#FF7043]/70 text-[#F5F1E8]'
                        : 'bg-[#0C0B0A] border border-[#332D28] text-[#A8A198] group-hover:border-[#A8A198]'
                    }`}
                  >
                    {stage.number}
                  </div>

                  {/* Stage Name */}
                  <h3
                    className={`font-display font-bold text-lg tracking-wider mb-2 transition-colors ${
                      isActive ? 'text-[#FF7043]' : 'text-[#F5F1E8]'
                    }`}
                  >
                    {stage.name}
                  </h3>

                  {/* Stage Focus Tag */}
                  <span className="text-[11px] font-mono text-[#A8A198]/70 uppercase tracking-wider mb-3">
                    {stage.focus}
                  </span>

                  {/* Stage Description */}
                  <p
                    className={`text-xs leading-relaxed transition-colors ${
                      isActive ? 'text-[#F5F1E8]' : 'text-[#A8A198]/70'
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Callout on Desktop */}
        <div className="hidden lg:block p-8 bg-[#1D1A17] border border-[#332D28] rounded-sm mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-3xl font-mono text-[#FF7043]">
                {loopStages[activeStep].number}
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-[#F5F1E8]">
                  PHASE: {loopStages[activeStep].name}
                </h4>
                <p className="text-sm text-[#A8A198] mt-1">
                  {loopStages[activeStep].description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-4 py-2 text-xs font-mono border border-[#332D28] text-[#A8A198] hover:text-[#F5F1E8] hover:border-[#FF7043] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                ← PREV
              </button>
              <button
                onClick={() => setActiveStep((prev) => Math.min(loopStages.length - 1, prev + 1))}
                disabled={activeStep === loopStages.length - 1}
                className="px-4 py-2 text-xs font-mono border border-[#332D28] text-[#A8A198] hover:text-[#F5F1E8] hover:border-[#FF7043] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Connected Timeline */}
        <div className="lg:hidden flex flex-col relative pl-6 border-l-2 border-[#332D28] space-y-12">
          {loopStages.map((stage) => (
            <div key={stage.name} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#0C0B0A] border-2 border-[#FF7043]" />

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-mono text-[#FF7043]">{stage.number}</span>
                <h3 className="font-display font-bold text-xl text-[#F5F1E8]">
                  {stage.name}
                </h3>
              </div>

              <span className="text-[11px] font-mono text-[#A8A198]/80 block uppercase tracking-wider mb-2">
                {stage.focus}
              </span>

              <p className="text-sm text-[#A8A198] leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
