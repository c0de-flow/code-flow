import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import CustomButton from "../buttonComponent/customButton";
import InformationText from "./InformationText";

const Header = () => {
  // Define Buttons Data
  const buttons = [{ label: "Services" }, { label: "Contact" }];

  // Define Information Data
  const infoData = [
    { number: "24", label: "Years \n Experience" },
    { number: "1M", label: "User's \n Satisfaction" },
    { number: "10k", label: "Official \n Subscribers" },
  ];

  return (
    <main className="min-h-screen flex justify-center text-white text-center custom-container">
      <div className="flex flex-col justify-between md:justify-between md:items-center gap-10 relative w-full rounded-[74px] shadow-header-box min-h-full">
        <div className="absolute inset-0 bg-responsive-header-bg md:bg-header-bg bg-cover bg-center opacity-20 rounded-[74px]"></div>

        {/* Navbar at the top */}
        <div className="absolute inset-0">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-around mt-80 md:mt-0 md:justify-end h-full gap-20 w-full px-4">
          {/* Main Text Content */}
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-[32px] md:text-[96px] uppercase font-cherry md:font-algerian w-full text-center">
              welcome to code flow
            </h1>
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

          {/* Information Elements */}

          <div className="flex justify-center gap-5 md:gap-10 w-full font-inter mb-10 px-4">
            {infoData.map((info, index) => (
              <InformationText
                key={index}
                number={info.number}
                label={info.label}
              />
            ))}
          </div>
        </div>

        {/* Down Arrow Element, hidden on smaller screens */}
        <div className="hidden lg:flex absolute left-20 bottom-[26px] border border-white rounded-full p-10 justify-center items-center">
          <Image src={"/arrow.png"} alt="down-arrow" width={25} height={25} />
        </div>
      </div>
    </main>
  );
};

export default Header;
