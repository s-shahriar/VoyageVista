import { CalendarDays, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/map_image.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "80vh",
      }}
      className="relative flex items-center"
    >
      {/* Background shapes */}
      <div className="container mx-auto px-4 py-8 my-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-sm font-semibold text-black mb-2 text-center lg:text-left">
              Relax & Enjoy the Vacation
            </h2>
            <h1 className="text-4xl font-bold mb-4 text-center lg:text-left text-black">
              Choose <span className="text-blue-500">Voyage Vista</span> <br />{" "}
              To Book Your Hotel
            </h1>
            <p className="text-gray-600 mb-6 text-center lg:text-left">
              Explore top destinations and luxurious hotels at the best prices.
              Our platform ensures you get the best deal for your vacation,
              making your travel experience memorable and seamless.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center mx-auto lg:mx-0">
              Make Reservation
              <CalendarDays className="ml-2" size={20} />
            </button>
          </div>

          {/* Right side image with Link */}
          <div className="lg:w-1/2 relative">
            <Link href="/login">
              <Image
                src="/assets/images/Banner.png"
                width={500}
                height={500}
                alt="Travel collage"
                className="rounded-lg w-full object-cover cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-12 bg-white rounded-3xl shadow-lg p-4 flex flex-col lg:flex-row justify-between items-stretch space-y-4 lg:space-y-0 lg:space-x-4 w-full max-w-5xl mx-auto">
          <div className="flex items-center p-2 border border-gray-300 rounded-full w-full lg:flex-1">
            <MapPin className="text-gray-400 mr-2 flex-shrink-0" size={20} />
            <input
              type="text"
              placeholder="Type Of Venue"
              className="outline-none w-full min-w-0"
            />
          </div>
          <div className="flex items-center p-2 border border-gray-300 rounded-full w-full lg:flex-1">
            <CalendarDays
              className="text-gray-400 mr-2 flex-shrink-0"
              size={20}
            />
            <input
              type="text"
              placeholder="Pick A Date"
              className="outline-none w-full min-w-0"
            />
          </div>
          <div className="flex items-center p-2 border border-gray-300 rounded-full w-full lg:flex-1">
            <MapPin className="text-gray-400 mr-2 flex-shrink-0" size={20} />
            <input
              type="text"
              placeholder="Zip Code"
              className="outline-none w-full min-w-0"
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center w-full lg:w-auto">
            <span className="mr-2">Search</span>
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
