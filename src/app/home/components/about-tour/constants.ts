export interface ItineraryStop {
  imageSrc: string;
  location: string;
  time: string;
  title: string;
}

export const ITINERARY_STOPS: ItineraryStop[] = [
  {
    imageSrc: '/images/about-tour/card-computer-history.webp',
    location: 'USA, Silicon Valley 24',
    time: '1:00 PM',
    title: 'Computer History Museum',
  },
  {
    imageSrc: '/images/about-tour/card-golden-gate.webp',
    location: 'USA, Silicon Valley 23',
    time: '3:00 PM',
    title: 'Golden Gate Bridge',
  },
  {
    imageSrc: '/images/about-tour/card-restaurant.webp',
    location: 'USA, Silicon Valley 24',
    time: '5:00 PM',
    title: 'Trip to a restaurant',
  },
  {
    imageSrc: '/images/about-tour/card-googleplex.webp',
    location: 'USA, Silicon Valley 25',
    time: '7:00 PM',
    title: 'Googleplex',
  },
];

export const ABOUT_TOUR_TAGS = [
  'Experience Silicon Valley Like Never Before',
  'Meet Your Personal Guide',
  'Exclusive Access To Tech Giants',
  'Personalized Premium Service',
  'Immerse Yourself In Innovation',
] as const;

export const ABOUT_TOUR_FEATURED_TAG = 'Join The Elite Circle';
