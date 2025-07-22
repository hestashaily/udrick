"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft, BadgeQuestionMark, CircleDollarSign, FileText, House, KeyRound, ReceiptText, Shield, Trash, User } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // optional but helps clean up classes

const links = [
  { href: "/profile", label: "Personal Information" ,icon:<User/> },
  { href: "/profile/property-history", label: "Property History", icon:<House/> },
  { href: "/profile/orders", label: "Refunds" , icon:<CircleDollarSign/>},
  { href: "/profile/id-proof", label: "Uploaded ID Proof" , icon:<FileText/>},
  { href: "/profile/reset-password", label: "Reset Password" ,icon:<KeyRound/> },
    { href: "/profile/privacy", label: "Help & Feedback", icon:<BadgeQuestionMark/> },
  { href: "/profile/prvacy", label: "Privacy Policy" ,icon:<Shield/> },
  { href: "/profile/terms", label: "Terms & Conditions", icon:<ReceiptText/> },
  { href: "/profile/delete", label: "Delete Account",icon:<Trash/> },
];

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="shadow">
        <div className="container mx-auto px-4">
          <Link href="/">
            <div className="flex gap-6 py-6 items-center">
              <ArrowLeft size={18} />
              <h3 className="font-bold text-3xl text-[#0d0d0c]">My Account</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto flex gap-4 p-4 flex-1">
        {/* Sidebar */}
        <div className="w-1/5 border flex flex-col p-4 space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "p-3 rounded-2xl flex items-center gap-4 transition text-sm font-medium ",
                  "hover:text-white hover:bg-gradient-to-t hover:from-[#A68A64] hover:to-[#936639]",
                  {
                    "text-white bg-gradient-to-t from-[#A68A64] to-[#936639]":
                      isActive,
                    "text-[#0d0d0c]": !isActive,
                  }
                )}
              >
                {link.icon}{link.label}
              </Link>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div className="w-4/5 pl-4 ">{children}</div>
      </div>
    </div>
  );
}
