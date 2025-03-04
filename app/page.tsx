import { useState, useEffect } from "react";
import styles from "@/styles/style";
import { Hero, Stats, Business, Billing, CardDeal, CTA } from "@/components";

const Home: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered: Adding scroll event listener");

    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY);
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      console.log("useEffect cleanup: Removing scroll event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const scrollToTop = () => {
    console.log("Scroll to top triggered");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
