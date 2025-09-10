import React, { useState } from "react";
import { FaMix } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-gray-100 shadow-sm ">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-70 transition-opacity"></div>
        </div>
        {/* logo */}

        {/* desktop navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* desktop navigation */}

        {/* get in to touch button*/}
        <button>
          <a
            href="#newLetter"
            className="hidden md:block bg-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm  text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-600"
          >
            Get in touch
          </a>
        </button>
        {/* get in to touch button*/}

        {/* mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <VscChromeClose className="size-6 " />
          ) : (
            <IoMenu className="size-6 " />
          )}
        </button>
        {/* mobile menu button */}
      </div>

      {/* mobile menu*/}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 space-y-3">
            {navItems.map((link, index) => (
              <a
                key={index}
                href={link.label}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* get in to touch button*/}
            <button className="w-full md:block bg-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm  text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-600">
              <a href="#newLetter">Get in touch</a>
            </button>
            {/* get in to touch button*/}
          </div>
        </div>
      )}
    </nav>
  );
}
