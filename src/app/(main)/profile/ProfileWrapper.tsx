"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { ArrowLeft, LockKeyhole, BadgeAlert, User, Building2, CircleDollarSign, FileText, KeyRound, CircleQuestionMark, Shield, FileTerminal, Trash2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const links = [
  { href: "/profile", label: "Personal Information", icon: <User size={20} /> },
  { href: "/profile/property-history", label: "Property History" , icon:<Building2 size={20}/> },
  { href: "/profile/refund", label: "Refund", icon:<CircleDollarSign size={20}/> },

  { href: "/profile/upload-document", label: "Uploaded License/ID" , icon:<FileText size={20}/> },
  { href: "/profile/reset-password", label: "Reset Password" , icon:<KeyRound size={20}/> },
  { href: "/profile/faq-support", label: "FAQ’s & Support", icon:<CircleQuestionMark size={20}/> },
  { href: "/profile/privacy", label: "Privacy Policy", icon:<Shield size={20}/> },
  { href: "/profile/terms", label: "Terms & Conditions", icon:<FileTerminal size={20}/> },
  { href: "/profile/delete", label: "Delete Account", isDelete: true, icon:<Trash2 size={20}/> },
];

export default function ProfileWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");

  //  Check if we are on the main profile page (menu page)
  const isMainMenu = pathname === "/profile";

  return (
    <div className="min-h-screen flex flex-col">
      {/* MOBILE UI */}
      <div className="lg:hidden block">
        {/* Header */}
        <div className="bg-gradient-to-t from-[#A68A64] to-[#936639] p-2 flex items-center text-white">
          {isMainMenu ? (
            <>
              <Link href="/">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-lg font-semibold flex-1 text-center">
                Account
              </h1>
            </>
          ) : (
            <>
              <button onClick={() => router.push("/profile")}>
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-lg font-semibold flex-1 text-center">Back</h1>
            </>
          )}
        </div>

        {isMainMenu ? (
          <>
            {/* ✅ Menu Page */}
            <div className="flex items-center gap-4 p-4">
              <Image
                src="/chat/user.svg"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold">Name Ipsum</h2>
                <p className="text-gray-500 text-sm">example@mail.com</p>
              </div>
            </div>

            <Section title="Profile">
              <MenuLink
                label="Personal Information"
                href="/profile/view-profile"
              />
              <MenuLink
                label="My Properties"
                href="/profile/property-history"
              />
              <MenuLink
                label="Uploaded License/ID"
                href="/profile/upload-document"
              />
            </Section>

            <Section title="Settings">
              <MenuLink label="Reset Password" href="/profile/reset-password" />
              <MenuLink
                label="Delete Account"
                isDelete
                onClick={() => setShowDeleteDialog(true)}
              />
            </Section>

            <Section title="Additional">
              <MenuLink label="FAQ's & Support" href="/profile/faq-support" />
              <MenuLink label="Privacy Policy" href="/profile/privacy" />
              <MenuLink label="Terms & Conditions" href="/profile/terms" />
            </Section>

            <div className="p-4">
              <button className="w-full border border-[#A68A64] text-[#A68A64] py-3 rounded-xl">
                Log Out
              </button>
            </div>
          </>
        ) : (
          <div className="p-4">{children}</div>
        )}
      </div>

      {/* ✅ DESKTOP UI (unchanged) */}
      <div className="hidden lg:flex flex-col min-h-screen">
        <div className="shadow">
          <div className="container mx-auto px-4">
            <Link href="/">
              <div className="flex gap-6 py-6 items-center">
                <ArrowLeft size={18} />
                <h3 className="font-bold text-3xl text-[#0d0d0c]">
                  My Account
                </h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto flex gap-4 p-3 lg:p-4 flex-1">
          {/* Sidebar */}
          <div className="w-[80px] lg:w-1/5 border rounded-2xl flex flex-col p-4 space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.isDelete) {
                      e.preventDefault();
                      setShowDeleteDialog(true);
                    }
                  }}
                  className={clsx(
                    "p-3 rounded-2xl flex items-center gap-4 transition text-sm font-normal",
                    {
                      "bg-gradient-to-t from-[#A68A64] to-[#936639] text-white":
                        isActive && !link.isDelete,
                      "hover:text-white hover:bg-gradient-to-t hover:from-[#A68A64] hover:to-[#936639]":
                        !link.isDelete,
                      "text-red-600": link.isDelete && !isActive,
                      "hover:text-white hover:bg-red-600": link.isDelete,
                      "bg-red-600 text-white": link.isDelete && isActive,
                      "text-[#313131]": !isActive && !link.isDelete,
                    }
                  )}
                >
                  <div className="hidden lg:flex items-center gap-2">
                    {link.icon}
                    <span>{link.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Dynamic Content */}
          <div className="w-full lg:w-4/5 pl-4">{children}</div>
        </div>
      </div>

      {/* Delete  Account */}
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
                {" "}
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
        {/* ✅ Confirm Password Dialog */}
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

/* ✅ Reusable Components */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow m-4">
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      {children}
    </div>
  );
}

function MenuLink({
  label,
  href,
  isDelete,
  onClick,
}: {
  label: string;
  href?: string;
  isDelete?: boolean;
  onClick?: () => void;
}) {
  const className = `flex justify-between items-center w-full text-left py-3 border-b last:border-b-0 ${
    isDelete ? "text-red-600" : "text-gray-700"
  }`;

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        <span>{label}</span>
        <span>›</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      <span>{label}</span>
      <span>›</span>
    </button>
  );
}
