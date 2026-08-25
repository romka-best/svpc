export type ItineraryStopCategory =
  | 'dining'
  | 'event'
  | 'landmark'
  | 'museum'
  | 'office'
  | 'university';

export interface ItineraryStop {
  category: ItineraryStopCategory;
  duration: string;
  imageSrc: string;
  location: string;
  time: string;
  title: string;
  travelFromPrevious?: string;
}

export const ITINERARY_STOPS: ItineraryStop[] = [
  {
    category: 'university',
    duration: '1 hr',
    imageSrc: '/images/about-tour/card-stanford.webp',
    location: 'Palo Alto, CA',
    time: '9:00 AM',
    title: 'Stanford University',
  },
  {
    category: 'office',
    duration: '45 min',
    imageSrc: '/images/about-tour/card-googleplex.webp',
    location: 'Mountain View, CA',
    time: '10:15 AM',
    title: 'Googleplex',
    travelFromPrevious: '10 min drive',
  },
  {
    category: 'museum',
    duration: '1 hr',
    imageSrc: '/images/about-tour/card-computer-history.webp',
    location: 'Mountain View, CA',
    time: '11:30 AM',
    title: 'Computer History Museum',
    travelFromPrevious: '5 min drive',
  },
  {
    category: 'dining',
    duration: '1 hr',
    imageSrc: '/images/about-tour/card-lunch.webp',
    location: 'Los Altos, CA',
    time: '12:45 PM',
    title: 'Lunch in downtown Los Altos',
    travelFromPrevious: '10 min drive',
  },
  {
    category: 'landmark',
    duration: '1 hr',
    imageSrc: '/images/about-tour/card-golden-gate.webp',
    location: 'San Francisco, CA',
    time: '3:00 PM',
    title: 'Golden Gate Bridge',
    travelFromPrevious: '50 min drive',
  },
  {
    category: 'event',
    duration: '2 hrs',
    imageSrc: '/images/about-tour/card-startup-pitch.webp',
    location: 'San Francisco, CA',
    time: '6:00 PM',
    title: 'Startup Pitch Evening',
    travelFromPrevious: '20 min drive',
  },
];

export const ABOUT_TOUR_TAGS = [
  'Private group, never shared',
  'Door-to-door in a private car',
  'Iconic landmarks and hidden gems',
  'A local guide, not a script',
] as const;

export const ABOUT_TOUR_FEATURED_TAG = 'Tailored to your interests';

export const ABOUT_TOUR_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  description:
    'A private, guided day through Silicon Valley — Stanford University, the Googleplex, the Computer History Museum and the Golden Gate Bridge — driven door to door and tailored to your interests.',
  itinerary: {
    '@type': 'ItemList',
    itemListElement: ITINERARY_STOPS.map((stop, index) => ({
      '@type': 'ListItem',
      item: {
        '@type': 'TouristAttraction',
        address: stop.location,
        name: stop.title,
      },
      position: index + 1,
    })),
  },
  name: 'Private Silicon Valley Day Tour',
  provider: {
    '@type': 'TravelAgency',
    name: 'Silicon Valley Private Circle',
  },
  touristType: 'Founders, investors, engineers, students and curious travellers',
};
