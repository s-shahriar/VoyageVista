"use client";

import {
  Cross,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Menu items array with colors and icons
const menuItems = [
  { name: "Home", href: "/", color: "text-blue-300" },
  { name: "About Us", href: "/about", color: "text-blue-300" },
  { name: "Host Venue", href: "/host", color: "text-blue-300" },
  { name: "Hotels", href: "/hotels", color: "text-blue-300" },
  { name: "Blog", href: "/blog", color: "text-blue-300" },
];

// Social media items array
const socialItems = [
  { icon: Facebook, href: "#", color: "text-blue-500" },
  { icon: Twitter, href: "#", color: "text-blue-400" },
  { icon: Linkedin, href: "#", color: "text-blue-700" },
  { icon: Instagram, href: "#", color: "text-pink-500" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="md:sticky md:top-0 md:z-50 hidden md:flex justify-between items-center px-4 py-2 bg-blue-600">
        <div className="container mx-auto flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone size={16} className="mr-2" /> +880 1334 7890
            </span>
            <span className="flex items-center">
              <Mail size={16} className="mr-2" /> query@voyage.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={"/login"} className="text-sm hover:text-blue-200 transition duration-300">
              Login / Register
            </Link>
            <div className="flex space-x-2">
              {socialItems.map(({ icon: Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="rounded-full bg-white p-1 hover:bg-blue-200 transition duration-300"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-gradient-to-r from-blue-500 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link href={"/"} className="hover:text-blue-300 transition duration-300">Voyage Vista</Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6 text-sm lg:text-lg">
              {menuItems.map(({ name, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`hover:${color} transition duration-300 hover:underline`}
                >
                  {name}
                </Link>
              ))}
              <button className="p-2 rounded-full bg-white text-blue-500 hover:bg-blue-200 transition duration-300">
                <Search size={20} />
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-600 transition duration-300">
                Contact Us <Phone size={16} className="ml-2" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:text-blue-300 transition duration-300"
              >
                {isOpen ? (
                  <Cross className="rotate-45" size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-4 py-2 bg-blue-700">
            {menuItems.map(({ name, href, color }, index) => (
              <Link
                key={index}
                href={href}
                className={`block py-2 hover:${color} transition duration-300 hover:bg-blue-600 hover:pl-4`}
              >
                {name}
              </Link>
            ))}
            <div className="flex items-center justify-between py-2">
              <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300">
                Contact Us
              </button>
              <button className="p-2 rounded-full bg-white text-blue-500 hover:bg-blue-200 transition duration-300">
                <Search size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="flex items-center hover:text-blue-300 transition duration-300">
                <Phone size={16} className="mr-2" /> +880 1335 7890
              </span>
              <span className="flex items-center hover:text-blue-300 transition duration-300">
                <Mail size={16} className="mr-2" /> query@voyage.com
              </span>
            </div>
            <div className="flex space-x-2 py-2 justify-center">
              {socialItems.map(({ icon: Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="rounded-full bg-white p-1 hover:bg-blue-200 transition duration-300"
                >
                  <Icon className={`w-7 h-6 ${color}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;