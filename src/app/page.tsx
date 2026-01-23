'use client';

import Image from 'next/image';
import { StrictMode } from 'react';

import Contacts from '@/components/contacts/Contacts';
import Services from '@/components/services/Services';
import ContactForm from '@/components/contactForm/ContactForm';
import Description from '@/components/description/Description';

export default function Page() {
  return (
    <StrictMode>
      <Image
        src="/banner.jpg"
        alt="Homepage banner with product showcase"
        width={800}
        height={400}
        sizes="100vw"
        priority
        className="w-full 2xl:rounded-xl"
      />
      <Description />
      <Services />
      <Contacts />
      <section className="bg-lightGray mb-10 flex flex-col items-center 2xl:rounded-xl">
        <h2 className="py-6 text-center text-gray text-3xl lg:pt-12 lg:text-4xl">
          <span className="text-blackColor">Ponte en contacto</span>
          <br />
          con nosotros
        </h2>
        <ContactForm />
      </section>
    </StrictMode>
  );
}
