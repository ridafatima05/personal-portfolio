"use client"; // Ensure it's a client-side component

import React, { useState } from "react";
import Link from "next/link";

const HeaderSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-extrabold hover:text-purple-500">
          RF
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about" onClick={() => scrollToSection("about")} className="hover:text-purple-500">
            About
          </Link>
          <Link href="/skills" onClick={() => scrollToSection("skills")} className="hover:text-purple-500">
            Skills
          </Link>
          <Link href="/project" onClick={() => scrollToSection("projects")} className="hover:text-purple-500">
            Projects
          </Link>
          <Link href="/contact" onClick={() => scrollToSection("contact")} className="hover:text-purple-500">
            Contact
          </Link>
          <button className="px-6 py-2 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-purple-600">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link href="/about" onClick={() => scrollToSection("about")} className="hover:text-purple-500">
              About
            </Link>
            <Link href="/skills" onClick={() => scrollToSection("skills")} className="hover:text-purple-500">
              Skills
            </Link>
            <Link href="/project" onClick={() => scrollToSection("projects")} className="hover:text-purple-500">
              Projects
            </Link>
            <Link href="/contact" onClick={() => scrollToSection("contact")} className="hover:text-purple-500">
              Contact
            </Link>
            <button className="px-6 py-2 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-purple-600">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
