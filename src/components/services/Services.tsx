import Service from './Service';
import services from '../../data.json';

export default function Services() {
  return (
    <section className="bg-lightGray p-4">
      <h2 className="pt-6 text-center text-gray text-sectionHeader md:text-sectionHeaderMd md:pt-10 lg:text-sectionHeaderLg lg:pt-20">
        <span className="font-extrabold text-black">
          Servicio de confianza,
        </span>
        <br />
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
