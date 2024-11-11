import React from "react";

interface ChoiceBoxProps {
  text: string;
  className?: string; 
}

export default function ChoiceBox({ text, className = "" }: ChoiceBoxProps) {
  return (
    <div className={`flex items-center justify-center  border-choose text-white ${className}`}>
      <h2 className="font-abhaya ">{text}</h2>
    </div>
  );
}
