import Service from './Service';
import services from '../../data.json';

export default function Services() {
  return (
    <section className="bg-lightGray p-4">
      <h2 className="pt-6 text-center text-gray text-sectionHeader md:text-sectionHeaderMd lg:text-sectionHeaderLg">
        <span className="font-extrabold text-black">
          Servicio de confianza,
        </span>
        &nbsp; para sus diversas necesidades
      </h2>
      <ul className="m-[6vw] flex flex-wrap justify-around align-center content-evenly">
        {services.map((service) => (
          <Service key={service.name} name={service.name} />
        ))}
      </ul>
    </section>
  );
}
