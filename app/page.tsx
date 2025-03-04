"use client";  // Ensure this is at the top of your page.tsx file

import { useState, useEffect } from "react";
import styles from "@/styles/style";
import { Stats, Business, Billing, CardDeal, CTA } from "@/components";

import dynamic from 'next/dynamic';

// Dynamically import components with ssr: false to ensure they are only rendered client-side
const DynamicHero = dynamic(() => import('@/components/Hero'), { ssr: false });
const DynamicStats = dynamic(() => import('@/components/Stats'), { ssr: false });

const Home: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <DynamicHero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <DynamicStats />
          <Business />
          <Billing />
          <CardDeal />
          <CTA />
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-1 right-10 p-2 bg-navcolor text-white rounded shadow-lg hover:bg-secondary transition duration-300"
        >
          Top
        </button>
      )}
    </>
  );
};

export default Home;
