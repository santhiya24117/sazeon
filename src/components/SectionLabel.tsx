import React from 'react';

interface SectionLabelProps {
  label: string;
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  theme = 'dark',
  className = '',
}) => {
  const textColor = theme === 'light' ? 'text-[#53665A]' : 'text-[#53665A]';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-px w-6 ${theme === 'light' ? 'bg-[#53665A]/40' : 'bg-[#53665A]/50'}`} aria-hidden="true" />
      <span
        className={`font-sans text-[11px] font-medium tracking-[0.24em] uppercase ${textColor}`}
      >
        {label}
      </span>
    </div>
  );
};
