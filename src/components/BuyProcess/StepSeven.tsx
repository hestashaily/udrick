
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface StepSevenProps {
  onConfirm: () => void;
  onPrevious: () => void;
  onReset: () => void; 
}

const StepSeven: React.FC<StepSevenProps> = ({ onConfirm, onPrevious, onReset }) => {

    
 const router = useRouter();

const handleBackToHome = () => {
  onReset();

};


  
  


  return (
    <>
      <div className=" w-full m-auto bg-[#FAFAFA] px-4 py-6 flex items-center justify-center flex-col">
        <div className="space-y-4 text-center">
          <p className="font-[500] text-[28px] text-[#000000]">
         Payment Successful!
          </p>
          <p className="font-[400] text-[16px] text-[#25384E] md:mb-[64px] mb-[20px]">
            Your transaction is complete. Receipt sent to your email.
          </p>
        </div>

        <div className="max-w-[731px] w-full rounded-[12px] p-[20px]">
              <Image
                src="/propertydetail/payment-success.png"
                alt="payment success"
                width={115}
                height={115}
                className="w-[115px] m-auto pb-[30px]"
              />
       
          <div className="p-[15px] bg-white rounded-[12px]">
                <div className="flex items-center justify-between w-full pb-[40px]">
                    <p className="font-[400] text-[16px] text-[#8C8C8C]">Property:</p>
                    <p className="font-[500] text-[16px] text-[#515151]">5 Bedroom Detached Duplex</p>
                </div>
                <div className="flex items-center justify-between w-full pb-[40px]">
                    <p className="font-[400] text-[16px] text-[#8C8C8C]">Transaction ID:</p>
                    <p className="font-[500] text-[16px] text-[#515151]">TX-14249861</p>
                </div>
                  <div className="flex items-center justify-between w-full pb-[40px]">
                    <p className="font-[400] text-[16px] text-[#8C8C8C]">Amount Paid:</p>
                    <p className="font-[500] text-[16px] text-[#515151]">₦500,000,000</p>
                </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-[400] text-[16px] text-[#8C8C8C]">Date:</p>
                    <p className="font-[500] text-[16px] text-[#515151]">19/06/2025</p>
                </div>
          </div>
        </div>

        <button
        type="button"
           onClick={handleBackToHome}
          className="flex max-w-[311px] items-center w-full justify-center gap-[10px] bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)] text-white mt-[10px] rounded-full h-[48px]"
        >
       
           <Image
            src="/propertydetail/prev-white.png"
            alt="previous"
            width={14}
            height={14}
          />
          Back to Home
        </button>
      </div>
    
    </>
  );
};

export default StepSeven;
