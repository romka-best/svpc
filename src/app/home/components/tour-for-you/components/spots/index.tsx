'use client';

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Badge } from '@/components/ui/base/badge';

import { TOUR_FOR_YOU_SPOTS } from './constants';
import { TourForYouSpotsPlanet } from './planet';
import { calculatePlanetLayout } from './utils';

const TourForYouSpots = () => {
  const [
    hoveredSpot,
    setHoveredSpot,
  ] = useState<string | null>(null);
  const [
    layerSize,
    setLayerSize,
  ] = useState({
    height: 0,
    viewportWidth: 0,
    width: 0,
  });
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;

    if (!layer) {
      return;
    }

    const observer = new ResizeObserver(([
      entry,
    ]) => {
      setLayerSize({
        height: entry.contentRect.height,
        viewportWidth: window.innerWidth,
        width: entry.contentRect.width,
      });
    });

    observer.observe(layer);

    return () => observer.disconnect();
  }, []);

  const {
    drift,
    positions,
  } = useMemo(
    () => calculatePlanetLayout(TOUR_FOR_YOU_SPOTS.length, layerSize),
    [
      layerSize,
    ],
  );

  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 pb-16 md:pb-24 xl:pb-32">
        <h3 className="text-base font-medium">
          Several Popular Tour Spots
        </h3>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {TOUR_FOR_YOU_SPOTS.map((spot) => (
            <Badge
              key={spot.label}
              asChild
              clickable
              variant="outline"
            >
              <li
                onBlur={() => setHoveredSpot(null)}
                onFocus={() => setHoveredSpot(spot.label)}
                onMouseEnter={() => setHoveredSpot(spot.label)}
                onMouseLeave={() => setHoveredSpot(null)}
              >
                {spot.label}
              </li>
            </Badge>
          ))}
        </ul>
      </div>
      <div
        ref={layerRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        {positions.length > 0 && TOUR_FOR_YOU_SPOTS.map((spot, index) => (
          <TourForYouSpotsPlanet
            key={spot.label}
            drift={drift}
            imageUrl={spot.imageUrl}
            index={index}
            isHighlighted={hoveredSpot === spot.label}
            label={spot.label}
            position={positions[index]}
          />
        ))}
      </div>
    </>
  );
};

export { TourForYouSpots };
