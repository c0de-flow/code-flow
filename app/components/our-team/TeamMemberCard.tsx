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
    <div className="border flex flex-col justify-end items-center gap-2 border-borderColor w-[224px] h-[175px] relative">
      {/* Image Container */}
      <div className="absolute bottom-1/2 flex justify-center items-center bg-bodyBackground w-10/12">
        {/* Image with overlay */}
        <Image
          src={imgSrc}
          alt={name}
          width={160}
          height={198}
          className="relative z-10"
        />
      </div>

      {/* Team Member Info */}
      <p className="text-xl font-abhaya">{name}</p>
      <p className="font-abhaya mb-2">{role}</p>
    </div>
  );
}

export default TeamMemberCard;
