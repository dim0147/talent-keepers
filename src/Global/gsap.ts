import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mainTimeLine = gsap.timeline({ paused: true });

export { mainTimeLine };
