import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneFlip,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 2xl:w-10/12">
        <section className="w-52 flex justify-between">
          <img
            src="/favicon.png"
            alt="Explinsolutions label"
            className="size-7 rounded-full"
          />
          <p className="text-white font-extralight tracking-wide text-largeFontSize">
            Explinsolutions
          </p>
        </section>

        <section className="footer-contact-details">
          <a href="https://maps.app.goo.gl/GPjYNB2FfHXN9B3o7" target="_blank">
            <p>
              Camí del Mig, 5, 08349
              <br />
              Cabrera de Mar (BCN)
            </p>
          </a>
          <a href="tel:+34619792023">
            <p>+ 34 619 792 023</p>
          </a>
          <a href="mailto:administracion@explinsolutions.com">
            <p>administracion@explinsolutions.com</p>
          </a>
        </section>

        <section className="flex items-center gap-4 md:col-span-2 md:justify-end">
          <a href="https://maps.app.goo.gl/GPjYNB2FfHXN9B3o7" target="_blank">
            <FontAwesomeIcon icon={faLocationDot} className="footer-icon" />
          </a>
          <a href="mailto:administracion@explinsolutions.com">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
          </a>
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/34619792023"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-green size-6" />
          </a>
          <a href="tel:+34619792023">
            <FontAwesomeIcon icon={faPhoneFlip} className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/explinsolutions"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" />
          </a>
        </section>
      </div>
    </footer>
  );
}
