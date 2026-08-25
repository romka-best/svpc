import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { VercelToolbar } from '@vercel/toolbar/next';

import { cn } from '@/lib/utils';

import './globals.css';

const poppins = Poppins({
  weight: [
    '300',
    '400',
    '500',
    '600',
    '700',
  ],
  style: [
    'normal',
    'italic',
  ],
  subsets: [
    'latin',
  ],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Silicon Valley Private Circle | Private Silicon Valley Tours',
    template: '%s | Silicon Valley Private Circle',
  },
  description: 'Private, guided Silicon Valley tours built around you. Visit Apple Park, the Googleplex, Stanford, the Computer History Museum and San Francisco in one day, driven door to door by a local guide.',
  keywords: [
    'Silicon Valley tour',
    'private Silicon Valley tour',
    'Apple Park tour',
    'Googleplex tour',
    'Stanford campus tour',
    'San Francisco day tour',
    'Silicon Valley guide',
    'tech tour California',
  ],
  openGraph: {
    title: 'Silicon Valley Private Circle | Private Silicon Valley Tours',
    description: 'A private day through Silicon Valley — Stanford, the Googleplex, the Computer History Museum, Apple Park and the Golden Gate Bridge, tailored to your interests.',
    siteName: 'Silicon Valley Private Circle',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silicon Valley Private Circle | Private Silicon Valley Tours',
    description: 'A private day through Silicon Valley, tailored to your interests and guided by a local.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body className={cn(poppins.variable, 'antialiased')}>
        {children}
        <Analytics />
        <SpeedInsights />
        {isDevelopment && <VercelToolbar />}
      </body>
    </html>
  );
}
