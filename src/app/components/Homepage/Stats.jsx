"use client"

import { motion, useAnimation } from 'framer-motion'
import { Bed, Building2, Palmtree, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { icon: Building2, value: 1000, label: 'Hotel' },
  { icon: Bed, value: 4500, label: 'Rooms Available' },
  { icon: Palmtree, value: 30, label: 'Beaches View' },
  { icon: Users, value: 8000, label: 'Guests' },
]

const Counter = ({ value, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const interval = duration / steps

    let currentCount = 0
    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount > value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [value, inView])

  return <span>{count}</span>
}

export default function Component() {
  const controls = useAnimation()
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) {
          controls.start("visible")
        } else {
          controls.start("hidden")
        }
      },
      {
        threshold: 0.1
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="container mx-auto bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="mx-auto py-24" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center px-8 py-4 bg-white rounded-lg shadow-sm"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-blue-500 rounded-full">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">
                <Counter value={stat.value} inView={inView} />+
              </h2>
              <p className="text-sm text-gray-600 text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
