'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/plugins/video/dist/style.css";
import 'yet-another-react-lightbox/styles.css';
import { Button } from '@/components/ui/button';

const allItems = [
  { src: '/images/first.png', type: 'photo', year: 2023, title: 'Vibrant Performance' },
  { src: '/images/secon.mp4', type: 'video', year: 2022, title: 'Cultural Dance' },
  { src: '/images/into-image.jpeg', type: 'photo', year: 2024, title: 'Artisan at Work' },
  { src: '/images/artists/birju_maharaj.png', type: 'photo', year: 2021, title: 'Birju Maharaj' },
  { src: '/images/artists/lata_mangeshkar.jpg', type: 'photo', year: 2022, title: 'Lata Mangeshkar' },
  { src: '/images/artists/naseeruddin_shah.jpg', type: 'photo', year: 2023, title: 'Naseeruddin Shah' },
  { src: '/images/artists/shubha_mudgal.jpg', type: 'photo', year: 2024, title: 'Shubha Mudgal' },
  { src: '/images/artists/zakir_hussain.jpg', type: 'photo', year: 2021, title: 'Zakir Hussain' },
  { src: '/images/third.mp4', type: 'video', year: 2023, title: 'Musical Evening' },
  { src: '/images/forth.mp4', type: 'video', year: 2024, title: 'Folk Traditions' },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState({ year: 'all', type: 'all' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = allItems.filter(item => {
    const yearMatch = filter.year === 'all' || item.year === filter.year;
    const typeMatch = filter.type === 'all' || item.type === filter.type;
    return yearMatch && typeMatch;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="bg-brand-white text-brand-black pt-20">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/into-image.jpeg')" }}>
        <div className="absolute inset-0 bg-brand-brown bg-opacity-60" />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
        >
            <h1 className="text-5xl md:text-7xl font-serif">Celebrating Culture Across the Years</h1>
            <p className="mt-4 text-xl font-sans">A visual archive of Virasat Festival&apos;s most cherished moments.</p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Year Filter */}
          <div className="flex items-center gap-2 rounded-full bg-brand-earthen-light p-2">
            {['all', 2024, 2023, 2022, 2021].map(year => (
              <Button key={year} onClick={() => setFilter(f => ({ ...f, year: year as any }))} variant={filter.year === year ? 'default' : 'ghost'} className={`rounded-full ${filter.year === year ? 'bg-brand-red text-white' : 'text-brand-brown'}`}>
                {year === 'all' ? 'All Years' : year}
              </Button>
            ))}
          </div>
          {/* Type Filter */}
          <div className="flex items-center gap-2 rounded-full bg-brand-earthen-light p-2">
            {['all', 'photo', 'video'].map(type => (
              <Button key={type} onClick={() => setFilter(f => ({ ...f, type: type as any }))} variant={filter.type === type ? 'default' : 'ghost'} className={`capitalize rounded-full ${filter.type === type ? 'bg-brand-red text-white' : 'text-brand-brown'}`}>
                {type === 'all' ? 'All Types' : type + 's'}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex -ml-4"
          columnClassName="my-masonry-grid_column pl-4 bg-clip-padding"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.src}
              className="group relative mb-4 overflow-hidden rounded-lg border-4 border-brand-earthen-light shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openLightbox(index)}
            >
              {item.type === 'photo' ? (
                <Image src={item.src} alt={item.title} width={500} height={500} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
              ) : (
                <div className="relative">
                  <video src={item.src} className="w-full h-auto" loop muted playsInline />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="font-serif text-xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          plugins={[Video]}
          slides={filteredItems.map(item => {
            if (item.type === 'video') {
              return {
                type: 'video',
                width: 1280,
                height: 720,
                sources: [
                  {
                    src: item.src,
                    type: 'video/mp4',
                  },
                ],
              };
            }
            return {
              type: 'image',
              src: item.src,
              width: 1200,
              height: 800,
            };
          })}
          index={lightboxIndex}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .8)" },
            slide: {
                border: '12px solid #5a3e36',
                boxShadow: '0 0 0 3px #daa520, 0 0 25px rgba(0,0,0,0.6)',
                borderRadius: '6px',
                backgroundImage: 'url(/images/background-pattern.svg)',
                backgroundSize: '300px',
                padding: '1rem'
            }
          }}
        />
      </div>

      {/* CTA */}
      <div className="text-center py-16">
        <Link href="/events">
          <Button size="lg" className="bg-brand-red text-white hover:bg-brand-red-dark text-xl font-semibold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Book Your Tickets Now
          </Button>
        </Link>
      </div>
       <style jsx global>{`
        .my-masonry-grid {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          margin-left: -30px; /* gutter size offset */
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 30px; /* gutter size */
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div { /* change div to reference your elements */
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
