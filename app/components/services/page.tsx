import React from 'react'

export default function Services() {
  return (
    // Main container with background color, full width, minimum screen height, and center alignment
    <div id='Services' className='w-full min-h-screen bg-[#120C31] flex flex-col items-center justify-center pt-16 pb-5 md:pb-20 lg:pb-0 '>
      
      {/* Services header with background glow */}
      <div className="relative lg:mr-14">
        <div className="absolute inset-4 lg:inset-3 bg-[#2167FC] opacity-[100%] blur-3xl"></div>
        <h3 className="font-aladin text-[50px] lg:text-[48px] text-white text-opacity-75 relative">Services</h3>
      </div>
      
      {/* Container for service cards with responsive layout */}
      <div className='flex flex-col lg:flex-row items-center justify-center lg:pt-28 lg:space-x-14'>

        {/* Marketing Service Card */}
        <div className="w-64 md:w-96 lg:w-[400px] md:h-[500px] lg:h-[460px] px-4 text-white mt-[87px] flex flex-col items-center mb-20 lg:mb-0 gradient-border">
          {/* Image for Marketing service */}
          <img src="/services/Marketing.png" alt="Web Application Icon" className="w-[240px]" />

          {/* Title with glow effect */}
          <div className="relative lg:mt-5">
            <div className="absolute inset-3 bg-[#2167FC] opacity-[900%] blur-3xl"></div>
            <h3 className="text-center font-abhaya font-extrabold lg:text-[30px]">Marketing</h3>
          </div>

          {/* Description for Marketing service */}
          <p className='font-abhaya font-normal lg:text-[16px] py-8 p-1 md:p-6 text-center'>
            The process of promoting products or services, with the aim of attracting customers, increasing sales, and achieving their satisfaction
          </p>
        </div>

        {/* Web Application Service Card */}
        <div className="w-64 md:w-96 lg:w-[450px] md:h-[490px] lg:h-[550px] py-6 px-4 lg:py- lg:px-8 rounded-[52px] text-white flex flex-col items-center my-0 md:my-20 lg:my-0 gradient-border">
          {/* Image for Web Application service */}
          <img src="/services/wepSVG.png" alt="Web Application Icon" className="w-[275px]" />

          {/* Title with glow effect */}
          <div className="relative lg:mt-5">
            <div className="absolute inset-4 bg-[#2167FC] opacity-[100%] blur-3xl"></div>
            <h3 className="text-center font-abhaya font-extrabold lg:text-[35px]">Web Application</h3>
          </div>

          {/* Description for Web Application service */}
          <p className='font-abhaya font-normal lg:text-[16px] py-8 p-1 md:p-6 text-center'>
            A program that runs over the Internet, and works through a web browser without the need to install it on the user's device
          </p>
        </div>

        {/* Mobile Application Service Card */}
        <div className="w-64 md:w-96 lg:w-[400px] md:h-[400px] lg:h-[460px] md:px-4 rounded-[52px] text-white mt-[87px] flex flex-col items-center  gradient-border">
          {/* Image for Mobile Application service */}
          <img src="/services/phone-call.png" alt="Mobile Application Icon" className="w-[250px]  " />

          {/* Title with glow effect */}
          <div className="relative lg:mt-5">
            <div className="absolute inset-3 bg-[#2167FC] opacity-[900%] blur-3xl"></div>
            <h3 className="text-center font-abhaya font-extrabold lg:text-[30px]">Mobile Application</h3>
          </div>

          {/* Description for Mobile Application service */}
          <p className='font-abhaya font-normal lg:text-[16px] py-8 p-1 md:p-6 text-center'>
            These are programs specifically designed to run on mobile devices, such as smartphones and tablets
          </p>
        </div>

      </div>

    </div>
  )
  }