'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  { src: '/images/gallery/img1.jpg', title: 'Cultural Performance', description: 'A vibrant display of traditional dance.' },
  { src: '/images/gallery/img2.jpg', title: 'Artisan Craftsmanship', description: 'Intricate handcrafted pottery.' },
  { src: '/images/gallery/img3.jpg', title: 'Musical Ensemble', description: 'Symphonies of heritage.' },
  { src: '/images/gallery/img4.jpg', title: 'Historical Attire', description: 'The elegance of a bygone era.' },
  { src: '/images/gallery/img5.jpg', title: 'Architectural Marvels', description: 'Exploring ancient structures.' },
  { src: '/images/gallery/img6.jpg', title: 'Literary Evening', description: 'Poetry and stories under the stars.' },
];

const GalleryPage = () => {
  const fadeIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-brand-white text-brand-black pt-28">
      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-brand-brown mb-6">Gallery</h1>
          <p className="text-lg font-sans text-brand-earthen max-w-2xl mx-auto">
            A visual journey through the heart of Virasat. Witness the moments, the art, and the emotions that define us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg border-4 border-brand-earthen-light shadow-lg group"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-serif text-white mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-brand-earthen-light font-sans"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
