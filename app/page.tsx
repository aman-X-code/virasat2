'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import FAQSection from '@/components/FAQSection';
import PartnersSection from '@/components/PartnersSection';
import HighlightsSection from '@/components/HighlightsSection';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-brand-white text-brand-black">
      <HeroSection />

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

      <FAQSection />
      <PartnersSection />
      <HighlightsSection />
    </div>
  );
};

export default HomePage;
