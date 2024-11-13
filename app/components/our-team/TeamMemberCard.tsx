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
    <div className="border flex flex-col justify-end items-center gap-2 border-borderColor w-[224px] h-[175px] relative hover:scale-105 hover:shadow-ml transition-transform duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="absolute bottom-1/2 flex justify-center items-center bg-bodyBackground w-10/12">
        {/* Image with overlay */}
        <Image
          src={imgSrc}
          alt={name}
          width={160}
          height={198}
          className="relative py-2 z-10 max-h-[198px]"
        />
      </div>

      {/* Team Member Info */}
      <p className="text-xl font-abhaya">{name}</p>
      <p className="font-abhaya mb-2 md:text-nowrap">{role}</p>
    </div>
  );
}

export default TeamMemberCard;
