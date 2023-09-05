import { FirstSection } from '../components/FirstSection';
import { SecondSection } from '../components/SecondSection';
import { useEffect } from 'react';
import { mainTimeLine } from '../../Global/gsap.ts';
import { ThirdSection } from '../components/ThirdSection';

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
      </div>
    </div>
  );
}

export default Home;
