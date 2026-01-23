'use client';

import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';

import AnimatedService from '@/utils/AnimatedService';
import ArrowButton from '../arrowButton/ArrowButton';

type ImageType = {
  source: string;
  alt: string;
};

type PostProps = {
  id: string;
  title: string;
  imageList: ImageType[];
  paragraphList: string[];
};

const activeScrollButtonStyle = 'border-accent text-accent';
const inactiveScrollButtonStyle = 'border-[#b3c0ce] text-[#b3c0ce] cursor-default';

export default function Post({ id, title, imageList, paragraphList }: PostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(0);

  const [lightboxAtStart, setLightboxAtStart] = useState(true);
  const [lightboxAtEnd, setLightboxAtEnd] = useState(false);

  const shortList = imageList.length <= 2;

  const leftButtonStyle = isAtStart
    ? inactiveScrollButtonStyle
    : activeScrollButtonStyle;
  const rightButtonStyle = isAtEnd
    ? inactiveScrollButtonStyle
    : activeScrollButtonStyle;

  const lightboxLeftStyle = lightboxAtStart
    ? inactiveScrollButtonStyle
    : activeScrollButtonStyle;
  const lightboxRightStyle = lightboxAtEnd
    ? inactiveScrollButtonStyle
    : activeScrollButtonStyle;

  const handleScroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const handleLightboxScroll = (scrollOffset: number) => {
    if (lightboxRef.current) {
      lightboxRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const scrollToImage = (index: number) => {
    const element = lightboxRef.current;
    if (!element) return;

    const imageWidth = 640 + 40; // 40rem (640px) + gap (40px)
    const containerWidth = element.clientWidth;
    const scrollPosition = index * imageWidth - (containerWidth - 640) / 2;
    element.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });
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

  useLayoutEffect(() => {
    const element = lightboxRef.current;
    if (!element || !isLightboxOpen) return;

    // Scroll to the clicked image
    const imageWidth = 640 + 40; // 40rem (640px) + gap (40px)
    const containerWidth = element.clientWidth;
    const scrollPosition = clickedImageIndex * imageWidth - (containerWidth - 640) / 2;
    element.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'instant' });

    const handleScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const epsilon = 5;

      setLightboxAtStart(scrollLeft <= epsilon);
      setLightboxAtEnd(scrollLeft + clientWidth >= scrollWidth - epsilon);
    };

    handleScrollPosition();
    element.addEventListener('scroll', handleScrollPosition);

    return () => element.removeEventListener('scroll', handleScrollPosition);
  }, [isLightboxOpen, imageList, clickedImageIndex]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  function openLightbox(index: number) {
    setClickedImageIndex(index);
    setIsLightboxOpen(true);
  }

  function closeLightbox() {
    setIsLightboxOpen(false);
  }

  return (
    <>
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="flex items-center gap-4 md:gap-10 max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowButton
              buttonClass={clsx(
                'size-10 aspect-square flex items-center justify-center rounded-full border cursor-pointer bg-background/80',
                lightboxLeftStyle,
                shortList && 'hidden'
              )}
              label="Desplázate a la derecha"
              iconClass="rotate-180 size-4"
              handleClick={() => handleLightboxScroll(-700)}
            />
            <div
              ref={lightboxRef}
              className={clsx(
                'overflow-x-auto hide-scrollbar whitespace-nowrap max-h-[90vh]',
                !shortList && 'flex items-center'
              )}
            >
              <ul
                className={clsx(
                  'flex gap-10 justify-start p-4',
                  shortList && 'flex-wrap justify-center'
                )}
              >
                {imageList.map((image, index) => (
                  <li key={index} className="flex-shrink-0">
                    <img
                      src={image.source}
                      onClick={() => scrollToImage(index)}
                      className="w-[40rem] h-[50rem] object-cover shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-xl cursor-pointer"
                      alt={image.alt}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <ArrowButton
              buttonClass={clsx(
                'size-10 aspect-square flex items-center justify-center rounded-full border cursor-pointer bg-background/80',
                lightboxRightStyle,
                shortList && 'hidden'
              )}
              label="Desplázate a la izquierda"
              iconClass="size-4"
              handleClick={() => handleLightboxScroll(700)}
            />
          </div>
        </div>
      )}

      <h1 id={id} className="text-4xl text-center">
        {title}
      </h1>
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
            handleClick={() => handleScroll(-440)}
          />
          <div
            ref={ref}
            className={clsx(
              'py-10 px-4 w-full min-w-0 overflow-x-auto hide-scrollbar whitespace-nowrap',
              !shortList && 'flex items-center gap-10'
            )}
          >
            <ul
              className={clsx(
                'flex gap-14 justify-start',
                shortList && 'flex-wrap md:justify-center'
              )}
            >
              {imageList.map((image, index) => (
                <li key={index} className="flex-shrink-0">
                  <img
                    src={image.source}
                    onClick={() => openLightbox(index)}
                    className="w-[20rem] h-[25rem] object-cover shadow-[0_0_10px_rgba(0,0,0,0.25),0_0_8px_rgba(255,255,255,0.09)] rounded-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                    alt={image.alt}
                  />
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
            handleClick={() => handleScroll(440)}
          />
        </div>
        <AnimatedService>
          <ul className="max-w-4xl space-y-10">
            {paragraphList.map((paragraph, index) => (
              <li key={index}>
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="text-text text-lg font-light leading-relaxed">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-text">
                        {children}
                      </strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc ml-6 text-text text-lg font-light space-y-1">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-text text-lg font-light">
                        {children}
                      </li>
                    )
                  }}
                >
                  {paragraph}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
        </AnimatedService>
      </div>
    </>
  );
}
