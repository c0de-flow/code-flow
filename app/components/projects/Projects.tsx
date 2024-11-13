"use client";

import { motion } from "framer-motion";
import SectionTitle from "../sectionTitle/SectionTitle";
import EllipseBackground from "../ellipse/EllipseBackground";
import ProjectsCardDesktop from "./ProjectsCardDesktop";
import ProjectsCardMobile from "./ProjectsCardMobile";
import projectCard from "@/app/constants/ProjectsCards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="md:px-10 lg:px-40 xl:px-60 flex flex-col justify-center items-center py-20 relative"
    >
      {/* Animated Section Title with scroll trigger */}
      <div className="relative md:mb-20">
        <SectionTitle title="Our Projects" />
        <EllipseBackground
          width="395px"
          height="395px"
          backgroundColor="rgba(33, 103, 252, 0.1)"
          opacity={1}
          blur="130px"
          top="-300px"
          left="-150px"
        />
      </div>

      {/* Desktop project cards with scroll animation */}
      <div className="hidden md:flex flex-col items-center justify-start gap-10 text-white w-full overflow-hidden">
        {projectCard.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="w-full"
          >
            <ProjectsCardDesktop card={card} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Mobile project cards with scroll fade in animation */}
      <div className="flex flex-col gap-8 items-center w-full custom-container md:hidden">
        {projectCard.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <ProjectsCardMobile card={card} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
