import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { AboutGuideSection } from './home/components/about-guide';
import { AboutTourSection } from './home/components/about-tour';
import { FaqSection } from './home/components/faq';
import { HeroSection } from './home/components/hero';
import { PlanYourTourSection } from './home/components/plan-your-tour';
import { ReviewsSection } from './home/components/reviews';
import { TourForYouSection } from './home/components/tour-for-you';

export default function HomePage() {
  return (
    <div className="min-h-svh">
      <div className="h-auto">
        <Header />
        <main className="h-full flex flex-col gap-15 md:gap-30">
          <HeroSection />
          <TourForYouSection />
          <AboutGuideSection />
          <AboutTourSection />
          <ReviewsSection />
          <PlanYourTourSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
