import "@/styles/globals.css";
import { Footer, Hero, Navbar } from "@components";
import styles from "@styles/style";

export const metadata = {
  title: "fixIt",
  description: "Fix It! offers fast, reliable computer repair and technical support for private clients. From troubleshooting to network setups, we provide personalized tech solutions you can trust.",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="bg-primary w-full overflow-hidden">
          <Navbar />
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              {children}
            </div>
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
