import BannerSrc from '../../../Assets/images/banner-firth.jpg';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CardProps {
  title: string;
  content: string;
}

export function FirthSection() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#firth-section',
          start: 'start start',
          pin: true,
          scrub: 1,
          end: '+=1000',
        },
      })
      .fromTo(
        '#firth-section-img-1',
        {
          clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        0.1
      )
      .fromTo(
        '#firth-section-img-2',
        {
          clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        0.1
      )
      .fromTo(
        '#firth-section-content',
        {
          yPercent: 0,
        },
        {
          yPercent: -100,
        },
        0
      );
  }, []);

  return (
    <div
      id="firth-section"
      className="w-full h-[100vh] relative flex-col overflow-hidden"
    >
      <img
        id="firth-section-img-1"
        className="z-1 w-full h-full absolute left-0 top-0"
        src={BannerSrc}
      />
      <img
        id="firth-section-img-2"
        className="z-2 w-full h-full absolute right-0 top-0"
        src={BannerSrc}
      />
      <div
        id="firth-section-content"
        className="flex justify-center items-center flex-col gap-y-20 w-full pt-10"
      >
        <Card
          title="Stimulates your mind"
          content="Put your brain in focus mode: yerba mate infusion can help stimulate brain activity thanks to the natural presence of polyphenols. The end of your sessions will be much more productive."
        />
        <Card
          title="No crash"
          content="Prolonged, better-controlled energy without palpitations thanks to yerba mate. The natural combination of caffeine and theobromine in yerba mate infusion helps regulate energy. Bye bye coffee down!"
        />
        <Card
          title="Recovery"
          content="Whether it's for sport or after a night out, we've got you covered! Yerba mate enables you to recover 8.6% faster from physical exertion in the 24 hours following it, just when you need it most."
        />
      </div>
    </div>
  );
}

function Card({ title, content }: CardProps) {
  const divRef = useRef();

  useEffect(() => {
    const dom = divRef.current;
    if (!dom) {
      return;
    }

    gsap.fromTo(
      dom,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: dom,
          start: '-=550px +=400px',
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div ref={divRef} className="firth-section-card relative z-3 max-w-sm">
      <h4 className="text-6xl">{title}</h4>
      <p className="mt-5 mix-blend-screen text-2xl">{content}</p>
    </div>
  );
}