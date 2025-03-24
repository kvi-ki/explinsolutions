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
    <li
      className={`transition-all duration-500 ease-in-out ${isVisible ? 'service-item-expand' : 'service-item'}`}
    >
      <h3 className="service-heading">{serviceData.name}</h3>
      <p
        className="text-xs border-b border-b-green cursor-pointer lg:text-sm"
        onClick={toggleList}
      >
        Detalles
      </p>
      <div
        className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {isVisible && (
          <ul className="text-sm/6 lg:text-base">
            {serviceData.sections.map((section) => (
              <li>- {section}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
