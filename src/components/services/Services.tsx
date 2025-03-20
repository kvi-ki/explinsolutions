import Service from './Service';
import services from '../../data.json';

export default function Services() {
  return (
    <section className="bg-lightGray p-4 xl:rounded-xl">
      <h2 className="services-header">
        <span className="text-black">Servicio de confianza,</span>
        <br />
        &nbsp; para sus diversas necesidades
      </h2>
      <ul className="services-list">
        {services.map((service) => (
          <Service key={service.name} name={service.name} />
        ))}
      </ul>
    </section>
  );
}
