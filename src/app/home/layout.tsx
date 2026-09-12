import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh">
      {children}
    </div>
  );
}
