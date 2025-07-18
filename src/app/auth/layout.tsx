import React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-1 relative hidden md:block">
    
        <Image
          src="/auth-images/auth-bg.png"
          alt="auth cover image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0  flex flex-col items-start justify-center z-10 text-white text-2xl max-w-[496px] w-full m-auto">

          <p className="font-[400] text-[21px] text-[#29353C]">-----Welcome to Udrick</p>
          <h1 className="mt-[20px]  font-[700] text-[72px] text-[#1C2D37]">Looking for <span className="text-[#C28C7E]">Dream</span>  House?</h1>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-white">
        {children}
      </div>
    </div>
  );
}
