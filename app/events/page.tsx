"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, Users, Star, Calendar, ArrowRight, Timer, ArrowLeft } from "lucide-react"
import Link from "next/link"

const allEvents = [
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

export default function AllEventsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedDay, setSelectedDay] = useState<string>("All")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const categories = ["All", ...Array.from(new Set(allEvents.map(event => event.category)))]
  const days = ["All", "Day 1", "Day 2", "Day 3"]

  const filteredEvents = allEvents.filter(event => {
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory
    const dayMatch = selectedDay === "All" || event.day === selectedDay
    return categoryMatch && dayMatch
  })

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
      style={{ backgroundColor: '#F7F5F4' }}
    >
      {/* Header */}
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
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
        </div>

        <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/">
              <motion.button
                className="flex items-center gap-2 text-brand-earthen hover:text-brand-red transition-colors duration-300"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              <span className="text-brand-black">All Cultural </span>
              <span className="text-brand-red font-bold">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-earthen max-w-3xl mx-auto leading-relaxed">
              Discover our complete lineup of cultural heritage events across three days of authentic Indian experiences.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {/* Day Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-brand-earthen font-medium self-center mr-2">Day:</span>
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedDay === day
                      ? "bg-brand-red text-white shadow-lg transform scale-105"
                      : "bg-white text-brand-earthen hover:bg-brand-earthen-light/20 border border-brand-earthen/30"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-brand-earthen font-medium self-center mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-brand-red text-white shadow-lg transform scale-105"
                      : "bg-white text-brand-earthen hover:bg-brand-earthen-light/20 border border-brand-earthen/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Events Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-brand-earthen">
              Showing {filteredEvents.length} of {allEvents.length} events
            </p>
          </motion.div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -12 }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  whileHover={{ scale: 1.15 }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Day Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-black text-white px-2 py-1 rounded-full text-xs font-medium">
                    {event.day}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    <span className="bg-brand-red text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                    {/* Countdown Timer */}
                    <div className="bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      <div className="flex items-center gap-1">
                        <Timer className="w-3 h-3" />
                        <span>{timeLeft.days}d {timeLeft.hours}h</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-brand-black mb-2 font-serif group-hover:text-brand-red transition-colors duration-300">
                  {event.title}
                </h3>
                
                {/* Description */}
                <p className="text-brand-earthen text-sm leading-relaxed mb-3 line-clamp-2">
                  {event.description}
                </p>
                
                {/* Separator */}
                <div className="w-12 h-1 bg-brand-red rounded-full mb-3" />
                
                {/* Event Details */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-xs text-brand-earthen">
                    <Clock className="w-3 h-3 text-brand-red" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-earthen">
                    <MapPin className="w-3 h-3 text-brand-red" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-earthen">
                    <Users className="w-3 h-3 text-brand-red" />
                    <span>{event.seats}</span>
                  </div>
                </div>
                
                {/* Price and Buy Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-brand-black">{event.price}</span>
                    <span className="text-xs text-brand-earthen-light ml-1">per person</span>
                  </div>
                  
                  <motion.button
                    className="bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 group/btn text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy Now
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-brand-earthen text-lg">No events found for the selected filters.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
