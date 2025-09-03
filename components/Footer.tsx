import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Ornamental Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-earthen to-transparent mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-serif text-brand-red font-bold mb-4">VIRASAT</h3>
            <p className="text-brand-earthen-light font-sans">
              Experience the confluence of tradition and modernity. A celebration of culture, art, and heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif text-brand-white mb-4">Quick Links</h4>
            <ul className="space-y-2 font-sans">
              <li><Link href="/" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-red transition-colors">About Reach</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-red transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif text-brand-white mb-4">Contact</h4>
            <address className="not-italic font-sans text-brand-earthen-light">
              <p>123 Heritage Lane, Culture City</p>
              <p>Email: <a href="mailto:info@virasat.com" className="hover:text-brand-red">info@virasat.com</a></p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-serif text-brand-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-earthen-light hover:text-brand-red transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-brand-earthen-light hover:text-brand-red transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-brand-earthen-light hover:text-brand-red transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-brand-earthen-light hover:text-brand-red transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-brown text-center text-brand-earthen font-sans">
          <p>&copy; {new Date().getFullYear()} VIRASAT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
