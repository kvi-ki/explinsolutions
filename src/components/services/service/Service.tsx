import { useEffect, useState } from 'react';
import './Service.css';

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
  const [largeScreenSize, setLargeScreenSize] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setLargeScreenSize(window.innerWidth > 1024 ? true : false);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  function toggleList() {
    setIsVisible((prev) => !prev);
  }

  return (
    <li
      className={`${largeScreenSize ? 'service-item-large-screen' : `transition-all duration-500 ease-in-out ${isVisible ? 'service-item-expand' : 'service-item'}`}`}
    >
      <h3 className="service-heading">{serviceData.name}</h3>
      {!largeScreenSize && (
        <p
          className="text-xs border-b border-b-green cursor-pointer lg:text-smallFontSize"
          onClick={toggleList}
        >
          Detalles
        </p>
      )}
      <div
        className={`${largeScreenSize ? 'opacity-100' : `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}`}
      >
        {(isVisible || largeScreenSize) && (
          <ul className="text-smallFontSize/6 list-disc list-outside pl-6 lg:text-baseFontSize">
            {serviceData.sections.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
