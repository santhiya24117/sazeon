import React, { useRef, useState, useEffect } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowUpRight, ArrowRight, MessageSquare } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { SazeonMark } from './SazeonLogo';

interface HeroProps {
  onOpenProjectModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) {
      setIsTouchOrReduced(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const xPercent = (e.clientX - rect.left) / rect.width - 0.5;
      const yPercent = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({
        x: xPercent * 14,
        y: yPercent * 14,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] sm:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0C0B0A] bg-editorial-grid"
    >
      {/* Background Interactive Subtle Parallax Layers */}
      {!isTouchOrReduced && (
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden select-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          }}
        >
          {/* Subtle warm micro ambient glow */}
          <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full bg-[#FF7043]/[0.025] blur-[120px]" />

          {/* Thin geometric coordinates and architectural lines */}
          <svg
            className="absolute right-4 lg:right-20 top-1/4 w-[340px] md:w-[500px] lg:w-[620px] h-[460px] opacity-[0.28] text-[#332D28]"
            viewBox="0 0 600 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="60" y1="0" x2="60" y2="460" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="220" y1="0" x2="220" y2="460" stroke="currentColor" strokeWidth="1" />
            <line x1="380" y1="0" x2="380" y2="460" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="120" x2="600" y2="120" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="280" x2="600" y2="280" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

            {/* Geometric focus box */}
            <rect x="220" y="120" width="160" height="160" stroke="#FF7043" strokeWidth="1" strokeOpacity="0.45" />
            <circle cx="300" cy="200" r="44" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
            <circle cx="300" cy="200" r="3.5" fill="#FF7043" fillOpacity="0.9" />

            {/* Studio corner ticks in burnt orange */}
            <path d="M 210 120 L 220 120 L 220 130" stroke="#FF7043" strokeWidth="1.5" />
            <path d="M 390 120 L 380 120 L 380 130" stroke="#FF7043" strokeWidth="1.5" />
            <path d="M 210 280 L 220 280 L 220 270" stroke="#FF7043" strokeWidth="1.5" />
            <path d="M 390 280 L 380 280 L 380 270" stroke="#FF7043" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      {/* Hero Foreground Content */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* 1. Small Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 sm:mb-8">
            <SazeonMark size={20} className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(255,112,67,0.3)]" />
            <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A8A198]">
              SAZEON <span className="text-[#332D28] mx-2">/</span> DIGITAL STUDIO
            </p>
          </motion.div>

          {/* 2. Main Headline with masked line reveal */}
          <div className="overflow-hidden mb-6 sm:mb-8">
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F1E8]"
            >
              <span className="block">BUILT FOR</span>
              <span className="block">
                WHAT'S <span className="text-[#FF7043]">NEXT.</span>
              </span>
            </motion.h1>
          </div>

          {/* 3. Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-[#A8A198] max-w-2xl leading-relaxed mb-10 font-normal"
          >
            We create digital experiences and visual identities for businesses ready to move forward.
          </motion.p>

          {/* 4. Action Buttons with Magnetic micro-interaction */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton
              onClick={onOpenProjectModal}
              dataCursor="cta"
              strength={0.25}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-display font-semibold tracking-wider text-[#F5F1E8] bg-[#1D1A17] hover:bg-[#25211D] border border-[#332D28] hover:border-[#FF7043] px-6 py-3.5 rounded-sm transition-all duration-300 group shadow-md"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </MagneticButton>

            <MagneticButton
              href="https://wa.me/917358357933?text=Hi%20SAZEON%2C%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              dataCursor="chat"
              strength={0.25}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-display font-semibold tracking-wider text-[#F5F1E8] bg-[#151311] hover:bg-[#1D1A17] border border-[#332D28] hover:border-[#FF7043] px-5 py-3.5 rounded-sm transition-all duration-300 group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FF7043]" />
              <span>CHAT ON WHATSAPP ↗</span>
            </MagneticButton>

            <MagneticButton
              onClick={scrollToWork}
              dataCursor="cta"
              strength={0.25}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold tracking-wider text-[#A8A198] hover:text-[#F5F1E8] hover:bg-[#151311] border border-transparent hover:border-[#332D28] px-5 py-3.5 rounded-sm transition-all duration-300 group"
            >
              <span>VIEW OUR WORK</span>
              <ArrowRight className="w-4 h-4 text-[#A8A198] group-hover:translate-x-1 group-hover:text-[#FF7043] transition-all duration-300" />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Minimal Bottom Editorial Coordinates Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 sm:mt-24 pt-6 border-t border-[#332D28]/70 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A8A198]/80"
        >
          <div className="flex items-center gap-6">
            <span>DISCIPLINE: DESIGN + CODE</span>
            <span className="hidden sm:inline text-[#332D28]">/</span>
            <span className="hidden sm:inline">ORIGIN: INDEPENDENT DIGITAL STUDIO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
