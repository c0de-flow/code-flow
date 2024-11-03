import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="min-h-screen flex justify-center text-white text-center custom-container">
      <div className="flex flex-col justify-between items-center gap-20 relative w-full bg-black rounded-[74px]">
        <Navbar />
        <h1 className="text-[96px] uppercase font-algerian">
          welcome to code flow
        </h1>
        <p className="text-4xl leading-10 font-abhaya">
          With us, your ideas turn into innovative applications and your
          business <br /> takes leaps into the future
        </p>

        <div className="flex justify-center items-center gap-20 text-4xl font-semibold w-full font-abhaya">
          <button className="border border-borderColor rounded-[36px] py-4 px-10">
            Services
          </button>
          <button className="border border-borderColor rounded-[36px] py-4 px-10">
            Contact
          </button>
        </div>

        <div className="flex justify-center items-center gap-48 w-full font-inter">
          <div className="flex items-center gap-3">
            <p className="text-[58px]">24</p>
            <span className="text-xl text-start text-[#FFFFFFBF]">
              Years <br />
              Experience
            </span>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[58px]">1M</p>
            <span className="text-xl text-start text-[#FFFFFFBF]">
              User's <br />
              Satisfaction
            </span>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[58px]">10k</p>
            <span className="text-xl text-start text-[#FFFFFFBF]">
              Official <br />
              Subscribers
            </span>
          </div>

          <div className="absolute left-20 bottom-[26px] border border-white rounded-full p-10 flex justify-center items-center">
            <Image src={"/arrow.png"} alt="down-arrow" width={25} height={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
