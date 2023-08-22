import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import { useEffect } from 'react';
import { firstSectionTimeLine } from '../../../Global/gsap.ts';

export function FirstSection() {
  useEffect(() => {
    firstSectionTimeLine.play();
  }, []);

  return (
    <div className="p-5 flex">
      <LeftSide />
      <RightSide />
    </div>
  );
}
