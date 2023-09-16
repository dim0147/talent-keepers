import VideoSrc from '../../../Assets/videos/Pergano-Video-2023.mp4';
import React, { useEffect, useRef, useState } from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { gsap } from 'gsap';

export function ThirdSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlBtnRef = useRef<HTMLDivElement>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const scrollToVideoViewAndPlay = () => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    videoElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // Wait scroll complete
    setTimeout(() => {
      videoElement.play();
    }, 100);
  };

  const playControlBtnAnimation = (isPlaying: boolean) => {
    const controlBtnElement = controlBtnRef.current;
    const videoElement = videoRef.current;
    if (!controlBtnElement || !videoElement) {
      return;
    }

    gsap
      .timeline()
      .set([controlBtnElement, videoElement], {
        cursor: isPlaying ? 'none' : 'auto',
      })
      .fromTo(
        controlBtnElement,
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 2,
          opacity: 0,
        }
      );
  };

  const onClickControlBtnOrVideo = (event: React.MouseEvent) => {
    // Click on control button may propagation to video element and trigger twice
    event.stopPropagation();

    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    const isPlaying = !videoElement.paused;
    if (isPlaying) {
      videoElement.pause();
    } else {
      scrollToVideoViewAndPlay();
    }

    setIsPlayingVideo(!isPlaying);
    playControlBtnAnimation(!isPlaying);
  };

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#third-section',
          start: '-100px center',
        },
      })
      .to('#third-section-title', { y: '0%', opacity: 1 })
      .to('#third-section-video-container', { opacity: 1, duration: 1 });
  }, []);

  return (
    <div id="third-section" className="mt-[10vh]">
      <div
        id="third-section-title"
        className="text-center text-[3vw] translate-y-[100%] opacity-0"
        onClick={onClickControlBtnOrVideo}
      >
        Professionals
      </div>
      <div
        id="third-section-video-container"
        className="flex justify-center relative overflow-hidden opacity-0"
      >
        <video
          ref={videoRef}
          src={VideoSrc}
          onEnded={() => setIsPlayingVideo(false)}
          onClick={onClickControlBtnOrVideo}
        />
        <div
          ref={controlBtnRef}
          className={`absolute left-[50%] top-[50%] w-20 h-20 bg-black translate-x-[-50%] translate-y-[-50%] flex justify-center items-center rounded-full cursor-pointer text-white`}
          style={{
            transition: 'background 0.5s, color 0.5s',
          }}
          onClick={onClickControlBtnOrVideo}
        >
          {isPlayingVideo ? (
            <BsFillPauseFill style={{ width: '50%', height: '50%' }} />
          ) : (
            <BsFillPlayFill style={{ width: '50%', height: '50%' }} />
          )}
        </div>
      </div>
      <p className="text-center italic text-xs mt-0.5">Source: pergano.de</p>
    </div>
  );
}
