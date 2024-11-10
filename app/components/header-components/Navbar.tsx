"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Navlinks array for mapping
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Our Team" },
    { href: "#projects", label: "Our Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full overflow-x-hidden z-50">
      <nav className="relative w-full px-6 py-8 flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center pl-4">
          <Image src="/logo.png" alt="logo" width={45} height={35} className="mr-2" />
          <Link className="font-algerian text-3xl text-white" href="/">
            CODE FLOW
          </Link>
        </div>

        {/* Centered nav links, visible on medium and larger screens */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center md:gap-5 md:text-lg lg:gap-10 lg:text-[22px]">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar toggler icon, visible on small screens only */}
        <div className="lg:hidden flex items-center justify-end pr-4 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Animated Full-width Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } w-full bg-[#111827] shadow-lg transition-all duration-500 ease-in-out overflow-hidden`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <ul className="flex flex-col items-start py-4 px-6 space-y-4 text-lg text-white">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${pathname === href ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
