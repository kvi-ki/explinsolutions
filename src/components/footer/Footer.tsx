import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="h-80 pt-12 pl-4 pr-4 pb-12 bg-darkGray md:pl-8 md:pr-8 xl:flex justify-center xl:pl-0 xl:pr-0">
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 xl:w-8/12">
        <section className="w-52 flex justify-between">
          <img
            src="/favicon.png"
            alt="Explinsolutions label"
            className="size-6"
          />
          <p className="text-white font-extralight tracking-wide text-2xl">
            Explinsolutions
          </p>
        </section>

        <section className="text-sm text-white font-light flex flex-col gap-4 justify-center md:items-end">
          <p>
            Camí del Mig 5, 08349
            <br />
            Cabrera de Mar (BCN)
          </p>
          <p>+ 34 619 792 023</p>
          <p>administracion@explinsolutions.com</p>
        </section>

        <section className="flex items-center gap-4 md:col-span-2 md:justify-end">
          <a href="mailto:administracion@explinsolutions.com">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
          </a>
          <a href="tel:+34619792023">
            <FontAwesomeIcon icon={faPhoneFlip} className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/company/explinsolutions" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" />
          </a>
        </section>
      </div>
    </footer>
  );
}
