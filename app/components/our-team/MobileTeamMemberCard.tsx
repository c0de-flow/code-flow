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
    <div className="flex justify-center items-center rounded-lg shadow-lg mb-4 border border-mobile-team-border relative">
      <Image
        src={imgSrc}
        alt={name}
        width={190}
        height={235}
        className="rounded-xl py-2"
      />
      <div className="absolute bottom-0 flex flex-col justify-center items-center rounded-lg bg-mobile-team-bg w-full">
        <p className="text-xl font-abhaya">{name}</p>
        <p className="font-abhaya mb-2">{role}</p>
      </div>
    </div>
  );
};

export default MobileTeamMemberCard;
