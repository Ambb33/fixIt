import "@/styles/globals.css";
import { Navbar, Footer } from "@components";
import styles from "@styles/style";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary">
        {/* Navbar rendered globally */}
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>{children}</div>
        </div>
        {/* Footer rendered globally */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
