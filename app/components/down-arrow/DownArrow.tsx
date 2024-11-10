"use client";
import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";

interface DownArrowProps {
  otherClasses?: string;
}

const DownArrow = ({ otherClasses }: DownArrowProps) => {
  // Function to scroll to the bottom of the page
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
<<<<<<< HEAD
    <motion.div
      className={`absolute bottom-[50px] hidden lg:block ${otherClasses} `}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
=======
    <div
      className={`absolute bottom-[50px] hidden ml:block ${otherClasses} `}
>>>>>>> 8c5b7e242eff088a1447f937801bcafa8c86e274
    >
      {/* Arrow button styles and onclick function */}
      <button
        onClick={scrollToFooter}
        className="bg-transparent border border-blue-300 text-white py-4 px-4 rounded-full shadow-2xl hover:bg-white hover:text-blue-700 transition duration-300"
      >
        <IoIosArrowRoundDown className="text-5xl " />
      </button>
    </motion.div>
  );
};

export default DownArrow;
