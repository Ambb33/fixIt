"use client";

import { ReactNode } from "react";
import { Navbar, Footer } from "@components";
import styles from "@styles/style";

interface ClientRootProps {
  children: ReactNode;
}

const ClientRoot = ({ children }: ClientRootProps) => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>{children}</div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ClientRoot;
