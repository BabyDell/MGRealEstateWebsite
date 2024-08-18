"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { TbMenuDeep } from "react-icons/tb";
import popUpNav from "./popUpNav";

export default function NavBar() {
  //Makes the navbar close when the screen is resized to a certain width
  const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");

      // Add a null check for navbar
      if (navbar) {
        const scrollPosition = window.scrollY;

        const navbarOpacity = (scrollPosition / 700) + 0.5;

        if (navbarOpacity >= 0.5) {
          navbar.style.backgroundColor = `rgba(0, 0, 0, ${navbarOpacity})`;
        }
      }
    });
  }

  useWidth();

  const [isOpen, setIsOpen] = useState(false);

  const transition = useTransition(isOpen, {
    from: { x: 100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 100, opacity: 0 },
  });

  const [popupStyle, setPopupStyle] = useState({});

  const toggleMenu = (event: { preventDefault: () => void; clientY: number; }) => {
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
    setPopupStyle({
      position: 'fixed',
      top: `${event.clientY - 30}px`,
    });
  };

  const AnimatedDialog = animated(popUpNav);

  return (
    <>
    {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10,
          }}
          onClick={toggleMenu}
        />
      )}
      {transition((style, item) => item && <AnimatedDialog style={{ ...style, ...popupStyle , zIndex: 20}} />)}

      <div
        id="navbar"
        className="fixed flex w-full h-auto py-2 px-5 bg-black bg-opacity-50"
        
      >
        <a href="https://www.century21.com/" className="flex" target="_blank">
          <Image
            src="/img/century21logo.png"
            className=""
            width={200}
            height={100}
            alt="Century 21 Logo"
          />
        </a>
        <div className="md:hidden w-full flex items-center justify-end">
          <button className="absolute z-50" onClick={toggleMenu}>
            <TbMenuDeep className="text-white  w-6 h-6 z-20" />
          </button>
        </div>
        <div className="hidden md:flex items-center justify-end mr-24 w-full space-x-10 text-white">
          <a
            href="/"
            className="hover-effect rounded-2xl  py-2 text-m font-medium"
          >
            Home
          </a>
          <a
            href="/"
            className="hover-effect rounded-2xl  py-2 text-m font-medium"
          >
            Meet Maria
          </a>
          <a
            href="/"
            className="hover-effect rounded-2xl  py-2 text-m font-medium"
          >
            Listings
          </a>
          <a
            href="/"
            className="hover-effect rounded-2xl  py-2 text-m font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
