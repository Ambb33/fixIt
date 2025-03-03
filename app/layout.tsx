import "@/styles/globals.css";
import ClientRoot from "@/ClientRoot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "fixIt",
  description:
    "Fix It! offers fast, reliable computer repair and technical support for private clients. From troubleshooting to network setups, we provide personalized tech solutions you can trust.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
};

export default RootLayout;
