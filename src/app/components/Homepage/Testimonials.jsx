"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
  
    const handleNextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  
    useEffect(() => {
      const interval = setInterval(handleNextTestimonial, 10000)
      return () => clearInterval(interval)
    }, [])
  
    return (
      <div className="bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-xl font-semibold mb-2">Testimonials</h2>
            <h1 className="text-4xl font-bold text-gray-900">What Our Travelers Say</h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl max-h-[350px] h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                  alt="Previous testimonial"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={testimonials[(currentIndex + 1) % testimonials.length].image}
                  alt="Next testimonial"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <p className="text-gray-600 text-lg mb-6">"{testimonials[currentIndex].testimonial}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                      <p className="text-blue-600">{testimonials[currentIndex].role}</p>
                    </div>
                    <button
                      onClick={handleNextTestimonial}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={24} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    )
  }
