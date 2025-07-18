"use client";

import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Props {
  onComplete?: () => void;
}

const CompleteProfile: React.FC<Props> = ({ onComplete }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid =
    name.trim() !== "" &&
    phone.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword;

  const handleSubmit = () => {
    if (!isFormValid) return;
    console.log({ name, phone, email, password });
    onComplete?.();
  };

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  return (
    <div className="flex flex-col max-w-full w-full pb-6">
      <div className="flex items-center gap-2 justify-start pl-7 mt-5">
        <button className="flex gap-2 items-center" onClick={() => history.back()}>
          <Image src="/auth-images/back.png" alt="back" width={18} height={18} />
          <p className="font-medium text-base text-[#313131]">Back</p>
        </button>
      </div>

      <div className="max-w-[428px] w-full m-auto mt-10 px-4">
        <Image
          src="/auth-images/profile.png"
          width={110}
          height={110}
          className="w-[110px] m-auto pb-5 rounded-full"
          alt="Profile"
        />

        <div className="mb-5">
          <label className="font-medium text-base text-[#313131] mb-1 block">Name</label>
          <div className="flex items-center gap-2 p-4 rounded-xl shadow-[0px_1px_3px_0px_#0000001A]">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Emeka Nzerem"
              className="w-full outline-none font-normal text-sm text-[#8C8C8C]"
            />
          </div>
        </div>

       
        <div className="mb-5">
          <label className="font-medium text-base text-[#313131] mb-1 block">Mobile</label>
          <PhoneInput
            country="in"
            value={phone}
            onChange={(value) => setPhone(value)}
            inputClass="!w-full !text-sm !py-2.5"
            containerClass="!w-full"
            buttonClass="!border-none"
            dropdownClass="!z-[999]"
            inputStyle={{ width: "100%" }}
          />
        </div>

     
        <div className="mb-5">
          <label className="font-medium text-base text-[#313131] mb-1 block">Email</label>
          <div className="flex items-center gap-2 p-4 rounded-xl shadow-[0px_1px_3px_0px_#0000001A]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full outline-none font-normal text-sm text-[#8C8C8C]"
            />
          </div>
        </div>

        
        <div className="flex flex-col w-full mt-4">
          <label className="font-medium text-base text-[#313131]">Create Password</label>
          <div className="flex items-center mt-1 p-4 gap-3 shadow-[0px_1px_3px_0px_#0000001A] rounded-xl w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-none w-full font-normal text-sm text-[#8C8C8C]"
            />
            <span onClick={togglePassword} className="cursor-pointer ml-2">
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>


        <div className="flex flex-col w-full mt-4">
          <label className="font-medium text-base text-[#313131]">Confirm Password</label>
          <div className="flex items-center mt-1 p-4 gap-3 shadow-[0px_1px_3px_0px_#0000001A] rounded-xl w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter Password"
              className="outline-none w-full font-normal text-sm text-[#8C8C8C]"
            />
            <span onClick={toggleConfirmPassword} className="cursor-pointer ml-2">
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full py-3 rounded-xl font-medium text-base mt-8 shadow-[0px_1px_3px_0px_#0000001A] ${
            isFormValid
              ? "bg-[#936639] text-white cursor-pointer"
              : "bg-[#936639]/50 text-white/70 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CompleteProfile;
