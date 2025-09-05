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
    <section className="min-h-screen relative overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.1), transparent 70%), url("/images/background-pattern.svg")',
          backgroundSize: 'cover, 300px 300px',
          opacity: 0.3,
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
                preload="auto"
                poster="/images/second-poster.jpg"
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
    </section>
  );
};

export default HeroSection;
