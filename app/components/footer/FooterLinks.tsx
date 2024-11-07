import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  const links = [
    { href: "#", label: "Home" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Services" },
    { href: "#", label: "Our Team" },
    { href: "#", label: "Our Business" },
    { href: "#", label: "Contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2 lg:gap-5 text-center text-xs md:text-lg lg:text-xl">
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
