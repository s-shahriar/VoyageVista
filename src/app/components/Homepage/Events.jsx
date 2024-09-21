"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const eventTypes = [
  { name: "Wedding", image: "/assets/images/wedding.jpg?height=200&width=300" },
  {
    name: "Birthday",
    image: "/assets/images/birthday.jpg?height=200&width=300",
  },
  {
    name: "Corporate",
    image: "/assets/images/corporate.jpg?height=200&width=300",
  },
  {
    name: "Baby Shower",
    image: "/assets/images/babyshower.jpg?height=200&width=300",
  },
  { name: "Concert", image: "/assets/images/concert.jpg?height=200&width=300" },
];

export default function Events() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full container mx-auto p-6 bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 px-10 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-2 text-black">
      Best Places for Your Party
      </h2>
      <p className="text-lg text-center text-blue-500 my-2">

        Place That Accommodates Your Guest
      </p>
      <p className="max-w-3xl text-center text-gray-600 mx-auto mb-6">From intimate settings to expansive venues, we offer a variety of locations that are versatile and fully equipped to make your guests feel at home....</p>
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {eventTypes.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <Image
                    width={300}
                    height={200}
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white text-xl font-semibold">
                      {event.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}


