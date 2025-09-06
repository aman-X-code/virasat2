'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import FAQSection from '@/components/FAQSection';
import PartnersSection from '@/components/PartnersSection';
import HighlightsSection from '@/components/HighlightsSection';
import ParallaxArtistSection from '@/components/ParallaxArtistSection';
import EventsSection from '@/components/EventsSection';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-brand-black">
      <HeroSection />

      {/* About Reach Preview */}
      <section className="py-20 px-6 container mx-auto bg-brand-white">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-serif text-brand-brown mb-6 leading-tight">
              About Virasat by REACH
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-brown mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl font-sans text-brand-earthen mb-8 space-y-6 leading-relaxed text-justify">
            <p>
              Born in 1995 in Dehradun, <span className="font-semibold text-brand-brown">REACH (Rural Entrepreneurship for Art & Cultural Heritage)</span> emerged to safeguard India's fading traditions at a time when modernization threatened to overshadow them. Its mission has been clear: preserve heritage, empower rural artists, and create sustainable cultural entrepreneurship.
            </p>
            
            <p>
              From this vision came <span className="font-semibold text-brand-red">Virāsat</span>, a festival that began as a small campus initiative and has grown into <span className="font-semibold text-brand-brown">Afro-Asia's largest celebration of art and culture</span>. Spanning fifteen days, it transforms Dehradun into a living museum where classical ragas blend with folk dances, handmade crafts find new admirers, and theatre, literature, and traditional cuisines bring communities together.
            </p>
            
            <p>
              Today, Virāsat is more than a festival — it is a <span className="font-semibold text-brand-red">movement of revival and pride</span>. Each year it welcomes over a million visitors, features more than four hundred performing artists and three hundred artisans from across India, and engages fifty thousand students from schools and colleges. With a media reach valued at over <span className="font-semibold text-brand-brown">₹22 crore</span>, it not only revives endangered art forms but also creates livelihoods, connects grassroots creators with global audiences, and fosters cultural pride among the youth. With nearly three decades of impact, Virāsat continues to shape the cultural economy while keeping India's living heritage alive, relevant, and celebrated.
            </p>
          </div>
          
          <Link href="/about" className="text-brand-red font-semibold hover:underline">
            Learn More &rarr;
          </Link>
        </motion.div>
      </section>

      <ParallaxArtistSection />

      <PartnersSection />
      <HighlightsSection />
      <EventsSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
