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
  {
    name: 'Arjun Verma',
    role: 'Marketing & Outreach',
    image: '/images/team/member4.jpg',
    bio: 'Arjun connects Virasat with the community, building bridges and fostering engagement.',
  },
  {
    name: 'Sameera Khan',
    role: 'Art & Design Lead',
    image: '/images/team/member5.jpg',
    bio: 'Sameera is the creative force behind our visual identity, blending tradition with modern aesthetics.',
  },
  {
    name: 'Vikram Reddy',
    role: 'Technology & Innovation',
    image: '/images/team/member6.jpg',
    bio: 'Vikram pioneers the digital experiences that make Virasat accessible to a global audience.',
  },
];

const TeamPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-brand-white text-brand-black pt-28">
      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-brand-brown mb-4">The Team of Reach</h1>
          <p className="text-lg font-sans text-brand-earthen max-w-2xl mx-auto">
            The dedicated individuals who bring the vision of Virasat to life. Each member contributes a unique thread to the rich tapestry of our organization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              custom={index}
              initial="initial"
              whileInView="animate"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <div className="relative inline-block p-3 border-4 border-brand-brown rounded-lg bg-brand-earthen-light shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-48 h-64 mx-auto overflow-hidden rounded-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-serif text-brand-black mt-6 mb-2">{member.name}</h3>
              <p className="text-md font-sans text-brand-red font-semibold mb-2">{member.role}</p>
              <p className="text-md font-sans text-brand-earthen">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
