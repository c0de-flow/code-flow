import React from "react";

const SendButton = ({ text }: { text: string }) => {
  return (
    <button className="relative flex items-center justify-center px-4 py-2 bg-transparent text-lg text-blue-300 font-semibold transition hover:text-blue-400">
      <span className="relative z-10">{text}</span>

      <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-300" />

      <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-300" />

      <span className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-blue-400" />
    </button>
  );
};

export default SendButton;
