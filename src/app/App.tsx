'use client';

import Description from '@/components/description/Description';
import Header from '@/components/header/Header';
import Services from '@/components/services/Services';
import React from 'react';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Services />
      </main>
    </>
  );
}
