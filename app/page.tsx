"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/style";
import { Hero, Stats, Business, Billing, CardDeal, CTA } from "@/components";

const Home: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Initialize the isClient state to ensure client-side rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true to confirm we are in the client environment
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only add the scroll event listener when the component is client-side
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
  }, [isClient]); // Dependency array now only includes isClient

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Ensure nothing is rendered on SSR
  if (!isClient) {
    return null; // This prevents rendering on the server side
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
