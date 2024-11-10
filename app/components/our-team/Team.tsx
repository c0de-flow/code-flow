"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "@/app/constants/TeamMembers";
import SectionTitle from "../sectionTitle/SectionTitle";
import EllipseBackground from "../ellipse/EllipseBackground";
import MobileTeamMemberCard from "./MobileTeamMemberCard";
import { Pagination, Autoplay } from "swiper/modules";

const Team = () => {
  // State to keep track of the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="team"
      className="flex flex-col justify-center items-center py-20 relative"
    >
      <div className="relative md:mb-20">
        <SectionTitle title="Our Team" />
        <EllipseBackground blur="130px" top="-300px" left="-150px" />
      </div>

      {/* Desktop team member cards */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-40 text-white mt-40">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <TeamMemberCard
              name={member.name}
              role={member.role}
              imgSrc={member.imgSrc}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile team member slider */}
      <div className="block md:hidden text-white w-full px-4">
        {/* Swiper styles and functionalities */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={2}
          centeredSlides={true}
          pagination={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {/* Mapping over the team members for mobile screen card component */}
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "scale-110 mt-4" : "scale-90 mt-4"
                }`}
              >
                {/* Mobile cards component styles */}
                <MobileTeamMemberCard
                  name={member.name}
                  role={member.role}
                  imgSrc={member.imgSrc}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
