'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const partners = [
  { name: 'Heritage Foundation', logoUrl: 'https://placehold.co/150x80/b09e91/ffffff?text=Heritage+Foundation' },
  { name: 'Cultural Trust', logoUrl: 'https://placehold.co/150x80/b09e91/ffffff?text=Cultural+Trust' },
  { name: 'Artisan Guild', logoUrl: 'https://placehold.co/150x80/b09e91/ffffff?text=Artisan+Guild' },
  { name: 'National Museum', logoUrl: 'https://placehold.co/150x80/b09e91/ffffff?text=National+Museum' },
  { name: 'Traditional Arts', logoUrl: 'https://placehold.co/150x80/b09e91/ffffff?text=Traditional+Arts' },
  { name: 'History Channel', logoUrl: 'https://placehold.co/150x80/b09e91/ffffff?text=History+Channel' },
  { name: 'Legacy Bank', logoUrl: 'https://placehold.co/150x80/b09e91/ffffff?text=Legacy+Bank' },
];

export const PartnersSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Tween>();

  useEffect(() => {
    const marquee = marqueeRef.current;
    const wrapper = wrapperRef.current;
    if (!marquee || !wrapper) return;

    // To avoid re-running on hot reloads
    if (marquee.children.length === partners.length) {
      const logos = Array.from(marquee.children);
      logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        marquee.appendChild(clone);
      });
    }

    const marqueeWidth = marquee.scrollWidth / 2;

    tl.current = gsap.to(marquee, {
      x: -marqueeWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    const handleMouseEnter = () => tl.current && gsap.to(tl.current, { timeScale: 0.2, duration: 0.5 });
    const handleMouseLeave = () => tl.current && gsap.to(tl.current, { timeScale: 1, duration: 0.5 });

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      tl.current?.kill();
    };
  }, []);

  const sectionBgColor = '#f7f5f4'; // Calculated from brand-white + brand-black/5

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="py-20"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-brand-brown mb-12">
          Our Esteemed Partners
        </h2>
        <div ref={wrapperRef} className="relative w-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center"
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <motion.img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            ))}
          </div>
          <div
            className="absolute top-0 left-0 h-full w-24 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${sectionBgColor}, transparent)`}}
          />
          <div
            className="absolute top-0 right-0 h-full w-24 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${sectionBgColor}, transparent)`}}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PartnersSection;
