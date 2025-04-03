import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import Values from '../values/Values';
import Menu from '../menu/Menu';

export default function Header() {
  return (
    <>
      <header className="min-w-[8rem] 2xl:w-10/12 2xl:m-auto">
        <div className="h-8 m-4 flex justify-between items-center 2xl:ml-0 2xl:mr-0">
          <a className="size-8" href="#root">
            <img src="/favicon.png" alt="Explinsolutions label" />
          </a>

          <div className="w-36 flex justify-between md:order-3">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/34619792023"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-green size-6 rounded-full hover:bg-green hover:text-white"
              />
            </a>
            <a href="tel:+34619792023" className="text-gray">
              <FontAwesomeIcon icon={faPhone} className="text-green pr-1" />
              619 792 023
            </a>
          </div>
          <Menu />
        </div>
        <div className="bg-[url(/assets/electric_tower.jpg)] heading-wrapper">
          <h1 className="heading">Explinsolutions_</h1>
          <Values />
        </div>
      </header>
    </>
  );
}
