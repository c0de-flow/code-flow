"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "@/app/constants/TeamMembers";
import SectionTitle from "../sectionTitle/SectionTitle";
import EllipseBackground from "../ellipse/EllipseBackground";
import MobileTeamMemberCard from "./MobileTeamMemberCard";

const Team = () => {
  // State to keep track of the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col justify-center items-center py-40 relative">
      <div className="relative mb-20 md:mb-60">
        <SectionTitle title="Our Team" />
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

      {/* Desktop team member cards */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-40 text-white">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>

      {/* Mobile team member slider */}
      <div className="block md:hidden text-white w-full px-4">
        <Swiper
          spaceBetween={32}
          slidesPerView={2}
          centeredSlides={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "scale-110 mt-4" : "scale-90 mt-4"
                }`}
              >
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