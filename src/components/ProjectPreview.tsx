import React from 'react';
import { motion, useSpring } from 'motion/react';

interface ProjectPreviewProps {
  image: string;
  title: string;
  isVisible: boolean;
  x: number;
  y: number;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  image,
  title,
  isVisible,
  x,
  y,
}) => {
  const springConfig = { damping: 28, stiffness: 320, mass: 0.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  React.useEffect(() => {
    smoothX.set(x + 28);
    smoothY.set(y - 120);
  }, [x, y, smoothX, smoothY]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-40 hidden lg:block overflow-hidden w-64 h-40 rounded-sm bg-[#1D1A17] border border-[#FF7043] shadow-[0_12px_32px_rgba(0,0,0,0.8)]"
    >
      <img
        src={image}
        alt={title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A]/90 via-transparent to-transparent flex items-end p-2.5">
        <span className="text-[11px] font-mono text-[#F5F1E8] truncate font-medium">
          {title}
        </span>
      </div>
    </motion.div>
  );
};
