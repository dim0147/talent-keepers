import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Item } from './components/Item.tsx';
import picOneUrl from '../../../Assets/images/pic1.jpg';
import picTwoUrl from '../../../Assets/images/pic2.jpg';
import picThreeUrl from '../../../Assets/images/pic3.jpg';
import picFourUrl from '../../../Assets/images/pic4.jpg';

export function FourthSection() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#forth-section',
          start: '-100px center',
        },
      })
      .to('#forth-section-title', { opacity: 1 })
      .to('#forth-section-container', { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {
    const panels = document.querySelectorAll('.f4-panel');
    const amount = panels.length - 1;

    gsap.to(panels, {
      xPercent: -100 * amount,
      ease: 'none',
      scrollTrigger: {
        trigger: '#forth-section-container',
        pin: true,
        scrub: 1,
        snap: 1 / amount,
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: '+=3500',
      },
    });
  }, []);

  return (
    <div id="forth-section" className="mt-[10vh]">
      <div
        id="forth-section-title"
        className="text-center text-[3vw] opacity-0"
      >
        Gallery
      </div>
      <div
        id="forth-section-container"
        className="mt-5 flex w-full h-[100vh] overflow-hidden opacity-0 cursor-none"
      >
        <Item imgSrc={picOneUrl} />
        <Item imgSrc={picTwoUrl} />
        <Item imgSrc={picThreeUrl} />
        <Item imgSrc={picFourUrl} />
      </div>
    </div>
  );
}