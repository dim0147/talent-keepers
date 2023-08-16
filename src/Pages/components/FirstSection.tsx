import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const textStyle: React.CSSProperties = {
  fontSize: '6.5vw',
  lineHeight: '1.2em',
  overflow: 'hidden',
};

export function FirstSection() {
  useEffect(() => {
    gsap.fromTo(
      '.text-1',
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
      }
    );
  }, []);

  return (
    <div className="p-5">
      <div className="text-1" style={textStyle}>
        Creative Design
      </div>
      <div className="text-1" style={textStyle}>
        & Development
      </div>
      <div className="text-1" style={textStyle}>
        Agency
      </div>
    </div>
  );
}
