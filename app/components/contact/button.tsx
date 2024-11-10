import React from 'react';

const SendButton = () => {
  return (
    <div className="relative mt-3 p-8 text-blue-300 font-abhaya text-4xl flex justify-center items-center w-44 bg-transparent border-none">
      <span className="absolute top-0 left-0 w-[40%] h-[4px] bg-blue-300 shadow-[0_0_40px_6px_rgba(0,178,255,0.7)]"></span>
      <span className="absolute bottom-0 right-0 w-[40%] h-[4px] bg-blue-300 shadow-[0_0_40px_6px_rgba(0,178,255,0.7)]"></span>
      <span className="absolute top-0 left-0 w-[3px] h-[50%] bg-blue-300 shadow-[0_0_40px_6px_rgba(0,178,255,0.7)]"></span>
      <span className="absolute bottom-0 right-0 w-[3px] h-[50%] bg-blue-300 shadow-[0_0_40px_6px_rgba(0,178,255,0.7)]"></span>
      <span className="text-blue-300 glow-effect">Send</span>
    </div>
  );
};

export default SendButton;