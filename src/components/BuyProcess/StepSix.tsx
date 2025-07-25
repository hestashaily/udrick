"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface StepSixProps {
  onConfirm: () => void;
  onPrevious: () => void;
}

const StepSix: React.FC<StepSixProps> = ({ onConfirm, onPrevious }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        alert("Only .jpg, .png, and .pdf files are allowed.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert("Please upload your ID/NIN before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("id_file", selectedFile);

    alert("Submitted for Approval!");
  };

  return (
    <>
      <div className=" w-full m-auto bg-[#FAFAFA] px-4 py-6 flex items-center justify-center flex-col">
        <div className="space-y-4 text-center">
          <p className="font-[500] text-[28px] text-[#000000]">
            Payment Checkout
          </p>
          <p className="font-[400] text-[16px] text-[#25384E] mb-[64px]">
            Complete your purchase securely
          </p>
        </div>

        <div className="max-w-[731px] w-full rounded-[12px] p-[20px]">
          <div className="flex items-start gap-[12px] bg-[#FFF6EF] rounded-[4px] p-[14px] mb-[26px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.03914 4.64023H9.79914V6.40023H8.03914V4.64023ZM8.03914 8.16023H9.79914V13.4402H8.03914V8.16023ZM8.91914 0.240234C4.06154 0.240234 0.119141 4.18263 0.119141 9.04023C0.119141 13.8978 4.06154 17.8402 8.91914 17.8402C13.7767 17.8402 17.7191 13.8978 17.7191 9.04023C17.7191 4.18263 13.7767 0.240234 8.91914 0.240234ZM8.91914 16.0802C5.03834 16.0802 1.87914 12.921 1.87914 9.04023C1.87914 5.15943 5.03834 2.00023 8.91914 2.00023C12.7999 2.00023 15.9591 5.15943 15.9591 9.04023C15.9591 12.921 12.7999 16.0802 8.91914 16.0802Z"
                fill="#936639"
              />
            </svg>

            <p className="font-[400] text-[14px] text-[#936639]">
              Your payment will be securely held by the admin. Once the property
              documents are verified, you’ll receive a notification to review
              and give your final approval. Only after your confirmation will
              the payment be transferred to the seller.
            </p>
          </div>
          <div className="p-[8px] bg-white rounded-[12px]">
            <div className="flex items-center gap-[18px] mb-[14px]">
              <Image
                src="/propertydetail/credit.png"
                alt="credit"
                width={15}
                height={15}
              />
              <p className="font-[500] text-[16px] text-[#0A0D13] ">
                Credit/Debit card
              </p>
            </div>
            <div>
              <p className="font-[600] text-[#000000DE] text-[16px] mb-[12px] ">
                Payment Details
              </p>

              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[#000000] z-10">
                  Card number
                </span>

                <div className="flex items-center gap-[10px] border border-[#0000003B] p-[12px] rounded-md relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7195 4H4.35945C3.29385 4 2.44905 4.8544 2.44905 5.92L2.43945 17.44C2.43945 18.5056 3.29385 19.36 4.35945 19.36H19.7195C20.7851 19.36 21.6395 18.5056 21.6395 17.44V5.92C21.6395 4.8544 20.7851 4 19.7195 4ZM19.7195 17.44H4.35945V11.68H19.7195V17.44ZM19.7195 7.84H4.35945V5.92H19.7195V7.84Z"
                      fill="black"
                      fillOpacity="0.56"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="4242 **** **** ****"
                    className="outline-none w-full bg-transparent text-sm"
                  />
                </div>
              </div>
               <div className="relative w-full  mt-[23px]">
                <span className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[#000000] z-10">
                Cardholder name
                </span>

                <div className="flex items-center gap-[10px] border border-[#0000003B] p-[12px] rounded-md relative">
                 

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="outline-none w-full bg-transparent text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[28px]">
                     <div className="relative w-full max-w-[341px]  mt-[23px]">
                <span className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[#000000] z-10">
               Expiration date
                </span>

                <div className="flex items-center gap-[10px] border border-[#0000003B] p-[12px] rounded-md relative">
                 

                  <input
                    type="date"
                    placeholder="John Doe"
                    className="outline-none w-full bg-transparent text-sm"
                  />
                </div>
              </div>
                  <div className="relative w-full max-w-[341px]  mt-[23px]">
                <span className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[#000000] z-10">
               CVC / CVC2
                </span>

                <div className="flex items-center gap-[10px] border border-[#0000003B] p-[12px] rounded-md relative">
                 

                  <input
                    type="text"
                    placeholder=""
                    className="outline-none w-full bg-transparent text-sm"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onConfirm}
          className="flex max-w-[311px] items-center w-full justify-center gap-[10px] bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)] text-white mt-[10px] rounded-full h-[48px]"
        >
         Pay ₦500,000,000
           <Image
            src="/propertydetail/vector.png"
            alt="previous"
            width={14}
            height={14}
          />
        </button>
      </div>
      <div className="bg-white py-[26px] flex   items-center px-[146px] w-full">
        <button
          onClick={onPrevious}
          className="flex items-center gap-[10px] py-[8px] px-[15px] rounded-full border border-[#EFD9C7]"
        >
          <Image
            src="/propertydetail/previous.png"
            alt="previous"
            width={24}
            height={24}
          />
          Previous
        </button>
        <div className="flex items-center justify-center w-full">
          <p className="font-[400] text-center text-[18px] text-[#8C8C8C]">
            Step 6 of 7
          </p>
        </div>
      </div>
    </>
  );
};

export default StepSix;
