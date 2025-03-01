"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/style";
import { Hero, Stats, Business, Billing, CardDeal, CTA } from "../components";

const Home: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isClient) {
    return null; // Prevent SSR rendering of this component
  }

  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
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
