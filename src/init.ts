import { mainTimeLine } from './Global/gsap.ts';
import {
  ANIMATION_DURATION,
  ANIMATION_DURATION_SECOND_SECTION_IMG,
  TIMELINE_LABEL,
} from './Constants/gsap.ts';
import Lenis from '@studio-freight/lenis';

function setupFirstSection() {
  // First section
  mainTimeLine.addLabel(TIMELINE_LABEL.FIRST_SECTION.LEFT_SIDE, 0);
  mainTimeLine.addLabel(
    TIMELINE_LABEL.FIRST_SECTION.RIGHT_SIDE,
    `${TIMELINE_LABEL.FIRST_SECTION.LEFT_SIDE}+=${ANIMATION_DURATION - 0.1}`
  );

  // Second section
  mainTimeLine.add(
    TIMELINE_LABEL.SECOND_SECTION.TEXT,
    `${TIMELINE_LABEL.FIRST_SECTION.RIGHT_SIDE}+=${ANIMATION_DURATION}`
  );
  mainTimeLine.add(
    TIMELINE_LABEL.SECOND_SECTION.IMAGE,
    `${TIMELINE_LABEL.SECOND_SECTION.TEXT}+=${
      ANIMATION_DURATION_SECOND_SECTION_IMG + 0.5
    }`
  );
}

function setupSmotthScroll() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export function init() {
  setupSmotthScroll();
  setupFirstSection();
}
