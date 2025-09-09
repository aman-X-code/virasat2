'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Founder & Director',
    image: '/images/artists/birju_maharaj.png',
    bio: 'Dr. Rajesh Kumar founded REACH in 1995 with a vision to preserve India\'s cultural heritage and empower rural artists through sustainable entrepreneurship.',
  },
  {
    name: 'Priya Sharma',
    role: 'Festival Director',
    image: '/images/artists/lata_mangeshkar.jpg',
    bio: 'Priya oversees the artistic direction of Virasat, curating performances and ensuring the highest quality of cultural presentations.',
  },
  {
    name: 'Amit Verma',
    role: 'Operations Head',
    image: '/images/artists/naseeruddin_shah.jpg',
    bio: 'Amit manages the complex logistics of organizing India\'s largest cultural festival, ensuring smooth operations across all venues.',
  },
  {
    name: 'Sunita Patel',
    role: 'Community Outreach',
    image: '/images/artists/shubha_mudgal.jpg',
    bio: 'Sunita connects with rural artisans and performers, building bridges between traditional communities and modern audiences.',
  },
  {
    name: 'Vikram Singh',
    role: 'Technical Director',
    image: '/images/artists/zakir_hussain.jpg',
    bio: 'Vikram handles the technical aspects of the festival, from sound systems to digital platforms that showcase our heritage.',
  },
  {
    name: 'Meera Joshi',
    role: 'Education Coordinator',
    image: '/images/artists/ring.png',
    bio: 'Meera develops educational programs that engage students and young people with India\'s rich cultural traditions.',
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
    <>
      <style jsx>{`
        /* From Uiverse.io by cssbuttons-io - Adapted for Virasat brand colors */ 
        .donate-btn {
          --color: #d4af37; /* golden yellow */
          font-family: inherit;
          display: inline-block;
          width: auto;
          min-width: 8em;
          height: 2.6em;
          line-height: 2.5em;
          margin: 20px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border: 2px solid var(--color);
          transition: color 0.5s;
          z-index: 1;
          font-size: 17px;
          border-radius: 6px;
          font-weight: 500;
          color: var(--color);
          padding: 0 2em;
          background: transparent;
        }

        .donate-btn:before {
          content: "";
          position: absolute;
          z-index: -1;
          background: var(--color);
          height: 300px;
          width: 300px;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.7s ease;
        }

        .donate-btn:hover {
          color: #fff;
        }

        .donate-btn:hover:before {
          transform: translate(-50%, -50%) scale(1);
        }

        .donate-btn:active:before {
          background: #b8941f; /* darker golden yellow */
          transition: background 0s;
        }
      `}</style>
      <div className="text-brand-black pt-28" style={{ backgroundColor: '#FFF7F5F4' }}>
      {/* Hero Section */}
      <motion.section
        className="py-8 px-6 container mx-auto"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-serif text-brand-brown mb-4 leading-tight"
            variants={fadeIn}
          >
            About Virasat by REACH
          </motion.h1>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-brown mx-auto rounded-full"
            variants={fadeIn}
          ></motion.div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        className="py-8 px-6 container mx-auto relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Decorative Rangoli Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Rangoli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
          >
            <img 
              src="/images/rangoli-about.png" 
              alt="Decorative Rangoli" 
              className="w-full h-full object-contain filter drop-shadow-lg"
              style={{ opacity: 0.8 }}
              onError={(e) => {
                console.log('Rangoli image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Rangoli image loaded successfully')}
            />
          </motion.div>
          
          {/* Top Right Rangoli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 0.5, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
          >
            <img 
              src="/images/rangoli-about2.png" 
              alt="Decorative Rangoli" 
              className="w-full h-full object-contain filter drop-shadow-lg scale-x-[-1]"
              style={{ opacity: 0.4 }}
              onError={(e) => {
                console.log('Rangoli image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Rangoli image loaded successfully')}
            />
          </motion.div>
          
          {/* Bottom Center Rangoli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 0.4, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"
          >
            <img 
              src="/images/rangoli-about3.png" 
              alt="Decorative Rangoli" 
              className="w-full h-full object-contain filter drop-shadow-lg"
              style={{ opacity: 0.35 }}
              onError={(e) => {
                console.log('Rangoli image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Rangoli image loaded successfully')}
            />
          </motion.div>
          
          {/* Side decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute inset-0"
          >
            {/* Left side decorative pattern */}
            <motion.div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img 
                src="/images/rangoli.svg" 
                alt="Decorative Rangoli" 
                className="w-full h-full object-contain"
                style={{ opacity: 0.2 }}
              />
            </motion.div>
            
            {/* Right side decorative pattern */}
            <motion.div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <img 
                src="/images/rangoli.svg" 
                alt="Decorative Rangoli" 
                className="w-full h-full object-contain"
                style={{ opacity: 0.2 }}
              />
            </motion.div>
            
            {/* Floating decorative dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-brand-red rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Image and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
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
              <div className="space-y-6">
                
                {/* First Paragraph */}
                <motion.div 
                  className="bg-gradient-to-r from-brand-red/5 to-transparent p-4 rounded-xl border-l-4 border-brand-red"
                  variants={slideInRight}
                >
                  <p className="text-base md:text-lg font-sans text-brand-earthen leading-relaxed">
                    Born in 1995 in Dehradun, <span className="font-semibold text-brand-brown">REACH (Rural Entrepreneurship for Art & Cultural Heritage)</span> emerged to safeguard India's fading traditions at a time when modernization threatened to overshadow them. Its mission has been clear: preserve heritage, empower rural artists, and create sustainable cultural entrepreneurship.
                  </p>
                </motion.div>

                {/* Second Paragraph */}
                <motion.div 
                  className="bg-gradient-to-l from-brand-brown/5 to-transparent p-4 rounded-xl border-r-4 border-brand-brown"
                  variants={slideInRight}
                >
                  <p className="text-base md:text-lg font-sans text-brand-earthen leading-relaxed">
                    From this vision came <span className="font-semibold text-brand-red">Virāsat</span>, a festival that began as a small campus initiative and has grown into <span className="font-semibold text-brand-brown">Afro-Asia's largest celebration of art and culture</span>. Spanning fifteen days, it transforms Dehradun into a living museum where classical ragas blend with folk dances, handmade crafts find new admirers, and theatre, literature, and traditional cuisines bring communities together.
                  </p>
                </motion.div>

                {/* Third Paragraph with Impact */}
                <motion.div 
                  className="bg-gradient-to-br from-brand-red/8 via-brand-brown/5 to-brand-red/8 p-4 rounded-xl border border-brand-brown/20 relative overflow-hidden"
                  variants={slideInRight}
                >
                  {/* Decorative background elements - positioned outside text area */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 border-2 border-brand-red/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-2 border-brand-brown/10 rounded-full"></div>
                  
                  <p className="text-base md:text-lg font-sans text-brand-earthen leading-relaxed relative z-10">
                    Today, Virāsat is more than a festival — it is a <span className="font-semibold text-brand-red">movement of revival and pride</span>. Each year it welcomes over a million visitors, features more than four hundred performing artists and three hundred artisans from across India, and engages fifty thousand students from schools and colleges. With a media reach valued at over <span className="font-semibold text-brand-brown">₹22 crore</span>, it not only revives endangered art forms but also creates livelihoods, connects grassroots creators with global audiences, and fosters cultural pride among the youth. With nearly three decades of impact, Virāsat continues to shape the cultural economy while keeping India's living heritage alive, relevant, and celebrated.
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16 px-6 container mx-auto relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Decorative Rangoli Background Elements for Team Section */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Rangoli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          >
            <img 
              src="/images/rangoli.svg" 
              alt="Decorative Rangoli" 
              className="w-full h-full object-contain filter drop-shadow-lg"
              style={{ opacity: 0.4 }}
            />
          </motion.div>
          
          {/* Top Right Rangoli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            whileInView={{ opacity: 0.25, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          >
            <img 
              src="/images/rangoli.svg" 
              alt="Decorative Rangoli" 
              className="w-full h-full object-contain filter drop-shadow-lg scale-x-[-1]"
              style={{ opacity: 0.3 }}
            />
          </motion.div>
          
          {/* Bottom Center Rangoli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 0.2, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          >
            <img 
              src="/images/rangoli.svg" 
              alt="Decorative Rangoli" 
              className="w-full h-full object-contain filter drop-shadow-lg"
              style={{ opacity: 0.25 }}
            />
          </motion.div>
        </div>
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16 relative z-10"
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown mb-6 leading-tight">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-brown mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-brand-earthen leading-relaxed">
            The passionate individuals behind REACH and Virasat, dedicated to preserving and celebrating India's cultural heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={slideInLeft}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-brand-red/20 group-hover:border-brand-red/40 transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-brand-brown mb-2">{member.name}</h3>
                <p className="text-brand-red font-semibold mb-4">{member.role}</p>
                <p className="text-brand-earthen text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Donate CTA Section */}
      <motion.section
        className="py-12 px-6 container mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div 
          className="text-center max-w-xl mx-auto"
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-brand-brown mb-3">
            Support Our Mission
          </h2>
          <p className="text-sm md:text-base text-brand-earthen mb-6">
            Help preserve India's cultural heritage.
          </p>
          
          <Link href="/donate">
            <button className="donate-btn">
              <Heart className="w-4 h-4 inline mr-2" />
              Donate Now
            </button>
          </Link>
        </motion.div>
      </motion.section>
      </div>
    </>
  );
};

export default AboutPage;
