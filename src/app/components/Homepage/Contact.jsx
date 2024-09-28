"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, useAnimation } from 'framer-motion'
import { MapPin, Phone, Smartphone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sendCopy, setSendCopy] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

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
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mb-32 container bg-gradient-to-b from-blue-50 to-white mx-auto py-10"
    >
      <motion.h3 variants={itemVariants} className="text-blue-500 text-center font-cursive text-2xl mb-2">Contact Us</motion.h3>
      <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-6">We'd Love to Hear From You!</motion.h2>
      <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Whether you have a question about our services, need assistance, or just want to share your travel experience, feel free to get in touch with us. We're here to help and inspire your next journey!
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-blue-100 container mx-auto"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1726978967838!5m2!1sen!2sbd"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="container px-6 md:px-12 mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300"
        >
          <div className="flex flex-wrap">
            <motion.div
              variants={itemVariants}
              className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
            >
              <form onSubmit={handleSubmit}>
                <motion.div variants={itemVariants} className="relative mb-6">
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="relative mb-6">
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="relative mb-6">
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={3}
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none"
                    type="checkbox"
                    id="sendCopy"
                    checked={sendCopy}
                    onChange={(e) => setSendCopy(e.target.checked)}
                  />
                  <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="sendCopy">
                    Send me a copy of this message
                  </label>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="submit" className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0">
                    Send
                  </Button>
                </motion.div>
              </form>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full shrink-0 grow-0 basis-auto lg:w-7/12"
            >
              <div className="flex flex-wrap">
                <motion.div
                  variants={itemVariants}
                  className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                >
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Technical support</p>
                      <p className="text-sm text-neutral-500">support@voyagevista.com</p>
                      <p className="text-sm text-neutral-500">+880-162-333-4567</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                >
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Address</p>
                      <p className="text-sm text-neutral-500">
                        123, Gulshan Avenue, <br />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12"
                >
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Land Line</p>
                      <p className="text-neutral-500">+880-2-881-4567</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12"
                >
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                        <Smartphone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Mobile</p>
                      <p className="text-neutral-500">+880-171-234-5678</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}