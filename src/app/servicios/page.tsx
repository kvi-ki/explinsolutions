'use client';

import Service from '@/components/services/service/Service';
import data from '../../data.json';

export default function ServicesPage() {
  return (
    <section className="bg-lightGray pt-10 xl:rounded-xl">
      <h2 className="text-center text-wrap font-normal text-gray text-2xl my-6 xl:m-10">
        <span className="text-blackColor">Servicio de confianza,</span> <br />
        para sus diversas necesidades
      </h2>
      {data.services.data.map((serviceData) => (
        <Service key={serviceData.name} serviceData={serviceData} />
      ))}
    </section>
  );
}
