'use client';

import Service from '@/components/services/service/Service';
import data from '../../data.json';

export default function ServicesPage() {
  return (
    <section className="bg-lightGray py-10 xl:rounded-xl">
      <h2 className="text-center text-wrap font-normal text-gray text-largeFontSize my-6 xl:m-10">
        <span className="text-black">Servicio de confianza,</span>para sus diversas
        necesidades
      </h2>
      <ul className="flex flex-col items-center">
        {data.services.data.map((serviceData) => (
          <Service key={serviceData.name} serviceData={serviceData} />
        ))}
      </ul>
    </section>
  );
}
