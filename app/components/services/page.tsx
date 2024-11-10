"use client";
import { motion } from "framer-motion"; 
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
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
      <div className=" w-full flex flex-col ml:flex-row items-center justify-center ml:pt-28 ml:space-x-14">
        {/* Marketing Service Card */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ServiceCard
            imgSrc="/services/Marketing.png"
            altText="Marketing Service"
            title="Marketing"
            description="The process of promoting products or services, with the aim of attracting customers, increasing sales, and achieving their satisfaction."
            width="00px"
            height="500px"
            padding="py-6 px-4"
          />
        </motion.div>

        {/* Web Application Service Card */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ServiceCard
            imgSrc="/services/wepSVG.png"
            altText="Web Application Service"
            title="Web Application"
            description="A program that runs over the Internet, and works through a web browser without the need to install it on the user's device."
            width="240px"
            height="230px"
            padding="py-2 px-2"
          />
        </motion.div>

        {/* Mobile Application Service Card */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ServiceCard
            imgSrc="/services/phone-call.png"
            altText="Mobile Application Service"
            title="Mobile Application"
            description="These are programs specifically designed to run on mobile devices, such as smartphones and tablets."
            width="200px"
            height="460px"
            padding="py-6 px-4"
          />
        </motion.div>
      </div>
    </div>
  );
}
