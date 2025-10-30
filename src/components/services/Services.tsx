import { slugify } from '@/utils/slugify';
import data from '../../data.json';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="mb-10 bg-lightGray p-6 space-y-10 xl:rounded-xl lg:p-8 lg:space-y-20">
      <h2 className="pt-6 text-center text-blackColor text-3xl lg:pt-12 lg:text-4xl">
        Servicios de ingeniería para la industria
      </h2>
      <ul className="m-8 p-6 flex flex-col items-center justify-center gap-26 md:flex-row  md:flex-wrap">
        {data.services.data.map((serviceData) => (
          <li key={serviceData.name}>
            <Link
              key={serviceData.name}
              href={`/servicios#${slugify(serviceData.name)}`}
              className="flex flex-col items-center gap-5 w-60"
            >
              <div className="bg-whiteColor border border-accent rounded-xl flex flex-col items-center text-text p-8 m-2 size-48 transition duration-150 hover:text-accent hover:scale-105">
                <img
                  src={serviceData.image}
                  alt="service icon"
                  className="size-30"
                />
              </div>
              <h3 className="text-center text-wrap font-bold text-2xl">
                {serviceData.name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
