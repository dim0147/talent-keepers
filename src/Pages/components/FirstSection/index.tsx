import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';

export function FirstSection() {
  return (
    <div className="p-5 flex">
      <LeftSide />
      <RightSide />
    </div>
  );
}
