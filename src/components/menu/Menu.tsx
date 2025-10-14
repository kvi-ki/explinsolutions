'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mediumScreenSize, setMediumScreenSize] = useState(true);
  const hiddenIfScreenSizeIsMedium = mediumScreenSize ? 'hidden' : 'cursor-pointer';

  useEffect(() => {
    const updateScreenSize = () => {
      setMediumScreenSize(window.innerWidth >= 1280 ? true : false);
    };

    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  function toggleMenu() {
    setMenuIsOpen((prev) => !prev);
  }

  const closeMenu = () => {
    if (!mediumScreenSize) toggleMenu();
  };

  return (
    <nav className="relative">
      <button
        type="button"
        aria-label="Open menu"
        onClick={toggleMenu}
        className={hiddenIfScreenSizeIsMedium}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl text-accent cursor-pointer"
        />
      </button>
      <div
        className={`${mediumScreenSize ? '' : `backdrop-blur-3xl flex flex-col items-start gap-10 pt-10 pl-10 fixed top-0 right-0 h-full w-52 z-50 transition-transform duration-500 ease-out ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className={hiddenIfScreenSizeIsMedium}
        >
          <FontAwesomeIcon icon={faXmark} className="size-6 text-text" />
        </button>
        <ul
          className={`${mediumScreenSize ? 'flex justify-around gap-10 lg:gap-14' : 'flex flex-col gap-6 w-full'}`}
        >
          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link aria-label="Go to home page" href="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>

          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link
              aria-label="Go to page about us"
              href="/nuestro-equipo"
              onClick={closeMenu}
            >
              Nuestro Equipo
            </Link>
          </li>

          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link
              aria-label="Go to services section"
              href="/servicios"
              onClick={closeMenu}
            >
              Servicios
            </Link>
          </li>

          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link aria-label="Go to a blog page" href="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>

          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link aria-label="Go to a projects page" href="/" onClick={closeMenu}>
              Proyectos
            </Link>
          </li>

          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link aria-label="Go to a present page" href="/" onClick={closeMenu}>
              Actualidad
            </Link>
          </li>

          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link
              aria-label="Go to contact-form"
              href="/contacto"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
