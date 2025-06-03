'use client';

import ContactForm from '@/components/contactForm/ContactForm';
import Contacts from '@/components/contacts/Contacts';
import Description from '@/components/description/Description';
import Services from '@/components/services/Services';
import Values from '@/components/values/Values';
import React from 'react';
import { StrictMode } from 'react';

export default function Page() {
  return (
    <StrictMode>
      <div className="bg-[url(/assets/electric_tower.jpg)] heading-wrapper">
    <h1 className="heading"><span className="font-bold">explin</span>solutions<span className="text-green">_</span></h1>
    <Values />
  </div>
      <Description />
      <Services />
      <Contacts />
      <ContactForm />
    </StrictMode>
  );
}
