import { WorkProps } from './WorkRight';

export function WorkLeft({ children, progress }: WorkProps) {
  let translateY = Math.max(0, 50 - progress * 3 * 50);

  if (progress > 0.85) {
    translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  }

  return (
    <div
      className="flex h-[30vh] flex-col items-center justify-center text-3xl lg:h-auto lg:text-3xl"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="bg-white text-black antialiased dark:bg-white dark:text-black rounded-full py-[3vh] px-[8vw] md: px-[4vw] lg: px-[4vw]">
        <div className="leading-10 text-black">{children}</div>
      </div>
    </div>
  );
}
