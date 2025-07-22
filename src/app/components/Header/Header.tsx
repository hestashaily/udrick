"use client";

import { House, Mail, Menu, UserCheck, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="shadow py-3 w-full">
      <header className="flex items-center justify-between  px-4 lg:px-0  mx-auto container">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/header/logo.svg"
              alt="logo"
              height={50}
              width={125}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="w-6 h-6 text-[#936639]" />
            ) : (
              <Menu className="w-6 h-6 text-[#936639]" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center font-normal text-base text-[#002855]">
          <ul className="flex items-center">
            <li>
              <Link
                href="/home"
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  pathname === "/home"
                    ? "bg-[#936639] text-white"
                    : "hover:bg-[#936639] hover:text-white"
                }`}
              >
                <House className="h-5 w-5" />
                Home
              </Link>
            </li>

            <li className="h-6 border-l border-gray-400 mx-3" />

            <li>
              <Link
                href="/about"
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  pathname === "/about"
                    ? "bg-[#936639] text-white"
                    : "hover:bg-[#936639] hover:text-white"
                }`}
              >
                <UserCheck className="h-5 w-5" />
                About Us
              </Link>
            </li>

            <li className="h-6 border-l border-gray-400 mx-3" />

            <li>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#936639] hover:text-white"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <button className="border text-[#936639] border-[#936639] bg-transparent rounded-xl px-3 py-2 font-medium text-sm lg:text-base">
            Post Property
          </button>
          <button className="border bg-[#936639] text-white rounded-xl px-4 py-2 font-medium text-sm lg:text-base">
            Login
          </button>
        </div>
      </header>

      {/* Mobile Sheet Style Menu */}
      <div className="lg:hidden">
        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0  bg-black/30 z-40"
            onClick={toggleMenu}
          />
        )}

        {/* Sliding Sheet */}
        <div
          className={`fixed top-0 right-0 h-full w-1/2 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex flex-col gap-4 text-[#002855]">
            <button
              onClick={toggleMenu}
              className="self-end text-[#936639]"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <Link
              href="/"
              onClick={toggleMenu}
              className="flex items-center justify-start gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#9c6b3c] to-[#b38758] text-white w-full"
            >
              <House className="h-4 w-4" />
              <span className="leading-none">Home</span>
            </Link>

            <Link
              href="/about"
              onClick={toggleMenu}
              className="flex items-center justify-start gap-2 px-4 py-2  text-sm rounded-full hover:bg-[#936639] hover:text-white"
            >
              <UserCheck className="h-4 w-4" />
              <span className="leading-none">About Us</span>
            </Link>

            <Link
              href="/contact"
              onClick={toggleMenu}
              className="flex items-center gap-2 px-4 py-2 justify-start text-sm rounded-full hover:bg-[#936639] hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span className="leading-none">Contact Us</span>
            </Link>

            <div className="flex flex-col gap-2 mt-3">
              <button className="border text-[#936639] border-[#936639] bg-transparent rounded-xl px-3 py-2 font-medium text-sm">
                Post Property
              </button>
              <button className="border bg-[#936639] text-white rounded-xl px-4 py-2 font-medium text-sm">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
