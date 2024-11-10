"use client"
import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

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
    <div
      className={`absolute bottom-[50px] hidden lg:block ${otherClasses} `}
    >
      {/* Arrow button styles and onclick function */}
      <button
        onClick={scrollToFooter}
        className="bg-transparent border border-blue-300 text-white py-4 px-4 rounded-full shadow-2xl hover:bg-white hover:text-blue-700 transition duration-300"
      >
        <IoIosArrowRoundDown className="text-5xl " />
      </button>
    </div>
  );
};

export default DownArrow;
