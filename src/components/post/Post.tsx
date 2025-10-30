'use client';

import AnimatedService from '@/utils/AnimatedService';
import ArrowButton from '../arrowButton/ArrowButton';
import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';

type ImageType = {
  source: string;
  alt: string;
};

type PostProps = {
  title: string;
  imageList: ImageType[];
  paragraphList: string[];
};

const activeScrollButtonStyle = 'border-accent text-accent';
const inactiveScrollButtonStyle = 'border-[#b3c0ce] text-[#b3c0ce] cursor-default';

export default function Post({ title, imageList, paragraphList }: PostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const shortList = imageList.length <= 2;

  const leftButtonStyle = isAtStart
    ? inactiveScrollButtonStyle
    : activeScrollButtonStyle;
  const rightButtonStyle = isAtEnd
    ? inactiveScrollButtonStyle
    : activeScrollButtonStyle;

  const handleScroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const epsilon = 5;

      setIsAtStart(scrollLeft <= epsilon);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - epsilon);
    };

    handleScrollPosition();
    element.addEventListener('scroll', handleScrollPosition);

    return () => element.removeEventListener('scroll', handleScrollPosition);
  }, [imageList]);

  return (
    <>
      <h1 className="text-4xl">{title}</h1>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-full flex gap-2 items-center md:gap-10">
          <ArrowButton
            buttonClass={clsx(
              'size-7 aspect-square flex items-center justify-center rounded-full border cursor-pointer',
              leftButtonStyle,
              shortList && 'hidden'
            )}
            label="Desplázate a la derecha"
            iconClass="rotate-180 size-3"
            handleClick={() => handleScroll(-150)}
          />
          <div
            ref={ref}
            className={clsx(
              'w-full min-w-0 overflow-x-auto hide-scrollbar whitespace-nowrap',
              !shortList && 'flex items-center gap-10'
            )}
          >
            <ul
              className={clsx(
                'flex gap-6 justify-start',
                shortList && 'flex-wrap md:justify-center'
              )}
            >
              {imageList.map((image, index) => (
                <li key={index} className="flex-shrink-0">
                  <img
                    src={image.source}
                    className="w-[20rem] h-[25rem] object-cover"
                    alt={image.alt}
                  ></img>
                </li>
              ))}
            </ul>
          </div>
          <ArrowButton
            buttonClass={clsx(
              'size-7 aspect-square flex items-center justify-center rounded-full border cursor-pointer',
              rightButtonStyle,
              shortList && 'hidden'
            )}
            label="Desplázate a la izquierda"
            iconClass="size-3"
            handleClick={() => handleScroll(150)}
          />
        </div>
        <AnimatedService>
          <ul className="max-w-4xl space-y-10">
            {paragraphList.map((paragraph, index) => (
              <li key={index}>
                <p className="text-text text-lg font-light">{paragraph}</p>
              </li>
            ))}
          </ul>
        </AnimatedService>
      </div>
    </>
  );
}
