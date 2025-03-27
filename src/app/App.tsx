'use client';

import Description from '@/components/description/Description';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Services from '@/components/services/Services';
import React from 'react';

export default function App() {
  return (
    <>
      <Header />
      <main className="2xl:w-10/12 2xl:m-auto">
        <Description />
        <Services />
      </main>
      <Footer />
    </>
  );
}
