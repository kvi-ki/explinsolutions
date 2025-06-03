import './Service.css';

export type ServiceProps = {
  name: string;
  image: string;
  sections: string[];
};

export default function Service({ serviceData }: { serviceData: ServiceProps }) {
  return (
    <li className="service-item-large-screen service-item-expand">
      <img src={serviceData.image} alt="service icon" className="size-8 lg:size-12 lg:mb-4" />
      <h3 className="service-heading">{serviceData.name}</h3>
      <div className="opacity-100 mt-3">
        <ul className="text-smallFontSize/6 list-disc list-outside pl-6 lg:text-baseFontSize">
          {serviceData.sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
