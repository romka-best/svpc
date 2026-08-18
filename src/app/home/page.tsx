import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { AboutGuideSection } from './components/about-guide';
import { AboutTourSection } from './components/about-tour';
import { CreateTourSection } from './components/create-tour';
import { FaqSection } from './components/faq';
import { HeroSection } from './components/hero';
import { ReviewsSection } from './components/reviews';
import { TourForYouSection } from './components/tour-for-you';

export default function HomePage() {
  return (
    <div className="h-auto">
      <Header />
      <main className="h-full flex flex-col gap-15 md:gap-30">
        <HeroSection />
        <TourForYouSection />
        <AboutGuideSection />
        <AboutTourSection />
        <ReviewsSection />
        <CreateTourSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
