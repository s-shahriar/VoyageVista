"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function About() {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const accordionItems = [
    {
      question: "What makes Voyage Vista different from other travel agencies?",
      answer:
        "Voyage Vista offers personalized travel planning, exclusive destination deals, and 24/7 customer support, ensuring every trip is as unique as you.",
    },
    {
      question: "What destinations do you specialize in?",
      answer:
        "We specialize in both domestic and international travel, offering curated experiences in destinations such as Europe, Southeast Asia, and the Americas.",
    },
    {
      question: "How can I customize my travel package?",
      answer:
        "Our travel experts work with you to tailor your trip based on your preferences for activities, accommodations, and transportation, making sure it fits your dream itinerary.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible")
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls, hasAnimated])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col md:flex-row bg-white p-8 rounded-lg container mx-auto justify-center items-center"
    >
      <motion.div
        variants={itemVariants}
        className="md:pl-8 mt-8 md:mt-0 w-full md:w-1/2"
      >
        <motion.h2
          variants={itemVariants}
          className="text-blue-500 text-lg font-semibold"
        >
          Get About Us
        </motion.h2>
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold mb-4"
        >
          More About <span className="text-blue-500">Voyage Vista</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-4"
        >
          At Voyage Vista, we are passionate about crafting unforgettable
          journeys. From exotic beach getaways to cultural excursions, we ensure
          every trip is tailored to your preferences. Discover new horizons with
          our experienced travel consultants by your side.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-6"
        >
          Our mission is to provide seamless travel experiences, offering
          customized itineraries, competitive pricing, and unparalleled service.
          Let us help you explore the world and create lifelong memories.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          {accordionItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-gray-200 py-2"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-blue-500">{item.question}</span>
                <span className="text-blue-500">
                  {activeAccordion === index ? "-" : "+"}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  maxHeight: activeAccordion === index ? "200px" : "0px",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
        >
          <Link href="/read-more" passHref>
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-2 rounded-full inline-flex items-center transition-transform hover:scale-105"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.p>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/2"
      >
        <Image
          width={500}
          height={400}
          src="/assets/images/about-image.png"
          alt="Travel collage"
          className="rounded-lg object-cover"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
    </motion.div>
  )
}