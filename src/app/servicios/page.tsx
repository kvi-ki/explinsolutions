'use client';

import Service from '@/components/services/service/Service';
import data from '../../data.json';

export default function ServicesPage() {
  return (
    <section>
      {data.services.data.map((serviceData, index) => (
        <Service index={index} key={serviceData.name} serviceData={serviceData} />
      ))}
    </section>
  );
}
