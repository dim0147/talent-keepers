import { FirstSection } from '../components/FirstSection';
import { SecondSection } from '../components/SecondSection';
import { useEffect } from 'react';
import { mainTimeLine } from '../../Global/gsap.ts';

function Home() {
  useEffect(() => {
    mainTimeLine.play();
  }, []);

  return (
    <div className="w-full">
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default Home;
