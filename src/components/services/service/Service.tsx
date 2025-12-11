import clsx from 'clsx';
import { motion } from 'framer-motion';

import { slugify } from '@/utils/slugify';
import AnimatedService from '@/utils/AnimatedService';

export type ServiceProps = {
  name: string;
  image: string;
  sections: {
    firstSection: { title: string; image: string; description: string[] };
    secondSection: { title: string; image: string; description: string[] };
  };
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
      <div
        id={slugify(serviceData.name)}
        className={clsx(
          index === 0
            ? 'scroll-mt-20 border-b-2 border-accent xl:pb-30 xl:scroll-mt-16'
            : 'border-0 xl:py-30',
          'bg-whiteColor text-text lg:text-justify  text-base font-light p-14'
        )}
      >
        <div className="flex flex-col gap-2 pb-10 xl:pb-20">
          <img
            src={serviceData.image}
            alt="service icon"
            className="size-16 mb-4 mx-auto"
          />
          <h3 className="text-center text-wrap font-bold text-2xl mb-4 xl:text-3xl">
            {serviceData.name}
          </h3>
        </div>

        <ul className="flex flex-col gap-20 lg:gap-30">
          <li
            key={4}
            className="flex flex-col items-center justify-center gap-10 md:flex-row lg:gap-20"
          >
            <div className="flex flex-col gap-8 lg:w-2/5">
              <h3 className="text-xl font-medium xl:text-2xl">
                {serviceData.sections.firstSection.title}
              </h3>
              <ul className="space-y-4">
                {serviceData.sections.firstSection.description.map((item) => (
                  <li key={item.slice(0, 8)} className="xl:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.img
              src={serviceData.sections.firstSection.image}
              alt="machine"
              className="rounded-xl w-full md:w-1/4 md:m-4"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
            />
          </li>
          <li
            key={5}
            className="flex flex-col items-center justify-center gap-10 md:flex-row-reverse lg:gap-20"
          >
            <div className="flex flex-col gap-8 lg:w-2/5">
              <h3 className="text-xl font-medium xl:text-2xl">
                {serviceData.sections.secondSection.title}
              </h3>
              <ul className="space-y-4">
                {serviceData.sections.secondSection.description.map((item) => (
                  <li key={item.slice(0, 8)} className="xl:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.img
              src={serviceData.sections.secondSection.image}
              alt="machine"
              className="rounded-xl w-full md:w-1/4 md:m-4"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
            />
          </li>
        </ul>
      </div>
    </AnimatedService>
  );
}
