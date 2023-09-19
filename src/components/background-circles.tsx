export default function BackgroundCircles() {
  return (
    <div className={'absolute top-0 left-0 h-full w-full overflow-hidden -z-50'}>
      <svg width={'100%'} height={'100%'} className={'blur-[235.5px]'}>
      {/*<svg width={'100%'} height={'100%'}>*/}
        <circle
          r={328.5}
          cx={'5%'}
          cy={'50%'}
          fill={'#3A0044'}
        />
        <circle
          r={328.5}
          cx={'95%'}
          cy={'10%'}
          fill={'#430044'}
        />
      </svg>
    </div>
  );
};