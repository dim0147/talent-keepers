import { FirstSection } from '../components/FirstSection';
import { SecondSection } from '../components/SecondSection';
import { useEffect } from 'react';
import { mainTimeLine } from '../../Global/gsap.ts';
import { ThirdSection } from '../components/ThirdSection';
import { FourthSection } from '../components/FourthSection';
import { FirthSection } from '../components/FirthSection';
import { Footer } from '../components/Footer';

function Home() {
  useEffect(() => {
    mainTimeLine.play();
  }, []);

  return (
    <div id="smooth-wrapper" className="w-full">
      <div id="smooth-content">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FirthSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
