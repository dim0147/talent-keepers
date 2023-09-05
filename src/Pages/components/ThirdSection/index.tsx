import VideoSrc from '../../../Assets/videos/Pergano-Video-2023.mp4';

export function ThirdSection() {
  return (
    <div className="mt-[10vh]">
      <div className="text-center text-[3vw]">Testimonials</div>
      <div className="p-[0.2vw] flex justify-center">
        <video src={VideoSrc} />
      </div>
    </div>
  );
}
