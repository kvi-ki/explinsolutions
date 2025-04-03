import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mediumScreenSize, setMediumScreenSize] = useState(false);
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

  return (
    <nav className={`relative ${mediumScreenSize ? 'w-80' : ''}`}>
      <button
        type="button"
        onClick={toggleMenu}
        className={hiddenIfScreenSizeIsMedium}
      >
        <FontAwesomeIcon icon={faBars} className="size-6 text-green" />
      </button>
      <div
        className={`${mediumScreenSize ? 'list-container-medium' : `list-container ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className={hiddenIfScreenSizeIsMedium}
        >
          <FontAwesomeIcon icon={faXmark} className="size-6 text-darkGray" />
        </button>
        <ul
          className={`${mediumScreenSize ? 'menu-list-medium' : 'menu-list'}`}
        >
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
