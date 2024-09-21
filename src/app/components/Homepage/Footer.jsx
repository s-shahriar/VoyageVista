import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-50 pt-10 pb-4 mt-[100px]">
      <div className="container mx-auto px-4">
        <div className="bg-blue-500 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between md:-mt-20 -mt-[100px] z-100">
          <h2 className="text-white text-2xl font-semibold mb-4 md:mb-0">
            Subscribe for Latest Newsletter
          </h2>
          <div className="flex w-full md:w-auto gap-4">
            <Input
              type="email"
              placeholder="Your Email Address...."
              className="rounded-full bg-white text-black"
            />
            <Button className="bg-white text-blue-500 hover:bg-blue-100 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-blue-500 text-3xl font-bold mb-4 text-center md:text-left">
                Voyage Vista
            </h3>
            <p className="text-gray-600 mb-4 text-center md:text-left">
              Your fabourite and trusted place to make your next journey memorable. Follow us:
            </p>
            <div className="flex space-x-4 justify-center md:justify-normal">
              <Link href={'/login'} className="text-blue-500 hover:text-blue-600 bg-white p-2 rounded-full">
                <Facebook size={24} />
              </Link>
              <Link href={'/login'} className="text-blue-500 hover:text-blue-600 bg-white p-2 rounded-full">
                <Twitter size={24} />
              </Link>
              <Link href={'/login'} className="text-blue-500 hover:text-blue-600 bg-white p-2 rounded-full">
                <Youtube size={24} />
              </Link>
              <Link href={'/login'} className="text-blue-500 hover:text-blue-600 bg-white p-2 rounded-full">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-blue-500 font-semibold mb-4 text-center md:text-left">
              Quick Links
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href={"/login"}
                  className="text-gray-600 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/login"}
                  className="text-gray-600 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/login"}
                  className="text-gray-600 hover:text-blue-500"
                >
                  Host A Venue
                </Link>
              </li>
              <li>
                <Link
                  href={"/login"}
                  className="text-gray-600 hover:text-blue-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/login"}
                  className="text-gray-600 hover:text-blue-500"
                >
                  Hotel
                </Link>
              </li>
              <li>
                <Link
                  href={"/login"}
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-blue-500 font-semibold mb-4 text-center md:text-left">
              Get In Touch
            </h4>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="text-gray-600">+1 12345 67890</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span className="text-gray-600">example@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-600">91/1 Larmini Street</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-blue-500 font-semibold mb-4 text-center md:text-left">
              Follow Us On @instagram
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, index) => (
                <img
                  key={index}
                  src={`/assets/images/footer-${index + 1}.png`}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-auto object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-blue-500 text-sm">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
