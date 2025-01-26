"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearch,
  IoPersonOutline,
} from "react-icons/io5";
import Link from "next/link";
import { MdPayment } from 'react-icons/md';
export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className={isHomePage ? "bg-amber-100" : "bg-white"}>
      <header className="text-black">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Navigation Links - Centered */}
          <nav className="flex flex-1 justify-center items-center gap-12 md:gap-16">
            <Link className="hover:text-blue" href="/">
              Home
            </Link>
            <Link className="hover:text-blue" href="/shop">
              Shop
            </Link>
            <Link className="hover:text-blue" href="/about">
              About
            </Link>
            <Link className="hover:text-blue" href="/contact">
              Contact
            </Link>
          </nav>

          {/* Icon Section */}
          <div className="flex items-center gap-8 md:gap-10">
            <ul className="flex gap-6 md:gap-8">
              <li>
                <Link href="/account">
                  <IoPersonOutline className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/search">
                  <IoSearch className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/favorite">
                  <IoHeartOutline className="text-black text-xl" size={24} />
                </Link>
              </li>
              <li>

             
                <Link href="/checkout">
                  < MdPayment className="text-black text-xl" size={24} />
                </Link>
              </li>
              <li>
                <Link href="/trolley">
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
