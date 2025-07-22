"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  phone: string;
  onSuccess: () => void;
}

const SetPasswordViaPhone: React.FC<Props> = ({ phone, onSuccess }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Password set for phone number:", phone);
    onSuccess();
  };

  return (
    <div>
      <div className="flex pl-[28px] items-center gap-[7px] w-full max-w-full justify-start pb-[40px]">
        <Image src="/auth-images/back.png" alt="back" width={18} height={18} />
        <p className="font-[500] text-[16px] text-[#313131]">Back</p>
      </div>

      <div className="max-w-full w-full flex flex-col items-center">
        <Image
          src="/auth-images/forget-pass.png"
          alt="forget-pass"
          width={100}
          height={100}
        />

        <div className="text-center mt-[50px]">
          <p className="font-[500] text-[16px] text-[#313131]">Set New Password</p>
          <p className="font-[400] text-[14px] text-[#8C8C8C] mt-2">
            Please Enter New Password.
          </p>
        </div>

        <form className="max-w-[428px] w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full mt-[15px]">
            <label className="font-[500] text-[16px] text-[#313131]">
              Create New Password
            </label>
            <div className="flex items-center mt-[5px] p-[18px] gap-[13px] shadow-[0px_1px_3px_0px_#0000001A] rounded-[12px] w-full">
              <Image
                src="/auth-images/lockpassword.png"
                alt="lock"
                width={14}
                height={14}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-none w-full font-[400] text-[14px] text-[#8C8C8C]"
              />
              <span onClick={togglePassword} className="cursor-pointer">
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full mt-[15px]">
            <label className="font-[500] text-[16px] text-[#313131]">
              Confirm New Password
            </label>
            <div className="flex items-center mt-[5px] p-[18px] gap-[13px] shadow-[0px_1px_3px_0px_#0000001A] rounded-[12px] w-full">
              <Image
                src="/auth-images/lockpassword.png"
                alt="lock"
                width={14}
                height={14}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="outline-none w-full font-[400] text-[14px] text-[#8C8C8C]"
              />
              <span onClick={togglePassword} className="cursor-pointer">
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#936639] text-white w-full py-3 rounded-[12px] font-[500] text-[16px] hover:bg-[#7b552f] transition"
          >
            Continue
          </button>
        </form>

        <p className="mt-[40px] font-[400] text-[14px] text-[#8C8C8C]">
          I remember my password?{" "}
          <span className="text-[#936639] font-[700] cursor-pointer">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SetPasswordViaPhone;
