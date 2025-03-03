"use client";
import { Navbar, Footer } from "@components";
import styles from "@styles/style";

const ClientRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* Ensure that children are properly rendered */}
            {children || "No content available"}
          </div>
        </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientRoot;
