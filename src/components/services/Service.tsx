import { useState } from 'react';

export type ServiceProps = {
  name: string;
  sections: string[];
};

export default function Service({
  serviceData
}: {
  serviceData: ServiceProps;
}) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleList() {
    setIsVisible((prev) => !prev);
  }

  return (
    <li className="service-item">
      <h3 className="service-heading">{serviceData.name}</h3>
      <div>
        <p
          className="text-xs border-b border-b-green lg:text-sm"
          onClick={toggleList}
        >
          Detalles
        </p>
        {isVisible && (
          <ul className="service-sections-list">
            {serviceData.sections.map((section) => (
              <li>- {section}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
