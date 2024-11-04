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
      className={`border border-borderColor rounded-[36px] py-4 px-32 md:px-10 ${className}`}
    >
      {label}
    </button>
  );
}

export default CustomButton;
