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
        src="/banner-home-2.svg"
        alt="Homepage banner with product showcase"
        width={800}
        height={400}
        sizes="100vw"
        priority
        className="w-full 2xl:rounded-xl"
      />
      {/* xl:h-[46rem] object-cover object-center */}
      {/* <div className="bg-[url(/assets/electric_tower.jpg)] heading-wrapper">
    <h1 className="heading"><span className="font-bold">explin</span>solutions<span className="text-accent">_</span></h1>
    <Values />
  </div> */}
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
