export interface HistoryEntry {
  title: string;
  date: string;
  description: string;
  highlighted?: boolean;
}

export const ABOUT_HISTORY: HistoryEntry[] = [
  {
    title: 'Arrived as a tourist',
    date: 'The beginning',
    description: 'I came to visit Silicon Valley — and fell in love with it. That first trip is why I stayed, and why I know how it feels to see this place for the first time.',
  },
  {
    title: 'Chose to stay and go deeper',
    date: 'Years on the ground',
    description: 'Living here changed the view: tech campuses, universities, and the people behind them. I learned how the Valley actually works so your day is never a tourist script.',
  },
  {
    title: 'Built private, tailored tours',
    date: 'Designed around you',
    description: 'Tell me what you care about — Apple, Google, Stanford, Alcatraz, a flight over the city — and I shape the day around it.',
  },
  {
    title: 'Guiding private tours today',
    date: 'Your dates, your pace',
    description: 'A private day with a local guide. No crowds, no generic route. Create your tour below and I will take it from there.',
    highlighted: true,
  },
];
