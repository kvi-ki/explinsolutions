'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Menu from '../menu/Menu';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 bg-whiteColor ${scrolled ? 'shadow-md' : ''}`}
      >
        <div className="w-full mx-auto h-8 my-4 p-4 flex justify-between items-center lg:px-20 2xl:w-10/12">
          <Link aria-label="Go to home page" href="/" className="size-10">
            <img src="/favicon.png" alt="explinsolutions label" />
          </Link>

          <div className="h-full w-40 flex justify-between items-center xl:order-3">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/34619792023"
              target="_blank"
              className=""
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-accent text-[1.5rem] rounded-full hover:bg-accent hover:text-whiteColor"
              />
            </a>
            <a
              aria-label="Call by phone"
              href="tel:+34619792023"
              className="text-gray hover:text-accent"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="text-accent pr-0.5 text-[1.3rem]"
              />
              619 792 023
            </a>
          </div>
          <Menu />
        </div>
      </header>
    </>
  );
}
