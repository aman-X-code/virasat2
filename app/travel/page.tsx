'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const travelItineraries = [
  {
    destination: 'The Royal Route of Rajasthan',
    image: '/images/travel/rajasthan.jpg',
    description: 'Embark on a majestic journey through the land of kings, exploring opulent palaces, ancient forts, and vibrant markets.',
    highlights: ['City Palace in Udaipur', 'Mehrangarh Fort in Jodhpur', 'Amber Fort in Jaipur', 'Desert Safari in Jaisalmer'],
  },
  {
    destination: 'The Spiritual Sojourn in Varanasi',
    image: '/images/travel/varanasi.jpg',
    description: 'Experience the spiritual heart of India, where life and death converge on the banks of the sacred Ganges.',
    highlights: ['Ganga Aarti Ceremony', 'Boat ride on the Ganges', 'Exploring ancient temples', 'Sarnath, where Buddha first taught'],
  },
  {
    destination: 'The Temple Trail of Tamil Nadu',
    image: '/images/travel/tamilnadu.jpg',
    description: 'Discover the architectural wonders of Southern India, with its towering gopurams and intricately carved temples.',
    highlights: ['Meenakshi Amman Temple', 'Brihadeeswarar Temple', 'Shore Temple in Mahabalipuram', 'Vivekananda Rock Memorial'],
  },
];

const TravelPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-brand-white text-brand-black pt-28">
      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-brand-brown mb-6">Curated Journeys</h1>
          <p className="text-lg font-sans text-brand-earthen max-w-2xl mx-auto">
            Extend your Virasat experience with our specially curated travel itineraries that delve deep into the cultural fabric of India.
          </p>
        </div>

        <div className="space-y-24">
          {travelItineraries.map((itinerary, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="initial"
              whileInView="animate"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <div className={`relative h-96 rounded-lg shadow-lg overflow-hidden border-4 border-brand-earthen-light ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <Image
                  src={itinerary.image}
                  alt={itinerary.destination}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-serif text-brand-black mb-4">{itinerary.destination}</h2>
                <p className="font-sans text-brand-earthen mb-6">{itinerary.description}</p>
                <h4 className="text-xl font-serif text-brand-brown mb-3">Highlights:</h4>
                <ul className="list-disc list-inside space-y-2 font-sans text-brand-earthen">
                  {itinerary.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-brand-red text-white px-8 py-3 rounded-full font-sans font-semibold hover:bg-brand-red-dark transition-colors"
                >
                  Inquire Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TravelPage;
