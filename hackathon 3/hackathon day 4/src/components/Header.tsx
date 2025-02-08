"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCartOutline, IoHeartOutline, IoSearch, IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import { MdPayment } from "react-icons/md";

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div className={isHomePage ? "bg-amber-100" : "bg-white"}>
      <header className="text-black">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <button
              className="text-black text-xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          )}

          {/* Navigation Links - Centered */}
          <nav
            className={`${
              isMobile ? (isOpen ? "flex" : "hidden") : "flex"
            } flex-1 justify-center items-center gap-12 md:gap-16 transition-all duration-300`}
          >
            <Link href="/" onClick={handleLinkClick} className="hover:text-blue">
              Home
            </Link>
            <Link href="/shop" onClick={handleLinkClick} className="hover:text-blue">
              Shop
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="hover:text-blue">
              About
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="hover:text-blue">
              Contact
            </Link>
          </nav>

          {/* Icon Section */}
          <div className="flex items-center gap-8 md:gap-10">
            <ul className="flex gap-6 md:gap-8">
              <li>
                <Link href="/account" aria-label="Account">
                  <IoPersonOutline className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/search" aria-label="Search">
                  <IoSearch className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/favorite" aria-label="Favorites">
                  <IoHeartOutline className="text-black text-xl" size={24} />
                </Link>
              </li>
              <li>
                <Link href="/checkout" aria-label="Checkout">
                  <MdPayment className="text-black text-xl" size={24} />
                </Link>
              </li>
              <li>
                <Link href="/trolley" aria-label="Cart">
                  <IoCartOutline className="text-black text-xl" size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
