import AnimatedService from '@/utils/AnimatedService';
import { motion } from 'framer-motion';
import { slugify } from '@/utils/slugify';

export type ServiceProps = {
  name: string;
  image: string;
  sections: {
    firstSection: { title: string; description: string[] };
    secondSection: { title: string; description: string[] };
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
        className={`scroll-mt-20 border-b-2 border-accent bg-whiteColor text-text font-light p-14 md:flex md:justify-around md:items-center xl:scroll-mt-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="md:w-2/5">
          <div className="flex flex-col gap-2">
            <img
              src={serviceData.image}
              alt="service icon"
              className="size-12 mb-4 mx-auto"
            />
            <h3 className="text-center text-wrap font-bold text-2xl mb-4">
              {serviceData.name}
            </h3>
          </div>
          <ul className="text-base flex flex-col gap-8">
            <li key={serviceData.image} className="my-4 text-justify space-y-4">
              <h3 className="text-xl font-medium">
                {serviceData.sections.firstSection.title}
              </h3>
              <ul>
                {serviceData.sections.firstSection.description.map((item) => (
                  <li key={item.slice(0, 8)}>{item}</li>
                ))}
              </ul>
            </li>
            <li key={serviceData.image} className="my-4 text-justify space-y-4">
              <h3 className="text-xl font-medium">
                {serviceData.sections.secondSection.title}
              </h3>
              <ul>
                {serviceData.sections.secondSection.description.map((item) => (
                  <li key={item.slice(0, 8)}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <motion.img
          src="/service-images/title2.jpg"
          alt="machine"
          className="bg-lightGray rounded-xl w-full md:w-2/5 md:m-4"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </AnimatedService>
  );
}
