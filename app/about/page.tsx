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

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.4 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-brand-white text-brand-black pt-28">
      {/* Hero Section */}
      <motion.section
        className="py-16 px-6 container mx-auto"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-serif text-brand-brown mb-6 leading-tight"
            variants={fadeIn}
          >
            About Virasat by REACH
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-brown mx-auto rounded-full mb-8"
            variants={fadeIn}
          ></motion.div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        className="py-12 px-6 container mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          {/* Image and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Image Section - Left Column */}
            <motion.div 
              className="lg:col-span-4 flex justify-center lg:justify-start"
              variants={slideInLeft}
            >
              <div className="relative group">
                {/* Decorative background elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-red/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-brand-brown/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-brand-red/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Main image container */}
                <div className="relative">
                  {/* Rotated background shadow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/10 to-brand-brown/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  
                  {/* Image frame */}
                  <div className="relative bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/images/REACH (2).png"
                      alt="REACH - Rural Entrepreneurship for Art & Cultural Heritage"
                      width={280}
                      height={210}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-4 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                </div>
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-red/5 via-transparent to-brand-brown/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Text Content - Right Column */}
            <motion.div 
              className="lg:col-span-8"
              variants={slideInRight}
            >
              <div className="space-y-8">
                
                {/* First Paragraph */}
                <motion.div 
                  className="bg-gradient-to-r from-brand-red/5 to-transparent p-6 rounded-xl border-l-4 border-brand-red"
                  variants={slideInRight}
                >
                  <p className="text-lg md:text-xl font-sans text-brand-earthen leading-relaxed">
                    Born in 1995 in Dehradun, <span className="font-semibold text-brand-brown">REACH (Rural Entrepreneurship for Art & Cultural Heritage)</span> emerged to safeguard India's fading traditions at a time when modernization threatened to overshadow them. Its mission has been clear: preserve heritage, empower rural artists, and create sustainable cultural entrepreneurship.
                  </p>
                </motion.div>

                {/* Second Paragraph */}
                <motion.div 
                  className="bg-gradient-to-l from-brand-brown/5 to-transparent p-6 rounded-xl border-r-4 border-brand-brown"
                  variants={slideInRight}
                >
                  <p className="text-lg md:text-xl font-sans text-brand-earthen leading-relaxed">
                    From this vision came <span className="font-semibold text-brand-red">Virāsat</span>, a festival that began as a small campus initiative and has grown into <span className="font-semibold text-brand-brown">Afro-Asia's largest celebration of art and culture</span>. Spanning fifteen days, it transforms Dehradun into a living museum where classical ragas blend with folk dances, handmade crafts find new admirers, and theatre, literature, and traditional cuisines bring communities together.
                  </p>
                </motion.div>

                {/* Third Paragraph with Impact */}
                <motion.div 
                  className="bg-gradient-to-br from-brand-red/8 via-brand-brown/5 to-brand-red/8 p-6 rounded-xl border border-brand-brown/20 relative overflow-hidden"
                  variants={slideInRight}
                >
                  {/* Decorative background elements - positioned outside text area */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 border-2 border-brand-red/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-2 border-brand-brown/10 rounded-full"></div>
                  
                  <p className="text-lg md:text-xl font-sans text-brand-earthen leading-relaxed relative z-10">
                    Today, Virāsat is more than a festival — it is a <span className="font-semibold text-brand-red">movement of revival and pride</span>. Each year it welcomes over a million visitors, features more than four hundred performing artists and three hundred artisans from across India, and engages fifty thousand students from schools and colleges. With a media reach valued at over <span className="font-semibold text-brand-brown">₹22 crore</span>, it not only revives endangered art forms but also creates livelihoods, connects grassroots creators with global audiences, and fosters cultural pride among the youth. With nearly three decades of impact, Virāsat continues to shape the cultural economy while keeping India's living heritage alive, relevant, and celebrated.
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Bottom Spacing */}
      <div className="py-16"></div>
    </div>
  );
};

export default AboutPage;
