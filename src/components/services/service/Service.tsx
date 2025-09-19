import AnimatedService from '@/utils/AnimatedService';
import { motion } from 'framer-motion';
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
        className={`scroll-mt-20 border-b-2 border-accent bg-whiteColor text-text font-light p-14 md:flex md:justify-around md:items-center xl:scroll-mt-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="md:w-2/5">
          <img
            src={serviceData.image}
            alt="service icon"
            className="size-12 mb-4 mx-auto"
          />
          <h3 className="text-center text-wrap font-normal text-base mb-4">
            {serviceData.name}
          </h3>
          <ul className="text-base">
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
          className="bg-lightGray rounded-xl w-full md:w-2/5 md:m-4"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
        />
      </li>
    </AnimatedService>
  );
}
