import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BigTextProps {
  text: React.ReactElement | string;
}

export function BigText({ text }: BigTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Text appear from bottom
    gsap.fromTo(
      textRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 0.6,
      }
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
