'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Ananya Sharma',
    role: 'Founder & Creative Director',
    image: '/images/team/member1.jpg',
    bio: 'Ananya is the visionary behind Virasat, driven by a passion for cultural preservation and artistic expression.',
  },
  {
    name: 'Rohan Mehra',
    role: 'Lead Curator',
    image: '/images/team/member2.jpg',
    bio: 'Rohan meticulously crafts the narratives and experiences that bring our heritage to life.',
  },
  {
    name: 'Priya Singh',
    role: 'Operations Head',
    image: '/images/team/member3.jpg',
    bio: 'Priya ensures that every aspect of the event runs smoothly, from logistics to guest experience.',
  },
];

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-brand-white text-brand-black pt-28">
      {/* About Section */}
      <motion.section
        className="py-20 px-6 container mx-auto"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-serif text-brand-brown mb-6">Our Story</h1>
          <p className="text-lg font-sans text-brand-earthen leading-relaxed mb-4">
            Virasat was born from a simple yet profound idea: to create a bridge between generations through the timeless beauty of our culture. In a world of fleeting trends, we seek to be an anchor, reminding us of the rich tapestry of stories, art, and traditions that define us.
          </p>
          <p className="text-lg font-sans text-brand-earthen leading-relaxed">
            Our journey began with a small group of enthusiasts and has since grown into a vibrant community of artists, historians, and patrons, all united by a shared love for our heritage. We believe that culture is a living entity, and through Virasat, we provide it a stage to breathe, evolve, and inspire.
          </p>
        </div>
      </motion.section>

      {/* You can add more sections here about the history, mission, etc. */}
    </div>
  );
};

export default AboutPage;
