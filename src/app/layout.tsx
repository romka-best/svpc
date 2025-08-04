import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { VercelToolbar } from '@vercel/toolbar/next';

import { cn } from '@/lib/utils';

import './globals.css';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Silicon Valley Private Circle',
	description: 'Silicon Valley Private Circle',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
