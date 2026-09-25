import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export type CursorVariant = 'default' | 'project' | 'cta' | 'chat' | 'email' | 'open';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('•');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  // Smooth springs for cursor tracking
  const springConfig = { damping: 26, stiffness: 360, mass: 0.18 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Detect touch device or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) {
      setIsTouchOrReduced(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      const href = target.closest('a')?.getAttribute('href') || '';

      if (cursorAttr === 'project') {
        setCursorType('project');
        setCursorText('VIEW ↗');
      } else if (cursorAttr === 'chat' || href.includes('wa.me')) {
        setCursorType('chat');
        setCursorText('CHAT ↗');
      } else if (cursorAttr === 'email' || href.startsWith('mailto:')) {
        setCursorType('email');
        setCursorText('EMAIL ↗');
      } else if (cursorAttr === 'open' || href.includes('instagram') || href.includes('linkedin')) {
        setCursorType('open');
        setCursorText('OPEN ↗');
      } else if (cursorAttr === 'cta') {
        setCursorType('cta');
        setCursorText('GO →');
      } else {
        const interactive = target.closest('button, a, [role="button"], input, select, textarea');
        if (interactive) {
          setCursorType('cta');
          setCursorText('↗');
        } else {
          setCursorType('default');
          setCursorText('•');
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchOrReduced || !isVisible) {
    return null;
  }

  const isExpanded = cursorType !== 'default';

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={{
          width: isExpanded ? 76 : 10,
          height: isExpanded ? 76 : 10,
          backgroundColor: isExpanded ? 'rgba(21, 19, 17, 0.94)' : '#FF7043',
          borderColor: isExpanded ? '#FF7043' : 'transparent',
          borderWidth: isExpanded ? 1.5 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full flex items-center justify-center text-[#F5F1E8] font-display backdrop-blur-xs select-none shadow-[0_0_18px_rgba(255,112,67,0.22)]"
      >
        {isExpanded && (
          <span className="text-[10px] tracking-wider font-semibold text-[#FF7043]">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
