import React, { useEffect, useRef } from 'react';
import { mainTimeLine } from '../../../../../../Global/gsap.ts';
import {
  ANIMATION_DURATION,
  TIMELINE_LABEL,
} from '../../../../../../Constants/gsap.ts';

interface BigTextProps {
  text: React.ReactElement | string;
}

export function BigText({ text }: BigTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Text appear from bottom
    mainTimeLine.fromTo(
      textRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: ANIMATION_DURATION,
      },
      TIMELINE_LABEL.FIRST_SECTION.LEFT_SIDE
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <p ref={textRef} className="text-[6.5vw]/[1.2]">
        {text}
      </p>
    </div>
  );
}
