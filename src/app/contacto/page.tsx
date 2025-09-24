'use client';

import data from '../../data.json';

import Contact from '@/components/contacts/contact/Contact';
import ContactForm from '@/components/contactForm/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-lightGray p-8 mb-10 flex flex-col justify-center items-center xl:p-20 xl:rounded-xl ">
      <h2 className="pt-6 text-center text-gray text-2xl lg:pt-12">
        <span className="text-blackColor">Ponte en contacto</span>
        <br />
        con nosotros
      </h2>
      <div className="w-full pt-10 flex justify-around">
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
        <ContactForm />
      </div>
    </div>
  );
}
