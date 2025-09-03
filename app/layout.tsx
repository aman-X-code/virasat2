import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'VIRASAT',
  description: 'A classy, cultural, and traditional website with a modern touch.',
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable} font-sans bg-brand-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}