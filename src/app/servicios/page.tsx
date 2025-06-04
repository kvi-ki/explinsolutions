'use client';

import Service from '@/components/services/service/Service';
import data from '../../data.json';

export default function ServicesPage() {
  return (
    <section className="bg-lightGray pt-10 xl:rounded-xl">
      <h2 className="text-center text-wrap font-normal text-gray text-largeFontSize my-6 xl:m-10">
        <span className="text-black">Servicio de confianza,</span> <br />
        para sus diversas necesidades
      </h2>
      <ul className="flex flex-col items-center">
        {data.services.data.map((serviceData, index) => (
          <Service key={serviceData.name} index={index} serviceData={serviceData} />
        ))}
      </ul>
    </section>
  );
}
