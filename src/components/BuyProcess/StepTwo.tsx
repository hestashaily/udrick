
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface StepTwoProps {
  onConfirm: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onConfirm }) => {
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

    console.log("File ready for submission:", selectedFile);

 
    alert("Submitted for Approval!");
  };

  return (
    <>
      <div className="max-w-[429px] w-full m-auto  px-4 py-6 flex items-center justify-center flex-col">
        <div className="space-y-4 text-center">
          <p className="font-[500] text-[28px] text-[#000000]">
            Upload ID/NIN For Verification
          </p>
          <p className="font-[400] text-[16px] text-[#25384E] md:mb-[64px] mb-[20px]">
            We verify buyers so you can explore and buy properties with
            confidence
          </p>
        </div>

        <div className="max-w-[428px] w-full bg-[#FFFFFF] rounded-[12px] p-[20px]">
          <div
            className="shadow-[0px_5px_8px_0px_#D4C3FF4F] flex items-center justify-center flex-col gap-[10px] p-[20px] rounded-[25px] cursor-pointer"
            onClick={handleUploadClick}
          >
            <Image
              src="/propertydetail/upload.png"
              alt="upload"
              width={50}
              height={40}
            />
            <p className="font-[500] text-[16px] text-[#25384E]">
              {selectedFile ? selectedFile.name : "Upload Your ID/NIN"}
            </p>
            <p className="font-[400] text-[12px] text-[#44576D]">
              Accepted formats are .jpg, .png, .pdf
            </p>
          </div>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />

          <button
            onClick={handleSubmit}
            className="flex items-center w-full justify-center gap-[10px] bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)] text-white mt-[10px] rounded-full h-[48px]"
          >
            Submit for Approval
          </button>

          <button
            onClick={onConfirm}
            className="border border-[#936639] font-[500] text-[16px] text-[#313131] rounded-[12px] w-full max-w-[388px] m-auto h-[48px] mt-[15px]"
          >
            Skip
          </button>
        </div>
      </div>
      <div className="bg-white py-[26px] flex items-center justify-center w-full">
        <p className="font-[400] text-[18px] text-[#8C8C8C]">Step 2 of 7</p>
      </div>
    </>
  );
};

export default StepTwo;
