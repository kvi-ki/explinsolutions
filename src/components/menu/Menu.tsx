import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import './Menu.css';

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
      <button type="button" onClick={toggleMenu} className={hiddenIfScreenSizeIsMedium}>
        <FontAwesomeIcon icon={faBars} className="size-6 text-green" />
      </button>
      <div
        className={`${mediumScreenSize ? '' : `list-container ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}`}
      >
        <button type="button" onClick={toggleMenu} className={hiddenIfScreenSizeIsMedium}>
          <FontAwesomeIcon icon={faXmark} className="size-6 text-darkGray" />
        </button>
        <ul className={`${mediumScreenSize ? 'menu-list-medium' : 'menu-list'}`}>
          <li>
            <a aria-label="Go to home page" href="#home" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a aria-label="Go to services section" href="#services-section" onClick={closeMenu}>
              Servicios
            </a>
          </li>
          <li>
            <a aria-label="Go to contact details section" href="#contacts" onClick={closeMenu}>
              Dónde estamos
            </a>
          </li>
          <li>
            <a aria-label="Go to contact-form" href="#contact-form" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
