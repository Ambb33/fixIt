import "@/styles/globals.css";
export const metadata = {
  title: "fixIt",
  description: "Fix It! offers fast, reliable computer repair and technical support for private clients. From troubleshooting to network setups, we provide personalized tech solutions you can trust.",

};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
