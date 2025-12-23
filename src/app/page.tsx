'use client';

import Image from 'next/image';
import { StrictMode } from 'react';

import data from '../data.json';

import Value from '@/components/value/Value';
import Contacts from '@/components/contacts/Contacts';
import Services from '@/components/services/Services';
import ContactForm from '@/components/contactForm/ContactForm';
import Description from '@/components/description/Description';

export default function Page() {
  return (
    <StrictMode>
      {/* <Image
        src="/banner-home-2.svg"
        alt="Homepage banner with product showcase"
        width={800}
        height={400}
        sizes="100vw"
        priority
        className="w-full 2xl:rounded-xl"
      /> */}
      <section className="py-12 px-8 lg:px-20 flex flex-col items-center gap-10 bg-gradient-to-r from-white to-[#e3e4ea] sm:flex-row 2xl:rounded-xl">
        <div className="flex flex-col items-start gap-10 xl:gap-20 xl:px-10 sm:w-1/2">
          <div className="flex flex-col justify-center items-center self-center gap-6 xl:gap-10">
            <Image
              src="/favicon.png"
              alt="Explin Solutions favicon"
              width="160"
              height="160"
              className="h-30 w-36 xl:h-64 xl:w-74"
            ></Image>
            <h1 className="font-extralight text-3xl xl:text-5xl">
              <b>explin</b>solutions<span className="text-accent">_</span>
            </h1>
          </div>
          <p className="text-3xl xl:text-3xl font-medium uppercase">
            Ingeniería industrial especializada en automatización y sistemas
            eléctricos
          </p>
        </div>

        <div className="flex justify-center gap-6 xl:gap-15 flex-wrap sm:w-1/2">
          {data.value.data.map((value, index) => (
            <Value
              number={value.number}
              title={value.title}
              subtitle={value.subtitle}
              index={index}
            />
          ))}
        </div>
      </section>

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
