import {
  LegalDocumentBlockType,
  type LegalDocumentSection,
} from '@/components/legal-document/types';

export const PRIVACY_POLICY_UPDATED_ON = 'September 7, 2026';

export const PRIVACY_POLICY_SECTIONS: LegalDocumentSection[] = [
  {
    title: 'Who we are',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Silicon Valley Private Circle (“we,” “us,” or “our”) is a private tour practice operated by Roman Danilov in the San Francisco Bay Area, California, United States. We offer private, custom tours of Silicon Valley and San Francisco — door-to-door transportation, a local guide, and a route built around your interests. We do not run shared group tours.',
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'This Privacy Policy explains how we collect, use, share, and protect personal information when you visit this website, use Plan Your Tour, communicate with us, pay for a tour, or travel with us. It is meant to be a notice at collection under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (together, the “CCPA”).',
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'If you do not agree with this policy, please do not use the website or send us a booking request.',
      },
    ],
  },
  {
    title: 'Information we collect',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We collect only what we need to plan, price, confirm, and run your tour, to reply to you, and to operate this website. We do not buy marketing lists, and we do not collect information to advertise to you on other sites.',
      },
    ],
    subsections: [
      {
        title: 'Information you give us',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'When you use Plan Your Tour on this website, you may provide:',
          },
          {
            type: LegalDocumentBlockType.List,
            items: [
              'Preferred tour dates',
              'Group type (solo, partners, family, or group) and the number of guests',
              'The attractions you want to visit, or a request that we choose them for you',
              'Vehicle preference',
              'A contact method and the matching details: email address, phone number, or Telegram username',
              'Your agreement to this Privacy Policy and our Terms',
            ],
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'We do not ask you to type a payment card number on this website. If you complete a booking, card details are entered on the payment gateway.',
          },
        ],
      },
      {
        title: 'Information collected automatically',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'When you visit the site, we and our hosting provider may collect:',
          },
          {
            type: LegalDocumentBlockType.List,
            items: [
              'Device, browser, and general usage data, such as pages viewed, referring URL, and an approximate location derived from IP address',
              'Performance measurements through Vercel Analytics and Vercel Speed Insights',
              'Server logs, which can include IP address, date and time, and request information',
              'A functional cookie used only to remember sidebar and menu state on your device',
            ],
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'Vercel Analytics and Speed Insights are privacy-oriented measurement tools. We use them to understand how the site performs, not to build advertising profiles or to sell your information.',
          },
        ],
      },
      {
        title: 'Information from later messages',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'After you reach out or book, you may share more so we can run the day: a Bay Area pickup or drop-off address (a hotel, home, or SFO or SJC), guest first names for timed tickets, accessibility or other requests, and messages you send by email, phone, or Telegram. We use that information to plan and deliver your tour and to reply to you.',
          },
        ],
      },
    ],
  },
  {
    title: 'How we use your information',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We use personal information to:',
      },
      {
        type: LegalDocumentBlockType.List,
        items: [
          'Respond to inquiries and confirm bookings',
          'Build your itinerary, price the tour, and arrange the vehicle',
          'Reserve or purchase timed tickets when they are included in the tour',
          'Process payment through the payment gateway',
          'Coordinate meeting points, timing, weather, or changes on the day',
          'Operate, secure, and improve the website',
          'Meet tax, accounting, and other legal duties',
          'Establish, exercise, or defend legal claims',
        ],
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We do not use your information for targeted advertising. We do not sell personal information.',
      },
    ],
  },
  {
    title: 'How we share information',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We share personal information only when it is needed to provide the tour, run the website, or comply with the law:',
      },
      {
        type: LegalDocumentBlockType.List,
        items: [
          'Service providers. Hosting and site infrastructure (Vercel), the analytics tools named above, email or messaging delivery, and the payment gateway that processes your transaction.',
          'Ticket and venue partners. If a stop requires a named reservation — for example Alcatraz or a museum — we share the guest information that venue requires.',
          'Legal requests. If we are required to disclose information by law, court order, or to protect safety, rights, or property.',
          'Business transfer. If this tour practice is transferred, related information may move with it, still under this policy or equivalent protection.',
        ],
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We do not sell personal information as the CCPA defines a sale. We do not share personal information for cross-context behavioral advertising. We do not disclose personal information to third parties for their own direct marketing.',
      },
    ],
  },
  {
    title: 'Payments',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'If you pay online, you are sent to a payment gateway. That gateway collects and processes your payment details under its own privacy policy. We receive confirmation of the payment — such as amount, time, status, and a limited transaction reference. We do not store full card numbers on this website.',
      },
    ],
  },
  {
    title: 'Cookies and similar technologies',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We use a small functional cookie so the site can remember whether the menu is open. We do not use advertising cookies, and we do not place third-party ad pixels on this site. You can block or delete cookies in your browser; some menu state may then reset between visits.',
      },
    ],
  },
  {
    title: 'How long we keep information',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We keep personal information only as long as we need it:',
      },
      {
        type: LegalDocumentBlockType.List,
        items: [
          'Website analytics and performance data, for short periods consistent with our hosting provider’s defaults, often in aggregate form',
          'Booking, contact, and payment-confirmation records, for as long as needed to provide the tour, then for a reasonable period for accounting, taxes, disputes, and legal duties — typically several years for California business records, and longer if a claim is pending',
          'Messages you send us, for as long as needed to complete the tour and any follow-up you ask for',
        ],
      },
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'When we no longer need information, we delete it or de-identify it.',
      },
    ],
  },
  {
    title: 'Security',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We use HTTPS, reputable hosting in professionally managed data centers, and access limited to the people who need the information to run the tours. No method of transmission or storage is completely secure. Please use a contact method you are comfortable with.',
      },
    ],
  },
  {
    title: 'Your California privacy rights',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'If you are a California resident, the CCPA gives you rights over the personal information we collect. This page is also our notice at collection.',
      },
    ],
    subsections: [
      {
        title: 'Rights you can exercise',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'Subject to legal exceptions, you may:',
          },
          {
            type: LegalDocumentBlockType.List,
            items: [
              'Know the categories and specific pieces of personal information we have collected, the sources, the purposes, and the categories of third parties with whom we share it',
              'Delete personal information we hold about you',
              'Correct inaccurate personal information',
              'Opt out of the sale or sharing of personal information — we do not sell or share personal information as those terms are defined by the CCPA, so there is nothing to opt out of today',
              'Limit the use and disclosure of sensitive personal information — we do not use sensitive personal information to infer characteristics about you',
              'Not be discriminated against for exercising these rights',
            ],
          },
        ],
      },
      {
        title: 'How to make a request',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'Email me@romandanilov.com or message @roman_danilov on Telegram, and include “Privacy Request” so we can find it quickly. Tell us which right you want to exercise. We will need to verify that you are the person the request is about — for example by matching the email, phone number, or Telegram account used to book. You may designate an authorized agent; we may still need to verify your identity and the agent’s authority.',
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'We will respond to a verifiable consumer request within the time California law requires, generally 45 days. If we deny a request, you may appeal by contacting us again and stating that you wish to appeal.',
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'California’s Shine the Light law (Civil Code § 1798.83) also lets certain residents ask how we disclose personal information to third parties for those parties’ direct marketing. We do not make those disclosures.',
          },
        ],
      },
      {
        title: 'Categories we may collect',
        content: [
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'Depending on how you use the site and whether you book a tour, we may collect:',
          },
          {
            type: LegalDocumentBlockType.List,
            items: [
              'Identifiers, such as a name you later give us, email address, phone number, Telegram username, and IP address',
              'Customer records, such as booking details, messages, and payment confirmations',
              'Commercial information, such as tour dates, attractions, vehicle, group size, and price',
              'Internet or other electronic activity, such as pages viewed and device or browser data',
              'Geolocation: a coarse location from IP address, and a pickup or drop-off address if you give us one',
              'Inferences about tour preferences, based on the attractions you select',
            ],
          },
          {
            type: LegalDocumentBlockType.Paragraph,
            text: 'We do not collect Social Security numbers, account passwords, biometric identifiers, or precise mobile tracking through this website. We do not request sensitive personal information. If you mention health, accessibility needs, or that children are in the group so we can plan the day, we use that only to deliver the tour.',
          },
        ],
      },
    ],
  },
  {
    title: 'Children',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'This website is intended for adults. You must be 18 or older to submit a booking. Families are welcome on tour; children travel with a responsible adult. We do not knowingly collect personal information from children under 16 through this website. If you believe a child has submitted information here, contact us and we will delete it.',
      },
    ],
  },
  {
    title: 'People outside the United States',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We operate in California. If you contact us from outside the United States, your information will be processed in the United States, where privacy laws may differ from those in your country.',
      },
    ],
  },
  {
    title: 'Changes to this policy',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do. Material changes will be posted here. If you keep using the website after an update, you accept the revised policy.',
      },
    ],
  },
  {
    title: 'How to contact us',
    content: [
      {
        type: LegalDocumentBlockType.Paragraph,
        text: 'Questions about this policy, CCPA requests, and appeals can be sent to:',
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
