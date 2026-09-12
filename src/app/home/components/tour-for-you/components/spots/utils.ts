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

const getSideYRatios = (viewportWidth: number) => {
  if (viewportWidth >= 1280) {
    return [
      0.28,
      0.52,
    ];
  }

  return [
    0.47,
  ];
};

export const calculatePlanetLayout = (
  count: number,
  area: PlanetLayoutArea,
): PlanetLayout => {
  const {
    height,
    viewportWidth,
    width,
  } = area;

  if (count === 0 || height === 0 || width === 0) {
    return {
      drift: 0,
      positions: [],
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
          top: offset + drift,
        }
        : {
          bottom: offset,
          left,
        };
    });
  };

  const sideInset = (sidePadding - size) / 2;
  const sidePositions: CSSProperties[] = count >= SIDE_PLANETS_MIN_COUNT
    ? getSideYRatios(viewportWidth).flatMap((ratio) => {
      const top = Math.max(0, Math.min(height - size, height * ratio - size / 2));

      return [
        {
          left: sideInset,
          top,
        },
        {
          right: sideInset,
          top,
        },
      ];
    })
    : [];

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
