'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const galleryItems = [
  { type: 'image', src: '/images/first.png' },
  { type: 'video', src: '/images/secon.mp4' },
  { type: 'image', src: '/images/into-image.jpeg' },
  { type: 'image', src: '/images/REACH (2).png' },
];

const GalleryPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, rotateX: -45 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 px-6 container mx-auto bg-brand-white">
      <motion.div
        className="text-center max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-serif text-brand-brown mb-6 leading-tight"
          variants={itemVariants}
        >
          📸 Festival Memories Through the Years
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-brown mx-auto rounded-full mb-12"
          variants={itemVariants}
        ></motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-lg border-4 border-brand-earthen-light"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              rotateY: index % 2 === 0 ? 10 : -10,
              rotateX: 5,
              translateZ: 20,
              boxShadow: '0px 15px 35px rgba(0,0,0,0.3)',
            }}
            style={{ transformPerspective: '1000px' }}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={`Gallery item ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/gallery">
          <Button size="lg" className="bg-brand-red text-white hover:bg-brand-red-dark text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            View Full Gallery &rarr;
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default GalleryPreview;
