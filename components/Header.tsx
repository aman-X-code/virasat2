"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Get Tickets", href: "/events" },
  { name: "About Reach", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "News/Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Listen for custom events to hide/show header
    let hideTimeout: NodeJS.Timeout
    let showTimeout: NodeJS.Timeout

    const handleHideHeader = () => {
      clearTimeout(showTimeout)
      hideTimeout = setTimeout(() => setIsHeaderVisible(false), 100)
    }

    const handleShowHeader = () => {
      clearTimeout(hideTimeout)
      showTimeout = setTimeout(() => setIsHeaderVisible(true), 100)
    }

    window.addEventListener("hideHeader", handleHideHeader)
    window.addEventListener("showHeader", handleShowHeader)

    return () => {
      clearTimeout(hideTimeout)
      clearTimeout(showTimeout)
      window.removeEventListener("hideHeader", handleHideHeader)
      window.removeEventListener("showHeader", handleShowHeader)
    }
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-brand-black bg-opacity-80 backdrop-blur-lg shadow-lg"
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <Image src="/images/reach.png" alt="REACH Logo" width={80} height={50} className="h-12 w-auto" />
          <Image src="/images/vir.png" alt="VIR Logo" width={80} height={50} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const isGetTickets = item.name === "Get Tickets"
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 font-sans ${
                  isActive && isGetTickets ? "text-yellow-400 font-semibold" : isActive ? "text-brand-red font-semibold" : isGetTickets ? "text-brand-white hover:text-yellow-400" : "text-brand-white hover:text-brand-red"
                } ${isGetTickets && !isActive ? "shine" : ""}`}
              >
                {item.name}
              </Link>
            )
          })}
          <Link href="/donate" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-donate"
            >
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
      <motion.nav
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="md:hidden overflow-hidden bg-brand-black bg-opacity-95"
      >
        <motion.div
          initial={false}
          animate={{
            y: isMenuOpen ? 0 : -20,
          }}
          transition={{
            duration: 0.3,
            delay: isMenuOpen ? 0.1 : 0,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="px-6 pb-6"
        >
          <ul className="flex flex-col space-y-0">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              const isGetTickets = item.name === "Get Tickets"
              return (
                <motion.li
                  key={item.name}
                  initial={false}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: isMenuOpen ? 0.15 + index * 0.05 : 0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 text-lg font-sans transition-colors duration-300 text-center ${
                      isActive && isGetTickets ? "text-yellow-400 font-semibold" : isActive ? "text-brand-red font-semibold" : isGetTickets ? "text-brand-white hover:text-yellow-400" : "text-brand-white hover:text-brand-red"
                    } ${isGetTickets && !isActive ? "shine" : ""}`}
                  >
                    {item.name}
                  </Link>
                  {/* Faded line separator */}
                  {index < navItems.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent"></div>
                  )}
                </motion.li>
              )
            })}
            {/* Separator before donate button */}
            <motion.div
              initial={false}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
                delay: isMenuOpen ? 0.15 + navItems.length * 0.05 : 0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-3/4 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent mx-auto my-4"
            ></motion.div>
            <motion.li
              initial={false}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{
                duration: 0.2,
                delay: isMenuOpen ? 0.15 + navItems.length * 0.05 + 0.05 : 0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex justify-center"
            >
              <Link href="/donate" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-donate mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                </motion.button>
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
    </motion.header>
  )
}

export default Header
