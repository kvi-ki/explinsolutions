import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Menu from '../menu/Menu';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="w-full mx-auto h-10 my-4 px-4 flex justify-between items-center 2xl:px-0 2xl:w-10/12">
          <Link aria-label="Go to home page" href="/" className="size-10">
            <img src="/favicon.png" alt="Explinsolutions label" />
          </Link>

          <div className="w-40 flex justify-between items-center md:order-3">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/34619792023"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-green size-7 rounded-full hover:bg-green hover:text-white"
              />
            </a>
            <a
              aria-label="Call by phone"
              href="tel:+34619792023"
              className="text-gray hover:text-green"
            >
              <FontAwesomeIcon icon={faPhone} className="text-green pr-1 size-5" />
              619 792 023
            </a>
          </div>
          <Menu />
        </div>
      </header>
    </>
  );
}
