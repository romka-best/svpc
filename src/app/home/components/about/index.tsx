import { AboutEffects } from './components/effects';
import { AboutHistory } from './components/history';
import { AboutIntro } from './components/intro';
import { AboutPortrait } from './components/portrait';
import { AboutProfile } from './components/profile';

const AboutSection = () => {
  return (
    <section
      className="overflow-x-clip px-5 md:px-10 lg:overflow-x-visible"
      id="about-me"
    >
      <div className="relative rounded-[20px] bg-white-gray px-5 py-14 md:px-10 md:py-20 xl:px-16 xl:py-24">
        <AboutEffects />
        <div className="relative z-10 mx-auto flex max-w-225 flex-col gap-8 lg:gap-4">
          <AboutIntro />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-end lg:gap-8">
            <div className="flex justify-center lg:sticky lg:bottom-8 lg:block lg:shrink-0 lg:self-end">
              <AboutPortrait />
            </div>
            <div className="flex shrink-0 flex-col gap-15 lg:w-110">
              <AboutProfile />
              <AboutHistory />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
