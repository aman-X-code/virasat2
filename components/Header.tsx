'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Reach', href: '/about' },
  { name: 'Team of Reach', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News/Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Listen for custom events to hide/show header
    const handleHideHeader = () => setIsHeaderVisible(false);
    const handleShowHeader = () => setIsHeaderVisible(true);

    window.addEventListener('hideHeader', handleHideHeader);
    window.addEventListener('showHeader', handleShowHeader);

    return () => {
      window.removeEventListener('hideHeader', handleHideHeader);
      window.removeEventListener('showHeader', handleShowHeader);
    };
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-brand-black bg-opacity-80 backdrop-blur-lg shadow-lg"
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/images/reach.png"
            alt="REACH Logo"
            width={80}
            height={50}
            className="h-12 w-auto"
          />
          <Image
            src="/images/vir.png"
            alt="VIR Logo"
            width={80}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 font-sans ${
                  isActive 
                    ? 'text-brand-red font-semibold' 
                    : 'text-brand-white hover:text-brand-red'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/travel" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-sans font-semibold transition-colors duration-300 ${
                pathname === '/travel'
                  ? 'bg-brand-red-dark text-brand-white'
                  : 'bg-brand-red text-brand-white hover:bg-brand-red-dark'
              }`}
            >
              Travel
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-black bg-opacity-95 px-6 pb-6"
        >
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-lg font-sans transition-colors duration-300 ${
                      isActive 
                        ? 'text-brand-red font-semibold' 
                        : 'text-brand-white hover:text-brand-red'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/travel" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-4 px-6 py-3 rounded-full font-sans font-semibold transition-colors duration-300 ${
                    pathname === '/travel'
                      ? 'bg-brand-red-dark text-brand-white'
                      : 'bg-brand-red text-brand-white hover:bg-brand-red-dark'
                  }`}
                >
                  Travel
                </motion.button>
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
