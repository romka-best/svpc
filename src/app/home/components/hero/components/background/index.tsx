'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const HeroBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [
    shouldLoadVideo,
    setShouldLoadVideo,
  ] = useState(false);
  const [
    isVideoVisible,
    setIsVideoVisible,
  ] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wideViewport = window.matchMedia('(min-width: 768px)');

    const sync = () => {
      setShouldLoadVideo(!reducedMotion.matches && wideViewport.matches);
    };

    sync();

    reducedMotion.addEventListener('change', sync);
    wideViewport.addEventListener('change', sync);

    return () => {
      reducedMotion.removeEventListener('change', sync);
      wideViewport.removeEventListener('change', sync);
    };
  }, [
  ]);

  const handleLoadedData = () => {
    setIsVideoVisible(true);
    videoRef.current?.play().catch(() => undefined);
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <Image
        fill
        priority
        alt=""
        className="object-cover"
        quality={90}
        sizes="100vw"
        src="/images/hero-poster.webp"
      />

      {shouldLoadVideo && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-300',
            isVideoVisible ? 'opacity-100' : 'opacity-0',
          )}
          preload="auto"
          src="/videos/hero.mp4"
          onLoadedData={handleLoadedData}
        />
      )}

      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
    </div>
  );
};

export { HeroBackground };
