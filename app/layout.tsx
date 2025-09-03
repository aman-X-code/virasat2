'use client';

import './globals.css';
import { Playfair_Display, Lato } from 'next/font/google';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaderBeenShown = sessionStorage.getItem('loaderShown');
    if (hasLoaderBeenShown) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('loaderShown', 'true');
    setLoading(false);
  };

  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable} font-sans bg-brand-white`}>
        {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}