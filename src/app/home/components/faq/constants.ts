export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How much does a private Silicon Valley tour cost?',
    answer:
      'The price depends on your dates, chosen destinations, group size, and vehicle. As you build the itinerary you will see a live tour price. That total is for your whole group for the whole trip, not a per-person ticket on a shared vehicle.',
  },
  {
    question: 'What is included in a private Silicon Valley tour?',
    answer:
      'Your private local guide, door-to-door transportation in the car you choose, a custom route, and the stories between stops are included. Tickets such as Alcatraz or museum admission are already in the price. Lunch is included at $25 per person.',
  },
  {
    question: 'How long is a Silicon Valley tour, and where do you pick us up?',
    answer:
      'A full day is the usual format. Multi-day private tours are available if you want to go deeper. Pickup and drop-off are door to door in a private car, typically from your hotel, home, or another Bay Area address. Airport pickups from SFO or SJC can be arranged as part of the day.',
  },
  {
    question: 'What makes these tours different from other Silicon Valley tours?',
    answer:
      'Your experience is never shared. You travel in a private car with a local guide, not a script, and the route is planned down to the last stop. Choose Apple Park, the Googleplex, Stanford, the Computer History Museum, the Golden Gate Bridge, and other hidden gems. We time the day around traffic, opening hours, and what you actually care about.',
  },
  {
    question: 'Is this a shared group tour, and how many people can join?',
    answer:
      'It is always private — only your group rides along. Solo travelers, couples, families, and small groups are welcome, up to six guests.',
  },
  {
    question: 'How do I customize my Silicon Valley tour itinerary?',
    answer:
      'Use Build My Itinerary on this page: choose your dates, who is coming, the attractions you want, and a car. After you book, your guide confirms the route with you so the trip still feels tailored.',
  },
  {
    question: 'Is a private Silicon Valley tour good for families, founders, and first-time visitors?',
    answer:
      'Yes. Because the group is never shared, you can move without being rushed. First-time visitors get the landmarks plus local context: how Silicon Valley actually works, not only photo stops. Wear layers and comfortable shoes — Bay Area weather and walking between stops both change quickly.',
  },
];

export const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => {
    return {
      '@type': 'Question',
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
      name: item.question,
    };
  }),
};
