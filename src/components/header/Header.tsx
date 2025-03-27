import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Values from '../values/Values';

export default function Header() {
  return (
    <>
      <header className="min-w-[8rem] xl:w-8/12 xl:m-auto">
        <div className="h-8 m-4 flex justify-between items-center xl:ml-0 xl:mr-0">
          <img
            src="/favicon.png"
            alt="Explinsolutions label"
            className="size-8"
          />
          <div className="w-28">
            <a href="tel:+34619792023" className="text-gray">
              <FontAwesomeIcon icon={faPhone} className="text-green pr-1" />
              619 792 023
            </a>
          </div>
        </div>
        <div className="bg-[url(/assets/electric_tower.jpg)] heading-wrapper">
          <h1 className="heading">Explinsolutions_</h1>
          <Values />
        </div>
      </header>
    </>
  );
}
