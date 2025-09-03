'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-brand-white text-brand-black pt-28">
      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-brand-brown mb-6">Contact Us</h1>
          <p className="text-lg font-sans text-brand-earthen max-w-2xl mx-auto">
            We would love to hear from you. Whether you have a question, a suggestion, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border-2 border-brand-earthen-light"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-brand-black mb-6">Send a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-brand-brown font-sans mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-brand-earthen-light rounded-md focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-brand-brown font-sans mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-brand-earthen-light rounded-md focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-brand-brown font-sans mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-brand-earthen-light rounded-md focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-brand-brown font-sans mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-brand-earthen-light rounded-md focus:ring-brand-red focus:border-brand-red"></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red text-white px-8 py-3 rounded-full font-sans font-semibold hover:bg-brand-red-dark transition-colors"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-brand-earthen-light">
              <h3 className="text-2xl font-serif text-brand-black mb-4">Contact Information</h3>
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="text-brand-red" size={24} />
                <span className="font-sans text-brand-earthen">info@virasat.com</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="text-brand-red" size={24} />
                <span className="font-sans text-brand-earthen">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-brand-red" size={24} />
                <span className="font-sans text-brand-earthen">123 Heritage Lane, Culture City</span>
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-brand-brown hover:text-brand-red"><Facebook /></a>
                <a href="#" className="text-brand-brown hover:text-brand-red"><Twitter /></a>
                <a href="#" className="text-brand-brown hover:text-brand-red"><Instagram /></a>
              </div>
            </div>
            <div className="h-80 rounded-lg shadow-lg overflow-hidden border-2 border-brand-earthen-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086439994586!2d144.9537353153165!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633123456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
