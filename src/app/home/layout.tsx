import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
	return <div className="h-dvh">{children}</div>;
}
