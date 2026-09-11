import {
  LegalDocumentBlockType,
  type LegalDocumentSection,
} from '@/components/legal-document/types';

export const TERMS_UPDATED_ON = 'September 10, 2026';

export const TERMS_SECTIONS: LegalDocumentSection[] = [
  {
    title: 'Agreement',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'These Terms govern your use of this website and any private tour you book with Silicon Valley Private Circle. By using the site, submitting Plan Your Tour, checking the agreement box, or paying for a tour, you agree to these Terms and to our Privacy Policy.',
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'If you do not agree, do not use the website or send a booking request.',
      },
    ],
  },
  {
    title: 'Who we are',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Silicon Valley Private Circle (“we,” “us,” or “our”) is a private tour company operated by Roman Danilov in the San Francisco Bay Area, California, United States. We provide private, custom ground tours of Silicon Valley and San Francisco — a local guide, a private vehicle, and a route built around your interests. We do not run shared group tours, and we do not sell airline tickets or cruise packages.',
      },
    ],
  },
  {
    title: 'Eligibility',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'You must be 18 or older to submit a booking or pay for a tour. Families and children are welcome on the tour when a responsible adult books and travels with them. You are responsible for anyone in your group, including minors.',
      },
    ],
  },
  {
    title: 'Booking a tour',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Plan Your Tour lets you choose dates, group size, attractions, and a vehicle, and see a live price for your whole group. Submitting the form is a request to book. A booking is confirmed only after we accept it and payment succeeds through the payment gateway.',
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'After you book, we contact you to confirm pickup, the route, and any timed tickets. The dates shown in Plan Your Tour are the dates we can currently accept; availability can change until payment is complete.',
      },
    ],
  },
  {
    title: 'What is included',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Unless the live price or a written confirmation says otherwise, the tour price includes:',
      },
      {
        type: LegalDocumentBlockType.List,
        items: [
          'A private local guide for your group only, up to six guests',
          'Door-to-door transportation in the vehicle you choose, typically from a Bay Area hotel, home, or another agreed address, including SFO or SJC when arranged as part of the day',
          'A custom route and the commentary between stops',
          'Timed tickets that are already in the live price, such as Alcatraz or museum admission',
          'Lunch at $25 per person, as shown in the live price',
        ],
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'The price does not include gratuities, extra meals, souvenirs, personal expenses, or any ticket or activity that was not in the live price or later confirmed in writing. Gratuities are optional.',
      },
    ],
  },
  {
    title: 'Price and payment',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'The amount shown in Plan Your Tour is the total for your group for the dates, attractions, guest count, and vehicle you selected — not a per-person ticket on a shared vehicle. We charge that amount when you complete checkout.',
      },
    ],
    subsections: [
      {
        title: 'How you pay',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'You pay through the payment gateway we redirect you to. Card details are collected and processed by that gateway under its own terms and privacy policy. We do not store full card numbers on this website. We receive confirmation of the payment (amount, time, status, and a limited transaction reference).',
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'If payment fails, is reversed, or is charged back, the booking is not confirmed or may be canceled. You remain responsible for the amount due unless we cancel under these Terms.',
          },
        ],
      },
      {
        title: 'Taxes',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'Prices are in U.S. dollars. If sales tax or similar charges apply, they are included in the live price or stated before you pay.',
          },
        ],
      },
    ],
  },
  {
    title: 'Cancellation, changes, and refunds',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'All cancellation notices must be sent to me@romandanilov.com or @roman_danilov on Telegram. The time of cancellation is when we receive that message. Refunds, when due, go back to the original payment method and can take several business days to appear, depending on the payment gateway and your bank.',
      },
    ],
    subsections: [
      {
        title: 'If you cancel',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'Measured from the scheduled pickup time:',
          },
          {
            type: LegalDocumentBlockType.List,
            items: [
              'Fourteen full days or more before pickup: a full refund',
              'Less than fourteen days but at least two full days before pickup: a refund of 50% of the amount paid',
              'Less than two full days before pickup, or if your group does not appear at the agreed time and place: no refund',
            ],
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'If we have already bought non-refundable third-party tickets for your dates, we may deduct those unrecoverable costs from any refund that would otherwise be due.',
          },
        ],
      },
      {
        title: 'If we cancel',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'If we cancel because of a vehicle problem, illness, or another reason on our side, we will offer to reschedule at no extra charge or refund the amount you paid. That refund or reschedule is your only remedy for our cancellation.',
          },
        ],
      },
      {
        title: 'Weather, traffic, and events outside our control',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'Bay Area weather, traffic, road closures, and venue hours can change quickly. We may adjust the order of stops, skip a stop that is closed, or substitute a similar stop so the day can still run. That is not a cancellation and does not by itself entitle you to a refund.',
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'If conditions make the tour unsafe or impossible, we will reschedule at no extra charge or refund the amount you paid. We are not responsible for extra hotel nights, flights, or other costs you incur if a tour is delayed, shortened, or moved.',
          },
        ],
      },
      {
        title: 'Changes you request',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'After booking, you may ask to change dates, guest count, attractions, pickup, or vehicle. We will try to accommodate you. If the change raises the price, you pay the difference before the tour. If it lowers the price, we refund the difference only when the same cancellation windows above would have allowed a refund of that amount, and after any unrecoverable ticket costs.',
          },
        ],
      },
    ],
  },
  {
    title: 'Your responsibilities',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'You and your group agree to:',
      },
      {
        type: LegalDocumentBlockType.List,
        items: [
          'Give accurate contact details and be reachable before pickup',
          'Be ready at the agreed pickup time and place',
          'Wear seat belts, follow California traffic and venue rules, and follow reasonable safety instructions',
          'Treat the guide, the vehicle, and other people with ordinary care',
          'Wear layers and comfortable shoes — walking and weather both change during a Bay Area day',
        ],
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We may end the tour early, without a refund, if someone in your group is abusive, unsafe, illegal, or too intoxicated to continue. You are responsible for damage to the vehicle or equipment caused by your group beyond ordinary wear.',
      },
    ],
  },
  {
    title: 'Venues, campuses, and tickets',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Stops such as Apple Park, the Googleplex, Stanford, the Computer History Museum, and San Francisco landmarks are independent places. Unless we confirm a private inside visit in writing, campus and company stops are exterior, visitor-center, or publicly accessible experiences. We are not those companies, and we do not sell official corporate tours on their behalf.',
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Timed tickets are subject to the venue’s own rules, hours, and availability. If a venue cancels or cannot admit your group, we will substitute another stop or refund the unused ticket portion that we can recover.',
      },
    ],
  },
  {
    title: 'Vehicles',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'The vehicle you choose in Plan Your Tour is the vehicle we intend to use, subject to passenger limits. If that vehicle is unavailable, we may substitute one of similar class. We do not allow pets unless we agree in writing before the tour.',
      },
    ],
  },
  {
    title: 'Photos and reviews',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'You may take photos and video for personal use. Do not photograph in any area a venue marks as restricted. We will not use photos of your group in our materials unless you agree.',
      },
    ],
  },
  {
    title: 'Limitation of liability',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Tours involve walking, city traffic, and outdoor weather. You join at your own risk to that ordinary activity. To the fullest extent California law allows, we are not liable for indirect, incidental, special, or consequential damages, or for lost profits, lost trips, or lost data.',
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Our total liability for a tour is limited to the amount you paid us for that tour. Nothing in these Terms limits liability that California law does not allow us to limit, including liability for our own fraud, willful injury, or violation of law.',
      },
    ],
  },
  {
    title: 'Intellectual property',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'The website, the Silicon Valley Private Circle name, and our original text, photos, and design are ours or used with permission. You may not copy the site or our materials for commercial use without our written consent.',
      },
    ],
  },
  {
    title: 'Privacy',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'How we collect and use personal information is described in our Privacy Policy, not in these Terms. If the two conflict on a privacy question, the Privacy Policy controls.',
      },
    ],
  },
  {
    title: 'Governing law',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'These Terms are governed by the laws of the State of California, without regard to conflict-of-law rules. You and we agree that the state or federal courts located in San Francisco County or Santa Clara County, California, have exclusive jurisdiction, except that either of us may seek injunctive relief in any court of competent jurisdiction.',
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'If a court finds any part of these Terms unenforceable, the rest still applies. These Terms and the Privacy Policy are the entire agreement for the website and the tour, and they replace any earlier oral or written statements about the same subject, except a written confirmation we send you after you book.',
      },
    ],
  },
  {
    title: 'Changes to these Terms',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We may update these Terms from time to time. The “Last updated” date at the top of this page will change when we do. Material changes will be posted here. A booking already confirmed stays under the Terms in effect on the date you paid, unless a change is required by law.',
      },
    ],
  },
  {
    title: 'How to contact us',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Questions about these Terms, a booking, or a refund:',
      },
      {
        type: LegalDocumentBlockType.List,
        items: [
          'Silicon Valley Private Circle, Roman Danilov',
          'San Francisco Bay Area, California, United States',
          'Email: me@romandanilov.com',
          'Telegram: @roman_danilov',
        ],
      },
    ],
  },
];
