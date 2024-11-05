import React from 'react';
import { IoIosArrowRoundDown } from 'react-icons/io';

export default function About() {
  return (// Main container for the About section with background color and spacing adjustments
    <div className="    flex flex-col-reverse md:flex-row w-full itmes-center justify-center min-h-screen pb-[360px] md:pb-12 lg:pb-0 pt-12 md:pt-28 lg:pt-36 lg:px-20 bg-[#120C31]">

      {/* Left section: contains the image background and history text card */}
      <div className="relative w-[70%] md:w-[50%] lg:w-[40%]  ml-5 h-80 md:h-[500px] lg:h-[622px] bg-cover bg-center rounded-[38px] lg:rounded-[83px]" style={{ backgroundImage: "url('/aboutsec.jfif')" }}>
        {/* Decorative blurred background element positioned on the left side */}
        <div className=" hidden lg:block absolute top-48  lg:-left-44 w-64 h-72 bg-[#F4A0FF] opacity-[10%] blur-3xl rounded-[83px]"></div>
         {/* Decorative blurred background element positioned on the left side */}
        <div className="absolute top-56 -right-20 md:top-[180px]  md:-right-[275px] lg:top-[220px]  lg:-right-[340px] w-64 md:w-96 lg:w-[550px] md:h-80 lg:h-[402px] py-6 px-4 lg:py-8 lg:px-8  bg-opacity-90 bg-[#120C31]
         rounded-[16px] text-white  
          "
          style={{
            boxShadow: "inset 0px 6px 4px rgba(100, 219, 254, 0.2)"
          }}>
            {/* Title of the history section */}
          <h3 className=" text-center font-abhaya font-extrabold lg:text-[40px] mb-6">Our company history</h3>
           {/* Description paragraph about the company */}
          <p className='font-abhaya font-normal lg:text-[20px]'>
            We are a company specialized in advertising and digital business development, providing innovative solutions for creating websites and
            applications. We work to transform your ideas into distinctive digital experiences that contribute to enhancing your brand presence and
            expanding the scope of your business. Thanks to our team of experts, we design integrated websites and applications that meet your needs and
            achieve your goals
          </p>
        </div>

      </div>
         {/* Right section: contains the "About Us" title and a navigation button */}      
      <div className=" relative w-full md:w-[40%] flex flex-col items-center lg:mt-20">
         {/* "About Us" header with a blurred background effect */}
        <div className="relative">
            {/* Decorative blurred background behind the "About Us" title */}
          <div className="absolute inset-4 lg:inset-12 bg-[#2167FC] opacity-[100%] blur-3xl rounded-[83px] "></div>
           {/* "About Us" title */}
          <h3 className="font-aladin text-[50px] lg:text-[64px] lg:pr-28 text-white text-opacity-75 mb-8 relative z-10">About Us</h3>
        </div>
        {/* Downward arrow button for navigation, visible only on large screens */}
        <div className="absolute bottom-[50px] -right-4 hidden lg:block ">
          <button className=" bg-transparent border border-blue-300 text-white py-4 px-4 rounded-full  shadow-2xl hover:bg-white hover:text-blue-700 transition duration-300">
            <IoIosArrowRoundDown className="text-5xl " />
          </button>

        </div>
      </div>
      {/* Decorative blurred background element in the top right corner */}
      <div className=" absolute top-0 right-40 w-60 h-48 bg-[#F4A0FF] opacity-[10%] blur-3xl rounded-[83px]"></div>

    </div>

  );
}
