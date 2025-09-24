import { slugify } from '@/utils/slugify';
import data from '../../data.json';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="mb-10 bg-lightGray p-4 xl:rounded-xl">
      <h2 className="pt-6 text-center text-blackColor text-2xl lg:pt-12">
        Servicios de Ingeniería Eléctrica
        <br /> Industria Automatización y control industrial llave en mano
      </h2>
      <ul className="m-8 p-6 flex flex-col items-center justify-center gap-20 md:flex-row  md:flex-wrap">
        {data.services.data.map((serviceData) => (
          <li key={serviceData.name} className="flex flex-col gap-5">
            <Link
              key={serviceData.name}
              href={`/servicios#${slugify(serviceData.name)}`}
            >
              <div className="bg-whiteColor border border-accent rounded-xl flex flex-col items-center text-text p-8 m-2 w-34 h-34 transition duration-150 hover:text-accent hover:scale-105">
                <img
                  src={serviceData.image}
                  alt="service icon"
                  className="size-20"
                />
              </div>
              <h3 className="text-center text-wrap font-bold text-xl">
                {serviceData.name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
