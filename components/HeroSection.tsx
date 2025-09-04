'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MaskedDiv from '@/components/ui/masked-div';

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const maskTypes = [
    { type: 'type-1' as const, label: 'Classic' },
    { type: 'type-2' as const, label: 'Modern' },
    { type: 'type-3' as const, label: 'Artistic' },
    { type: 'type-4' as const, label: 'Minimal' },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Black Background with Cultural Accents */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(255, 215, 0, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, 
              #000000 0%, 
              #0a0a0a 25%, 
              #000000 50%, 
              #0a0a0a 75%, 
              #000000 100%
            )
          `
        }}
      />
      
      {/* Cultural Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(255, 140, 0, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(255, 69, 0, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, rgba(255, 165, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px, 120px 120px'
        }}
      />
      
      {/* Corner-Positioned Image Layout */}
      <div className="relative z-10 w-full h-screen p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="h-full w-full max-w-7xl mx-auto relative">
          
          {/* Top Left Corner - Large Image */}
          <motion.div
            className="absolute top-16 left-0 w-1/2 h-1/2 max-w-md max-h-96 transform -translate-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <MaskedDiv
              maskType="type-1"
              className="w-full h-full"
              size={1}
              backgroundColor="transparent"
            >
              <Image
                src="/images/first.png"
                alt="Virasat Cultural Heritage - Top Left"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </MaskedDiv>
            
            {/* Floating decorative element */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full opacity-60"
              animate={{ 
                y: [0, -12, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.3
              }}
            />
          </motion.div>

          {/* Top Right Corner - Medium Image */}
          <motion.div
            className="absolute top-16 right-0 w-2/5 h-2/5 max-w-80 max-h-80 transform translate-x-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <MaskedDiv
              maskType="type-2"
              className="w-full h-full"
              size={1}
              backgroundColor="transparent"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/second.mp4" type="video/mp4" />
                <source src="/loader.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MaskedDiv>
            
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full opacity-50"
              animate={{ 
                y: [0, -6, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.6
              }}
            />
          </motion.div>

          {/* Bottom Left Corner - Large Image */}
          <motion.div
            className="absolute bottom-0 left-0 w-1/2 h-1/2 max-w-md max-h-96 transform translate-y-24 -translate-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <MaskedDiv
              maskType="type-3"
              className="w-full h-full"
              size={1}
              backgroundColor="transparent"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/third.mp4" type="video/mp4" />
                <source src="/loader.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MaskedDiv>
            
            <motion.div
              className="absolute -bottom-2 -left-2 w-5 h-5 bg-amber-600 rounded-full opacity-35"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 3.2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.4
              }}
            />
          </motion.div>

          {/* Bottom Right Corner - Medium Image */}
          <motion.div
            className="absolute bottom-0 right-0 w-1/3 h-2/3 max-w-80 max-h-[36rem] transform translate-x-12 translate-y-80 scale-y-125"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <MaskedDiv
              maskType="type-4"
              className="w-full h-full"
              size={1}
              backgroundColor="transparent"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/forth.mp4" type="video/mp4" />
                <source src="/loader.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MaskedDiv>
            
            <motion.div
              className="absolute -bottom-1 -left-1 w-4 h-4 bg-amber-600 rounded-full opacity-45"
              animate={{ 
                y: [0, 4, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 2.3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2.0
              }}
            />
          </motion.div>

          {/* Center Black Area with Intro Image */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-y-16 w-96 h-80 bg-black rounded-3xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <Image
              src="/images/into-image.png"
              alt="Virasat Cultural Heritage - Intro"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-sm mb-2 font-light">Scroll Down</span>
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ 
            y: [0, 8, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Cultural Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full opacity-40 shadow-lg"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 8, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-10 h-10 bg-gradient-to-br from-red-400 to-pink-600 rounded-full opacity-30 shadow-lg"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full opacity-35 shadow-lg"
        animate={{ 
          y: [0, -12, 0],
          x: [0, -5, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.7
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-45 shadow-lg"
        animate={{ 
          y: [0, -18, 0],
          scale: [1, 1.4, 1],
          rotate: [0, -90, -180, -270, -360]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      <motion.div
        className="absolute bottom-20 right-32 w-9 h-9 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full opacity-25 shadow-lg"
        animate={{ 
          y: [0, 12, 0],
          x: [0, -6, 0],
          rotate: [0, 120, 240, 360]
        }}
        transition={{ 
          duration: 3.8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.3
        }}
      />
      
      {/* Additional Cultural Accent Elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-gradient-to-br from-saffron-400 to-orange-500 rounded-full opacity-50"
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-40"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2.5
        }}
      />
    </section>
  );
};

export default HeroSection;
