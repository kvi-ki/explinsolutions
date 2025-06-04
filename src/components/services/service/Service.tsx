import AnimatedService from '@/utils/AnimatedService';
import { motion } from 'framer-motion';
import './Service.css';
import { slugify } from '@/utils/slugify';

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
      <li
        id={slugify(serviceData.name)}
        className={`service-item ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="md:w-2/5">
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
        <motion.img
          src="/service-images/machine.png"
          alt="machine"
          className="bg-lightGray rounded-lg w-full md:w-2/5 md:m-4"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
        />
      </li>
    </AnimatedService>
  );
}
