import AnimatedService from '@/utils/AnimatedService';
import './Service.css';
import Image from 'next/image';

export type ServiceProps = {
  name: string;
  image: string;
  sections: string[];
};

export default function Service({
  serviceData,
  index
}: {
  serviceData: ServiceProps;
  index: number;
}) {
  return (
    <AnimatedService>
      <li className={`service-item ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-4/6">
          <img
            src={serviceData.image}
            alt="service icon"
            className="size-12 mb-4 mx-auto"
          />
          <h3 className="service-heading">{serviceData.name}</h3>
          <ul className="text-baseFontSize">
            {serviceData.sections.map((section) => (
              <li key={section} className="my-4 text-justify">
                {section}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/service-images/machine.png"
          alt="machine"
          width={400}
          height={200}
          className="bg-lightGray rounded-lg md:ml-4"
        />
      </li>
    </AnimatedService>
  );
}
