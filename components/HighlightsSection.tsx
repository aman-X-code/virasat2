'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlightsData = [
  {
    imageUrl: 'https://placehold.co/600x400/8b786d/ffffff?text=Gala+Night',
    title: 'The Grand Gala Night',
    description: 'An unforgettable evening celebrating the launch of our new cultural exhibit with artists and patrons.',
  },
  {
    imageUrl: 'https://placehold.co/600x400/5a3e36/ffffff?text=Artisan+Workshop',
    title: 'Artisan Workshop Series',
    description: 'A hands-on workshop where masters of traditional crafts shared their invaluable skills with enthusiasts.',
  },
  {
    imageUrl: 'https://placehold.co/600x400/c0392b/ffffff?text=Heritage+Walk',
    title: 'The Dawn Heritage Walk',
    description: 'An immersive journey through historical landmarks, bringing stories of the past to life at sunrise.',
  },
];

export const HighlightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!section || cards.length === 0) return;

    // Set initial state
    gsap.set(cards, { y: 50, opacity: 0 });

    ScrollTrigger.batch(cards, {
      trigger: section,
      start: 'top 80%',
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }),
      once: true,
    });

  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 px-6 bg-brand-white"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-brand-brown mb-4">
          Our Journey's Highlights
        </h2>
        <p className="text-center text-lg text-brand-earthen mb-12 max-w-2xl mx-auto">
          Moments that defined our mission and celebrated our shared heritage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightsData.map((highlight, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img src={highlight.imageUrl} alt={highlight.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-serif text-brand-black mb-2">{highlight.title}</h3>
                <p className="text-base font-sans text-brand-earthen">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HighlightsSection;
