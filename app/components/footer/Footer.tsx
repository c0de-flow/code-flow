import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import FooterLinks from "./FooterLinks";
import EllipseBackground from "../ellipse/EllipseBackground";
import SocialMediaIcon from "../SocialMediaIcon";

const socialMediaLinks = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaWhatsapp, label: "WhatsApp" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-footer-bg bg-cover bg-center bg-no-repeat border-t border-borderColor text-white flex flex-col justify-center items-center gap-4 py-20 relative overflow-hidden">
      {/* Background ellipses */}
      <EllipseBackground
        width="150px"
        height="150px"
        left="300px"
        top="120px"
        backgroundColor="#F4A0FF"
        otherClasses="hidden md:block"
      />
      <EllipseBackground
        width="150px"
        height="150px"
        bottom="0"
        right="0"
        backgroundColor="#F4A0FF"
        otherClasses="hidden md:block"
      />

      {/* Main footer content */}
      <div className="w-full flex justify-center items-center">
        {/* Left side section with Logo and title */}
        <div className="flex flex-col justify-center items-center gap-5">
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
          <div className="flex justify-center items-center gap-x-4 md:hidden">
            {socialMediaLinks.map(({ Icon, label }) => (
              <SocialMediaIcon key={label} Icon={Icon}/>
            ))}
          </div>
        </div>

        {/* Vertical Line */}
        {/* Vertical divider between the left and right sections */}
        <div className="border-l border-borderColor h-48 mx-5 ml:mx-10" />

        {/* Right side section with sections, support email, and socials */}
        <div className="flex flex-col justify-center items-start gap-5">
          {/* Footer links displayed as a list of navigation items */}
          <FooterLinks />

          {/* Support email shown only on medium and larger screens */}
          <div className="hidden md:block">
            <span className="text-xl">Support: CodeFlow@gmail.com</span>
          </div>

          {/* Social Media Icons shown only on medium and larger screens */}
          <div className="hidden md:flex justify-center items-center gap-x-20">
            {socialMediaLinks.map(({ Icon, label }) => (
              <SocialMediaIcon key={label} Icon={Icon}/>
            ))}
          </div>

          {/* Footer text with copyright notice shown only on medium and larger screens */}
          <div className="hidden md:block">
            <p className="font-abhaya">© 2024 All rights reserved to Code Flow</p>
          </div>
        </div>
      </div>

      {/* Support email displayed only on small screens */}
      <div className="md:hidden">
        <span>Support: CodeFlow@gmail.com</span>
      </div>

      {/* Footer text with copyright notice displayed only on small screens */}
      <div>
        <p className="font-abhaya md:hidden">© 2024 All rights reserved to Code Flow</p>
      </div>
    </footer>
  );
};

export default Footer;
