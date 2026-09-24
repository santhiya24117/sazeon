import React, { useState, useRef, useEffect } from 'react';

interface CinematicMediaProps {
  srcVideo?: string;
  poster: string;
  alt: string;
  className?: string;
  overlayOpacity?: string;
  aspectRatio?: string;
  lazy?: boolean;
}

export const CinematicMedia: React.FC<CinematicMediaProps> = ({
  srcVideo,
  poster,
  alt,
  className = '',
  overlayOpacity = 'bg-black/55',
  aspectRatio,
  lazy = false,
}) => {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener?.('change', listener);
    return () => mediaQuery.removeEventListener?.('change', listener);
  }, []);

  // Handle autoplay with graceful muted fallback
  useEffect(() => {
    if (prefersReducedMotion) return;
    const video = videoRef.current;
    if (!video || !srcVideo || videoFailed) return;

    setVideoReady(false);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setVideoReady(true);
        })
        .catch(() => {
          // Autoplay policy fallback: enforce muted and retry
          video.muted = true;
          video.play().catch(() => {
            setVideoFailed(true);
          });
        });
    }
  }, [srcVideo, videoFailed, prefersReducedMotion]);

  const shouldRenderVideo = Boolean(srcVideo && !videoFailed && !prefersReducedMotion);

  return (
    <div
      className={`relative overflow-hidden w-full h-full bg-[#0D0D0D] ${aspectRatio ? `aspect-[${aspectRatio}]` : ''} ${className}`}
    >
      {/* 1. Underlying Poster/Fallback Image (Immediate, zero layout shift) */}
      <img
        src={poster}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={lazy ? 'lazy' : 'eager'}
        className={`absolute inset-0 w-full h-full object-cover select-none scale-[1.01] transition-opacity duration-1000 ease-out ${
          videoReady && shouldRenderVideo ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. Active HTML5 Background Video */}
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload={lazy ? 'none' : 'auto'}
          poster={poster}
          onPlaying={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover select-none scale-[1.01] transition-opacity duration-1000 ease-out ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={srcVideo} type="video/mp4" />
        </video>
      )}

      {/* 3. Dark subtle overlay for hero text readability */}
      <div
        className={`absolute inset-0 pointer-events-none ${overlayOpacity} transition-opacity duration-700`}
      />

      {/* 4. Ambient gradient for smooth editorial text blending */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/50" />
    </div>
  );
};
