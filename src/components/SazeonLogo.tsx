import React from "react";

interface SazeonLogoProps {
  height?: number;
  className?: string;
}

interface SazeonMarkProps {
  size?: number;
  className?: string;
}

export const SazeonLogo: React.FC<SazeonLogoProps> = ({
  height = 56,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center select-none overflow-visible ${className}`}
      style={{
        height: `${height}px`,
      }}
    >
      <img
        src="/sazeon-logo.png"
        alt="SAZEON"
        className="block object-contain"
        style={{
          height: `${height * 1.5}px`,
          width: "auto",
          maxWidth: "none",
          transform: "scale(1.15)",
          transformOrigin: "left center",
        }}
      />
    </div>
  );
};

export const SazeonMark: React.FC<SazeonMarkProps> = ({
  size = 56,
  className = "",
}) => {
  return (
    <img
      src="/sazeon-logo.png"
      alt="SAZEON"
      className={`object-contain ${className}`}
      style={{
        width: `${size * 1.4}px`,
        height: `${size * 1.4}px`,
        maxWidth: "none",
        display: "block",
      }}
    />
  );
};