import React from "react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

function CustomButton({ label, onClick, className }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border border-borderColor rounded-[36px] py-4 px-10 transition-all duration-300 ease-in-out 
                  hover:bg-borderColor hover:border-black hover:text-white hover:shadow-lg hover:scale-105 
                  ${className}`}
    >
      {label}
    </button>
  );
}

export default CustomButton;
