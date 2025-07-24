"use client";
import React, { useState } from "react";
import Image from "next/image";
import CommonLogin from "../../../components/SharedComponents/CommonLogin";

export default function UserTypePage() {
  const [selectedRole, setSelectedRole] = useState<"buyer" | "seller" | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false); 

  console.log(selectedRole);
  

  const handleSelect = (role: "buyer" | "seller") => {
    setSelectedRole(role);
    localStorage.setItem("role", role);
  };

  const handleContinue = () => {
    if (selectedRole) setIsConfirmed(true);
  };

  const handleBack = () => {
    setSelectedRole(null);
    setIsConfirmed(false);
  };

  const buttonBg = selectedRole
    ? "bg-[#936639]"
    : "bg-[linear-gradient(360deg,_rgba(239,217,199,0.5)_-62.61%,_rgba(166,138,100,0.5)_25.65%,_rgba(147,102,57,0.5)_113.91%)]";

  return (
    <div className="flex items-center justify-center flex-col rounded-xl max-w-[388px] w-full py-[65px] ">
      <Image
        src="/auth-images/udrick-logo.png"
        alt="udrick logo"
        width={88}
        height={110}
        className="pb-[40px]"
      />


      {!isConfirmed && (
        <>
          <p className="text-center font-[500] text-[16px] text-[#313131]">
            Choose your Role to Get Started
          </p>
          <p className="text-[14px] text-[#8C8C8C] font-[400] pt-[8px]">
            Your profile & experience will be based on this selection
          </p>

          <div
            onClick={() => handleSelect("buyer")}
            className={`shadow-[0px_5px_8px_0px_#D4C3FF4F] w-full cursor-pointer flex items-center justify-center py-[26px] px-[20px] rounded-[20px] gap-[15px] mt-[20px] ${
              selectedRole === "buyer" ? "bg-[#936639] text-white" : ""
            }`}
          >
            <Image src="/auth-images/seller.png" alt="buyer" width={54} height={54} />
            <div>
              <p
                className={`font-[500] text-[16px] ${
                  selectedRole === "buyer" ? "text-white" : "text-[#313131]"
                }`}
              >
                Join as a Buyer or Tenant
              </p>
              <p
                className={`font-[400] text-[14px] ${
                  selectedRole === "buyer" ? "text-white" : "text-[#8C8C8C]"
                }`}
              >
                Looking for your dream home or the perfect rental?
              </p>
            </div>
          </div>
          <div
            onClick={() => handleSelect("seller")}
            className={`shadow-[0px_5px_8px_0px_#D4C3FF4F] w-full cursor-pointer flex items-center justify-center py-[26px] px-[20px] rounded-[20px] gap-[15px] mt-[20px] ${
              selectedRole === "seller" ? "bg-[#936639] text-white" : ""
            }`}
          >
            <Image src="/auth-images/buyer.png" alt="seller" width={54} height={54} />
            <div>
              <p
                className={`font-[500] text-[16px] ${
                  selectedRole === "seller" ? "text-white" : "text-[#313131]"
                }`}
              >
                Join as a Seller or Landlord
              </p>
              <p
                className={`font-[400] text-[14px] ${
                  selectedRole === "seller" ? "text-white" : "text-[#8C8C8C]"
                }`}
              >
                Ready to sell or rent out your property?
              </p>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className={`py-[16px] font-[600] text-[16px] text-white w-full rounded-[12px] mt-[25px] transition-all duration-200 ${buttonBg}`}
            disabled={!selectedRole}
          >
            Continue
          </button>
        </>
      )}

      {isConfirmed && selectedRole && (
        <CommonLogin role={selectedRole} onBack={handleBack} />
      )}
    </div>
  );
}
