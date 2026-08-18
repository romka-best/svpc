export const SF_EASTER_EGGS = [
  '🌉',
  '🚋',
  '🌁',
  '🦭',
  '🦀',
  '🏠',
  '🌴',
  '🌈',
  '⚾',
  '🐟',
  '🚢',
  '🏛️',
  '🚃',
  '🌸',
  '⛰️',
  '🌊',
  '🎸',
  '🏈',
  '🍎',
  '💻',
  '⛵',
] as const;

export const CONFETTI_COUNT = 45;

export const CONFETTI_EDGE_PADDING = 48;

export interface ConfettiParticle {
  angle: number;
  burst: number;
  delay: number;
  duration: number;
  fall: number;
  icon: (typeof SF_EASTER_EGGS)[number];
  id: number;
  rotate: number;
  sizeClassName: 'text-3xl' | 'text-4xl' | 'text-5xl';
}

const SIZE_CLASS_NAMES: ConfettiParticle['sizeClassName'][] = [
  'text-3xl',
  'text-4xl',
  'text-5xl',
];

const RING_COUNT = 3;

export const CONFETTI_PARTICLES: readonly ConfettiParticle[] = Array.from(
  { length: CONFETTI_COUNT },
  (_, index) => {
    const ring = index % RING_COUNT;
    const ringIndex = Math.floor(index / RING_COUNT);
    const particlesInRing = Math.ceil((CONFETTI_COUNT - ring) / RING_COUNT);
    const angle = ((Math.PI * 2) / particlesInRing) * ringIndex
      - Math.PI / 2
      + ring * 0.14;

    return {
      angle,
      burst: Math.min(0.42 + ring * 0.28 + (index % 4) * 0.02, 0.92),
      delay: ring * 0.04 + (ringIndex % 6) * 0.012,
      duration: 1.25 + (index % 5) * 0.08,
      fall: 0.18 + (index % 4) * 0.05,
      icon: SF_EASTER_EGGS[index % SF_EASTER_EGGS.length],
      id: index,
      rotate: (index % 2 === 0 ? 1 : -1) * (140 + (index % 6) * 28),
      sizeClassName: SIZE_CLASS_NAMES[index % SIZE_CLASS_NAMES.length],
    };
  },
);
