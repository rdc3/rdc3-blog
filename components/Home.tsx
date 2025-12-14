'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';
import { TypeAnimation } from 'react-type-animation';

export default function Home(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    const cleanup = renderCanvas();

    // Return cleanup function to be called when component unmounts
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    // <div className="cursor-light dark:cursor-dark">
    <div>
      <div className="clouds">
        <div className="clouds-1"></div>
        <div className="clouds-2"></div>
        <div className="clouds-3"></div>
      </div>
      <h1 className="sr-only">
        Hello I'm Rohan, I'm a software developer, and I love building things for the web.
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Rohan',
                    1000,
                    'Rohan Dcunha',
                    1000,
                  ]}
                  speed={50}
                  cursor={false}
                  // style={{ fontSize: '2em' }}
                  // repeat={Infinity}
                />
              </h1>
              <h2 className="text-1xl font-medium opacity-80 sm:text-2xl md:text-2xl xl:text-2xl">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    '',
                    3000,
                    'I build things...',
                    1000,
                    'I build things and destroy...',
                    1000,
                    'Then I rebuild them again...',
                    1000,
                    'Then I rebuild them again, better this time..',
                    1000,
                  ]}
                  speed={50}
                  // style={{ fontSize: '2em' }}
                  repeat={Infinity}
                />
              </h2>
              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                Read more about me &rarr;
              </Link>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');

                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
