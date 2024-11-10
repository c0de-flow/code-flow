import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Our Team" },
    { href: "#projects", label: "Our Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2 ml:gap-5 text-center text-xs md:text-ml ml:text-xl">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="font-abhaya text-[22px] text-borderColor"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
