"use client";

import React from "react";
import Image from "next/image";

const SuccessPassword = () => {
  return (
    <div className="max-w-[428px] m-auto text-center">
      <Image
        src="/auth-images/success.png"
        alt="success"
        width={200}
        height={200}
        className="m-auto"
      />
      <h2 className="mt-6 text-[18px] font-[800] text-[#313131]">
       Password Changed Successfully!
      </h2>
     

      <button
        className="mt-8  flex items-center justify-center max-w-[128px] m-auto text-[#7b552f] w-full py-3 rounded-[12px] font-[500] text-[16px]  transition"
        onClick={() => {
          window.location.href = "/";
        }}
      >
          <Image
        src="/auth-images/fillback.png"
        alt="success"
        width={18}
        height={18}
        className="m-auto"
      />
       Back to Login
      </button>
    </div>
  );
};

export default SuccessPassword;
