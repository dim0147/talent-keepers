import GoodFaceImg from '../../../Assets/images/good-faces.jpg';
import { useEffect } from 'react';
import { TIMELINE_LABEL } from '../../../Constants/gsap.ts';
import { mainTimeLine } from '../../../Global/gsap.ts';

export function SecondSection() {
  useEffect(() => {
    mainTimeLine
      // Text
      .fromTo(
        '.ss-text',
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.2,
        },
        TIMELINE_LABEL.SECOND_SECTION.TEXT
      )
      // Image
      .fromTo(
        '.ss-img',
        {
          opacity: 0,
          filter: 'blur(3.125rem)',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
        },
        TIMELINE_LABEL.SECOND_SECTION.IMAGE
      );
  }, []);

  return (
    <div className="mt-[10vh] flex">
      <div className="flex-1 pl-[10vw] pt-[10vh] text-[1.5vw] font-medium">
        <p className="ss-text">We work with latest technologies</p>
        <p className="ss-text">using an efficient digital work flows</p>
        <p className="ss-text">
          based on bim parametric modelling data analysis
        </p>
        <p className="ss-text"> and virtual reality</p>
      </div>
      <div className="flex-1">
        <img
          className="ss-img w-[35vw]"
          style={{
            clipPath: 'polygon(0 0%, 75% 0, 100% 100%, 25% 100%)',
          }}
          src={GoodFaceImg}
        />
      </div>
    </div>
  );
}
