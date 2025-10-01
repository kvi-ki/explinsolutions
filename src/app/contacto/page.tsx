'use client';

import data from '../../data.json';

import AnimatedService from '@/utils/AnimatedService';

import Contact from '@/components/contacts/contact/Contact';
import ContactForm from '@/components/contactForm/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-lightGray p-8 mb-10 flex flex-col justify-center items-center xl:p-10 xl:rounded-xl ">
      <h2 className="text-center text-gray text-2xl lg:pt-12 lg:text-4xl">
        <span className="text-blackColor">Ponte en contacto </span>
        con nosotros
      </h2>
      <AnimatedService>
        <div className="w-full pt-10 flex flex-col gap-40 lg:flex-row lg:items-center">
          <div>
            <ul className="flex flex-col items-center">
              {data.contacts.data.map((contact) => (
                <Contact
                  key={contact.link}
                  contact={{
                    icon: contact.icon,
                    text: contact.text,
                    link: contact.link
                  }}
                />
              ))}
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5973.584035260995!2d2.4197296999999995!3d41.5304456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b50057db099d%3A0x4cfeddb863fec1fc!2sExplinsolutions!5e0!3m2!1sen!2ses!4v1743757698960!5m2!1sen!2ses"
              title="Ubicación de Explinsolutions en Google Maps"
              className="w-full p-4"
              width="250"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ContactForm />
        </div>
      </AnimatedService>
    </div>
  );
}
