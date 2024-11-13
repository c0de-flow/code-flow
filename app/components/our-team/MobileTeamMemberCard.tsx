import React from "react";
import Image from "next/image";

interface MobileTeamMemberCardProps {
  name: string;
  role: string;
  imgSrc: string;
}

const MobileTeamMemberCard = ({
  name,
  role,
  imgSrc,
}: MobileTeamMemberCardProps) => {
  return (
    <div className="flex justify-center items-center rounded-ml shadow-ml mb-4 border border-mobile-team-border relative">
      {/* Image styles for mobile screens */}
      <Image
        src={imgSrc}
        alt={name}
        width={190}
        height={235}
        className="rounded-xl py-2 max-h-[198px]"
      />
      {/* Overlay text for the mobile screen images */}
      <div className="absolute bottom-0 flex flex-col justify-center items-center rounded-ml bg-mobile-team-bg w-full">
        <p className="text-xl font-abhaya">{name}</p>
        <p className="font-abhaya mb-2">{role}</p>
      </div>
    </div>
  );
};

export default MobileTeamMemberCard;
