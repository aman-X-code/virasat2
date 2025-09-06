'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from './HeroCarousel';

const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial value
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

const HeroSection = () => {
  const isMobile = useIsMobile();
  const gridItems = [
    {
      id: 1,
      video: '/images/second.mp4',
      className: 'col-span-1 row-span-2',
      delay: 0.2
    },
    {
      id: 2,
      video: '/images/third.mp4',
      className: 'col-span-1 row-span-1',
      delay: 0.4
    },
    {
      id: 3,
      video: '/images/forth.mp4',
      className: 'col-span-1 row-span-1',
      delay: 0.6
    },
    {
      id: 4,
      video: '/images/secon.mp4',
      className: 'col-span-1 row-span-2',
      delay: 0.8
    }
  ];

  return (
    <section data-testid="hero-section" className="min-h-screen relative overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.1), transparent 70%), url("/images/background-pattern.svg")',
          backgroundSize: 'cover, 300px 300px',
          opacity: 0.3,
        }}
      />
      
      {/* Bento Grid Container */}
      <div className="relative z-10 w-full h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto">
          {isMobile ? (
            <div className="relative w-full h-[80vh] max-h-[800px] mt-16">
              <HeroCarousel items={gridItems} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
                <motion.h1
                  className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-red-400 bg-clip-text text-transparent leading-tight mb-2"
                  style={{
                    fontFamily: 'var(--font-cinzel), "Cinzel", "Playfair Display", serif',
                    backgroundSize: '200% 200%',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Virasat
                </motion.h1>
                <motion.p
                  className="text-xl text-white/90 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Heritage in the Hills
                </motion.p>
              </div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-4 h-[80vh] max-h-[800px] w-full mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {/* Grid Items with Videos */}
            {gridItems.map((item) => (
              <motion.div
                key={item.id}
                className={`${item.className} relative group cursor-pointer overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
              >
                <video
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full opacity-60"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: item.delay
                  }}
                />
              </motion.div>
            ))}

            {/* Center Logo - Virasat */}
            <motion.div
              className="col-span-2 row-span-2 relative flex items-center justify-center rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Rangoli background pattern */}
              <div className="absolute inset-0 opacity-30">
                <motion.div 
                  className="absolute inset-0 bg-[url('/images/rangoli.svg')] bg-center bg-no-repeat bg-contain"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
              
              {/* Shiny Virasat Text */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pt-28"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-red-400 bg-clip-text text-transparent leading-tight mb-2"
                  style={{
                    fontFamily: 'var(--font-cinzel), "Cinzel", "Playfair Display", serif',
                    backgroundSize: '200% 200%',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Virasat
                </motion.h1>
                
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl text-white/90 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  Heritage in the Hills
                </motion.p>
                
                {/* Scroll Down Indicator */}
                <motion.div
                  className="mt-8 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <motion.div
                    className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center"
                    animate={{ 
                      borderColor: ['rgba(251, 146, 60, 0.4)', 'rgba(251, 146, 60, 1)', 'rgba(251, 146, 60, 0.4)']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <motion.div
                      className="w-1 h-3 bg-orange-400 rounded-full mt-2"
                      animate={{ 
                        y: [0, 12, 0],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 0.2
                      }}
                    />
                  </motion.div>
                  <motion.p
                    className="text-sm text-orange-400/80 mt-4 font-light"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    Scroll Down
                  </motion.p>
                </motion.div>
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-amber-400 rounded-full opacity-70"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-60"
                animate={{ 
                  y: [0, 8, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
          )}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
