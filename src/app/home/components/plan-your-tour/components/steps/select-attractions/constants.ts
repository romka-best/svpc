import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  CalendarDays,
  GraduationCap,
  Landmark,
  Library,
  ShoppingBag,
} from 'lucide-react';

export type AttractionCategoryId =
  | 'sights'
  | 'offices'
  | 'shopping'
  | 'universities'
  | 'museums'
  | 'events';

export interface Attraction {
  categoryId: AttractionCategoryId;
  description?: string;
  gallery?: readonly string[];
  id: string;
  image: string;
  location?: string;
  price: number;
  rating?: number;
  reviewCount?: number;
  title: string;
}

export interface AttractionCategory {
  color: string;
  icon: LucideIcon;
  id: AttractionCategoryId;
  label: string;
}

export const ATTRACTION_CATEGORIES: readonly AttractionCategory[] = [
  {
    color: '#b50202',
    icon: Landmark,
    id: 'sights',
    label: 'Sights',
  },
  {
    color: '#0254b5',
    icon: Building2,
    id: 'offices',
    label: 'Offices',
  },
  {
    color: '#30b502',
    icon: ShoppingBag,
    id: 'shopping',
    label: 'Shopping',
  },
  {
    color: '#e67e22',
    icon: GraduationCap,
    id: 'universities',
    label: 'Universities',
  },
  {
    color: '#0d9488',
    icon: Library,
    id: 'museums',
    label: 'Museums',
  },
  {
    color: '#7c3aed',
    icon: CalendarDays,
    id: 'events',
    label: 'Events',
  },
];

export const ATTRACTIONS: readonly Attraction[] = [
  {
    categoryId: 'sights',
    id: 'arrival-usa',
    image: '/images/plan-your-tour/attractions/apple-park.jpg',
    price: 180,
    title: 'Arrival in the USA',
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/golden-gate.webp',
    ],
    id: 'golden-gate',
    image: '/images/plan-your-tour/attractions/golden-gate.webp',
    price: 220,
    title: 'Golden Gate Bridge',
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/alcatraz.webp',
    ],
    id: 'alcatraz',
    image: '/images/plan-your-tour/attractions/alcatraz.webp',
    price: 190,
    title: 'Alcatraz Island',
  },
  {
    categoryId: 'sights',
    id: 'twin-peaks',
    image: '/images/plan-your-tour/attractions/googleplex.webp',
    price: 140,
    title: 'Twin Peaks Viewpoint',
  },
  {
    categoryId: 'offices',
    gallery: [
      '/images/plan-your-tour/attractions/apple-park.webp',
    ],
    id: 'apple-park',
    image: '/images/plan-your-tour/attractions/apple-park.webp',
    price: 350,
    title: 'Apple Park',
  },
  {
    categoryId: 'offices',
    gallery: [
      '/images/plan-your-tour/attractions/googleplex.webp',
    ],
    id: 'googleplex',
    image: '/images/plan-your-tour/attractions/googleplex.webp',
    price: 320,
    title: 'Googleplex',
  },
  {
    categoryId: 'offices',
    id: 'meta-hq',
    image: '/images/plan-your-tour/attractions/computer-history.webp',
    price: 300,
    title: 'Meta Headquarters',
  },
  {
    categoryId: 'offices',
    id: 'nvidia-hq',
    image: '/images/plan-your-tour/attractions/golden-gate.webp',
    price: 310,
    title: 'NVIDIA Campus',
  },
  {
    categoryId: 'shopping',
    id: 'stanford-shopping',
    image: '/images/plan-your-tour/attractions/restaurant.webp',
    price: 120,
    title: 'Stanford Shopping Center',
  },
  {
    categoryId: 'shopping',
    id: 'union-square',
    image: '/images/plan-your-tour/attractions/golden-gate.webp',
    price: 110,
    title: 'Union Square',
  },
  {
    categoryId: 'shopping',
    id: 'valley-fair',
    image: '/images/plan-your-tour/attractions/apple-park.jpg',
    price: 100,
    title: 'Valley Fair Mall',
  },
  {
    categoryId: 'shopping',
    id: 'ferry-building',
    image: '/images/plan-your-tour/attractions/googleplex.webp',
    price: 130,
    title: 'Ferry Building Marketplace',
  },
  {
    categoryId: 'universities',
    gallery: [
      '/images/plan-your-tour/attractions/stanford.webp',
    ],
    id: 'stanford',
    image: '/images/plan-your-tour/attractions/stanford.webp',
    price: 200,
    title: 'Stanford University',
  },
  {
    categoryId: 'universities',
    gallery: [
      '/images/plan-your-tour/attractions/berkeley.webp',
    ],
    id: 'berkeley',
    image: '/images/plan-your-tour/attractions/berkeley.webp',
    price: 180,
    title: 'UC Berkeley',
  },
  {
    categoryId: 'universities',
    id: 'santa-clara',
    image: '/images/plan-your-tour/attractions/googleplex.webp',
    price: 150,
    title: 'Santa Clara University',
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/computer-history.webp',
    ],
    id: 'computer-history',
    image: '/images/plan-your-tour/attractions/computer-history.webp',
    price: 160,
    title: 'Computer History Museum',
  },
  {
    categoryId: 'museums',
    id: 'exploratorium',
    image: '/images/plan-your-tour/attractions/golden-gate.webp',
    price: 170,
    title: 'Exploratorium',
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/de-young.webp',
    ],
    id: 'de-young',
    image: '/images/plan-your-tour/attractions/de-young.webp',
    price: 150,
    title: 'de Young Museum',
  },
  {
    categoryId: 'events',
    id: 'tech-meetup',
    image: '/images/plan-your-tour/attractions/googleplex.webp',
    price: 90,
    title: 'Tech Meetup Night',
  },
  {
    categoryId: 'events',
    id: 'startup-pitch',
    image: '/images/plan-your-tour/attractions/apple-park.jpg',
    price: 140,
    title: 'Startup Pitch Evening',
  },
  {
    categoryId: 'events',
    id: 'wine-tasting',
    image: '/images/plan-your-tour/attractions/restaurant.webp',
    price: 210,
    title: 'Napa Wine Evening',
  },
];

