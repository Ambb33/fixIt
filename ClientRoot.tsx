"use client";

import { useState, useEffect, ReactNode } from "react";
import { Navbar, Footer } from "@components";
import styles from "@styles/style";

interface ClientRootProps {
  children: ReactNode;
}

const ClientRoot = ({ children }: ClientRootProps) => {
  const [error, setError] = useState<Error | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will only run on the client-side
    setIsClient(true);
  }, []);

  const reset = () => {
    setError(null);
    console.log("Reset function triggered");
  };

  if (!isClient) {
    return null; // Or render a fallback until the component is client-side
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {error ? (
            <div>
              <h2>Something went wrong!</h2>
              <p>{error.message}</p>
              <button onClick={reset}>Try again</button>
            </div>
          ) : (
            children || "No content available"
          )}
        </div>
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
