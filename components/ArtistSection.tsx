'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CardCarousel } from '@/components/ui/card-carousel';

const ArtistSection = () => {
  const artists = [
    {
      src: '/images/artists/lata_mangeshkar.jpg',
      alt: 'Lata Mangeshkar',
      name: 'Lata Mangeshkar',
    },
    {
      src: '/images/artists/naseeruddin_shah.jpg',
      alt: 'Naseeruddin Shah',
      name: 'Naseeruddin Shah',
    },
    {
      src: '/images/artists/zakir_hussain.jpg',
      alt: 'Zakir Hussain',
      name: 'Zakir Hussain',
    },
    {
      src: '/images/artists/shubha_mudgal.jpg',
      alt: 'Shubha Mudgal',
      name: 'Shubha Mudgal',
    },
    {
        src: '/images/artists/birju_maharaj.jpg',
        alt: 'Birju Maharaj',
        name: 'Birju Maharaj',
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-6 container mx-auto">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-serif text-brand-brown mb-4">Our Esteemed Artists</h2>
        <p className="text-lg font-sans text-brand-earthen mb-8">
          We are honored to have hosted some of the most renowned artists from around the world.
        </p>
      </motion.div>

      <div className="mt-12">
        <CardCarousel
          images={artists}
          autoplayDelay={3000}
          showPagination={true}
          showNavigation={true}
        />
      </div>

      <div className="text-center mt-12">
        <Link href="/gallery" className="text-brand-red font-semibold hover:underline">
          View More in Gallery &rarr;
        </Link>
      </div>
    </section>
  );
};

export default ArtistSection;
