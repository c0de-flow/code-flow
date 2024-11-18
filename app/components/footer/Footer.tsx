"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import FooterLinks from "./FooterLinks";
import EllipseBackground from "../ellipse/EllipseBackground";
import SocialMediaIcon from "./SocialMediaIcon";
import { motion } from "framer-motion";

// Updated social media links with URLs
const socialMediaLinks = [
  {
    Icon: FaFacebookF,
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61568119766018",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/code.flow_/",
  },
  { Icon: FaWhatsapp, label: "WhatsApp", url: "https://wa.me/+201070035077" },
  { Icon: FaLinkedinIn, label: "LinkedIn", url: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="bg-footer-bg bg-cover bg-center bg-no-repeat border-t border-borderColor text-white flex flex-col justify-center items-center gap-4 py-20 relative overflow-hidden">
      {/* Background ellipses */}
      <EllipseBackground
        width="150px"
        height="150px"
        backgroundColor="#F4A0FF"
        otherClasses="hidden md:block absolute top-[120px] left-[300px]"
      />

      <EllipseBackground
        width="150px"
        height="150px"
        backgroundColor="#F4A0FF"
        otherClasses="hidden md:block absolute bottom-0 right-0"
      />

      {/* Main footer content */}
      <div className="w-full flex justify-center items-center">
        {/* Left side section with Logo and title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center gap-5"
        >
          {/* Logo and title aligned horizontally */}
          <div className="flex justify-center items-center gap-3">
            <div>
              <Image
                src={"/logo.png"}
                alt="logo"
                width={65}
                height={50}
                className="w-full"
              />
            </div>
            <div>
              {/* Title with dynamic text size for responsiveness */}
              <h2 className="font-cherry text-xl md:text-3xl ml:text-5xl text-nowrap">
                Code Flow
              </h2>
            </div>
          </div>

          {/* Social media icons shown only on small screens */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center items-center gap-x-4 md:hidden"
          >
            {socialMediaLinks.map(({ Icon, label, url }) => (
              <SocialMediaIcon key={label} Icon={Icon} url={url} />
            ))}
          </motion.div>
        </motion.div>

        {/* Vertical Line */}
        {/* Vertical divider between the left and right sections */}
        <div className="border-l border-borderColor h-48 mx-5 ml:mx-10" />

        {/* Right side section with sections, support email, and socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-start gap-5"
        >
          {/* Footer links displayed as a list of navigation items */}
          <FooterLinks />

          {/* Support email shown only on medium and larger screens */}
          <div className="hidden md:block">
            <span className="text-xl">Support: CodeFlow@gmail.com</span>
          </div>

          {/* Social Media Icons shown only on medium and larger screens */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden md:flex justify-center items-center gap-x-20"
          >
            {socialMediaLinks.map(({ Icon, label, url }) => (
              <SocialMediaIcon key={label} Icon={Icon} url={url} />
            ))}
          </motion.div>

          {/* Footer text with copyright notice shown only on medium and larger screens */}
          <div className="hidden md:block">
            <p className="font-abhaya">
              © 2024 All rights reserved to Code Flow
            </p>
          </div>
        </motion.div>
      </div>

      {/* Support email displayed only on small screens */}
      <div className="md:hidden">
        <span>Support: CodeFlow@gmail.com</span>
      </div>

      {/* Footer text with copyright notice displayed only on small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="font-abhaya md:hidden">
          © 2024 All rights reserved to Code Flow
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
