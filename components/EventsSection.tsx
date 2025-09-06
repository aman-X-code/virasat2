"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, Users, Star, Calendar, ArrowRight, Timer } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    day: "Day 1",
    title: "Classical Dance Performances",
    description: "Experience the grace and beauty of traditional Indian classical dance forms including Bharatanatyam, Kathak, and Odissi performed by renowned artists.",
    image: "/images/artists/birju_maharaj.png",
    time: "6:00 PM - 9:00 PM",
    location: "Main Auditorium",
    seats: "250 seats available",
    price: "₹1500",
    featured: true,
    category: "Performance"
  },
  {
    id: 2,
    day: "Day 1",
    title: "Traditional Music Concert",
    description: "Immerse yourself in the melodious world of Indian classical music featuring sitar, tabla, and vocal performances by master musicians.",
    image: "/images/artists/zakir_hussain.jpg",
    time: "7:30 PM - 10:00 PM",
    location: "Heritage Hall",
    seats: "180 seats available",
    price: "₹1200",
    featured: false,
    category: "Music"
  },
  {
    id: 3,
    day: "Day 2",
    title: "Art & Craft Workshop",
    description: "Learn traditional Indian art forms including pottery, rangoli, and folk painting in this hands-on interactive workshop for all ages.",
    image: "/images/artists/ring.png",
    time: "10:00 AM - 4:00 PM",
    location: "Workshop Center",
    seats: "50 seats available",
    price: "₹800",
    featured: false,
    category: "Workshop"
  },
  {
    id: 4,
    day: "Day 2",
    title: "Cultural Heritage Exhibition",
    description: "Explore a curated collection of traditional artifacts, textiles, and artworks that showcase the rich diversity of Indian cultural heritage.",
    image: "/images/artists/lata_mangeshkar.jpg",
    time: "11:00 AM - 6:00 PM",
    location: "Exhibition Hall",
    seats: "300 seats available",
    price: "₹500",
    featured: false,
    category: "Exhibition"
  },
  {
    id: 5,
    day: "Day 3",
    title: "Folk Dance & Music Festival",
    description: "Celebrate the vibrant traditions of Indian folk culture with performances from different states, featuring colorful costumes and energetic dances.",
    image: "/images/artists/shubha_mudgal.jpg",
    time: "5:00 PM - 8:00 PM",
    location: "Open Air Theater",
    seats: "400 seats available",
    price: "₹1000",
    featured: true,
    category: "Festival"
  },
  {
    id: 6,
    day: "Day 3",
    title: "Traditional Cuisine Workshop",
    description: "Learn to prepare authentic regional dishes from master chefs and discover the stories behind traditional Indian culinary heritage.",
    image: "/images/artists/naseeruddin_shah.jpg",
    time: "2:00 PM - 5:00 PM",
    location: "Culinary Studio",
    seats: "30 seats available",
    price: "₹2000",
    featured: false,
    category: "Culinary"
  },
  {
    id: 7,
    day: "Day 1",
    title: "Sanskrit Literature Symposium",
    description: "Dive deep into ancient Sanskrit texts and classical literature with renowned scholars and academicians discussing timeless wisdom.",
    image: "/images/artists/birju_maharaj.png",
    time: "2:00 PM - 5:00 PM",
    location: "Academic Hall",
    seats: "120 seats available",
    price: "₹600",
    featured: false,
    category: "Literature"
  },
  {
    id: 8,
    day: "Day 2",
    title: "Traditional Textile Weaving",
    description: "Witness the intricate art of traditional Indian textile weaving and learn about different regional weaving techniques and patterns.",
    image: "/images/artists/lata_mangeshkar.jpg",
    time: "9:00 AM - 12:00 PM",
    location: "Textile Studio",
    seats: "40 seats available",
    price: "₹900",
    featured: false,
    category: "Workshop"
  },
  {
    id: 9,
    day: "Day 2",
    title: "Classical Instrumental Ensemble",
    description: "Experience the harmony of traditional Indian instruments including veena, flute, and mridangam in a mesmerizing ensemble performance.",
    image: "/images/artists/zakir_hussain.jpg",
    time: "6:30 PM - 8:30 PM",
    location: "Music Pavilion",
    seats: "200 seats available",
    price: "₹1100",
    featured: false,
    category: "Music"
  },
  {
    id: 10,
    day: "Day 3",
    title: "Heritage Architecture Tour",
    description: "Explore the architectural marvels of traditional Indian heritage sites with expert guides explaining historical significance and design principles.",
    image: "/images/artists/ring.png",
    time: "10:00 AM - 1:00 PM",
    location: "Heritage Sites",
    seats: "60 seats available",
    price: "₹700",
    featured: false,
    category: "Tour"
  },
  {
    id: 11,
    day: "Day 1",
    title: "Ayurveda & Wellness Session",
    description: "Discover the ancient science of Ayurveda and traditional wellness practices with certified practitioners and herbal medicine experts.",
    image: "/images/artists/shubha_mudgal.jpg",
    time: "11:00 AM - 2:00 PM",
    location: "Wellness Center",
    seats: "80 seats available",
    price: "₹1300",
    featured: false,
    category: "Wellness"
  },
  {
    id: 12,
    day: "Day 3",
    title: "Classical Poetry Recitation",
    description: "Listen to beautiful recitations of classical Indian poetry in Sanskrit, Hindi, and regional languages by renowned poets and scholars.",
    image: "/images/artists/naseeruddin_shah.jpg",
    time: "3:00 PM - 5:00 PM",
    location: "Poetry Corner",
    seats: "100 seats available",
    price: "₹500",
    featured: false,
    category: "Literature"
  }
]

