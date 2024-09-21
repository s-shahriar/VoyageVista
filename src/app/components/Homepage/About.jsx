"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg container mx-auto justify-center items-center">

      <div className="md:pl-8 mt-8 md:mt-0 w-full md:w-1/2">
        <h2 className="text-blue-500 text-lg font-semibold">Get About Us</h2>
        <h1 className="text-3xl font-bold mb-4">
          More About <span className="text-blue-500">Voyage Vista</span>
        </h1>
        <p className="text-gray-600 mb-4">
          At Voyage Vista, we are passionate about crafting unforgettable
          journeys. From exotic beach getaways to cultural excursions, we ensure
          every trip is tailored to your preferences. Discover new horizons with
          our experienced travel consultants by your side.
        </p>
        <p className="text-gray-600 mb-6">
          Our mission is to provide seamless travel experiences, offering
          customized itineraries, competitive pricing, and unparalleled service.
          Let us help you explore the world and create lifelong memories.
        </p>
        <div className="mb-6">
          {accordionItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-blue-500">{item.question}</span>
                <span className="text-blue-500">
                  {activeAccordion === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  activeAccordion === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="mt-2 text-gray-600">
                  {activeAccordion === index && item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/read-more" passHref>
          <p className="bg-blue-500 text-white px-6 py-2 rounded-full inline-flex items-center transition-transform hover:scale-105">
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
          </p>
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          width={500}
          height={400}
          src="/assets/images/About-image.png"
          alt="Travel collage"
          className="rounded-lg object-cover"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default About;
