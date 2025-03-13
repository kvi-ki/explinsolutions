import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'Explinsolutions'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="font-body" id="root">
        {children}
      </body>
    </html>
  );
}
