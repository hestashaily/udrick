"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = ({ onContinue }: { onContinue: () => void }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const togglePassword = () => setShowPassword((prev) => !prev);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const isFormValid =
    name.trim() !== "" &&
    phone.trim() !== "" &&
    email.trim() !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword;

  const handleSubmit = () => {
    if (!isFormValid) return;
    console.log({ name, phone, email, password });

    onContinue();
  };

  return (
    <div className="flex flex-col max-w-full w-full pb-[23px]">
      <div className="flex items-center gap-[7px] justify-start pl-[28px] mt-[20px]">
        <Link href="" className="flex gap-[7px] items-center">
          <Image
            src="/auth-images/back.png"
            alt="back"
            width={18}
            height={18}
          />
          <p className="font-[500] text-[16px] text-[#313131]">Back</p>
        </Link>
      </div>

      <div className="max-w-[428px] w-full m-auto mt-[40px] px-4">
        <h2 className="font-[700] text-[24px] text-[#3D3D3D] text-center mb-[30px]">
          Welcome to <span className="text-[#936639]">Udrick!</span>
        </h2>

        <div className="mb-[20px]">
          <label className="font-[500] text-[16px] text-[#313131] mb-[5px] block">
            Name
          </label>
          <div className="flex items-center gap-[10px] p-[14px] rounded-[12px] shadow-[0px_1px_3px_0px_#0000001A]">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 0C5.99218 0 5.02564 0.372424 4.31301 1.03534C3.60038 1.69826 3.20002 2.59737 3.20002 3.53488C3.20002 4.47239 3.60038 5.3715 4.31301 6.03442C5.02564 6.69734 5.99218 7.06977 7 7.06977C8.00782 7.06977 8.97435 6.69734 9.68699 6.03442C10.3996 5.3715 10.8 4.47239 10.8 3.53488C10.8 2.59737 10.3996 1.69826 9.68699 1.03534C8.97435 0.372424 8.00782 0 7 0ZM4.40002 3.53488C4.40002 2.89343 4.67394 2.27825 5.16153 1.82467C5.64913 1.3711 6.31044 1.11628 7 1.11628C7.68956 1.11628 8.35087 1.3711 8.83846 1.82467C9.32606 2.27825 9.59998 2.89343 9.59998 3.53488C9.59998 4.17634 9.32606 4.79152 8.83846 5.2451C8.35087 5.69867 7.68956 5.95349 7 5.95349C6.31044 5.95349 5.64913 5.69867 5.16153 5.2451C4.67394 4.79152 4.40002 4.17634 4.40002 3.53488ZM7 8.18605C5.14961 8.18605 3.44402 8.57749 2.18083 9.23833C0.936038 9.89023 4.47212e-05 10.877 4.47212e-05 12.093V12.1689C-0.000755274 13.0337 -0.00155534 14.1187 1.02164 14.8941C1.52483 15.2752 2.22963 15.5468 3.18162 15.7254C4.13522 15.9055 5.37921 16 7 16C8.62079 16 9.86398 15.9055 10.8192 15.7254C11.7712 15.5468 12.4752 15.2752 12.9792 14.8941C14.0024 14.1187 14.0008 13.0337 14 12.1689V12.093C14 10.877 13.064 9.89023 11.82 9.23833C10.556 8.57749 8.85119 8.18605 7 8.18605ZM1.20004 12.093C1.20004 11.4597 1.69763 10.7721 2.76883 10.2117C3.82162 9.66102 5.31601 9.30233 7.0008 9.30233C8.68399 9.30233 10.1784 9.66102 11.2312 10.2117C12.3032 10.7721 12.8 11.4597 12.8 12.093C12.8 13.0664 12.768 13.6141 12.2208 14.0279C11.9248 14.2527 11.4288 14.4722 10.5808 14.6314C9.73518 14.7907 8.57919 14.8837 7 14.8837C5.42081 14.8837 4.26402 14.7907 3.41922 14.6314C2.57123 14.4722 2.07523 14.2527 1.77923 14.0287C1.23204 13.6141 1.20004 13.0664 1.20004 12.093Z"
                fill="#A3A3A3"
              />
            </svg>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Full Name"
              className="w-full outline-none font-[400] text-[14px] text-[#8C8C8C]"
            />
          </div>
        </div>

        <div className="mb-[20px]">
          <label className="font-[500] text-[16px] text-[#313131] mb-[5px] block">
            Mobile
          </label>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputClass="!w-full !text-[14px] !py-[10px]"
            containerClass="!w-full"
            buttonClass="!border-none"
            dropdownClass="!z-[999]"
            inputStyle={{ width: "100%" }}
          />
        </div>

        <div className="mb-[20px]">
          <label className="font-[500] text-[16px] text-[#313131] mb-[5px] block">
            Email
          </label>
          <div className="flex items-center gap-[10px] p-[14px] rounded-[12px] shadow-[0px_1px_3px_0px_#0000001A]">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.925 6.10329e-09H15.075C15.8221 -4.75534e-05 16.5409 0.27786 17.084 0.776713C17.6271 1.27557 17.9532 1.95754 17.9955 2.68275L18 2.84375V11.1562C18 11.8826 17.7142 12.5815 17.2011 13.1095C16.688 13.6374 15.9865 13.9545 15.2406 13.9956L15.075 14H2.925C2.17788 14 1.45905 13.7221 0.915992 13.2233C0.37293 12.7244 0.0467988 12.0425 0.00450011 11.3173L6.27767e-09 11.1562V2.84375C-4.89121e-05 2.11738 0.285799 1.41853 0.798905 0.890548C1.31201 0.362571 2.01347 0.0454988 2.7594 0.00437511L2.925 6.10329e-09ZM16.65 4.70138L9.315 8.45512C9.23218 8.49766 9.14115 8.52297 9.04772 8.52945C8.95429 8.53593 8.86049 8.52343 8.7723 8.49275L8.6859 8.456L1.35 4.70225V11.1562C1.35001 11.5405 1.49865 11.9108 1.76641 12.1935C2.03417 12.4762 2.40147 12.6506 2.7954 12.6822L2.925 12.6875H15.075C15.4704 12.6875 15.8513 12.5428 16.1421 12.2823C16.4329 12.0218 16.6123 11.6645 16.6446 11.2814L16.65 11.1562V4.70138ZM15.075 1.3125H2.925C2.52973 1.31251 2.14891 1.45702 1.85815 1.71734C1.56738 1.97767 1.38793 2.33476 1.3554 2.71775L1.35 2.84375V3.21912L9 7.13387L16.65 3.21825V2.84375C16.65 2.45932 16.5012 2.08897 16.2333 1.80626C15.9653 1.52354 15.5978 1.34916 15.2037 1.31775L15.075 1.3125Z"
                fill="#A3A3A3"
              />
            </svg>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full outline-none font-[400] text-[14px] text-[#8C8C8C]"
            />
          </div>
        </div>

        <div className="flex items-start flex-col w-full mt-[15px]">
          <label className="font-[500] text-[16px] text-[#313131]">
            Create Password
          </label>
          <div className="flex items-center mt-[5px] p-[18px] gap-[13px] shadow-[0px_1px_3px_0px_#0000001A] rounded-[12px] w-full">
            <div className="flex justify-between items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
                className="outline-none w-full font-[400] text-[14px] text-[#8C8C8C]"
              />
              <span onClick={togglePassword} className="cursor-pointer ml-2">
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-start flex-col w-full mt-[15px]">
          <label className="font-[500] text-[16px] text-[#313131]">
            Confirm Password
          </label>
          <div className="flex items-center mt-[5px] p-[18px] gap-[13px] shadow-[0px_1px_3px_0px_#0000001A] rounded-[12px] w-full">
            <div className="flex justify-between items-center w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter Password"
                required
                className="outline-none w-full font-[400] text-[14px] text-[#8C8C8C]"
              />
              <span
                onClick={toggleConfirmPassword}
                className="cursor-pointer ml-2"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full py-[12px] rounded-[12px] font-[500] text-[16px] mt-[30px] shadow-[0px_1px_3px_0px_#0000001A] 
    ${
      isFormValid
        ? "bg-[#936639] text-white cursor-pointer"
        : "bg-[#936639]/50 text-white/70 cursor-not-allowed"
    }`}
        >
          Continue
        </button>
        <div className="flex items-center justify-center py-[30px] gap-2">
          <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
          <span className="font-[400] text-[16px] text-[#9CA3AF]">Or</span>
          <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
        </div>

        <div className="flex items-center gap-[15px] justify-center">
          <button className="flex items-center justify-center gap-[10px] font-[400] text-[14px] text-[#8C8C8C] border border-[#DDDDDD] rounded-full p-[14px] cursor-pointer">
            <Image
              src="/auth-images/google.png"
              alt="google"
              width={24}
              height={24}
            />
            Sign In with Google
          </button>
          <button className="flex items-center justify-center gap-[10px] font-[400] text-[14px] text-[#8C8C8C] border border-[#DDDDDD] rounded-full p-[14px] cursor-pointer">
            <Image
              src="/auth-images/apple.png"
              alt="apple"
              width={24}
              height={24}
            />
            Sign In with Apple
          </button>
        </div>

        <div className="max-w-[226px] w-full m-auto pt-[30px]">
          <p className="font-[400] text-[14px] text-[#6A6A6A]">
            Don’t have an account yet?{" "}
            <Link href="/auth/usertype" className="cursor-pointer">
              <span className="font-[500] text-[#9A7449]">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
