"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarOpacity = Math.min(scrollPosition / 700 + 0.5, 1);
      setScrollOpacity(navbarOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Meet Maria" },
    { href: "#listings", label: "Listings" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 py-2 px-5 transition-colors duration-300 bg-opacity-50 bg-black"
        style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="https://www.century21.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/century21logo.png"
              width={200}
              height={100}
              alt="Century 21 Logo"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300 transition duration-300 hover-effect"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <TbMenuDeep className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 h-full w-full bg-black z-50 p-5"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white"
            >
              <TbMenuDeep className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-4 mt-16">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition duration-300 hover-effect"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
