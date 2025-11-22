import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { HeroSection } from './components/hero';

export default function HomePage() {
  return (
    <div className="h-auto">
      <Header />
      <main className="h-full">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
