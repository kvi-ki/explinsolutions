'use client';

import ContactForm from '@/components/contactForm/ContactForm';
import Contacts from '@/components/contacts/Contacts';
import Description from '@/components/description/Description';
import Services from '@/components/services/Services';
import React from 'react';

export default function App() {
  return (
    <>
      <Description />
      <Services />
      <Contacts />
      <ContactForm />
    </>
  );
}
