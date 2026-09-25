import React, { useEffect, useRef } from 'react';

interface MarqueeProps {
  items: string[];
  separator?: string;
  direction?: 'left' | 'right';
  speed?: number; // base speed in px per second
  outlined?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  separator = '•',
  direction = 'left',
  speed = 45,
  outlined = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;
      // Cap max boost
      velocityRef.current = Math.min(velocityRef.current + delta * 1.2, 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Friction to slowly return velocity to 0
      velocityRef.current *= 0.94;
      if (velocityRef.current < 0.2) velocityRef.current = 0;

      const currentEffectiveSpeed = speed + velocityRef.current;
      const moveBy = currentEffectiveSpeed * deltaTime;

      if (direction === 'left') {
        offsetRef.current -= moveBy;
      } else {
        offsetRef.current += moveBy;
      }

      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (halfWidth > 0) {
          if (offsetRef.current <= -halfWidth) {
            offsetRef.current += halfWidth;
          } else if (offsetRef.current >= 0) {
            offsetRef.current -= halfWidth;
          }
          trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [direction, speed]);

  // Duplicate items 4 times to ensure seamless infinite looping on ultra-wide screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none py-3.5 border-y border-[#332D28] bg-[#0C0B0A] ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform font-display"
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center">
            <span
              className={`text-sm sm:text-base font-semibold tracking-[0.2em] uppercase px-4 ${
                outlined
                  ? 'text-stroke-obsidian hover:text-[#FF7043] transition-colors'
                  : 'text-[#F5F1E8]/90'
              }`}
            >
              {item}
            </span>
            <span className="text-[#FF7043] text-xs px-2 font-mono">{separator}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
