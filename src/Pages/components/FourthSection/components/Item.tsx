interface ItemProps {
  imgSrc: string;
}

export function Item({ imgSrc }: ItemProps) {
  return (
    <div
      className={`f4-panel w-full h-[100vh] shrink-0 bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url("${imgSrc}")`,
      }}
    />
  );
}