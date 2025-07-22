"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onContinue: (email: string) => void;
}

const ResetEmail: React.FC<Props> = ({ onContinue }) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="flex items-center gap-[7px] justify-start pb-[93px]">
        <Link href="/auth/forgetpass">
          <Image
            src="/auth-images/back.png"
            alt="back"
            width={18}
            height={18}
          />
        </Link>
        <p className="font-[500] text-[16px] text-[#313131]">Back</p>
      </div>

      <div className="max-w-[428px] w-full m-auto flex flex-col items-center">
        <Image
          src="/auth-images/email.png"
          alt="email"
          width={100}
          height={100}
        />

        <div className="text-center mt-[50px]">
          <p className="font-[500] text-[16px] text-[#313131]">
            Reset Via Email
          </p>
          <p className="font-[400] text-[14px] text-[#8C8C8C]">
            Enter your registered email to reset your password.
          </p>
        </div>

        <div className="w-full mt-[40px]">
          <label className="font-[500] text-[16px] text-[#313131]">Email</label>
          <div className="flex items-center shadow w-full p-[18px] rounded-[12px] gap-[12px] mt-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.925 5H18.075C18.8221 4.99995 19.5409 5.27786 20.084 5.77671C20.6271 6.27557 20.9532 6.95754 20.9955 7.68275L21 7.84375V16.1562C21 16.8826 20.7142 17.5815 20.2011 18.1095C19.688 18.6374 18.9865 18.9545 18.2406 18.9956L18.075 19H5.925C5.17788 19 4.45905 18.7221 3.91599 18.2233C3.37293 17.7244 3.0468 17.0425 3.0045 16.3173L3 16.1562V7.84375C2.99995 7.11738 3.2858 6.41853 3.7989 5.89055C4.31201 5.36257 5.01347 5.0455 5.7594 5.00438L5.925 5ZM19.65 9.70138L12.315 13.4551C12.2322 13.4977 12.1412 13.523 12.0477 13.5295C11.9543 13.5359 11.8605 13.5234 11.7723 13.4928L11.6859 13.456L4.35 9.70225V16.1562C4.35001 16.5405 4.49865 16.9108 4.76641 17.1935C5.03417 17.4762 5.40147 17.6506 5.7954 17.6822L5.925 17.6875H18.075C18.4704 17.6875 18.8513 17.5428 19.1421 17.2823C19.4329 17.0218 19.6123 16.6645 19.6446 16.2814L19.65 16.1562V9.70138ZM18.075 6.3125H5.925C5.52973 6.31251 5.14891 6.45702 4.85815 6.71734C4.56738 6.97767 4.38793 7.33476 4.3554 7.71775L4.35 7.84375V8.21912L12 12.1339L19.65 8.21825V7.84375C19.65 7.45932 19.5012 7.08897 19.2333 6.80626C18.9653 6.52354 18.5978 6.34916 18.2037 6.31775L18.075 6.3125Z"
                fill="#8C8C8C"
              />
            </svg>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-transparent text-[#313131]"
            />
          </div>
        </div>

        <button
          onClick={() => onContinue(email)}
          disabled={!email.trim()}
          className={`mt-[15px] w-full py-[16px] rounded-md font-[500] text-[16px] text-white transition-all duration-200 ${
            email.trim()
              ? "bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>

        <p className="mt-[40px] font-[400] text-[14px] text-[#25384E]">
          I remember my password?{" "}
          <span className="text-[#936639] font-[700] cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </>
  );
};

export default ResetEmail;
