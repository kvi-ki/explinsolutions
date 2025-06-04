'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import './Menu.css';
import Link from 'next/link';

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mediumScreenSize, setMediumScreenSize] = useState(true);
  const hiddenIfScreenSizeIsMedium = mediumScreenSize ? 'hidden' : '';

  useEffect(() => {
    const updateScreenSize = () => {
      setMediumScreenSize(window.innerWidth >= 768 ? true : false);
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
        onClick={toggleMenu}
        className={hiddenIfScreenSizeIsMedium}
      >
        <FontAwesomeIcon icon={faBars} className="size-6 text-green" />
      </button>
      <div
        className={`${mediumScreenSize ? '' : `list-container ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className={hiddenIfScreenSizeIsMedium}
        >
          <FontAwesomeIcon icon={faXmark} className="size-6 text-darkGray" />
        </button>
        <ul className={`${mediumScreenSize ? 'menu-list-medium' : 'menu-list'}`}>
          <li>
            <Link aria-label="Go to home page" href="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              aria-label="Go to services section"
              href="/servicios"
              onClick={closeMenu}
            >
              Servicios
            </Link>
          </li>
          <li>
            <a
              aria-label="Go to contact details section"
              href="#contacts"
              onClick={closeMenu}
            >
              Dónde estamos
            </a>
          </li>
          <li>
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
