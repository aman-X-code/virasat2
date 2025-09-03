'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-brand-white text-brand-black">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #5a3e36 50%, #8b786d 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-black bg-opacity-50 p-12 rounded-lg">
          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold mb-4"
            variants={fadeIn}
          >
            VIRASAT
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-sans mb-8"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            A Journey Through Time, Culture, and Tradition
          </motion.p>
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link href="/about" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red text-white px-8 py-3 rounded-full font-sans font-semibold hover:bg-brand-red-dark transition-colors"
              >
                Discover Our Story
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Reach Preview */}
      <section className="py-20 px-6 container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-brand-brown mb-4">About Reach</h2>
          <p className="text-lg font-sans text-brand-earthen mb-8">
            Virasat is not just an event; it's a movement to preserve and celebrate our rich cultural heritage. We aim to connect the past with the present, creating a legacy for the future.
          </p>
          <Link href="/about" className="text-brand-red font-semibold hover:underline">
            Learn More &rarr;
          </Link>
        </motion.div>
      </section>

      {/* Other sections will be added here */}
    </div>
  );
};

export default HomePage;
