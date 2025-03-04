'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import styles from '@/styles/style';

const ContactWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that the code inside will only run on the client
    setIsClient(true);
  }, []);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  if (!isClient) return null; // Return nothing if it's server-side

  return (
    <div className={`w-full p-6 ${styles.paddingX}`}>
      <button
        onClick={toggleOverlay}
        className={`${styles.marginY} py-4 px-6 bg-secondary text-primary outline-none rounded-[10px] hover:translate-x-2 transition-all ease-linear cursor-pointer`}
      >
        Contact Us
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-navcolor bg-opacity-75 z-[50]"
          >
            <div className={`mx-lg:w-full bg-darkGray p-6 rounded-lg shadow-lg md:w-full ${styles.boxWidth}`}>
              <button onClick={toggleOverlay} className="absolute top-4 right-4 bg-secondary text-primary p-2 rounded-full hover:bg-opacity-70 cursor-pointer">
                Close
              </button>
              <h1 className="text-4xl text-center text-white">Contact</h1>
              <ContactForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactWrapper;
