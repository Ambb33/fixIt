import React from 'react';
import { ButtonProps } from "@types";

const ToggleButtonContact: React.FC<ButtonProps> = ({ styles, toggleVisibility }) => {
  return (
    <button
      onClick={toggleVisibility}
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px]
       text-primary outline-none rounded-[10px] hover:translate-x-2 transition-all ease-linear cursor-pointer`}
    >
      Contact Us
    </button>
  );
};

export default ToggleButtonContact;
