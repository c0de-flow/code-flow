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
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/business", label: "Our Business" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full overflow-x-hidden z-50">
      <nav className="w-full px-4 py-14 flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center justify-start pl-20">
          <Image src="/logo.png" alt="logo" width={45} height={35} className="mr-2" />
          <Link className="font-algerian text-3xl text-white" href="/">
            CODE FLOW
          </Link>
        </div>

        {/* Centered nav links */}
        <div className="flex-grow flex justify-center">
          <ul className="flex items-center gap-10 text-[22px]">
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

        {/* Navbar toggler icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none mobile-menu-button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 main-theme-color inline-block"
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

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col">
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
      </nav>
    </header>
  );
};

export default Navbar;
