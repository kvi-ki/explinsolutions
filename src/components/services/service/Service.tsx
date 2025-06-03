import './Service.css';

export type ServiceProps = {
  name: string;
  image: string;
  sections: string[];
};

export default function Service({ serviceData }: { serviceData: ServiceProps }) {
  return (
    <li className="service-item">
      <img src={serviceData.image} alt="service icon" className="size-12 mb-4" />
      <h3 className="service-heading">{serviceData.name}</h3>
      <ul className="text-baseFontSize">
        {serviceData.sections.map((section) => (
          <li key={section} className="my-4">
            {section}
          </li>
        ))}
      </ul>
    </li>
  );
}
