import React from 'react';
import { motion } from 'motion/react';

export const BrandStatement: React.FC = () => {
  const statementWords = [
    'WE', 'BUILD', 'DIGITAL', 'EXPERIENCES',
    'THAT', 'MOVE', 'BUSINESSES', 'FORWARD.'
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#0C0B0A] border-t border-[#332D28] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Studio Perspective Tag */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043] block mb-3">
              00 / PERSPECTIVE
            </span>
            <p className="text-sm font-display text-[#A8A198] leading-relaxed">
              SAZEON approaches each commission as a bespoke digital artefact—engineered with precision, sculpted with restraint, and primed for scale.
            </p>
          </div>

          {/* Large Editorial Headline & Supporting Copy */}
          <div className="lg:col-span-9 flex flex-col justify-between">
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[#F5F1E8] mb-10 max-w-4xl flex flex-wrap gap-x-3.5 gap-y-2">
              {statementWords.map((word, idx) => {
                const isAccent = word === 'FORWARD.';
                return (
                  <span key={idx} className="overflow-hidden inline-block">
                    <motion.span
                      initial={{ y: '100%', opacity: 0 }}
                      whileInView={{ y: '0%', opacity: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.7,
                        delay: idx * 0.05,
                        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                      }}
                      className={`inline-block ${isAccent ? 'text-[#FF7043]' : 'text-[#F5F1E8]'}`}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#332D28]"
            >
              <p className="text-base sm:text-xl font-display font-medium text-[#A8A198]">
                Design. Technology. Identity. <span className="text-[#F5F1E8]">Built around your business.</span>
              </p>

              <div className="flex items-center gap-6 text-xs font-mono text-[#A8A198]/70">
                <span>01 CONCEPT</span>
                <span className="text-[#332D28]">/</span>
                <span>02 CRAFT</span>
                <span className="text-[#332D28]">/</span>
                <span className="text-[#FF7043]">03 SCALE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
