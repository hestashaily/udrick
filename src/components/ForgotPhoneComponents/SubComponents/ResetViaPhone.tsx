"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

const ResetViaPhone = ({ onContinue }: { onContinue?: (phone: string) => void }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (onContinue) {
      onContinue(phone);
    } else {
      alert(`Phone submitted: ${phone}`);
    }
  };

  return (
    <div className="w-full">
      <Link href="/auth/forgetpass">
      <div className="flex items-center gap-[7px] mb-[30px] pl-[52px] justify-start w-full">
        <Image
          src="/auth-images/back.png"
          alt="back"
          width={18}
          height={18}
        />
        <p className="font-[500] text-[16px] text-[#313131]">Back</p>
      </div>
      </Link>

      <div className="max-w-[428px] w-full m-auto flex items-center justify-center flex-col">
        <div className="w-full m-auto flex items-center justify-center flex-col">
          <Image
            src="/auth-images/cellphone.png"
            alt="forget pass"
            width={100}
            height={100}
          />
          <div className="flex items-center mt-[50px] justify-center flex-col">
            <p className="text-center font-[500] text-[16px] text-[#313131]">
              Reset Via Phone Number
            </p>
            <p className="text-center font-[400] text-[14px] text-[#8C8C8C]">
              Enter your registered mobile number to reset your password.
            </p>
          </div>
        </div>
        <div className="flex items-start w-full mt-[30px] flex-col gap-[5px]">
          <label
            htmlFor="phone"
            className="font-[500] text-[16px] text-[#313131]"
          >
            Mobile Number
          </label>

          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputClass="!w-full !text-[14px] !py-[10px]"
            containerClass="!w-full"
            buttonClass="!border-none"
            dropdownClass="!z-[999]"
            inputStyle={{ width: "100%" }}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mt-[15px] rounded-md py-[16px] bg-[#936639] max-w-full font-[500] text-[16px] text-white w-full transition-all duration-200"
        >
          Continue
        </button>

 
        <div className="mt-[40px] font-[400] text-[14px] text-[#25384E]">
          <p>
            I remember my password?{" "}
            <Link href="/">
              <span className="font-[700] text-[#936639] cursor-pointer">
                Log in
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetViaPhone;
