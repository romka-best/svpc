import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  CalendarDays,
  GraduationCap,
  Landmark,
  Library,
  ShoppingBag,
  Ticket,
} from 'lucide-react';

export type AttractionCategoryId =
  | 'sights'
  | 'museums'
  | 'offices'
  | 'universities'
  | 'shopping'
  | 'experiences'
  | 'events';

export type AttractionWeight = 1 | 2 | 3 | 4;

export interface Attraction {
  categoryId: AttractionCategoryId;
  childPrice?: number;
  gallery?: readonly string[];
  id: string;
  image?: string;
  isGroupPrice?: boolean;
  location?: string;
  price: number;
  rating?: number;
  title: string;
  weight: AttractionWeight;
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
    color: '#0d9488',
    icon: Library,
    id: 'museums',
    label: 'Museums',
  },
  {
    color: '#0254b5',
    icon: Building2,
    id: 'offices',
    label: 'Campuses',
  },
  {
    color: '#e67e22',
    icon: GraduationCap,
    id: 'universities',
    label: 'Universities',
  },
  {
    color: '#30b502',
    icon: ShoppingBag,
    id: 'shopping',
    label: 'Shopping',
  },
  {
    color: '#db2777',
    icon: Ticket,
    id: 'experiences',
    label: 'Experiences',
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
    gallery: [
      '/images/plan-your-tour/attractions/golden-gate.webp',
    ],
    id: 'golden-gate',
    image: '/images/plan-your-tour/attractions/golden-gate.webp',
    location: 'Golden Gate Bridge, San Francisco, CA',
    price: 0,
    rating: 4.7,
    title: 'Golden Gate Bridge',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/golden-gate-park.webp',
    ],
    id: 'golden-gate-park',
    image: '/images/plan-your-tour/attractions/golden-gate-park.webp',
    location: 'San Francisco, CA',
    price: 0,
    rating: 4.6,
    title: 'Golden Gate Park',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/tour-for-you/japanese-tea-garden.webp',
    ],
    childPrice: 10,
    id: 'japanese-tea-garden',
    image: '/images/tour-for-you/japanese-tea-garden.webp',
    location: '75 Hagiwara Tea Garden Dr, San Francisco, CA',
    price: 15,
    rating: 4.3,
    title: 'Japanese Tea Garden',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/palace-of-fine-arts.webp',
    ],
    id: 'palace-of-fine-arts',
    image: '/images/plan-your-tour/attractions/palace-of-fine-arts.webp',
    location: '3301 Lyon St, San Francisco, CA',
    price: 0,
    rating: 4.6,
    title: 'Palace of Fine Arts',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/painted-ladies.webp',
    ],
    id: 'painted-ladies',
    image: '/images/plan-your-tour/attractions/painted-ladies.webp',
    location: '710-720 Steiner St, San Francisco, CA',
    price: 0,
    rating: 3.9,
    title: 'Painted Ladies',
    weight: 1,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/alcatraz.webp',
    ],
    childPrice: 30,
    id: 'alcatraz',
    image: '/images/plan-your-tour/attractions/alcatraz.webp',
    location: 'San Francisco, CA',
    price: 50,
    rating: 4.7,
    title: 'Alcatraz Island',
    weight: 4,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/twin-peaks.webp',
    ],
    id: 'twin-peaks',
    image: '/images/plan-your-tour/attractions/twin-peaks.webp',
    location: '501 Twin Peaks Blvd, San Francisco, CA',
    price: 0,
    rating: 4.6,
    title: 'Twin Peaks',
    weight: 1,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/lombard-street.webp',
    ],
    id: 'lombard-street',
    image: '/images/plan-your-tour/attractions/lombard-street.webp',
    location: 'Lombard St, San Francisco, CA',
    price: 0,
    rating: 4.3,
    title: 'Lombard Street',
    weight: 1,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/fishermans-wharf.webp',
    ],
    id: 'fishermans-wharf',
    image: '/images/plan-your-tour/attractions/fishermans-wharf.webp',
    location: 'The Embarcadero, San Francisco, CA',
    price: 0,
    rating: 4.2,
    title: 'Fisherman’s Wharf + Pier 39',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/coit-tower.webp',
    ],
    id: 'coit-tower',
    image: '/images/plan-your-tour/attractions/coit-tower.webp',
    location: '1 Telegraph Hill Blvd, San Francisco, CA',
    price: 0,
    rating: 4.2,
    title: 'Coit Tower',
    weight: 1,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/salesforce-park.webp',
    ],
    id: 'salesforce-park',
    image: '/images/plan-your-tour/attractions/salesforce-park.webp',
    location: '425 Mission St, San Francisco, CA',
    price: 0,
    rating: 4.7,
    title: 'Salesforce Park',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/chinatown.webp',
    ],
    id: 'chinatown',
    image: '/images/plan-your-tour/attractions/chinatown.webp',
    location: 'Grant Ave & Stockton St, San Francisco, CA',
    price: 0,
    rating: 3.9,
    title: 'Chinatown',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/haight-ashbury.webp',
    ],
    id: 'haight-ashbury',
    image: '/images/plan-your-tour/attractions/haight-ashbury.webp',
    location: 'Haight St & Ashbury St, San Francisco, CA',
    price: 0,
    rating: 4,
    title: 'Haight-Ashbury',
    weight: 2,
  },
  {
    categoryId: 'sights',
    gallery: [
      '/images/plan-your-tour/attractions/hp-garage.webp',
    ],
    id: 'hp-garage',
    image: '/images/plan-your-tour/attractions/hp-garage.webp',
    location: '367 Addison Ave, Palo Alto, CA',
    price: 0,
    rating: 3.9,
    title: 'HP Garage',
    weight: 1,
  },
  {
    categoryId: 'offices',
    gallery: [
      '/images/plan-your-tour/attractions/ai-b2b-startup.webp',
    ],
    id: 'ai-b2b-startup',
    image: '/images/plan-your-tour/attractions/ai-b2b-startup.webp',
    price: 0,
    title: 'AI B2B Startup',
    weight: 2,
  },
  {
    categoryId: 'offices',
    gallery: [
      '/images/plan-your-tour/attractions/apple-park.webp',
    ],
    id: 'apple-park',
    image: '/images/plan-your-tour/attractions/apple-park.webp',
    price: 0,
    rating: 3.9,
    title: 'Apple Park',
    weight: 2,
  },
  {
    categoryId: 'offices',
    gallery: [
      '/images/plan-your-tour/attractions/googleplex.webp',
    ],
    id: 'googleplex',
    image: '/images/plan-your-tour/attractions/googleplex.webp',
    price: 0,
    rating: 4,
    title: 'Googleplex',
    weight: 2,
  },
  {
    categoryId: 'shopping',
    gallery: [
      '/images/plan-your-tour/attractions/union-square.webp',
    ],
    id: 'union-square',
    image: '/images/plan-your-tour/attractions/union-square.webp',
    price: 0,
    rating: 4,
    title: 'Union Square',
    weight: 3,
  },
  {
    categoryId: 'shopping',
    gallery: [
      '/images/plan-your-tour/attractions/ferry-building.webp',
    ],
    id: 'ferry-building',
    image: '/images/plan-your-tour/attractions/ferry-building.webp',
    price: 0,
    rating: 4.5,
    title: 'Ferry Building Marketplace',
    weight: 3,
  },
  {
    categoryId: 'shopping',
    gallery: [
      '/images/plan-your-tour/attractions/stanford-shopping.webp',
    ],
    id: 'stanford-shopping',
    image: '/images/plan-your-tour/attractions/stanford-shopping.webp',
    price: 0,
    rating: 4.4,
    title: 'Stanford Shopping Center',
    weight: 3,
  },
  {
    categoryId: 'shopping',
    gallery: [
      '/images/plan-your-tour/attractions/valley-fair.webp',
    ],
    id: 'valley-fair',
    image: '/images/plan-your-tour/attractions/valley-fair.webp',
    price: 0,
    rating: 3.9,
    title: 'Valley Fair & Santana Row',
    weight: 4,
  },
  {
    categoryId: 'universities',
    gallery: [
      '/images/plan-your-tour/attractions/stanford.webp',
    ],
    id: 'stanford',
    image: '/images/plan-your-tour/attractions/stanford.webp',
    price: 0,
    rating: 4.8,
    title: 'Stanford University',
    weight: 3,
  },
  {
    categoryId: 'universities',
    gallery: [
      '/images/plan-your-tour/attractions/berkeley.webp',
    ],
    id: 'berkeley',
    image: '/images/plan-your-tour/attractions/berkeley.webp',
    price: 0,
    rating: 4.6,
    title: 'UC Berkeley',
    weight: 3,
  },
  {
    categoryId: 'universities',
    gallery: [
      '/images/plan-your-tour/attractions/santa-clara.webp',
    ],
    id: 'santa-clara',
    image: '/images/plan-your-tour/attractions/santa-clara.webp',
    price: 0,
    rating: 4.6,
    title: 'Santa Clara University',
    weight: 2,
  },
  {
    categoryId: 'universities',
    gallery: [
      '/images/plan-your-tour/attractions/usf.webp',
    ],
    id: 'usf',
    image: '/images/plan-your-tour/attractions/usf.webp',
    price: 0,
    title: 'University of San Francisco',
    weight: 2,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/computer-history.webp',
    ],
    id: 'computer-history',
    image: '/images/plan-your-tour/attractions/computer-history.webp',
    price: 20,
    rating: 4.7,
    title: 'Computer History Museum',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/intel-museum.webp',
    ],
    id: 'intel-museum',
    image: '/images/plan-your-tour/attractions/intel-museum.webp',
    price: 0,
    rating: 4.2,
    title: 'Intel Museum',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/tour-for-you/california-academy.webp',
    ],
    id: 'california-academy',
    image: '/images/tour-for-you/california-academy.webp',
    price: 50,
    rating: 4.5,
    title: 'California Academy of Sciences',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/de-young.webp',
    ],
    childPrice: 0,
    id: 'de-young',
    image: '/images/plan-your-tour/attractions/de-young.webp',
    price: 25,
    rating: 4.4,
    title: 'de Young Museum',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/exploratorium.webp',
    ],
    id: 'exploratorium',
    image: '/images/plan-your-tour/attractions/exploratorium.webp',
    price: 40,
    rating: 4.6,
    title: 'Exploratorium',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/sfmoma.webp',
    ],
    childPrice: 0,
    id: 'sfmoma',
    image: '/images/plan-your-tour/attractions/sfmoma.webp',
    price: 30,
    rating: 4.4,
    title: 'SFMOMA',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/disney-family-museum.webp',
    ],
    childPrice: 15,
    id: 'disney-family-museum',
    image: '/images/plan-your-tour/attractions/disney-family-museum.webp',
    price: 30,
    rating: 4.6,
    title: 'Walt Disney Family Museum',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/cable-car-museum.webp',
    ],
    id: 'cable-car-museum',
    image: '/images/plan-your-tour/attractions/cable-car-museum.webp',
    price: 0,
    rating: 4.5,
    title: 'Cable Car Museum',
    weight: 2,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/aquarium-of-the-bay.webp',
    ],
    id: 'aquarium-of-the-bay',
    image: '/images/plan-your-tour/attractions/aquarium-of-the-bay.webp',
    price: 30,
    rating: 3.6,
    title: 'Aquarium of the Bay',
    weight: 3,
  },
  {
    categoryId: 'museums',
    gallery: [
      '/images/plan-your-tour/attractions/hiller-aviation.webp',
    ],
    childPrice: 15,
    id: 'hiller-aviation',
    image: '/images/plan-your-tour/attractions/hiller-aviation.webp',
    price: 20,
    rating: 4.5,
    title: 'Hiller Aviation Museum',
    weight: 3,
  },
  {
    categoryId: 'museums',
    childPrice: 20,
    gallery: [
      '/images/plan-your-tour/attractions/winchester-mystery-house.webp',
    ],
    id: 'winchester-mystery-house',
    image: '/images/plan-your-tour/attractions/winchester-mystery-house.webp',
    price: 40,
    rating: 4,
    title: 'Winchester Mystery House',
    weight: 3,
  },
  {
    categoryId: 'experiences',
    gallery: [
      '/images/plan-your-tour/attractions/bike.webp',
    ],
    id: 'bike',
    image: '/images/plan-your-tour/attractions/bike.webp',
    price: 40,
    title: 'Bike Ride',
    weight: 1,
  },
  {
    categoryId: 'experiences',
    gallery: [
      '/images/plan-your-tour/attractions/waymo.webp',
    ],
    id: 'waymo',
    image: '/images/plan-your-tour/attractions/waymo.webp',
    isGroupPrice: true,
    price: 20,
    title: 'Waymo Ride',
    weight: 1,
  },
  {
    categoryId: 'experiences',
    gallery: [
      '/images/plan-your-tour/attractions/tesla-robotaxi.webp',
    ],
    id: 'tesla-robotaxi',
    image: '/images/plan-your-tour/attractions/tesla-robotaxi.webp',
    isGroupPrice: true,
    price: 10,
    title: 'Tesla Robotaxi',
    weight: 1,
  },
  {
    categoryId: 'experiences',
    gallery: [
      '/images/plan-your-tour/attractions/zoox.webp',
    ],
    id: 'zoox',
    image: '/images/plan-your-tour/attractions/zoox.webp',
    price: 0,
    title: 'Zoox',
    weight: 1,
  },
  {
    categoryId: 'experiences',
    gallery: [
      '/images/plan-your-tour/attractions/cable-car.webp',
    ],
    id: 'cable-car',
    image: '/images/plan-your-tour/attractions/cable-car.webp',
    price: 10,
    rating: 4.4,
    title: 'Cable Car',
    weight: 1,
  },
  {
    categoryId: 'experiences',
    childPrice: 90,
    gallery: [
      '/images/plan-your-tour/attractions/kayaking.webp',
    ],
    id: 'kayaking',
    image: '/images/plan-your-tour/attractions/kayaking.webp',
    price: 110,
    title: 'Kayaking',
    weight: 3,
  },
  {
    categoryId: 'experiences',
    childPrice: 30,
    gallery: [
      '/images/plan-your-tour/attractions/bay-cruise.webp',
    ],
    id: 'bay-cruise',
    image: '/images/plan-your-tour/attractions/bay-cruise.webp',
    price: 40,
    title: 'Bay Cruise',
    weight: 3,
  },
  {
    categoryId: 'experiences',
    gallery: [
      '/images/plan-your-tour/attractions/helicopter.webp',
    ],
    id: 'helicopter',
    image: '/images/plan-your-tour/attractions/helicopter.webp',
    price: 400,
    title: 'Helicopter Flight',
    weight: 3,
  },
  {
    categoryId: 'experiences',
    gallery: [
      '/images/plan-your-tour/attractions/airplane.webp',
    ],
    id: 'airplane',
    image: '/images/plan-your-tour/attractions/airplane.webp',
    price: 300,
    title: 'Airplane Flight',
    weight: 3,
  },
  {
    categoryId: 'experiences',
    childPrice: 240,
    gallery: [
      '/images/plan-your-tour/attractions/hot-air-balloon.webp',
    ],
    id: 'hot-air-balloon',
    image: '/images/plan-your-tour/attractions/hot-air-balloon.webp',
    price: 300,
    title: 'Hot Air Balloon Flight',
    weight: 4,
  },
  {
    categoryId: 'experiences',
    childPrice: 0,
    gallery: [
      '/images/plan-your-tour/attractions/wine-tasting.webp',
    ],
    id: 'wine-tasting',
    image: '/images/plan-your-tour/attractions/wine-tasting.webp',
    price: 200,
    title: 'Wine Tasting in Napa / Sonoma',
    weight: 4,
  },
  {
    categoryId: 'events',
    gallery: [
      '/images/plan-your-tour/attractions/tech-meetup.webp',
    ],
    id: 'tech-meetup',
    image: '/images/plan-your-tour/attractions/tech-meetup.webp',
    price: 0,
    title: 'Tech Meetup',
    weight: 2,
  },
  {
    categoryId: 'events',
    gallery: [
      '/images/plan-your-tour/attractions/startup-pitch.webp',
    ],
    id: 'startup-pitch',
    image: '/images/plan-your-tour/attractions/startup-pitch.webp',
    price: 0,
    title: 'Startup Pitch',
    weight: 2,
  },
  {
    categoryId: 'events',
    gallery: [
      '/images/plan-your-tour/attractions/giants-oracle.webp',
    ],
    id: 'giants-oracle',
    image: '/images/plan-your-tour/attractions/giants-oracle.webp',
    price: 50,
    rating: 4.7,
    title: 'SF Giants at Oracle Park',
    weight: 3,
  },
  {
    categoryId: 'events',
    gallery: [
      '/images/plan-your-tour/attractions/warriors-chase.webp',
    ],
    id: 'warriors-chase',
    image: '/images/plan-your-tour/attractions/warriors-chase.webp',
    price: 150,
    rating: 4.3,
    title: 'Golden State Warriors at Chase Center',
    weight: 3,
  },
  {
    categoryId: 'events',
    gallery: [
      '/images/plan-your-tour/attractions/49ers-levis.webp',
    ],
    id: '49ers-levis',
    image: '/images/plan-your-tour/attractions/49ers-levis.webp',
    price: 150,
    rating: 4.2,
    title: '49ers at Levi’s Stadium',
    weight: 3,
  },
  {
    categoryId: 'events',
    gallery: [
      '/images/plan-your-tour/attractions/sharks-sap.webp',
    ],
    id: 'sharks-sap',
    image: '/images/plan-your-tour/attractions/sharks-sap.webp',
    price: 80,
    rating: 4.4,
    title: 'San Jose Sharks at SAP Center',
    weight: 3,
  },
];

