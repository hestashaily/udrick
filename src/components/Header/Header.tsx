"use client";

import {
  Bell,
  CalendarDays,
  Heart,
  House,
  HousePlus,
  LogOut,
  Mail,
  Menu,
  MessageSquareMore,
  Settings,
  User,
  UserCheck,
  Wallet,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function PopoverItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center w-full px-3 py-2 text-sm font-normal rounded-md hover:bg-muted transition">
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);
  const [role, setRole] = useState<string | null>(null);
  const login = true;
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, [role]);

  return (
    <div className="shadow-md border-b border-[#FCBE4B] py-3 w-full">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center font-normal text-base text-[#002855]">
          <ul className="flex items-center">
            <li>
              <Link
                href="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  pathname === "/"
                    ? "bg-[#936639] text-white"
                    : "hover:bg-[#936639] hover:text-white"
                }`}
              >
                <House className="h-5 w-5" />
                <span className="leading-none">Home</span>
              </Link>
            </li>

            <li className="h-6 border-l border-gray-400 mx-3" />

            <li>
              <Link
                href={
                  login && role === "buyer" ? "/saved-properties" : "/about"
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  pathname === (login ? "/saved-properties" : "/about")
                    ? "bg-[#936639] text-white"
                    : "hover:bg-[#936639] hover:text-white"
                }`}
              >
                {login && role === "buyer" ? (
                  <Heart className="h-5 w-5" />
                ) : login && role === "seller" ? (
                  <CalendarDays className="h-5 w-5" />
                ) : (
                  <UserCheck className="h-5 w-5" />
                )}
                <span className="leading-none">
                  {login && role === "buyer"
                    ? "Saved Property"
                    : login && role === "seller"
                    ? "Visit Request"
                    : "About Us"}
                </span>
              </Link>
            </li>

            <li className="h-6 border-l border-gray-400 mx-3" />

            <li>
              <Link
                href={login ? "chat" : "/contact"}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  pathname === (login ? "/chat" : "/contact")
                    ? "bg-[#936639] text-white"
                    : "hover:bg-[#936639] hover:text-white"
                }`}
              >
                {login ? (
                  <MessageSquareMore className="h-5 w-5" />
                ) : (
                  <Mail className="h-5 w-5" />
                )}

                <span className="leading-none">
                  {login ? "Chat" : "Contact Us"}
                </span>
              </Link>
            </li>

            <li
              className={`${role === "seller" && login ? "block" : "hidden"}`}
            >
              <Link
                href="/wallet"
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  pathname === "wallet"
                    ? "bg-[#936639] text-white"
                    : "hover:bg-[#936639] hover:text-white"
                }`}
              >
                <Wallet className="h-5 w-5" />

                <span className="leading-none">Wallet</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        {login ? (
          <>
            <div className="flex gap-4 items-center">
             
              {/* <Link href="/notification">
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-gradient-to-t from-[#A68A64] to-[#936639]">
                  <Bell size={18} color="white" />
                </div>
              </Link> */}

              {/* Notification Bell */}
<Link href={role === "seller" ? "/notification-seller" : "/notification"}>
  <div className="h-10 w-10 rounded-full flex justify-center items-center bg-gradient-to-t from-[#A68A64] to-[#936639]">
    <Bell size={18} color="white" />
  </div>
</Link>


              {/* Avatar with Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <div className="cursor-pointer">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </PopoverTrigger>

                {login && (
                  <PopoverContent className="w-56 p-2 space-y-1">
                    {/* Buyer-only */}
                    {role === "buyer" && (
                      <>
                        <Link href="/visit-request">
                          <PopoverItem
                            icon={<CalendarDays size={16} />}
                            label="Visit Request"
                          />
                        </Link>
                        <Link href="/saved-properties">
                          <PopoverItem
                            icon={<Heart size={16} />}
                            label="Save Property"
                          />
                        </Link>
                        <PopoverItem
                          icon={<HousePlus size={16} />}
                          label="Property History"
                        />
                      </>
                    )}

                    {/* Seller-only */}
                    {role === "seller" && (
                      <Link href="/my-properties">
                        <PopoverItem
                          icon={<CalendarDays size={16} />}
                          label="My Properties"
                        />
                      </Link>
                    )}

                    {/* Common Items */}

                    <Link href="/profile">
                      <PopoverItem icon={<User size={16} />} label="Profile" />
                    </Link>
                    <PopoverItem
                      icon={<Settings size={16} />}
                      label="Settings"
                    />
                    <PopoverItem icon={<LogOut size={16} />} label="Logout" />
                  </PopoverContent>
                )}
              </Popover>

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
            </div>
          </>
        ) : (
          <>
            <div className="hidden lg:flex gap-3">
              <button className="border text-[#936639] border-[#936639] bg-transparent rounded-xl px-3 py-2 font-medium text-sm lg:text-base">
                Post Property
              </button>
              <Link href="/auth/usertype">
                <button className="border bg-[#936639] text-white rounded-xl px-4 py-2 font-medium text-sm lg:text-base">
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
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
              {login ? (
                <Heart className="h-4 w-4" />
              ) : (
                <UserCheck className="h-4 w-4" />
              )}

              <span className="leading-none">
                {login ? "Saved Property" : "About Us"}
              </span>
            </Link>

            <Link
              href="/contact"
              onClick={toggleMenu}
              className="flex items-center gap-2 px-4 py-2 justify-start text-sm rounded-full hover:bg-[#936639] hover:text-white"
            >
              {login ? (
                <MessageSquareMore className="h-4 w-4" />
              ) : (
                <Mail className="h-4 w-4" />
              )}

              <span className="leading-none">
                {login ? "Chat" : "COntact Us"}
              </span>
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
