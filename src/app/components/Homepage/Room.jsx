"use client";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const hotels = [
  {
    id: 1,
    image: "/assets/images/Blog-Image.png?height=200&width=300",
    title: "Luxurious Beachfront Resort",
    description:
      "Experience ultimate relaxation in our spacious rooms with stunning ocean views.",
    location: "Beaches",
    capacity: 12,
    price: 150,
  },
  {
    id: 2,
    image: "/assets/images/Blog-Image-2.png?height=200&width=300",
    title: "Charming City Center Hotel",
    description:
      "Stay in the heart of the city, close to all major attractions and fine dining.",
    location: "Downtown",
    capacity: 18,
    price: 250,
  },
  {
    id: 3,
    image: "/assets/images/Blog-Image-3.png?height=200&width=300",
    title: "Serene Mountain Retreat",
    description:
      "Escape to nature in our cozy cabins surrounded by breathtaking mountain views.",
    location: "Mountains",
    capacity: 24,
    price: 280,
  },
  {
    id: 4,
    image: "/assets/images/Blog-Image.png?height=200&width=300",
    title: "Modern Urban Loft",
    description:
      "Enjoy a stylish stay in our chic urban loft with all modern amenities.",
    location: "City Center",
    capacity: 4,
    price: 180,
  },
  {
    id: 5,
    image: "/assets/images/Blog-Image-2.png?height=200&width=300",
    title: "Family-Friendly Resort",
    description:
      "A perfect getaway for families with spacious rooms and fun activities.",
    location: "Suburbs",
    capacity: 6,
    price: 220,
  },
  {
    id: 6,
    image: "/assets/images/Blog-Image-3.png?height=200&width=300",
    title: "Elegant Country Inn",
    description: "Experience the charm of the countryside in our elegant inn.",
    location: "Countryside",
    capacity: 10,
    price: 200,
  },
  {
    id: 7,
    image: "/assets/images/Blog-Image.png?height=200&width=300",
    title: "Luxury Safari Lodge",
    description:
      "Immerse yourself in nature with luxury accommodations in a safari lodge.",
    location: "Savanna",
    capacity: 8,
    price: 350,
  },
  {
    id: 8,
    image: "/assets/images/Blog-Image-2.png?height=200&width=300",
    title: "Cozy Lakeside Cabin",
    description: "Relax by the lake in our charming and cozy lakeside cabin.",
    location: "Lakeside",
    capacity: 5,
    price: 160,
  },
];

const useCarousel = (items, itemsPerPage) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerPage + items.length) % items.length
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return { visibleItems, nextSlide, prevSlide };
};

const HotelCard = ({ hotel }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image
      width={300}
      height={200}
      src={hotel.image}
      alt={hotel.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{hotel.title}</h3>
      <p className="text-gray-600 mb-4">{hotel.description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{hotel.location}</span>
        <Users className="w-4 h-4 ml-4 mr-1" />
        <span>{hotel.capacity} Person Capacity</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">
          ${hotel.price}
          <span className="text-sm font-normal"> / Per Night</span>
        </span>
        <button
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-400"
          onClick={() => alert(`Booking ${hotel.title}`)}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default function Room() {
  const {
    visibleItems: desktopItems,
    nextSlide: nextDesktop,
    prevSlide: prevDesktop,
  } = useCarousel(hotels, 3);
  const {
    visibleItems: tabletItems,
    nextSlide: nextTablet,
    prevSlide: prevTablet,
  } = useCarousel(hotels, 2);
  const {
    visibleItems: mobileItems,
    nextSlide: nextMobile,
    prevSlide: prevMobile,
  } = useCarousel(hotels, 1);

  return (
    <div className="w-full container mx-auto px-4 py-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-blue-500 text-xl font-semibold mb-2">
          Top Destinations
        </h2>
        <h1 className="text-3xl font-bold">Popular Hotels For Booking</h1>
        <p className="text-gray-600 my-2">
          Find the perfect hotel for your next getaway! Discover amazing places
          to stay around the world.
        </p>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 gap-6 my-3">
        {desktopItems.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 my-3">
        {tabletItems.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:hidden gap-6 my-3">
        {mobileItems.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            prevDesktop();
            prevTablet();
            prevMobile();
          }}
          className="mr-4 p-2 rounded-full bg-blue-500 hover:bg-blue-400"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => {
            nextDesktop();
            nextTablet();
            nextMobile();
          }}
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-400"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
