"use client";

import {
  // Bell,
  // CalendarDays,
  // Heart,
  // House,
  // HousePlus,
  // LogOut,
  // Mail,
  // Menu,
  // MessageSquareMore,
  // Settings,
  // User,
  // UserCheck,
  // Wallet,
  // X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// function PopoverItem({
//   icon,
//   label,
// }: {
//   icon: React.ReactNode;
//   label: string;
// }) {
//   return (
//     <button className="flex items-center w-full px-3 py-2 text-sm font-normal rounded-md hover:bg-muted transition">
//       <span className="mr-2">{icon}</span>
//       {label}
//     </button>
//   );
// }

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const pathname = usePathname();
  // const [login, setLogin] = useState(false);
  // const [role, setRole] = useState<string | null>(null);
  // useEffect(() => {
  //   const storedRole = localStorage.getItem("role");
  //   setRole(storedRole);
  //   setLogin(!!storedRole);
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("role");
  //   setRole(null);
  //   setLogin(false);

  //   window.location.href = "/";
  // };

  // const toggleMenu = () => setIsOpen(!isOpen);

  //  Define nav items based on login & role
  // let navItems: { href: string; label: string; icon: React.ReactNode }[] = [];

  // if (!login) {
  //   navItems = [
  //     { href: "/", label: "Home", icon: <House className="h-5 w-5" /> },
  //     {
  //       href: "/about",
  //       label: "About Us",
  //       icon: <UserCheck className="h-5 w-5" />,
  //     },
  //     {
  //       href: "/contact",
  //       label: "Contact Us",
  //       icon: <Mail className="h-5 w-5" />,
  //     },
  //   ];
  // } else if (role === "buyer") {
  //   navItems = [
  //     { href: "/", label: "Home", icon: <House className="h-5 w-5" /> },
  //     {
  //       href: "/saved-properties",
  //       label: "Saved Property",
  //       icon: <Heart className="h-5 w-5" />,
  //     },
  //     {
  //       href: "/chat",
  //       label: "Chat",
  //       icon: <MessageSquareMore className="h-5 w-5" />,
  //     },
  //   ];
  // } else if (role === "seller") {
  //   navItems = [
  //     { href: "/", label: "Home", icon: <House className="h-5 w-5" /> },
  //     {
  //       href: "/seller-visit-request",
  //       label: "Visit Request",
  //       icon: <CalendarDays className="h-5 w-5" />,
  //     },
  //     {
  //       href: "/chat",
  //       label: "Chat",
  //       icon: <MessageSquareMore className="h-5 w-5" />,
  //     },
  //     {
  //       href: "/wallet",
  //       label: "Wallet",
  //       icon: <Wallet className="h-5 w-5" />,
  //     },
  //   ];
  // }

  return (
    <div className="shadow-md border-b border-[#FCBE4B] py-3 w-full fixed top-0 bg-white z-50">
      {/* // <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-[#FCBE4B] py-3"> */}

      <header className="flex items-center justify-between px-4 lg:px-0 mx-auto container">
        {/*  Logo */}
        <Link href="/">
          <Image
            src="/header/logo.svg"
            alt="logo"
            height={50}
            width={125}
            className="object-cover"
          />
        </Link>

        {/*  Desktop Navigation */}
        {/* <nav className="hidden lg:flex items-center font-normal text-base text-[#002855]">
          <ul className="flex items-center gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    pathname === item.href
                      ? "bg-[#936639] text-white"
                      : "hover:bg-[#936639] hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* Right Side Actions */}
        {/* <div className="flex gap-4 items-center">
          {login ? (
            <>
              <Link
                href={
                  role === "seller" ? "/notification-seller" : "/notification"
                }
              >
                <div className="h-10 w-10 relative rounded-full flex justify-center items-center bg-gradient-to-t from-[#A68A64] to-[#936639]">
                  <div className="absolute h-3 w-3 rounded-full bg-[#EF9D30] top-2 right-2" />
                  <Bell size={20} color="white" fill="white" />
                </div>
              </Link>

              <Popover>
                <PopoverTrigger asChild>
                  <div className="cursor-pointer">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-56 p-2 space-y-1">
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
                          label="Saved Property"
                        />
                      </Link>
                      <PopoverItem
                        icon={<HousePlus size={16} />}
                        label="Property History"
                      />
                    </>
                  )}

                  {role === "seller" && (
                    <Link href="/my-properties">
                      <PopoverItem
                        icon={<CalendarDays size={16} />}
                        label="My Properties"
                      />
                    </Link>
                  )}

                  <Link href="/profile">
                    <PopoverItem icon={<User size={16} />} label="Profile" />
                  </Link>
                  <PopoverItem icon={<Settings size={16} />} label="Settings" />
                  <div onClick={handleLogout}>
                    <PopoverItem icon={<LogOut size={16} />} label="Logout" />
                  </div>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <div className="hidden lg:flex gap-3">
              <button className="border text-[#936639] border-[#936639] bg-transparent rounded-xl px-3 py-2 font-medium text-sm">
                Post Property
              </button>
              <Link href="/auth/usertype">
                <button className="border bg-[#936639] text-white rounded-xl px-4 py-2 font-medium text-sm">
                  Login
                </button>
              </Link>
            </div>
          )}

         
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="lg:hidden"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#936639]" />
            ) : (
              <Menu className="w-6 h-6 text-[#936639]" />
            )}
          </button>
        </div> */}
      </header>

      {/*  Mobile Sliding Sheet */}
      {/* <div className="lg:hidden">
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-60 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex flex-col gap-4 text-[#002855]">
            <button onClick={toggleMenu} className="self-end text-[#936639]">
              <X className="w-6 h-6" />
            </button>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#936639] hover:text-white"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {!login && (
              <div className="flex flex-col gap-2 mt-3">
                <button className="border text-[#936639] border-[#936639] bg-transparent rounded-xl px-3 py-2 font-medium text-sm">
                  Post Property
                </button>
                <Link href="/auth/usertype">
                  <button className="border w-full bg-[#936639] text-white rounded-xl px-4 py-2 font-medium text-sm">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
