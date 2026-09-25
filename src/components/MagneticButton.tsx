import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number; // 0.2 to 0.4
  dataCursor?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  strength = 0.3,
  dataCursor,
  ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) {
      setIsTouchOrReduced(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchOrReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    // Constrain to maximum 12px
    const clampedX = Math.max(-12, Math.min(12, deltaX));
    const clampedY = Math.max(-12, Math.min(12, deltaY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const style = isTouchOrReduced
    ? undefined
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out',
      };

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          style={style}
          data-cursor={dataCursor}
          aria-label={ariaLabel}
          className={`inline-flex items-center justify-center will-change-transform ${className}`}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        type="button"
        onClick={onClick}
        style={style}
        data-cursor={dataCursor}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center will-change-transform ${className}`}
      >
        {children}
      </button>
    </div>
  );
};
