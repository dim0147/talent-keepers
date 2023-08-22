import { firstSectionTimeLine } from './Global/gsap.ts';
import { ANIMATION_DURATION, TIMELINE_LABEL } from './Constants/gsap.ts';

function setupFirstSection() {
  firstSectionTimeLine.addLabel(TIMELINE_LABEL.FIRST_SECTION.LEFT_SIDE, 0);
  firstSectionTimeLine.addLabel(
    TIMELINE_LABEL.FIRST_SECTION.RIGHT_SIDE,
    `${TIMELINE_LABEL.FIRST_SECTION.LEFT_SIDE}+=${ANIMATION_DURATION - 0.1}`
  );
}

export function init() {
  setupFirstSection();
}
