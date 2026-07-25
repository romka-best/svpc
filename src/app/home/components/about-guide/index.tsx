import { AboutGuideEffects } from './components/effects';
import { AboutGuideHistory } from './components/history';
import { AboutGuideIntro } from './components/intro';
import { AboutGuidePortrait } from './components/portrait';
import { AboutGuideProfile } from './components/profile';

const AboutGuideSection = () => {
  return (
    <section
      className="overflow-x-clip px-5 md:px-10 lg:overflow-x-visible"
      id="about-guide"
    >
      <div className="relative rounded-[20px] bg-white-gray px-5 py-14 md:px-10 md:py-20 xl:px-16 xl:py-24">
        <AboutGuideEffects />
        <div className="relative z-10 mx-auto flex max-w-225 flex-col gap-8 lg:gap-4">
          <AboutGuideIntro />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-end lg:gap-8">
            <div className="flex justify-center lg:sticky lg:bottom-8 lg:block lg:shrink-0 lg:self-end">
              <AboutGuidePortrait />
            </div>
            <div className="flex shrink-0 flex-col gap-15 lg:w-110">
              <AboutGuideProfile />
              <AboutGuideHistory />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutGuideSection };
