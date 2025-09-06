"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import FlowingSilkBackground from "./FlowingSilkBackground"

gsap.registerPlugin(ScrollTrigger)

const artists = [
  {
    name: "Lata Mangeshkar",
    title: "The Nightingale of India",
    description:
      "Legendary playback singer who recorded songs in over 36 Indian languages and is considered one of the greatest voices in the history of Indian music.",
    image: "/images/artists/lata_mangeshkar.jpg",
    specialty: "Classical & Playback Singing",
    years: "1942-2022",
  },
  {
    name: "Naseeruddin Shah",
    title: "Master of Theatre & Cinema",
    description:
      "Acclaimed actor known for his versatility in parallel cinema and theatre, bringing depth and authenticity to every role he portrays.",
    image: "/images/artists/naseeruddin_shah.jpg",
    specialty: "Acting & Theatre",
    years: "1975-Present",
  },
  {
    name: "Zakir Hussain",
    title: "Tabla Virtuoso",
    description:
      "World-renowned tabla player who has elevated Indian percussion to global recognition through his innovative collaborations and masterful performances.",
    image: "/images/artists/zakir_hussain.jpg",
    specialty: "Tabla & Percussion",
    years: "1970-Present",
  },
  {
    name: "Shubha Mudgal",
    title: "Voice of Tradition & Innovation",
    description:
      "Versatile vocalist who seamlessly blends classical Indian music with contemporary styles, creating a unique musical language.",
    image: "/images/artists/shubha_mudgal.jpg",
    specialty: "Classical & Fusion Vocals",
    years: "1980-Present",
  },
  {
    name: "Birju Maharaj",
    title: "Kathak Legend",
    description:
      "Master of Kathak dance who preserved and elevated this classical art form through his graceful performances and dedicated teaching.",
    image: "/images/artists/birju_maharaj.png",
    specialty: "Kathak Dance",
    years: "1952-2022",
  },
]

const ParallaxArtistSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const artistRefs = useRef<(HTMLDivElement | null)[]>([])

  const [currentArtist, setCurrentArtist] = useState(0)
  const [isManualMode, setIsManualMode] = useState(false)
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState<ScrollTrigger | null>(null)

  const navigateToArtist = (index: number) => {
    if (index < 0 || index >= artists.length) return

    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    setCurrentArtist(index)

    // Animate to the target artist
    gsap.to(scrollContainer, {
      x: -index * window.innerWidth,
      duration: 0.8,
      ease: "power2.inOut",
    })
  }

  const goToNextArtist = () => {
    if (currentArtist < artists.length - 1) {
      navigateToArtist(currentArtist + 1)
    }
  }

  const goToPrevArtist = () => {
    if (currentArtist > 0) {
      navigateToArtist(currentArtist - 1)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current
    const artistElements = artistRefs.current.filter(Boolean) as HTMLDivElement[]

    if (!container || !scrollContainer || artistElements.length === 0) return

    // Set up the horizontal scroll
    const totalWidth = artistElements.length * window.innerWidth
    const scrollWidth = 3 * window.innerWidth

    // Set the width of the scroll container
    gsap.set(scrollContainer, { width: totalWidth })

    const horizontalTween = gsap.to(scrollContainer, {
      x: () => -(scrollWidth - window.innerWidth),
      ease: "none",
    })

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${scrollWidth}`, // Only scroll through first 3 artists
      pin: true,
      scrub: 1,
      animation: horizontalTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const newCurrentArtist = Math.min(Math.floor(progress * 3), 2)
        setCurrentArtist(newCurrentArtist)

        if (progress >= 0.95 && !isManualMode) {
          setIsManualMode(true)
        } else if (progress < 0.95 && isManualMode) {
          setIsManualMode(false)
        }
      },
      onEnter: () => {
        window.dispatchEvent(new CustomEvent("hideHeader"))
      },
      onLeave: () => {
        if (!isManualMode || currentArtist <= 2) {
          window.dispatchEvent(new CustomEvent("showHeader"))
        }
      },
      onEnterBack: () => {
        window.dispatchEvent(new CustomEvent("hideHeader"))
      },
      onLeaveBack: () => {
        window.dispatchEvent(new CustomEvent("showHeader"))
      },
    })

    setScrollTriggerInstance(scrollTrigger)

    // Create parallax effects for each artist
    artistElements.forEach((artist, index) => {
      const image = artist.querySelector(".artist-image")
      const content = artist.querySelector(".artist-content")
      const title = artist.querySelector(".artist-title")
      const subtitle = artist.querySelector(".artist-subtitle")
      const description = artist.querySelector(".artist-description")
      const specialty = artist.querySelector(".artist-specialty")

      if (!image || !content) return

      // Set initial states - make first artist visible immediately
      if (index === 0) {
        gsap.set([title, subtitle, description, specialty], {
          y: 0,
          opacity: 1,
        })
        if (image instanceof HTMLElement) {
          image.style.opacity = "1"
          image.style.visibility = "visible"
          image.style.transform = "scale(1)"
        }
      } else {
        gsap.set([title, subtitle, description, specialty], {
          y: 100,
          opacity: 0,
        })
        gsap.set(image, {
          scale: 1.2,
          opacity: 0,
        })
      }

      if (index > 0 && index <= 2) {
        const revealTl = gsap.timeline({
          scrollTrigger: {
            trigger: artist,
            start: "left 80%",
            end: "left 20%",
            horizontal: true,
            containerAnimation: horizontalTween,
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        })

        revealTl
          .to(image, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to(
            title,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6",
          )
          .to(
            subtitle,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6",
          )
          .to(
            description,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.4",
          )
          .to(
            specialty,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6",
          )
      }

      // Add floating animation for the image (skip for first artist to avoid conflicts)
      if (index > 0) {
        gsap.to(image, {
          y: -20,
          duration: 3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.5,
        })
      }
    })

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      scrollTrigger.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (currentArtist > 2) {
      const artist = artistRefs.current[currentArtist]
      if (!artist) return

      const image = artist.querySelector(".artist-image")
      const content = artist.querySelector(".artist-content")
      const title = artist.querySelector(".artist-title")
      const subtitle = artist.querySelector(".artist-subtitle")
      const description = artist.querySelector(".artist-description")
      const specialty = artist.querySelector(".artist-specialty")

      if (!image || !content) return

      // Animate in the current artist
      const revealTl = gsap.timeline()

      revealTl
        .to(image, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(
          [title, subtitle, description, specialty],
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.3",
        )
    }
  }, [currentArtist])

  return (
    <section ref={containerRef} className="relative overflow-hidden will-change-transform" style={{ height: "100vh" }}>
      <FlowingSilkBackground />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 will-change-transform">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/images/background-pattern.svg")',
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Floating Indian Lanterns (Diyas/Kandils) - Repositioned for mobile */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Large Kandil - Top Left - Hidden on small screens to avoid collision */}
        <div className="hidden sm:block absolute top-16 left-16 w-16 h-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0s' }}>
          <div className="relative w-full h-full">
            {/* Kandil Body - Bulbous shape */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-orange-400 via-yellow-500 to-orange-600 rounded-full opacity-90 shadow-lg"></div>
            {/* Kandil Top - Narrow neck */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-brand-brown to-brand-earthen rounded-t-full shadow-md"></div>
            {/* Hanging Chain */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-yellow-600 to-yellow-800 shadow-sm"></div>
            {/* Inner Flame */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-yellow-300 to-orange-200 rounded-full opacity-95 animate-pulse shadow-md"></div>
            {/* Decorative Pattern */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-70"></div>
          </div>
        </div>

        {/* Medium Diya - Top Right - Repositioned for mobile */}
        <div className="absolute top-20 sm:top-32 right-4 sm:right-24 w-8 sm:w-12 h-6 sm:h-8 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
          <div className="relative w-full h-full">
            {/* Diya Bowl */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-b from-yellow-600 to-orange-700 rounded-full opacity-85 shadow-lg"></div>
            {/* Diya Spout */}
            <div className="absolute bottom-1 right-0 w-3 h-2 bg-gradient-to-r from-orange-700 to-red-600 rounded-r-full shadow-md"></div>
            {/* Flame */}
            <div className="absolute -top-1 right-1 w-1.5 h-3 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full animate-pulse shadow-md"></div>
            {/* Oil Glow */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Small Kandil - Middle Left - Repositioned for mobile */}
        <div className="absolute top-1/2 left-2 sm:left-8 w-6 sm:w-10 h-8 sm:h-14 animate-bounce" style={{ animationDuration: '3s', animationDelay: '2s' }}>
          <div className="relative w-full h-full">
            {/* Kandil Body */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-orange-300 via-yellow-400 to-orange-500 rounded-full opacity-80 shadow-lg"></div>
            {/* Kandil Top */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-b from-brand-brown to-brand-earthen rounded-t-full shadow-md"></div>
            {/* Chain */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-yellow-700 shadow-sm"></div>
            {/* Flame */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-1.5 h-3 bg-gradient-to-t from-yellow-300 to-orange-200 rounded-full animate-pulse shadow-md"></div>
          </div>
        </div>

        {/* Medium Diya - Bottom Right */}
        <div className="absolute bottom-24 right-16 w-14 h-9 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
          <div className="relative w-full h-full">
            {/* Diya Bowl */}
            <div className="absolute bottom-0 left-0 w-full h-7 bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full opacity-90 shadow-lg"></div>
            {/* Diya Spout */}
            <div className="absolute bottom-1 right-0 w-4 h-3 bg-gradient-to-r from-orange-600 to-red-500 rounded-r-full shadow-md"></div>
            {/* Flame */}
            <div className="absolute -top-2 right-1 w-2 h-4 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full animate-pulse shadow-md"></div>
            {/* Decorative Dots */}
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-red-400 rounded-full opacity-80 shadow-sm"></div>
            <div className="absolute bottom-3 left-4 w-1 h-1 bg-red-400 rounded-full opacity-80 shadow-sm"></div>
            <div className="absolute bottom-2 left-6 w-1 h-1 bg-red-400 rounded-full opacity-80 shadow-sm"></div>
          </div>
        </div>

        {/* Small Diya - Bottom Left */}
        <div className="absolute bottom-32 left-32 w-8 h-6 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '1.5s' }}>
          <div className="relative w-full h-full">
            {/* Diya Bowl */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full opacity-75 shadow-lg"></div>
            {/* Diya Spout */}
            <div className="absolute bottom-0.5 right-0 w-2 h-1.5 bg-gradient-to-r from-orange-500 to-red-400 rounded-r-full shadow-md"></div>
            {/* Flame */}
            <div className="absolute -top-1 right-0.5 w-1 h-2.5 bg-gradient-to-t from-orange-300 to-yellow-200 rounded-full animate-pulse shadow-md"></div>
          </div>
        </div>

        {/* Tiny Kandil - Center Right */}
        <div className="absolute top-2/3 right-32 w-8 h-10 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '2.5s' }}>
          <div className="relative w-full h-full">
            {/* Kandil Body */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-orange-300 via-yellow-400 to-orange-500 rounded-full opacity-70 shadow-lg"></div>
            {/* Kandil Top */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-b from-brand-brown to-brand-earthen rounded-t-full shadow-md"></div>
            {/* Chain */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-yellow-700 shadow-sm"></div>
            {/* Flame */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gradient-to-t from-yellow-300 to-orange-200 rounded-full animate-pulse shadow-md"></div>
          </div>
        </div>

        {/* Additional Small Diya - Top Center */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-10 h-7 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '3s' }}>
          <div className="relative w-full h-full">
            {/* Diya Bowl */}
            <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full opacity-80 shadow-lg"></div>
            {/* Diya Spout */}
            <div className="absolute bottom-1 right-0 w-3 h-2 bg-gradient-to-r from-orange-600 to-red-500 rounded-r-full shadow-md"></div>
            {/* Flame */}
            <div className="absolute -top-1 right-1 w-1.5 h-3 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full animate-pulse shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Section Title - Fixed with better mobile positioning */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-auto z-20 bg-black/40 backdrop-blur-sm rounded-lg p-3 md:p-4 md:bg-transparent md:backdrop-blur-none">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif text-brand-white mb-1 md:mb-2 leading-tight">
          Our Esteemed Artists
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-earthen-light max-w-xs sm:max-w-sm md:max-w-md">
          Masters who have shaped the cultural landscape through their extraordinary talent and dedication.
        </p>
      </div>

      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-10 text-brand-white opacity-70">
        <div className="flex items-center space-x-2">
          <span className="text-xs md:text-sm">
            {currentArtist < 3 ? "Scroll to explore" : "Use arrows to navigate"}
          </span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-brand-earthen rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-brand-earthen rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-brand-earthen rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>

      {currentArtist >= 2 && (
        <>
          {/* Left Arrow - only show from 4th card onwards */}
          {currentArtist > 2 && (
            <button
              onClick={goToPrevArtist}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-brand-brown/80 hover:bg-brand-brown text-brand-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-earthen/30"
              aria-label="Previous artist"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Right Arrow - show on 3rd card and beyond (except last card) */}
          {currentArtist < artists.length - 1 && (
            <button
              onClick={goToNextArtist}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-brand-brown/80 hover:bg-brand-brown text-brand-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-earthen/30"
              aria-label="Next artist"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </>
      )}

      {/* Horizontal Scroll Container */}
      <div ref={scrollContainerRef} className="flex h-full will-change-transform" style={{ width: "fit-content" }}>
        {artists.map((artist, index) => (
          <div
            key={artist.name}
            ref={(el) => (artistRefs.current[index] = el)}
            className="flex-shrink-0 flex items-center justify-center relative will-change-transform"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div className="container mx-auto px-4 md:px-8 h-full max-w-7xl">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
                {/* Artist Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div
                    className={`artist-image relative will-change-transform ${
                      index === 0 ? "opacity-100 visible" : ""
                    }`}
                    style={index === 0 ? { opacity: 1, visibility: "visible" } : {}}
                  >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                      {/* Artist Photo */}
                      <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                        {index === 0 ? (
                          // Use regular img for first artist to avoid Next.js Image issues
                          <img
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            className="w-full h-full object-cover"
                            onLoad={() => console.log(`Image loaded: ${artist.name}`)}
                            onError={(e) => console.error(`Image failed to load: ${artist.name}`, e)}
                          />
                        ) : (
                          <Image
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                            priority={index === 0}
                            unoptimized={index === 0}
                            onLoad={() => console.log(`Image loaded: ${artist.name}`)}
                            onError={(e) => console.error(`Image failed to load: ${artist.name}`, e)}
                          />
                        )}
                      </div>
                      {/* Ring Frame Overlay */}
                      <div
                        className="absolute pointer-events-none"
                        style={{
                          top: "-16%",
                          left: "-16%",
                          width: "132%",
                          height: "132%",
                          backgroundImage: 'url("/images/artists/ring.png")',
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-brand-red rounded-full opacity-60"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 md:w-12 md:h-12 border-2 border-brand-earthen rounded-full"></div>
                  </div>
                </div>

                {/* Artist Content */}
                <div className="w-full md:w-1/2 md:pl-8 lg:pl-12 artist-content text-center md:text-left">
                  <div className="max-w-xs sm:max-w-sm md:max-w-lg mx-auto md:mx-0 px-2 md:px-0 relative">
                    {/* Text Background Overlay - Updated to earthen theme */}
                    <div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(90, 62, 54, 0.7) 50%, rgba(26, 26, 26, 0.85) 100%)",
                        backdropFilter: "blur(3px)",
                      }}
                    ></div>
                    <div className="relative z-10 p-4 md:p-6">
                      <h3 className="artist-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-2 leading-tight">
                        {artist.name}
                      </h3>
                      <h4 className="artist-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-brand-earthen font-semibold mb-3 md:mb-4">
                        {artist.title}
                      </h4>
                      <p className="artist-description text-xs sm:text-sm md:text-base lg:text-lg text-brand-earthen-light leading-relaxed mb-4 md:mb-6">
                        {artist.description}
                      </p>
                      <div className="artist-specialty space-y-1 md:space-y-2 text-xs sm:text-sm md:text-base">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4">
                          <span className="text-brand-white font-semibold">Specialty:</span>
                          <span className="text-brand-earthen-light">{artist.specialty}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4">
                          <span className="text-brand-white font-semibold">Active:</span>
                          <span className="text-brand-earthen-light">{artist.years}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {artists.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentArtist ? "bg-brand-earthen scale-125" : "bg-brand-earthen-light opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ParallaxArtistSection
