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
      {/* <ul className="services-list">
        {data.services.data.map((serviceData) => (
          <Service key={serviceData.name} serviceData={serviceData} />
        ))}
      </ul> */}
      <ul className="services-list">
        {data.services.data.map((serviceData) => (
          <li key={serviceData.name} className='bg-white border border-green rounded-xl flex flex-col items-center text-darkGray text-center font-lightWeight justify-around p-8 m-2 w-52 h-52'><img src={serviceData.image} alt="service icon" className="size-8 lg:size-12 lg:mb-4" />
          <h3 className="service-heading">{serviceData.name}</h3></li>
        )
        )}
      </ul>
    </section>
  );
}
