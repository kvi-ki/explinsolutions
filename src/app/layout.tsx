import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'explinsolutions',
  description:
    'Ingeniería industrial especializada en automatización y sistemas eléctricos'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body id="home" className="font-body h-full">
        <Header />
        <main className="pt-20 2xl:w-10/12 2xl:m-auto">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
