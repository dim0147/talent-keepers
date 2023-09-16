import GoodFaceImg from '../../../Assets/images/good-faces.jpg';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';

import { gsap } from 'gsap';
import { ANIMATION_DURATION_SECOND_SECTION_IMG } from '../../../Constants/gsap.ts';

export function SecondSection() {
  useEffect(() => {
    const secondSectionTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#second-section',
        start: '100px center',
      },
    });

    secondSectionTimeLine
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
        }
      );

    secondSectionTimeLine.fromTo(
      '.ss-img',
      {
        opacity: 0,
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      },
      {
        opacity: 1,
        clipPath: 'polygon(0 0, 75% 0, 100% 100%, 25% 100%)',
        duration: ANIMATION_DURATION_SECOND_SECTION_IMG,
      }
    );
  }, []);

  return (
    <div id="second-section" className="mt-[10vh] flex">
      <div className="flex-1 pl-[10vw] pt-[10vh] text-[1.5vw] font-medium">
        <p className="ss-text">We work with latest technologies</p>
        <p className="ss-text">using an efficient digital work flows</p>
        <p className="ss-text">
          based on bim parametric modelling data analysis
        </p>
        <p className="ss-text"> and virtual reality.</p>
      </div>
      <div className="flex-1">
        <Parallax className="ss-img" bgImage={GoodFaceImg} strength={250}>
          {/* Make Parallax get the height of the image */}
          <img className="w-[35vw] invisible" src={GoodFaceImg} />
        </Parallax>
      </div>
    </div>
  );
}
