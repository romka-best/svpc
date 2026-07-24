export interface Review {
  author: string;
  avatarSrc: string;
  quote: string;
  role: string;
}

export const REVIEWS: Review[] = [
  {
    author: 'Max Khozyaiskikh',
    avatarSrc: '/images/review-avatar-max.webp',
    quote: 'The Silicon Valley Boy tour ignited new ideas for my startup with exclusive access to top tech companies. Meeting industry leaders provided invaluable insights. Highly recommended for innovators looking to elevate their business.',
    role: 'Silicon Valley Developer',
  },
  {
    author: 'Max Khozyaiskikh',
    avatarSrc: '/images/review-avatar-max.webp',
    quote: 'Exclusive access and a personal guide made this feel unlike any other tech tour. I left with connections, clarity, and a renewed drive to build.',
    role: 'Silicon Valley Developer',
  },
  {
    author: 'Max Khozyaiskikh',
    avatarSrc: '/images/review-avatar-max.webp',
    quote: 'From campus walks to closed-door conversations with builders, every stop was intentional. Silicon Valley Boy delivers the real story behind the innovation.',
    role: 'Silicon Valley Developer',
  },
];
