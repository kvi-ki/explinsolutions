import { slugify } from '@/utils/slugify';
import data from '../../data.json';
import './Services.css';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="mb-10 bg-lightGray p-4 xl:rounded-xl">
      <h2 className="services-header">
        <span className="text-black">Servicio de confianza,</span>
        <br />
        &nbsp; para sus diversas necesidades
      </h2>
      <ul className="services-list">
        {data.services.data.map((serviceData) => (
          <Link
            key={serviceData.name}
            href={`/servicios#${slugify(serviceData.name)}`}
          >
            <li
              key={serviceData.name}
              className="bg-white border border-green rounded-xl flex flex-col items-center text-darkGray text-center font-lightWeight justify-around p-8 m-2 w-60 h-60 transition duration-150 hover:text-green hover:scale-105"
            >
              <img src={serviceData.image} alt="service icon" className="size-12" />
              <h3 className="text-center text-wrap font-normal text-baseFontSize mb-8">
                {serviceData.name}
              </h3>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
