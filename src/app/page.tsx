'use client';

import { StrictMode } from 'react';

import Contacts from '@/components/contacts/Contacts';
import Services from '@/components/services/Services';
import ContactForm from '@/components/contactForm/ContactForm';
import Description from '@/components/description/Description';

export default function Page() {
  return (
    <StrictMode>
      <picture>
        <source media="(min-width: 1536px)" srcSet="/images/banner-2xl.jpg" />
        <source media="(min-width: 1280px)" srcSet="/images/banner-xl.jpg" />
        <source media="(min-width: 1024px)" srcSet="/images/banner-lg.jpg" />
        <source media="(min-width: 768px)" srcSet="/images/banner-md.jpg" />
        <img
          src="/images/banner-sm.jpg"
          alt="Homepage banner with product showcase"
          className="w-full 2xl:rounded-xl"
        />
      </picture>
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
