"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../sectionTitle/SectionTitle";
import ChoiceBox from "./choiceBox";
import MobileSection from "./aboutmobile";
import DesktopSection from "./aboutDesktop";

export default function About() {
  // Motion variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Motion variants for choice box animation
  const choiceBoxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-bodyBackground pt-56 pb-20 flex flex-col"
    >
      <div className="relative flex justify-center pb-20 md:pb-40 ml:pb-0 ml:pl-64">
        <SectionTitle title="About Us" className="text-5xl" />
      </div>

      <div className="w-full flex flex-col ml:flex-row justify-center pl-10 ml:pl-8 ml:mt-0">
        <div className="block ml:hidden">
          <MobileSection />
        </div>

        <div className="hidden ml:block">
          <DesktopSection />
        </div>

        {/* Text section with animation */}
        <motion.div
          className="w-full ml:w-[45%] flex flex-col ml:pl-20 mb-40"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          <div className="w-full text-white font-abhaya text-[20px] pt-20 md:pt-56 ml:pt-10">
            <p>
              We are a company specialized in advertising and digital business
              development, providing innovative solutions for creating websites
              and applications. We work to transform your ideas into distinctive
              digital experiences that contribute to enhancing your brand
              presence and expanding the scope of your business. Thanks to our
              team of experts, we design integrated websites and applications
              that meet your needs and achieve your goals.
            </p>
          </div>

          {/* Section with choice boxes */}
          <motion.div
            className="hidden ml:flex flex-col items-center mt-24"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            <SectionTitle title="Why choose" className="text-5xl" />
            <div className="flex space-x-4 md:space-x-16 mt-20">
              {/* Animate each choice box */}
              <motion.div variants={choiceBoxVariants}>
                <ChoiceBox text="Quality" className="text-4xl w-32 h-32" />
              </motion.div>
              <motion.div variants={choiceBoxVariants}>
                <ChoiceBox text="Trust" className="text-4xl w-32 h-32" />
              </motion.div>
              <motion.div variants={choiceBoxVariants}>
                <ChoiceBox text="Fast" className="text-4xl w-32 h-32" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
