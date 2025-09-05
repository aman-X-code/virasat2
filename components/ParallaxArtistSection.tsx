'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const artists = [
  {
    name: 'Lata Mangeshkar',
    title: 'The Nightingale of India',
    description: 'Legendary playback singer who recorded songs in over 36 Indian languages and is considered one of the greatest voices in the history of Indian music.',
    image: '/images/artists/lata_mangeshkar.jpg',
    specialty: 'Classical & Playback Singing',
    years: '1942-2022'
  },
  {
    name: 'Naseeruddin Shah',
    title: 'Master of Theatre & Cinema',
    description: 'Acclaimed actor known for his versatility in parallel cinema and theatre, bringing depth and authenticity to every role he portrays.',
    image: '/images/artists/naseeruddin_shah.jpg',
    specialty: 'Acting & Theatre',
    years: '1975-Present'
  },
  {
    name: 'Zakir Hussain',
    title: 'Tabla Virtuoso',
    description: 'World-renowned tabla player who has elevated Indian percussion to global recognition through his innovative collaborations and masterful performances.',
    image: '/images/artists/zakir_hussain.jpg',
    specialty: 'Tabla & Percussion',
    years: '1970-Present'
  },
  {
    name: 'Shubha Mudgal',
    title: 'Voice of Tradition & Innovation',
    description: 'Versatile vocalist who seamlessly blends classical Indian music with contemporary styles, creating a unique musical language.',
    image: '/images/artists/shubha_mudgal.jpg',
    specialty: 'Classical & Fusion Vocals',
    years: '1980-Present'
  },
  {
    name: 'Birju Maharaj',
    title: 'Kathak Legend',
    description: 'Master of Kathak dance who preserved and elevated this classical art form through his graceful performances and dedicated teaching.',
    image: '/images/artists/birju_maharaj.png',
    specialty: 'Kathak Dance',
    years: '1952-2022'
  }
];

const ParallaxArtistSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const artistRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    const artistElements = artistRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!container || !scrollContainer || artistElements.length === 0) return;

    // Set up the horizontal scroll
    const totalWidth = artistElements.length * window.innerWidth;
    
    // Set the width of the scroll container
    gsap.set(scrollContainer, { width: totalWidth });

    // Create the main scroll trigger for pinning and horizontal scroll
    const horizontalTween = gsap.to(scrollContainer, {
      x: () => -(totalWidth - window.innerWidth),
      ease: 'none',
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      animation: horizontalTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    // Create parallax effects for each artist
    artistElements.forEach((artist, index) => {
      const image = artist.querySelector('.artist-image');
      const content = artist.querySelector('.artist-content');
      const title = artist.querySelector('.artist-title');
      const subtitle = artist.querySelector('.artist-subtitle');
      const description = artist.querySelector('.artist-description');
      const specialty = artist.querySelector('.artist-specialty');

      if (!image || !content) return;

      // Set initial states
      gsap.set([title, subtitle, description, specialty], {
        y: 100,
        opacity: 0,
      });

      gsap.set(image, {
        scale: 1.2,
        opacity: 0,
      });

      // Create reveal animation for each artist
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: artist,
          start: 'left 80%',
          end: 'left 20%',
          horizontal: true,
          containerAnimation: horizontalTween,
          scrub: 1,
          toggleActions: 'play none none reverse',
        }
      });

      revealTl
        .to(image, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        })
        .to(title, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.6')
        .to(subtitle, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.6')
        .to(description, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.4')
        .to(specialty, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.6');

      // Add floating animation for the image
      gsap.to(image, {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: index * 0.5,
      });
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mobile responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-brand-black via-brand-brown to-brand-black will-change-transform"
      style={{ height: '100vh' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 will-change-transform">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/images/background-pattern.svg")',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Section Title - Fixed */}
      <div className="absolute top-8 left-8 z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-brand-white mb-2">
          Our Esteemed Artists
        </h2>
        <p className="text-lg text-brand-earthen-light max-w-md">
          Masters who have shaped the cultural landscape through their extraordinary talent and dedication.
        </p>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 right-8 z-10 text-brand-white opacity-70">
        <div className="flex items-center space-x-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex h-full will-change-transform"
        style={{ width: 'fit-content' }}
      >
        {artists.map((artist, index) => (
          <div
            key={artist.name}
            ref={el => artistRefs.current[index] = el}
            className="flex-shrink-0 flex items-center justify-center relative will-change-transform"
            style={{ width: '100vw', height: '100vh' }}
          >
            <div className={`container mx-auto px-4 md:px-8 flex ${isMobile ? 'flex-col justify-center' : 'items-center justify-between'} h-full max-w-7xl`}>
              {/* Artist Image */}
              <div className={`${isMobile ? 'w-full mb-8' : 'w-1/2'} flex justify-center`}>
                <div className="artist-image relative will-change-transform">
                  <div className={`relative ${isMobile ? 'w-64 h-64' : 'w-80 h-80 md:w-96 md:h-96'} rounded-full overflow-hidden border-4 border-brand-red shadow-2xl`}>
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 256px, 384px"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className={`absolute -top-4 -right-4 ${isMobile ? 'w-6 h-6' : 'w-8 h-8'} bg-brand-red rounded-full opacity-60`}></div>
                  <div className={`absolute -bottom-6 -left-6 ${isMobile ? 'w-8 h-8' : 'w-12 h-12'} border-2 border-brand-earthen rounded-full`}></div>
                </div>
              </div>

              {/* Artist Content */}
              <div className={`${isMobile ? 'w-full text-center' : 'w-1/2 pl-12'} artist-content`}>
                <div className={`${isMobile ? 'max-w-sm mx-auto' : 'max-w-lg'}`}>
                  <h3 className={`artist-title ${isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'} font-serif text-brand-white mb-2`}>
                    {artist.name}
                  </h3>
                  <h4 className={`artist-subtitle ${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} text-brand-red font-semibold mb-4`}>
                    {artist.title}
                  </h4>
                  <p className={`artist-description ${isMobile ? 'text-base' : 'text-lg'} text-brand-earthen-light leading-relaxed mb-6`}>
                    {artist.description}
                  </p>
                  <div className={`artist-specialty space-y-2 ${isMobile ? 'text-sm' : ''}`}>
                    <div className={`flex ${isMobile ? 'flex-col space-y-1' : 'items-center space-x-4'}`}>
                      <span className="text-brand-white font-semibold">Specialty:</span>
                      <span className="text-brand-earthen-light">{artist.specialty}</span>
                    </div>
                    <div className={`flex ${isMobile ? 'flex-col space-y-1' : 'items-center space-x-4'}`}>
                      <span className="text-brand-white font-semibold">Active:</span>
                      <span className="text-brand-earthen-light">{artist.years}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {artists.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'bg-brand-red scale-125' : 'bg-brand-earthen-light opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxArtistSection;