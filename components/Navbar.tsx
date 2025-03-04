"use client";

import { useState, useEffect } from 'react';
import { close, logo, menu } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 50) {
        controls.start({ y: 0 });
      } else if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
        controls.start({ y: -100 });
      } else {
        setIsScrollingUp(true);
        controls.start({ y: 0 });
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const viewportHeight = window.innerHeight;
      if (!isScrollingUp && event.clientY < viewportHeight * 0.1) {
        controls.start({ y: 0 });
      } else if (!isScrollingUp) {
        controls.start({ y: -100 });
      }
    };

    if (isClient) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isClient) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [lastScrollY, isScrollingUp, controls, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative">
      <motion.header
        className="w-full h-[80px] flex py-6 px-6 items-center fixed top-0 transition-transform duration-300 z-50 bg-midnightBlue sm:pb-5"
        initial={{ y: 0 }}
        animate={controls}
      >
        <div className='flex flex-row w-full items-center relative'>
          <Image src={logo} alt="FixIt" className='object-contain h-[80px]' />
          <ul className="sm:flex hidden justify-end items-center flex-1 ml-auto">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]
                 text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex flex-row items-center relative">
          <Image 
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain"
            onClick={() => setToggle((prev) => !prev)} 
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-[80px] right-0 mx-4 my-2 min-w-[280px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.header>
      <div className="h-[80px]"></div> {/* Creëert ruimte voor de navbar */}
    </div>
  );
};

export default Navbar;
