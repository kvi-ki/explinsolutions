'use client';

import Service from '@/components/services/service/Service';
import data from '../../data.json';

export default function ServicesPage() {
  return (
    <section className="mb-10 bg-lightGray p-4 xl:rounded-xl">
      <h2
        className="w-full text-center text-wrap text-smallFontSize font-normal 
    lg:text-baseFontSize xl:mb-10"
      >
        <span className="text-black">Servicio de confianza,</span>
        <br />
        &nbsp; para sus diversas necesidades
      </h2>
      <ul
        className="m-8 p-6 flex flex-col items-center 
    md:flex-row md:justify-evenly md:flex-wrap"
      >
        {data.services.data.map((serviceData) => (
          <Service key={serviceData.name} serviceData={serviceData} />
        ))}
      </ul>
    </section>
  );
}