/** Curated SVB + AI picks when auto-choice is enabled. */
export const AUTO_ATTRACTION_IDS: readonly string[] = [
  'arrival-usa',
  'golden-gate',
  'apple-park',
  'googleplex',
  'stanford',
  'computer-history',
  'startup-pitch',
];

export const ATTRACTIONS_BY_ID = Object.fromEntries(
  ATTRACTIONS.map((attraction) => {
    return [
      attraction.id,
      attraction,
    ];
  }),
) as Record<string, Attraction>;

export const getAttractionsByCategory = (categoryId: AttractionCategoryId) => {
  return ATTRACTIONS.filter((attraction) => {
    return attraction.categoryId === categoryId;
  });
};

export const computeAttractionsPrice = (selectedIds: readonly string[]) => {
  return selectedIds.reduce((total, id) => {
    return total + (ATTRACTIONS_BY_ID[id]?.price ?? 0);
  }, 0);
};

export const getAttractionDetails = (attraction: Attraction) => {
  const gallery = attraction.gallery ?? [
    attraction.image,
    '/images/plan-your-tour/attractions/golden-gate.webp',
    '/images/plan-your-tour/attractions/googleplex.webp',
  ];

  return {
    description: attraction.description
      ?? 'Silicon Valley Boy offers exclusive, premium tours that provide personalized and immersive experiences in the heart of the tech world. Explore behind-the-scenes access to leading IT companies and prestigious universities, and witness firsthand the latest innovations shaping our future.',
    gallery,
    location: attraction.location ?? 'USA, Silicon Valley',
    rating: attraction.rating ?? 4.7,
    reviewCount: attraction.reviewCount ?? 967,
  };
};