export const ATTRACTIONS_BY_ID = Object.fromEntries(
  ATTRACTIONS.map((attraction) => {
    return [
      attraction.id,
      attraction,
    ];
  }),
) as Record<string, Attraction>;

export const ATTRACTION_WEIGHT_PER_DAY = 8;

export const getAttractionWeight = (id: string) => {
  return ATTRACTIONS_BY_ID[id]?.weight ?? 1;
};

export const getSelectedAttractionWeight = (selectedIds: readonly string[]) => {
  return selectedIds.reduce((total, id) => {
    return total + getAttractionWeight(id);
  }, 0);
};

export const getTripAttractionCapacity = (dayCount: number) => {
  return Math.max(0, dayCount) * ATTRACTION_WEIGHT_PER_DAY;
};

export const canSelectAttraction = (
  selectedIds: readonly string[],
  attractionId: string,
  dayCount: number,
) => {
  if (selectedIds.includes(attractionId)) {
    return true;
  }

  return getSelectedAttractionWeight(selectedIds) + getAttractionWeight(attractionId)
    <= getTripAttractionCapacity(dayCount);
};

export const isAttractionSelectionComplete = (
  selectedIds: readonly string[],
  dayCount: number,
) => {
  return selectedIds.length > 0
    && getSelectedAttractionWeight(selectedIds) <= getTripAttractionCapacity(dayCount);
};

export const getAttractionChildPrice = (attraction: Attraction) => {
  return attraction.childPrice ?? attraction.price;
};

export const computeAttractionTicketsTotal = (
  selectedIds: readonly string[],
  adults: number,
  participants: number,
) => {
  const childrenCount = Math.max(0, participants - adults);

  return selectedIds.reduce((total, id) => {
    const attraction = ATTRACTIONS_BY_ID[id];

    if (!attraction) {
      return total;
    }

    if (attraction.isGroupPrice) {
      return total + attraction.price;
    }

    return total
      + adults * attraction.price
      + childrenCount * getAttractionChildPrice(attraction);
  }, 0);
};

export const getAttractionsByCategory = (categoryId: AttractionCategoryId) => {
  return ATTRACTIONS.filter((attraction) => {
    return attraction.categoryId === categoryId;
  });
};

export const getAttractionDetails = (attraction: Attraction) => {
  const gallery = attraction.gallery ?? (attraction.image
    ? [
      attraction.image,
    ]
    : [
    ]);

  return {
    gallery,
    location: attraction.location ?? 'Silicon Valley, CA',
    rating: attraction.rating,
  };
};
