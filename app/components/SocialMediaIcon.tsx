import React from "react";

interface SocialMediaIconProps {
  Icon: React.ElementType;
}

function SocialMediaIcon({ Icon }: SocialMediaIconProps) {
  return (
    <span className="border border-borderColor rounded-full p-1 flex justify-center items-center cursor-pointer">
      <Icon className="text-borderColor" />
    </span>
  );
}

export default SocialMediaIcon;
