import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen((prev) => !prev);
  }

  return (
    <nav className="relative">
      <button type="button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="size-6 text-green" />
      </button>
      <div
        className={`list-container ${
          menuIsOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        <button type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faXmark} className="size-6 text-darkGray" />
        </button>
        <ul className="menu-list">
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
