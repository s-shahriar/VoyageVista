"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Tommy Murphy",
    role: "Global Directives Architect",
    testimonial: "Traveling with Voyage Vista was a life-changing experience! The guides were knowledgeable and passionate, making every moment memorable.",
    image: "/assets/images/testi-1.png",
  },
  {
    name: "Jessica Smith",
    role: "Travel Enthusiast",
    testimonial: "I loved the personalized attention from the team. They made sure every detail was perfect, from accommodations to activities!",
    image: "/assets/images/testi-2.png",
  },
  {
    name: "Michael Johnson",
    role: "Adventure Seeker",
    testimonial: "The adventure trips offered by Voyage Vista are unmatched! From breathtaking hikes to thrilling excursions, every trip is an adventure.",
    image: "/assets/images/testi-3.png",
  },
  {
    name: "Emily Davis",
    role: "Tour Planner",
    testimonial: "Voyage Vista truly understands the needs of travelers. Their itineraries are well thought out, ensuring you experience the best of each destination.",
    image: "/assets/images/testi-4.jpg",
  },
  {
    name: "David Brown",
    role: "Travel Blogger",
    testimonial: "I highly recommend Voyage Vista! Their attention to detail and customer service are exceptional, making travel stress-free and enjoyable.",
    image: "/assets/images/testi-5.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextTestimonial, 200000000);
    return () => clearInterval(interval);
  }, []);

  const { name, role, testimonial, image } = testimonials[currentIndex];

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-blue-500 text-xl font-semibold mb-2">Testimonials</h2>
        <h1 className="text-3xl font-bold">What Our Travelers Say</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-end">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex items-end justify-between pb-4 gap-4">
            <div className="w-1/4 h-20 rounded-tl-lg rounded-tr-lg overflow-hidden">
              <img
                src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                alt="Profile Previous"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/3 h-20 rounded-tl-lg rounded-tr-lg overflow-hidden">
              <img
                src={testimonials[(currentIndex + 1) % testimonials.length].image}
                alt="Profile Next"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 h-64 rounded-tl-lg rounded-tr-lg overflow-hidden">
              <img
                src={image}
                alt="Profile Current"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
          <p className="text-gray-700 mb-6 text-lg text-start">{testimonial}</p>
          <button
            onClick={handleNextTestimonial}
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors self-start"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
