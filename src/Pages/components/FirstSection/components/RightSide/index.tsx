import { useEffect } from 'react';
import { mainTimeLine } from '../../../../../Global/gsap.ts';
import {
  ANIMATION_DURATION,
  TIMELINE_LABEL,
} from '../../../../../Constants/gsap.ts';

export function RightSide() {
  useEffect(() => {
    mainTimeLine.fromTo(
      '.fs-rs-text',
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        duration: ANIMATION_DURATION,
      },
      TIMELINE_LABEL.FIRST_SECTION.RIGHT_SIDE
    );
  }, []);

  return (
    <div className="flex-1 flex justify-end items-end">
      <div className="pr-[2vw] text-[1.5vw] leading-[1] font-medium">
        <p className="fs-rs-text">Our thing is creating cool</p>
        <p className="fs-rs-text">experiences for startups and tech</p>
        <p className="fs-rs-text">companies. We make sure users</p>
        <p className="fs-rs-text">and business needs are simpatico.</p>
      </div>
    </div>
  );
}
