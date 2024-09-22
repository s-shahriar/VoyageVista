"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: "Tommy Murphy",
    role: "Global Directives Architect",
    testimonial: "Traveling with Voyage Vista was a life-changing experience! The guides were knowledgeable and passionate, making every moment memorable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
  {
    name: "Jessica Smith",
    role: "Travel Enthusiast",
    testimonial: "I loved the personalized attention from the team. They made sure every detail was perfect, from accommodations to activities!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
  },
  {
    name: "Michael Johnson",
    role: "Adventure Seeker",
    testimonial: "The adventure trips offered by Voyage Vista are unmatched! From breathtaking hikes to thrilling excursions, every trip is an adventure.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
  },
  {
    name: "Emily Davis",
    role: "Tour Planner",
    testimonial: "Voyage Vista truly understands the needs of travelers. Their itineraries are well thought out, ensuring you experience the best of each destination.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
  },
  {
    name: "David Brown",
    role: "Travel Blogger",
    testimonial: "I highly recommend Voyage Vista! Their attention to detail and customer service are exceptional, making travel stress-free and enjoyable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000) // Slowed down to 8 seconds
    return () => clearInterval(interval)
  }, [])

  const getTestimonialIndex = (offset) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 container mx-auto my-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 text-xl font-semibold mb-2">Testimonials</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the experiences of our satisfied travelers who have explored the world with Voyage Vista. 
            Their stories inspire us to continue providing exceptional journeys and unforgettable memories.
          </p>
        </div>
        <div className="relative overflow-hidden pb-6">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div 
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex justify-between items-center"
            >
              <TestimonialCard
                testimonial={testimonials[getTestimonialIndex(-1)]}
                className="w-1/4 opacity-50 scale-75 transform -translate-x-1/4"
              />
              <TestimonialCard
                testimonial={testimonials[currentIndex]}
                className="w-1/2 z-10 shadow-2xl"
                isMain={true}
              />
              <TestimonialCard
                testimonial={testimonials[getTestimonialIndex(1)]}
                className="w-1/4 opacity-50 scale-75 transform translate-x-1/4"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial, className, isMain = false }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden ${className}`}>
      <div className="p-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        {isMain && (
          <>
            <p className="text-gray-600 text-center mb-4 line-clamp-3">&quot;{testimonial.testimonial}&quot;</p>
            <h3 className="text-xl font-semibold text-center text-gray-900">{testimonial.name}</h3>
            <p className="text-blue-600 text-center">{testimonial.role}</p>
          </>
        )}
      </div>
    </div>
  )
}
