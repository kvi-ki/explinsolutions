'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { slugify } from '@/utils/slugify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [servicesIsOpen, setServicesIsOpen] = useState(false);
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
    setServicesIsOpen(false);
  };

  const handleServiceClick = () => {
    setServicesIsOpen((prev) => !prev);
    closeMenu();
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
          aria-label="Close menu"
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
            onMouseEnter={() => setServicesIsOpen(true)}
            onMouseLeave={() => setServicesIsOpen(false)}
            className={`relative text-text text-base font-light ${mediumScreenSize ? '' : 'border-b border-accent font-light'}`}
          >
            <button
              type="button"
              className={`flex items-center gap-1 cursor-pointer select-none hover:text-accent ${mediumScreenSize ? 'hover:text-accent' : 'hover:text-blackColor'}`}
            >
              Servicios
            </button>

            <AnimatePresence>
              {servicesIsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full w-50 -left-4 pt-2 shadow-lg rounded-xl p-3 flex flex-col gap-2 text-sm z-50 backdrop-blur-3xl bg-lightGray/90 xl:bg-whiteColor xl:-left-15"
                >
                  <Link
                    aria-label="Go to Automatización industrial section"
                    href={`/servicios#${slugify('Automatización industrial')}`}
                    onClick={handleServiceClick}
                    className="hover:text-accent transition-colors"
                  >
                    Automatización industrial
                  </Link>
                  <Link
                    aria-label="Go to Sistemas eléctricos industriales section"
                    href={`/servicios#${slugify('Sistemas eléctricos industriales')}`}
                    onClick={handleServiceClick}
                    className="hover:text-accent transition-colors"
                  >
                    Sistemas eléctricos industriales
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link
              aria-label="Go to a projects page"
              href="/proyectos"
              onClick={closeMenu}
            >
              Proyectos
            </Link>
          </li>

          {/* <li
            className={`${mediumScreenSize ? 'text-text font-light text-base hover:text-accent' : 'border-b border-accent text-text text-base font-light hover:text-blackColor'}`}
          >
            <Link
              aria-label="Go to a news page"
              href="/actualidad"
              onClick={closeMenu}
            >
              Actualidad
            </Link>
          </li> */}

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
