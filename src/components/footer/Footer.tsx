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
    <footer className="h-80 pt-12 pl-4 pr-4 pb-12 bg-text md:pl-8 md:pr-8 2xl:flex justify-center 2xl:pl-0 2xl:pr-0 2xl:rounded-tl-xl 2xl:rounded-tr-xl">
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 2xl:w-10/12">
        <section className="w-52 flex justify-between">
          <Link
            aria-label="Go to home page"
            href="/"
            className="flex gap-3 w-10 h-8"
          >
            <img src="/favicon.png" alt="Explinsolutions label" />
            <p className="text-whiteColor font-extralight tracking-wide text-2xl">
              Explinsolutions
            </p>
          </Link>
        </section>

        <section className="text-sm text-whiteColor font-light flex flex-col gap-4 justify-center md:items-end">
          <a
            aria-label="Open location in Google map"
            href="https://maps.app.goo.gl/GPjYNB2FfHXN9B3o7"
            target="_blank"
            className="hover:text-accent"
          >
            <p>
              Camí del Mig, 5, 08349
              <br />
              Cabrera de Mar (BCN)
            </p>
          </a>
          <a
            aria-label="Call by phone"
            href="tel:+34619792023"
            className="hover:text-accent"
          >
            <p>+34 619 792 023</p>
          </a>
          <a
            aria-label="Send an email"
            href="mailto:administracion@explinsolutions.com"
            className="hover:text-accent"
          >
            <p>administracion@explinsolutions.com</p>
          </a>
        </section>

        <section className="flex items-center gap-3 md:col-span-2 md:justify-end">
          <a
            aria-label="Open location in Google map"
            href="https://maps.app.goo.gl/GPjYNB2FfHXN9B3o7"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-accent text-xl" />
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
            <FontAwesomeIcon icon={faWhatsapp} className="text-accent text-2xl" />
          </a>
          <a aria-label="Call by phone" href="tel:+34619792023">
            <FontAwesomeIcon icon={faPhoneFlip} className="text-accent text-xl" />
          </a>
          <a
            aria-label="Open Linkedin profile"
            href="https://www.linkedin.com/company/explinsolutions"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-accent text-xl" />
          </a>
        </section>
      </div>
    </footer>
  );
}
