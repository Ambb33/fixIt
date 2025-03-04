"use client";  // Ensure this component is client-side

import { useState, useEffect } from "react";
import styles from "@/styles/style";
import { Hero, Stats, Business, Billing, CardDeal, CTA } from "@/components";

const Home: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [isClient, setIsClient] = useState(false); // To check if we are on the client side

  useEffect(() => {
    // Set the client-side flag when the component mounts
    setIsClient(true);

    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach the event listener on mount
    if (isClient) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (isClient) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isClient]); // Run the effect only once when client-side is ready

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isClient) {
    return null; // Prevent rendering during SSR
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
