import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Explinsolutions'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body id="home" className="font-body h-full">
        {children}
      </body>
    </html>
  );
}
