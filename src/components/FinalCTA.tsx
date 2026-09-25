import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenProjectModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="contact" className="py-28 sm:py-40 bg-[#100B14] relative border-t border-[#34283A] bg-editorial-grid overflow-hidden">
      {/* Subtle restrained light focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-[#D8B4FE]/[0.025] blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8B4FE]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A99EAC]">
            INQUIRY & COMMISSIONS
          </span>
        </motion.div>

        {/* Huge Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[#F5F0F5] mb-8 max-w-3xl"
        >
          READY TO BUILD <br />
          WHAT'S <span className="text-[#D8B4FE]">NEXT?</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#A99EAC] max-w-xl leading-relaxed mb-12 font-normal"
        >
          Have an idea, a business, or a project in mind? <br className="hidden sm:inline" />
          Let's turn it into something real.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={onOpenProjectModal}
            data-cursor="cta"
            className="inline-flex items-center gap-3 text-sm sm:text-base font-display font-semibold tracking-wider text-[#F5F0F5] bg-[#291D2D] hover:bg-[#34283A] border border-[#34283A] hover:border-[#D8B4FE] px-8 sm:px-10 py-4 sm:py-5 rounded-sm transition-all duration-300 group shadow-lg"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 text-[#D8B4FE] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Direct contact footnote */}
        <div className="mt-14 text-xs font-mono text-[#A99EAC]/70 flex flex-wrap items-center justify-center gap-6">
          <span>DIRECT INQUIRIES: STUDIO@SAZEON.COM</span>
          <span className="text-[#34283A]">/</span>
          <span>ESTIMATED RESPONSE: &lt; 24H</span>
        </div>
      </div>
    </section>
  );
};
