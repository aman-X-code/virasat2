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
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-serif text-brand-brown mb-6 leading-tight">
              About Virasat by REACH
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-red to-brand-brown mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl font-sans text-brand-earthen leading-relaxed space-y-6 text-justify">
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
        </div>
      </motion.section>

      {/* You can add more sections here about the history, mission, etc. */}
    </div>
  );
};

export default AboutPage;
