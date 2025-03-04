"use client";

import { Navbar, Footer } from "@components";
import styles from "@styles/style";
import { ReactNode } from "react";

// Ensure the ClientRootProps interface is correctly defined here
interface ClientRootProps {
  children: ReactNode;
}

const ClientRoot = ({ children }: ClientRootProps) => {
  // const [error, setError] = useState<Error | null>(null);

  // const reset = () => {
  //   setError(null);
  //   console.log("Reset function triggered");
  // };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* {error ? (
            <div>
              <h2>Something went wrong!</h2>
              <p>{error.message}</p>
              <button onClick={reset}>Try again</button>
            </div>
          ) : ( */}
            {children || "No content available"}
          {/* )} */}
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
