"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonProps } from "@types";
import ContactForm from './ContactForm';

const Contact: React.FC<ButtonProps> = ({ styles }) => {
  
  return (
    <div className="w-full p-6 ">
     
      <AnimatePresence>
        
          <motion.section
            id="contact"
            className='items-center justify-between w-full'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center md:flex-col my-10">
              <div className="w-4/5 justify-center items-center my-6">
                <h1 className="text-4xl text-center text-white">Contact</h1>
                <ContactForm />
              </div>
              <div className="w-1/2 md:w-full mb-5"></div>
            </div>
          </motion.section>
        
      </AnimatePresence>
    </div>
  );
};

export default Contact;
