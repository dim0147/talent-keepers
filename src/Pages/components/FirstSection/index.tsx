import { BigText } from './components/BigText.tsx';

export function FirstSection() {
  const lightColor = 'rgba(0,0,0,.3)';

  return (
    <div className="p-5">
      <div className="flex-initial">
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
      {/*<div />*/}
    </div>
  );
}
