import React from "react";

interface SocialMediaIconProps {
  Icon: React.ElementType;
}

function SocialMediaIcon({ Icon }: SocialMediaIconProps) {
  return (
    <span className="border border-borderColor rounded-full p-1 flex justify-center items-center cursor-pointer hover:bg-lightBlue hover:border-black transition-all duration-300 group">
      <Icon className="text-borderColor group-hover:text-black transition-all duration-300 " />
    </span>
  );
}

export default SocialMediaIcon;
