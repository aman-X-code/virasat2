"use client"


import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    day: "Day 1",
    title: "Traditional Art Exhibition",
    description:
      "Discover the most innovative and creative traditional art projects that have emerged in the past month. From classical paintings to contemporary interpretations of heritage.",
    image: "/placeholder-z1q5h.png",
    background: "bg-gradient-to-br from-red-600 via-orange-500 to-red-800",
  },
  {
    id: 2,
    day: "Day 2",
    title: "Cultural Heritage Sites",
    description:
      "Journey through the most surreal and breathtaking cultural locations that showcase our rich heritage and seem like they belong to another era entirely.",
    image: "/placeholder-wyxfp.png",
    background: "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600",
  },
  {
    id: 3,
    day: "Day 3",
    title: "Classical Music & Sound",
    description:
      "Experience the intersection of classical music and visual art through innovative sound wave visualization techniques and immersive cultural installations.",
    image: "/placeholder-zsd1s.png",
    background: "bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-600",
  },
  {
    id: 4,
    day: "Day 4",
    title: "Digital Heritage Renaissance",
    description:
      "Explore the new wave of digital artists who are redefining creativity through technology while preserving and celebrating our cultural heritage.",
    image: "/placeholder-yx5dw.png",
    background: "bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800",
  },
  {
    id: 5,
    day: "Day 5",
    title: "Interactive Cultural Media",
    description:
      "Dive into the cutting-edge world of interactive media and discover how technology is reshaping storytelling and cultural experiences.",
    image: "/placeholder-0z08h.png",
    background: "bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600",
  },
  {
    id: 6,
    day: "Day 6",
    title: "Emotional Heritage Art",
    description:
      "Explore emotional abstract art that captures the essence of cultural feelings through color, form, and traditional artistic techniques.",
    image: "/placeholder-abc123.png",
    background: "bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-600",
  },
  {
    id: 7,
    day: "Day 7",
    title: "Weekly Cultural Update",
    description:
      "Stay updated with the latest developments in cultural preservation and discover how modern technology is transforming heritage expression.",
    image: "/placeholder-def456.png",
    background: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600",
  },
  {
    id: 8,
    day: "Day 8",
    title: "Experimental Heritage Photos",
    description:
      "Witness groundbreaking experimental photography that challenges conventional perspectives and explores new visual narratives of our culture.",
    image: "/placeholder-ghi789.png",
    background: "bg-gradient-to-br from-rose-500 via-pink-500 to-red-600",
  },
  {
    id: 9,
    day: "Day 9",
    title: "Immersive Cultural Experiences",
    description:
      "Step into virtual worlds that blur the line between reality and imagination through cutting-edge VR and AR technologies showcasing heritage.",
    image: "/placeholder-jkl012.png",
    background: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600",
  },
  {
    id: 10,
    day: "Day 10",
    title: "Sonic Cultural Landscapes",
    description:
      "Experience the fusion of traditional sound and space through innovative audio installations and immersive sonic environments of our heritage.",
    image: "/placeholder-mno345.png",
    background: "bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-600",
  },
]

export const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % events.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const getCardPosition = (index: number) => {
    const totalCards = events.length
    const angle = (360 / totalCards) * index
    const currentAngle = (360 / totalCards) * currentIndex
    const relativeAngle = angle - currentAngle

    // Normalize angle to -180 to 180
    let normalizedAngle = relativeAngle
    if (normalizedAngle > 180) normalizedAngle -= 360
    if (normalizedAngle < -180) normalizedAngle += 360

    const radius = 450
    const x = Math.sin((normalizedAngle * Math.PI) / 180) * radius
    const z = Math.cos((normalizedAngle * Math.PI) / 180) * radius - radius
    const rotateY = -normalizedAngle

    // Calculate scale and opacity based on z position
    const scale = Math.max(0.6, 1 - Math.abs(z) / 600)
    const opacity = Math.max(0.3, 1 - Math.abs(normalizedAngle) / 120)

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(z + 100),
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 bg-brand-black text-brand-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-brand-white mb-4">Events</h2>
          <p className="text-lg text-brand-earthen-light max-w-2xl mx-auto">
            Experience our cultural journey through immersive events that celebrate heritage, art, and tradition.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-brand-white/10 hover:bg-brand-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-brand-earthen/20"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6 text-brand-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-brand-white/10 hover:bg-brand-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-brand-earthen/20"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6 text-brand-white" />
          </button>

          {/* Cards Container */}
          <div
            className="relative h-96 flex items-center justify-center"
            style={{
              perspective: "1000px",
              perspectiveOrigin: "center center",
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center preserve-3d">
              {events.map((event, index) => {
                const position = getCardPosition(index)
                const isCenterCard = Math.abs(position.zIndex - 100) < 10

                return (
                  <motion.div
                    key={event.id}
                    className={`absolute w-64 h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-600 ease-out ${
                      isCenterCard ? "shadow-2xl" : "shadow-lg"
                    }`}
                    style={position}
                    onMouseEnter={() => setHoveredCard(event.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ scale: isCenterCard ? 1.05 : 1 }}
                  >
                    {/* Background */}
                    <div className={`absolute inset-0 ${event.background}`} />

                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />

                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      {/* Day Badge */}
                      <div className="self-start">
                        <span className="bg-brand-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-brand-white border border-brand-earthen/20">
                          {event.day}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-balance text-brand-white font-serif">
                          {event.title}
                        </h3>
                      </div>

                      {/* Hover Content */}
                      <div
                        className={`absolute inset-0 bg-brand-black/80 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ${
                          hoveredCard === event.id && isCenterCard ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <h3 className="text-xl font-bold mb-4 text-balance text-brand-white font-serif">
                          {event.title}
                        </h3>
                        <p className="text-sm text-brand-earthen-light mb-6 leading-relaxed font-sans">
                          {event.description}
                        </p>
                        <button className="px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 text-brand-white bg-brand-red hover:bg-brand-red/90 border border-brand-earthen/20">
                          Buy Ticket
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-brand-white w-8" : "bg-brand-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default EventsSection
