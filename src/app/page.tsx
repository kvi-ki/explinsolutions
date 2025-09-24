'use client';

import ContactForm from '@/components/contactForm/ContactForm';
import Contacts from '@/components/contacts/Contacts';
import Description from '@/components/description/Description';
import Services from '@/components/services/Services';
import Values from '@/components/values/Values';
import React from 'react';
import Image from 'next/image';
import { StrictMode } from 'react';

export default function Page() {
  return (
    <StrictMode>
      <Image
        src="/banner-home.svg"
        alt={''}
        width={800}
        height={400}
        className="w-full rounded-xl"
      />
      {/* <div className="bg-[url(/assets/electric_tower.jpg)] heading-wrapper">
    <h1 className="heading"><span className="font-bold">explin</span>solutions<span className="text-accent">_</span></h1>
    <Values />
  </div> */}
      <Description />
      <Services />
      <Contacts />
      <section className="bg-lightGray mb-10 flex flex-col items-center xl:rounded-xl">
        <h2 className="pt-6 text-center text-gray text-2xl lg:pt-12">
          <span className="text-blackColor">Ponte en contacto</span>
          <br />
          con nosotros
        </h2>
        <ContactForm />
      </section>
    </StrictMode>
  );
}
