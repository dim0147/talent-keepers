import { BigText } from './components/BigText.tsx';

export function LeftSide() {
  const lightColor = 'rgba(0,0,0,.3)';

  return (
    <div className="flex-1">
      <BigText
        text={
          <>
            <span style={{ color: lightColor }}>Creative</span> Design
          </>
        }
      />
      <BigText text="& Development" />
      <BigText text={<span style={{ color: lightColor }}>Agency</span>} />
    </div>
  );
}
