import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import CustomButton from "../buttonComponent/CustomButton";
import TypedComponent from "./TypedComponent";

const Header = () => {
  // Define Buttons Data
  const buttons = [{ label: "Services" }, { label: "Contact" }];

  // Text for Typed Component
  const typedTexts = ["Welcome to Code Flow", "Your partner in digital innovation"];

  return (
    <main className="min-h-screen flex justify-center text-white text-center custom-container">
      <div className="flex flex-col justify-between md:justify-between md:items-center gap-10 relative w-full rounded-[74px] shadow-header-box min-h-full">
        <div className="absolute inset-0 bg-responsive-header-bg md:bg-header-bg bg-cover bg-center opacity-20 rounded-[74px] -z-10"></div>

        {/* Navbar at the top */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-20 w-full px-4">
          {/* Main Text Content */}
          <div className="flex flex-col items-center justify-center gap-10">
            {/* Using TypedComponent here with styles */}
            <TypedComponent
              text={typedTexts} 
              className="text-[32px] md:text-[72px] uppercase font-cherry md:font-algerian w-full text-center"
            />
            <p className="text-2xl md:text-4xl leading-10 font-abhaya w-full text-center">
              With us, your ideas turn into innovative applications and your
              business <br /> takes leaps into the future
            </p>
          </div>

          {/* Header Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-2xl md:text-4xl font-semibold w-full font-abhaya">
            {buttons.map((button, index) => (
              <CustomButton key={index} label={button.label} />
            ))}
          </div>

          {/* Down Arrow Element, hidden on smaller screens */}
          <div className="hidden lg:flex absolute left-20 bottom-[26px] border border-white rounded-full p-10 justify-center items-center">
            <Image src={"/arrow.png"} alt="down-arrow" width={25} height={25} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
