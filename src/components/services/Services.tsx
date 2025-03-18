import Service from './Service';

export default function Services() {
  return (
    <section>
      <h2 className="text-center text-gray text-sectionHeader md:text-sectionHeaderMd lg:text-sectionHeaderLg">
        <span className="font-extrabold text-black">
          Servicio de confianza,
        </span>
        &nbsp; para sus diversas necesidades
      </h2>
      <ul className="m-[6vw]">
        <Service />
      </ul>
    </section>
  );
}
