"use client";
import { motion } from "framer-motion";
import SectionTitle from "../sectionTitle/SectionTitle";
import ChoiceBox from "./choiceBox";
import Image from "next/image";

export default function MobileSection(): JSX.Element {
  // Motion variants for image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
    <div className="w-[90%] flex items-center justify-center">
      <div className="relative border-custom h-[220px] w-[70%]">
        {/* Image 1 with animation */}
        <motion.div
          className="absolute -top-10 -left-12 w-full h-40 bg-bodyBackground z-10"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
        >
          <Image
            src="/about/imageAboutMobail.png"
            alt="Image 1"
            className="absolute -top-29 scale-125 left-5 z-40 transform translate-x-3 -translate-y-2 rounded-md"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Image 2 with animation */}
        <motion.img
          src="/about/imageAboutMobail2.png"
          alt="Image 2"
          className="absolute -bottom-0 -right-9 scale-110 z-30 transform -translate-x-4 translate-y-4 rounded-md"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
        />
      </div>

      {/* Choice Boxes with animation */}
      <div className="flex flex-col items-center ml-10 ml:hidden w-[35%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
        >
          <SectionTitle title="Why choose" className="text-[20px]" />
        </motion.div>
        <div className="flex flex-col space-y-5 mt-7">
          <motion.div variants={choiceBoxVariants}>
            <ChoiceBox text="Quality" className="text-xl w-16 h-20 px-10" />
          </motion.div>
          <motion.div variants={choiceBoxVariants} transition={{ delay: 0.2 }}>
            <ChoiceBox text="Trust" className="text-xl w-16 h-20 px-10" />
          </motion.div>
          <motion.div variants={choiceBoxVariants} transition={{ delay: 0.4 }}>
            <ChoiceBox text="Fast" className="text-xl w-16 h-20 px-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
