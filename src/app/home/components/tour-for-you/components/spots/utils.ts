import type { CSSProperties } from 'react';

const getPlanetMetrics = (width: number) => {
  if (width >= 1280) {
    return {
      bandHeight: 224,
      drift: 15,
      sidePadding: 270,
      size: 150,
    };
  }

  if (width >= 768) {
    return {
      bandHeight: 200,
      drift: 10,
      sidePadding: 40,
      size: 100,
    };
  }

  return {
    bandHeight: 128,
    drift: 6,
    sidePadding: 20,
    size: 60,
  };
};

const TOP_BAND_RATIO = 0.4;
const SIDE_PLANETS_MIN_WIDTH = 1280;
const SIDE_PLANETS_MIN_COUNT = 6;

interface PlanetLayout {
  drift: number;
  positions: CSSProperties[];
}

interface PlanetLayoutArea {
  height: number;
  width: number;
  viewportWidth: number;
}

export const calculatePlanetLayout = (
  count: number,
  area: PlanetLayoutArea,
): PlanetLayout => {
  const {
    height,
    viewportWidth,
    width,
  } = area;

  if (count === 0 || width === 0) {
    return {
      drift: 0,
      positions: [
      ],
    };
  }

  const {
    bandHeight,
    drift,
    sidePadding,
    size,
  } = getPlanetMetrics(viewportWidth);

  const stagger = Math.max(0, bandHeight - size - drift);

  const layoutBand = (
    bandPlanetsCount: number,
    edge: 'top' | 'bottom',
  ): CSSProperties[] => {
    const slot = width / bandPlanetsCount;

    return Array.from({ length: bandPlanetsCount }, (_, index) => {
      const left = slot * (index + 0.5) - size / 2;
      const offset = (index % 2) * stagger;

      return edge === 'top'
        ? {
          left,
          top: offset,
        }
        : {
          bottom: offset,
          left,
        };
    });
  };

  // Side planets fit next to the text column only on wide screens
  const hasSidePlanets = viewportWidth >= SIDE_PLANETS_MIN_WIDTH && count >= SIDE_PLANETS_MIN_COUNT;
  const sidePositions: CSSProperties[] = hasSidePlanets
    ? [
      {
        left: (sidePadding - size) / 2,
        top: (height - size) / 2,
      },
      {
        right: (sidePadding - size) / 2,
        top: (height - size) / 2,
      },
    ]
    : [
    ];

  const bandCount = count - sidePositions.length;
  const topCount = Math.max(1, Math.round(bandCount * TOP_BAND_RATIO));
  const bottomCount = bandCount - topCount;

  return {
    drift,
    positions: [
      ...layoutBand(topCount, 'top'),
      ...sidePositions,
      ...layoutBand(bottomCount, 'bottom'),
    ],
  };
};
