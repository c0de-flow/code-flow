"use client";
import teamMembers from "@/app/constants/TeamMembers";
import Image from "next/image";
import React, { useState } from "react";

const Slider2 = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    // Main container for the cards
    <div className="w-full max-w-[1024px] h-[60vh] flex items-center justify-center gap-2 text-white font-abhaya mx-auto px-4">
      {/* Mapping and displaying cards for each member */}
      {teamMembers.map((member, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`h-full rounded-2xl bg-bodyBackground cursor-pointer transition-all duration-300 ease-in-out relative ${
            expandedIndex === index
              ? "w-[60%] md:w-[50%] sm:w-[70%]"
              : "w-[10%] md:w-[15%] sm:w-[20%] overflow-hidden"
          }`}
        >
          <Image
            src={member.imgSrc}
            alt={member.name}
            width={160}
            height={198}
            className="w-full h-full object-cover object-top pt-3"
          />

          {/* Overlay text slide at the bottom of each card */}
          <div
            className={`${
              expandedIndex === index
                ? "absolute flex flex-col items-center justify-center bottom-0 py-2 bg-black rounded-t-2xl w-full"
                : "hidden"
            }`}
          >
            <p className="text-xl md:text-ml sm:text-base font-abhaya">
              {member.name}
            </p>
            <p className="md:text-sm sm:text-xs font-abhaya mb-2">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider2;