export const EventsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))]

  // Show only first 6 events on main page
  const displayedEvents = events.slice(0, 6)
  
  const filteredEvents = selectedCategory === "All" 
    ? displayedEvents 
    : displayedEvents.filter(event => event.category === selectedCategory)

  // Countdown timer for featured events
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const eventDate = new Date()
      eventDate.setDate(eventDate.getDate() + 3) // 3 days from now
      const distance = eventDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F7F5F4' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Earthen floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-brand-earthen/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-brand-brown/15 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-brand-earthen-light/25 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-brand-earthen/10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
        
        {/* Subtle geometric patterns */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-brown/30 rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-brand-earthen/40 rounded-full"
          animate={{ 
            scale: [1, 3, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 120, 109, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 120, 109, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-serif mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-brand-black">Cultural Heritage </span>
            <span className="text-brand-brown font-bold">Festival</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-brand-earthen max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Book your preferred events and immerse yourself in three days of authentic Indian cultural experiences.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-brand-red text-white shadow-lg transform scale-105"
                  : "bg-white text-brand-earthen hover:bg-brand-earthen-light/20 border border-brand-earthen/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
               onMouseEnter={() => setHoveredCard(event.id)}
               onMouseLeave={() => setHoveredCard(null)}
               whileHover={{ y: -12 }}
            >
              {/* Event Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                 <motion.img
                   src={event.image}
                   alt={event.title}
                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                   whileHover={{ scale: 1.15 }}
                 />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Day Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.day}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                    {/* Countdown Timer */}
                    <div className="bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      <div className="flex items-center gap-1">
                        <Timer className="w-3 h-3" />
                        <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-4 sm:p-6">
                 {/* Title */}
                 <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-3 font-serif group-hover:text-brand-red transition-colors duration-300">
                   {event.title}
                 </h3>
                
                {/* Description */}
                <p className="text-brand-earthen text-sm leading-relaxed mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                {/* Separator */}
                <div className="w-16 h-1 bg-brand-red rounded-full mb-4" />
                
                 {/* Event Details */}
                 <div className="space-y-2 mb-6">
                   <div className="flex items-center gap-2 text-sm text-brand-earthen group-hover:text-brand-red transition-colors duration-300">
                     <Clock className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform duration-300" />
                     <span>{event.time}</span>
                   </div>
                   <div className="flex items-center gap-2 text-sm text-brand-earthen group-hover:text-brand-red transition-colors duration-300">
                     <MapPin className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform duration-300" />
                     <span>{event.location}</span>
                   </div>
                   <div className="flex items-center gap-2 text-sm text-brand-earthen group-hover:text-brand-red transition-colors duration-300">
                     <Users className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform duration-300" />
                     <span>{event.seats}</span>
                   </div>
                 </div>
                
                {/* Price and Buy Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="text-xl sm:text-2xl font-bold text-brand-black">{event.price}</span>
                    <span className="text-xs sm:text-sm text-brand-earthen-light ml-1">per person</span>
                  </div>
                  
                  <motion.button
                    className="bg-brand-red hover:bg-brand-red-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link href="/events">
            <motion.button
              className="bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-brand-red-dark hover:to-brand-brown text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Events
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default EventsSection
