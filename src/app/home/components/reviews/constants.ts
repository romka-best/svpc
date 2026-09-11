export interface Review {
  author: string;
  avatarSrc?: string;
  quote: string;
  role: string;
}

export const REVIEWS: Review[] = [
  {
    author: 'Max',
    avatarSrc: '/images/reviews/avatar-max.webp',
    quote: 'First time in the Bay Area, and I finally got to see Apple Park and the Googleplex. A local who actually knows the area showed us the hidden gems.',
    role: 'Software Engineer',
  },
  {
    author: 'Arda',
    avatarSrc: '/images/reviews/avatar-arda.webp',
    quote: 'My investors recommended this tour. Stanford University, then the Googleplex. I’d seen all this in pitch decks. Being there with a Silicon Valley guide who actually knows the history is a different thing.',
    role: 'Co-Founder & CTO',
  },
  {
    author: 'Tim and Anna',
    avatarSrc: '/images/reviews/avatar-tim-anna.webp',
    quote: 'We had the kids, so a big group tour was out. Private car, Computer History Museum, walked around Berkeley, Golden Gate on the way back. Nobody rushed us. Pretty much the only way I’d do a Silicon Valley tour with a family.',
    role: 'Family Travelers',
  },
  {
    author: 'Monique',
    avatarSrc: '/images/reviews/avatar-monique.webp',
    quote: 'I wanted Stanford and UC Berkeley without losing half the day to Caltrain. They planned around that. Good Stanford campus tour, and I didn’t have to figure out parking. Should’ve booked this earlier.',
    role: 'Student',
  },
];
