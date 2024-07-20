"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useTransition, animated } from "react-spring";
import { TbMenuDeep } from "react-icons/tb";

export default function NavBar() {

  //Makes the navbar close when the screen is resized to a certain width
  const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => {setWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return width;
  }

  useWidth();

  const [isOpen, setIsOpen] = useState(false);

  const transition = useTransition(isOpen, {
    from: {x: 100, opacity: 0},
    enter: {x: 0, opacity: 1},
    leave: {x: 100, opacity: 0},
  });


  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const ExternalComponent = ({style}) => {
    return (
      <animated.div style={style} className="bg-black w-64 h-full absolute right-0 ">
        <div className="flex flex-col h-full mt-14">
          <a
            href="/"
            className="hover: bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Meet Maria
          </a>
          <a
            href="/"
            className="hover:bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Listings
          </a>
          <a
            href="/"
            className="hover:bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Contact
          </a>
        </div>
      </animated.div>
    );
  };
  const AnimatedDialog = animated(ExternalComponent);
  

  return (
    <>
    {transition((style, item) => item && (<AnimatedDialog style={style} />))}
        
      <div className="fixed flex w-full h-auto py-2 px-5 bg-black bg-opacity-40">
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
            <TbMenuDeep className="text-white  w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:flex items-center justify-end mr-24 w-full space-x-5 text-white">
          <a
            href="/"
            className="hover:bg-stone-800 text-white rounded-md px-3 py-2 text-m font-medium"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:bg-stone-800 text-white rounded-md px-3 py-2 text-m font-medium"
          >
            Meet Maria
          </a>
          <a
            href="/"
            className="hover:bg-stone-800 text-white rounded-md px-3 py-2 text-m font-medium"
          >
            Listings
          </a>
          <a
            href="/"
            className="hover:bg-stone-800 text-white rounded-md px-3 py-2 text-m font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
