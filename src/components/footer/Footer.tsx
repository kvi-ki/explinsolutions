import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneFlip,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-text text-whiteColor 2xl:rounded-tl-xl 2xl:rounded-tr-xl">
      <div className="px-6 pt-10 pb-6 md:px-10 2xl:flex 2xl:justify-center">
        <div className="grid md:grid-cols-3 gap-8 2xl:w-10/12">
          <section className="flex flex-col gap-6">
            <Link
              aria-label="Go to home page"
              href="/"
              className="flex gap-3 items-center w-fit"
            >
              <img
                src="/favicon.png"
                alt="explinsolutions_ label"
                className="w-10 h-8"
              />
              <p className="font-extralight tracking-wide text-2xl">
                explinsolutions_
              </p>
            </Link>
            <div className="flex flex-col gap-5 text-sm font-light">
              <a
                aria-label="Open location in Google Maps"
                href="https://maps.app.goo.gl/GPjYNB2FfHXN9B3o7"
                target="_blank"
                className="hover:text-accent"
              >
                Camí del Mig, 5, 08349
                <br />
                Cabrera de Mar (BCN)
              </a>
              <a
                aria-label="Call by phone"
                href="tel:+34619792023"
                className="hover:text-accent"
              >
                +34 619 792 023
              </a>
              <a
                aria-label="Send an email"
                href="mailto:administracion@explinsolutions.com"
                className="hover:text-accent"
              >
                administración@explinsolutions.com
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <a
                aria-label="Open location in Google Maps"
                href="https://maps.app.goo.gl/GPjYNB2FfHXN9B3o7"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-accent text-xl"
                />
              </a>
              <a
                aria-label="Send an email"
                href="mailto:administracion@explinsolutions.com"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-accent text-xl" />
              </a>
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/34619792023"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-accent text-2xl"
                />
              </a>
              <a aria-label="Call by phone" href="tel:+34619792023">
                <FontAwesomeIcon
                  icon={faPhoneFlip}
                  className="text-accent text-xl"
                />
              </a>
              <a
                aria-label="Open LinkedIn profile"
                href="https://www.linkedin.com/company/explinsolutions"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-accent text-xl"
                />
              </a>
            </div>
          </section>

          <section className="flex flex-col items-center justify-between gap-2 text-center">
            <div className="pt-4">
              <p className="text-accent font-bold text-lg tracking-wide">
                EXPLINSOLUTION, S.L.
              </p>
              <p className="text-sm font-light">B70652060</p>
            </div>
            <p className="text-xs font-light mt-4 leading-relaxed">
              Inscrita en el Registro Mercantil de
              <br />
              Barcelona, en el tomo 33567, folio 76,
              <br />
              hoja B-230480 sección 1
            </p>
          </section>

          <section className="flex flex-col md:items-end gap-10">
            <nav className="flex flex-col md:items-end gap-1 text-sm font-light">
              <Link href="/aviso-legal" className="hover:text-accent">
                Aviso legal
              </Link>
              <Link href="/politica-de-privacidad" className="hover:text-accent">
                Política de privacidad
              </Link>
              <Link href="/politica-de-cookies" className="hover:text-accent">
                Política de cookies
              </Link>
            </nav>
            <p className="text-sm font-light md:text-right">
              Estamos aquí para <br />
              ayudarte
            </p>
            <p className="text-xs font-light mt-auto">
              © 2026. All rights reserved.
            </p>
          </section>
        </div>
      </div>

      {/* <div className="px-6 pb-4 md:px-10 2xl:flex 2xl:justify-center">
        <div className="2xl:w-10/12 flex md:justify-end"></div>
      </div> */}
    </footer>
  );
}
