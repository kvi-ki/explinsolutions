import Service from './service/Service';
import data from '../../data.json';
import './Services.css';

export default function Services() {
  return (
    <section id="services-section" className="mb-10 bg-lightGray p-4 xl:rounded-xl">
      <h2 className="services-header">
        <span className="text-black">Servicio de confianza,</span>
        <br />
        &nbsp; para sus diversas necesidades
      </h2>
      <ul className="services-list">
        {data.services.data.map((serviceData) => (
          <Service key={serviceData.name} serviceData={serviceData} />
        ))}
      </ul>
    </section>
  );
}
