import Image from "next/image";
import React from "react";

//props interface
interface TeamMemberCardProps {
  name: string;
  role: string;
  imgSrc: string;
}

function TeamMemberCard({ name, role, imgSrc }: TeamMemberCardProps) {
  return (
    <div className="border flex flex-col justify-end items-center gap-2 border-borderColor w-[224px] h-[175px] hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="relative flex justify-center items-center w-10/12">
        <Image
          src={imgSrc}
          alt={name}
          width={160}
          height={198}
          className="py-2 z-10"
        />
        <div className="absolute bottom-0 w-full h-[55%] bg-bodyBackground"></div>
      </div>

      {/* Team Member Info */}
      <div className="text-center z-10">
        <p className="text-xl font-abhaya">{name}</p>
        <p className="font-abhaya mb-2">{role}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
