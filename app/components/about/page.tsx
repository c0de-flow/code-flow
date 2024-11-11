import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import ChoiceBox from "./choiceBox";

export default function About() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-bodyBackground pt-56 pb-20 flex flex-col"
    >
      <div className="relative flex justify-center pb-20 md:pb-40 ml:pb-0 ml:pl-64 ">
        <SectionTitle title="About Us"  className="text-5xl"/>
      </div>
      <div className="w-full flex flex-col ml:flex-row justify-center pl-10  ml:pl-8 ml:mt-0">
        <div className="w-full md:w-[70%] ml:w-[33%] ml-10 ml:pl-0 pt-10 f  ">

          <div className="flex items-center justify-center relative">
            <div className="relative border-custom h-[200px] md:h-[390px] ml:h-[490px]">
              <div
                className="absolute -top-10 md:-top-5 ml:-top-[12px] -left-12 ml:-left-28 w-full h-40 md:h-56 ml:h-72 bg-bodyBackground z-10"
              >
                <img
                  src="/about/image 10.png"
                  alt="Image 1"
                  className="absolute -top-16 md:-top-48 ml:-top-52 scale-100 md:scale-125 left-0 ml:left-14 z-40 transform translate-x-4 -translate-y-4 rounded-md"
                />
              </div>
              <img
                src="/about/image 11.png"
                alt="Image 2"
                className="absolute -bottom-10 md:-bottom-32 ml:-bottom-20 -right-9 scale-90 ml:scale-125 z-30 transform -translate-x-4 translate-y-4 rounded-md"
              />
            </div>

            <div className="flex flex-col items-center ml-10  sm:flex sm:space-y-7 ml:hidden">
              <SectionTitle title="Why choose " className="text-[20px]" />
              <div className="flex flex-col space-y-5 mt-7">
                <ChoiceBox text="Quality" className="text-xl w-16 h-20" />
                <ChoiceBox text="Trust" className="text-xl w-16 h-20" />
                <ChoiceBox text="Fast" className="text-xl w-16 h-20" />
              </div>
            </div>


          </div>
        </div>

        <div className="w-full ml:w-[40%] flex flex-col ml:pl-20 mb-40">
          <div className="w-full text-white font-abhaya text-[20px] pt-20  md:pt-56 ml:pt-10">
            <p>
              We are a company specialized in advertising and digital business development,
              providing innovative solutions for creating websites and applications.
              We work to transform your ideas into distinctive digital experiences that
              contribute to enhancing your brand presence and expanding the scope of your business.
              Thanks to our team of experts, we design integrated websites and applications that meet your needs and achieve your goals.
            </p>
          </div>


          <div className="hidden ml:flex flex-col items-center mt-24">
            <SectionTitle title="Why choose "  className="text-5xl"/>
            <div className="flex space-x-4 md:space-x-16 mt-20">
              <ChoiceBox text="Quality" className="text-4xl w-32 h-32  " />
              <ChoiceBox text="Trust" className="text-4xl  w-32 h-32  " />
              <ChoiceBox text="fast" className="text-4xl  w-32 h-32 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
