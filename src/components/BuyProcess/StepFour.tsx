"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface StepFourProps {
  onConfirm: () => void;
  onPrevious: () => void;
}

const StepFour: React.FC<StepFourProps> = ({ onConfirm, onPrevious }) => {
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
           Draw Your Signature
          </p>
          <p className="font-[400] text-[16px] text-[#25384E] mb-[64px]">
           Please sign in the box below to proceed
          </p>
        </div>

        <div className="max-w-[944px] w-full bg-[#FFFFFF] rounded-[12px] p-[20px] h-[500px] overflow-y-scroll">
          <div className="border-b border-b-[#CACACA] pb-[20px]">
            <p className="pb-[10px] font-[500] text-[20px] text-[#313131]">
              Clause 1: Property Condition
            </p>
            <p className="font-[400] text-[16px] text-[#515151]">
              The property is sold in its current condition as inspected by the
              buyer. The seller warrants that all major systems (electrical,
              plumbing, HVAC) are in working order as of the date of this
              agreement. Any defects discovered after inspection must be
              reported within 48 hours of signing this agreement.
            </p>
          </div>
          <div className="border-b border-b-[#CACACA] pt-[35px] pb-[20px]">
            <p className="pb-[10px] font-[500] text-[20px] text-[#313131]">
              Clause 2: Payment Terms
            </p>
            <p className="font-[400] text-[16px] text-[#515151]">
              The total purchase price of $1,200,000 shall be paid as follows:
              (a) Token amount of $50,000 upon signing this agreement, (b)
              Remaining balance of $1,150,000 to be paid within 30 days of
              agreement execution through certified bank transfer or equivalent
              secure payment method approved by both parties.
            </p>
          </div>
          <div className="border-b border-b-[#CACACA] pt-[35px] pb-[20px]">
            <p className="pb-[10px] font-[500] text-[20px] text-[#313131]">
              Clause 1: Property Condition
            </p>
            <p className="font-[400] text-[16px] text-[#515151]">
              The property is sold in its current condition as inspected by the
              buyer. The seller warrants that all major systems (electrical,
              plumbing, HVAC) are in working order as of the date of this
              agreement. Any defects discovered after inspection must be
              reported within 48 hours of signing this agreement.
            </p>
          </div>
          <div className="border-b border-b-[#CACACA] pt-[35px] pb-[20px]">
            <p className="pb-[10px] font-[500] text-[20px] text-[#313131]">
              Clause 3: Title and Transfer
            </p>
            <p className="font-[400] text-[16px] text-[#515151]">
              The seller guarantees clear and marketable title to the property,
              free from all encumbrances except those specifically disclosed.
              Transfer of ownership will occur upon full payment and completion
              of all legal documentation. The buyer will receive all original
              property documents including Certificate of Occupancy, Survey
              Plan, and Deed of Assignment within 14 days of final payment.
            </p>
          </div>
        </div>

        <button
          onClick={onConfirm}
          className="flex max-w-[311px] items-center w-full justify-center gap-[10px] bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)] text-white mt-[10px] rounded-full h-[48px]"
        >
          Confirm & Sign Agreement
        </button>
      </div>
      <div className="bg-white py-[26px] flex   items-center px-[146px] w-full">
        <button
         onClick={onPrevious}
         className="flex items-center gap-[10px] py-[8px] px-[15px] rounded-full border border-[#EFD9C7]">
                 <Image
                          src="/propertydetail/previous.png"
                          alt="previous"
                          width={24}
                          height={24}
                       
                        />
            Previous</button>
            <div className="flex items-center justify-center w-full">
        <p className="font-[400] text-center text-[18px] text-[#8C8C8C]">Step 4 of 7</p>

            </div>
      </div>
    </>
  );
};

export default StepFour;
