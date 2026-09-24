import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  caption?: string;
  captionNumber?: string;
  interactiveScale?: boolean;
  priority?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  caption,
  captionNumber,
  interactiveScale = true,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={`group relative block overflow-hidden bg-[#1C3028] ${className}`}>
      <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover transition-all duration-900 ease-out ${
              interactiveScale ? 'group-hover:scale-[1.03]' : ''
            } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center bg-[#1C3028] text-[#53665A]">
            <div className="h-8 w-8 mb-3 border border-[#53665A]/40 flex items-center justify-center text-xs">
              AD
            </div>
            <span className="font-serif text-sm tracking-widest text-[#F5F1E7]">THE ADDRESS</span>
            <span className="font-sans text-xs tracking-wider text-[#53665A] mt-1">{alt}</span>
          </div>
        )}

        {/* Quiet tonal scrim to ensure atmospheric depth */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101815]/50 via-transparent to-transparent opacity-60"
          aria-hidden="true"
        />
      </div>

      {(caption || captionNumber) && (
        <figcaption className="mt-3 flex items-baseline justify-between text-xs text-[#53665A]">
          {caption && <span className="font-sans tracking-wider uppercase text-[#F5F1E7]/80">{caption}</span>}
          {captionNumber && <span className="font-serif italic text-[#53665A] tabular-nums">{captionNumber}</span>}
        </figcaption>
      )}
    </figure>
  );
};
