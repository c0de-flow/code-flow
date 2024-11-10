"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; 
import SectionTitle from "../sectionTitle/SectionTitle";

export default function Services() {
  return (
    // Main container with background color, full width, minimum screen height, and center alignment
    <div
      id="services"
      className="w-full min-h-screen bg-[#120C31] flex flex-col items-center justify-center pt-16 pb-5 md:pb-20 ml:pb-0"
    >
      {/* Services header with background glow */}
      <div className="relative ml:mr-14">
        <div className="absolute inset-4 ml:inset-3 bg-[#2167FC] opacity-[100%] blur-3xl"></div>
        <SectionTitle title="Services" />
      </div>

      {/* Container for service cards with responsive layout */}
      <div className="flex flex-col ml:flex-row items-center justify-center ml:pt-28 ml:space-x-14">
        {/* Marketing Service Card */}
        <motion.div
          className="w-64 md:w-96 ml:w-[400px] md:h-[500px] ml:h-[460px] px-4 text-white mt-[87px] flex flex-col items-center mb-20 ml:mb-0 gradient-border"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Image for Marketing service */}
          <Image
            src="/services/Marketing.png"
            alt="Web Application Icon"
            width={240}
            height={240}
            className="w-[240px]"
          />

          {/* Title with glow effect */}
          <div className="relative ml:mt-5">
            <div className="absolute inset-3 bg-[#2167FC] opacity-[900%] blur-3xl"></div>
            <h3 className="text-center font-abhaya font-extrabold ml:text-[30px]">
              Marketing
            </h3>
          </div>

          {/* Description for Marketing service */}
          <p className="font-abhaya font-normal ml:text-[16px] py-8 p-1 md:p-6 text-center">
            The process of promoting products or services, with the aim of
            attracting customers, increasing sales, and achieving their
            satisfaction.
          </p>
        </motion.div>

        {/* Web Application Service Card */}
        <motion.div
          className="w-64 md:w-96 ml:w-[450px] md:h-[490px] ml:h-[550px] py-6 px-4 ml:py- ml:px-8 rounded-[52px] text-white flex flex-col items-center my-0 md:my-20 ml:my-0 gradient-border"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Image for Web Application service */}
          <Image
            src="/services/wepSVG.png"
            alt="Web Application Icon"
            width={275}
            height={275}
            className="w-[275px]"
          />

          {/* Title with glow effect */}
          <div className="relative ml:mt-5">
            <div className="absolute inset-4 bg-[#2167FC] opacity-[100%] blur-3xl"></div>
            <h3 className="text-center font-abhaya font-extrabold ml:text-[35px]">
              Web Application
            </h3>
          </div>

          {/* Description for Web Application service */}
          <p className="font-abhaya font-normal ml:text-[16px] py-8 p-1 md:p-6 text-center">
            A program that runs over the Internet, and works through a web
            browser without the need to install it on the user&apos;s device.
          </p>
        </motion.div>

        {/* Mobile Application Service Card */}
        <motion.div
          className="w-64 md:w-96 ml:w-[400px] md:h-[400px] ml:h-[460px] md:px-4 rounded-[52px] text-white mt-[87px] flex flex-col items-center gradient-border"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Image for Mobile Application service */}
          <Image
            src="/services/phone-call.png"
            alt="Mobile Application Icon"
            width={250}
            height={250}
            className="w-[250px]"
          />

          {/* Title with glow effect */}
          <div className="relative ml:mt-5">
            <div className="absolute inset-3 bg-[#2167FC] opacity-[900%] blur-3xl"></div>
            <h3 className="text-center font-abhaya font-extrabold ml:text-[30px]">
              Mobile Application
            </h3>
          </div>

          {/* Description for Mobile Application service */}
          <p className="font-abhaya font-normal ml:text-[16px] py-8 p-1 md:p-6 text-center">
            These are programs specifically designed to run on mobile devices,
            such as smartphones and tablets.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
