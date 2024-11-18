import React from "react";

interface SocialMediaIconProps {
  Icon: React.ElementType;
  url: string;
}

function SocialMediaIcon({ Icon, url }: SocialMediaIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social Media Link"
      className="border border-borderColor rounded-full p-1 flex justify-center items-center cursor-pointer hover:bg-lightBlue hover:border-black transition-all duration-300 group"
    >
      <Icon className="text-borderColor group-hover:text-black transition-all duration-300" />
    </a>
  );
}

export default SocialMediaIcon;
