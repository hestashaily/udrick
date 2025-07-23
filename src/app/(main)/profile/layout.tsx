"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  ArrowLeft,
  BadgeAlert,
  BadgeQuestionMark,
  CircleDollarSign,
  FileText,
  House,
  KeyRound,
  LockKeyhole,
  ReceiptText,
  Shield,
  Trash,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const links = [
  { href: "/profile", label: "Personal Information", icon: <User /> },
  {
    href: "/profile/property-history",
    label: "Property History",
    icon: <House />,
  },
  { href: "/profile/refund", label: "Refunds", icon: <CircleDollarSign /> },
  { href: "/profile/id-proof", label: "Uploaded ID Proof", icon: <FileText /> },
  {
    href: "/profile/reset-password",
    label: "Reset Password",
    icon: <KeyRound />,
  },
  {
    href: "/profile/faq-support",
    label: "FAQ’s & Support ",
    icon: <BadgeQuestionMark />,
  },
  { href: "/profile/prvacy", label: "Privacy Policy", icon: <Shield /> },
  {
    href: "/profile/terms",
    label: "Terms & Conditions",
    icon: <ReceiptText />,
  },
  { href: "/profile/delete", label: "Delete Account", icon: <Trash /> },
];

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");

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
            const isDelete = link.label === "Delete Account";
            const handleClick = (e: React.MouseEvent) => {
              if (isDelete) {
                e.preventDefault(); // Prevent navigation
                setShowDeleteDialog(true);
              }
            };
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className={clsx(
                  "p-3 rounded-2xl flex items-center gap-4 transition text-sm font-medium",
                  {
                    "bg-gradient-to-t from-[#A68A64] to-[#936639] text-white":
                      isActive && !isDelete,
                    "hover:text-white hover:bg-gradient-to-t hover:from-[#A68A64] hover:to-[#936639]":
                      !isDelete,
                    "text-red-600": isDelete && !isActive,
                    "hover:text-white hover:bg-red-600": isDelete,
                    "bg-red-600 text-white": isDelete && isActive,
                    "text-[#0d0d0c]": !isActive && !isDelete,
                  }
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div className="w-4/5 pl-4 ">{children}</div>
      </div>

      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader className="flex items-center">
            <Image
              src="/deleteaccount/delete.svg"
              alt="delete"
              height={50}
              width={50}
              className="flex items-center justify-center"
            />
            <DialogTitle className="text-lg font-semibold text-center">
              Are you sure you want to delete your account?
            </DialogTitle>
          </DialogHeader>
          <div>
            <ul>
              <li>
                This action is irreversible. You will lose access to your
                account, all restaurant data, order history, and earnings.
              </li>
              <li>
                Pending transactions and withdrawals must be completed before
                account deletion.
              </li>
            </ul>
          </div>
          <div className="flex justify-center flex-col gap-4 mt-4">
            <button
              onClick={() => {
                // Handle actual delete logic here
                // alert("Account deleted");
                setShowDeleteDialog(false);
                setShowPasswordDialog(true);
              }}
              className="px-4 py-2 w-full bg-red-600 text-white rounded-lg"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setShowDeleteDialog(false)}
              className="px-4 py-2 border w-full rounded-lg"
            >
              Cancel
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-sm p-4 le flex items-start justify-start mt-6 bg-[#F44336] rounded-2xl text-white font-normal text-center">
              <BadgeAlert className="" size={30} />{" "}
              <span className="mt-1">
                Deleting your account is permanent. You will lose access to all
                your data, order history, and earnings.
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="">
            <div>
              <label className="font-bold text-lg text-[#515151]">
                Enter Password
              </label>
              <p className="text-[#888888] font-normal text-sm">
                Please enter your password to confirm your decision.
              </p>
            </div>
            <div className="my-4 relative">
              {/* Input with padding-right to make space for icon */}
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg pl-4 pr-12 py-3"
              />
              {/* Icon positioned inside input on the right */}
              <LockKeyhole
                className="absolute right-4 top-6 -translate-y-1/2 text-[#A68A64]"
                size={25}
              />

              {/* Forget Password text */}
              <p className="flex justify-end mt-1 px-2 bg-gradient-to-t from-[#A68A64] to-[#936639] bg-clip-text text-transparent cursor-pointer">
                Forget Password?
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  if (password.trim()) {
                    // Handle delete logic here
                    alert("Account deleted successfully.");
                    setShowPasswordDialog(false);
                  } else {
                    alert("Please enter a valid password.");
                  }
                }}
                className="px-4 py-4 w-full bg-gradient-to-t from-[#A68A64] to-[#936639] text-white  rounded-2xl"
              >
                Delete My Account
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
