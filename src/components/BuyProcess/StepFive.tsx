"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import SignatureCanvas from "react-signature-canvas";

interface StepFiveProps {
  onConfirm: () => void;
  onPrevious: () => void;
  signatureData: string;
}

const StepFive: React.FC<StepFiveProps> = ({
  onConfirm,
  onPrevious,
  signatureData,
}) => {
  const sigCanvasRef = useRef<SignatureCanvas>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleBegin = () => {
    setIsDrawing(true);
  };

  const handleClear = () => {
    sigCanvasRef.current?.clear();
    setIsDrawing(false);
  };

  const handleConfirm = () => {
    if (!sigCanvasRef.current?.isEmpty()) {
      onConfirm();
    } else {
      alert("Please draw your signature before proceeding.");
    }
  };

  return (
    <>
      <div className="w-full m-auto bg-[#FAFAFA] px-4 py-6 flex items-center justify-center flex-col">
        <div className="space-y-4 text-center">
          <p className="font-medium text-[28px] text-black">
            Review Signature & Agreement
          </p>
          <p className="font-normal text-[16px] text-[#25384E] mb-16">
            Final review before proceeding to payment
          </p>
        </div>
        <div className="max-w-[743px] w-full m-auto bg-[#FAFAFA] py-6 flex items-center justify-center flex-col">
          <div className="p-[15px] bg-white rounded-[12px] w-full">
            <div className="flex flex-col md:flex-row items-start gap-[16px]">
              <Image
                src="/propertydetail/sliderimage.png"
                alt="sliderimage"
                width={223}
                height={213}
                className="rounded-[12px] h-[213px] w-full md:w-[223px] object-cover"
              />

              <div className="w-full space-y-4">
                <div className="flex justify-between gap-4">
                  <div className="space-y-2">
                    <p className="font-[500] text-[20px] text-[#313131]">
                      5 Bedroom Detached Duplex
                    </p>
                    <p className="font-[400] text-[14px] text-[#6E7070] flex items-center gap-[6px]">
                      <svg
                        width="11"
                        height="15"
                        viewBox="0 0 11 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.55556 5.44358C7.53704 6.07321 7.32407 6.60098 6.91667 7.02691C6.49074 7.43432 5.96296 7.64728 5.33333 7.6658C4.7037 7.64728 4.17593 7.43432 3.75 7.02691C3.34259 6.60098 3.12963 6.07321 3.11111 5.44358C3.12963 4.81395 3.34259 4.28617 3.75 3.86024C4.17593 3.45284 4.7037 3.23987 5.33333 3.22136C5.96296 3.23987 6.49074 3.45284 6.91667 3.86024C7.32407 4.28617 7.53704 4.81395 7.55556 5.44358ZM5.33333 4.55469C5.07407 4.55469 4.86111 4.63802 4.69444 4.80469C4.52778 4.97136 4.44444 5.18432 4.44444 5.44358C4.44444 5.70284 4.52778 5.9158 4.69444 6.08247C4.86111 6.24913 5.07407 6.33247 5.33333 6.33247C5.59259 6.33247 5.80556 6.24913 5.97222 6.08247C6.13889 5.9158 6.22222 5.70284 6.22222 5.44358C6.22222 5.18432 6.13889 4.97136 5.97222 4.80469C5.80556 4.63802 5.59259 4.55469 5.33333 4.55469ZM10.6667 5.44358C10.6296 6.27691 10.3333 7.23987 9.77778 8.33247C9.2037 9.42506 8.55556 10.4806 7.83333 11.4991C7.11111 12.5362 6.5 13.3602 6 13.9714C5.81481 14.1936 5.59259 14.3047 5.33333 14.3047C5.07407 14.3047 4.85185 14.1936 4.66667 13.9714C4.16667 13.3602 3.5463 12.5362 2.80556 11.4991C2.08333 10.4806 1.44444 9.42506 0.888889 8.33247C0.333333 7.23987 0.037037 6.27691 0 5.44358C0.037037 3.92506 0.555556 2.6658 1.55556 1.6658C2.55556 0.6658 3.81481 0.147282 5.33333 0.110245C6.85185 0.147282 8.11111 0.6658 9.11111 1.6658C10.1111 2.6658 10.6296 3.92506 10.6667 5.44358ZM5.33333 1.44358C4.2037 1.48061 3.25926 1.8695 2.5 2.61024C1.75926 3.3695 1.37037 4.31395 1.33333 5.44358C1.33333 5.79543 1.47222 6.32321 1.75 7.02691C2.06481 7.73061 2.46296 8.47135 2.94444 9.24913C3.33333 9.89728 3.74074 10.5084 4.16667 11.0825C4.59259 11.6751 4.98148 12.2028 5.33333 12.6658C5.68518 12.2028 6.07407 11.6843 6.5 11.1102C6.92593 10.5177 7.33333 9.89728 7.72222 9.24913C8.2037 8.47135 8.60185 7.73061 8.91667 7.02691C9.19444 6.32321 9.33333 5.79543 9.33333 5.44358C9.2963 4.31395 8.90741 3.3695 8.16667 2.61024C7.40741 1.8695 6.46296 1.48061 5.33333 1.44358Z"
                          fill="#1C2D37"
                        />
                      </svg>
                      Victoria Island (VI), Lagos
                    </p>

                    <div className="mt-[12px] flex items-center border-b-[2px] border-[#1C2D3733] pb-[16px]">
                      <div className="flex items-center max-w-[80px] w-full gap-[8px] border-r-[2px] border-[#1C2D3733]">
                        <Image
                          src="/propertydetail/bed.png"
                          alt="bed"
                          width={14}
                          height={14}
                        />
                        <p className="text-[12px] text-[#1C2D37]">Bed 5</p>
                      </div>
                      <div className="flex items-center max-w-[80px] pl-[6px] w-full gap-[8px] border-r-[2px] border-[#1C2D3733]">
                        <Image
                          src="/propertydetail/bath.png"
                          alt="bath"
                          width={14}
                          height={14}
                        />
                        <p className="text-[12px] text-[#1C2D37]">Bath 3</p>
                      </div>
                      <div className="flex items-center max-w-[80px] pl-[6px] w-full gap-[8px]">
                        <Image
                          src="/propertydetail/sqft.png"
                          alt="sqft"
                          width={14}
                          height={14}
                        />
                        <p className="text-[12px] text-[#1C2D37]">1690 sqft</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-[700] text-[20px] text-[#936639]">
                      ₦500,000,000
                    </p>
                    <p className="font-[500] text-[13px] text-[#25384E]">
                      Status: Available
                    </p>
                  </div>
                </div>

                <Image
                  src="/propertydetail/map.png"
                  alt="map"
                  width={223}
                  height={86}
                  className="rounded-[12px] h-[100px] w-full object-cover mt-[8px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[753px] w-full rounded-[12px] bg-white">
          <div className=" rounded-[12px] p-[29px]">
            <div className="border-[2px] border-dashed rounded-[12px] border-[#A68A64]">
              <div className="p-[10px]">
                <p className="font-[500] text-[20px] text-[#313131] mb-[10px]">
                  Clause 1: Property Condition
                </p>
                <p className="font-[400] text-[16px] text-[#515151]">
                  The property is sold in its current condition as inspected by
                  the buyer. The seller warrants that all major systems
                  (electrical, plumbing, HVAC) are in working order as of the
                  date of this agreement. Any defects discovered after
                  inspection must be reported within 48 hours of signing this
                  agreement.
                </p>
              </div>

              <div className="p-[10px]">
                <p className="font-[500] text-[20px] text-[#313131] mb-[10px]">
                  Clause 2: Payment Terms
                </p>
                <p className="font-[400] text-[16px] text-[#515151]">
                  The total purchase price of $1,200,000 shall be paid as
                  follows: (a) Token amount of $50,000 upon signing this
                  agreement, (b) Remaining balance of $1,150,000 to be paid
                  within 30 days of agreement execution through certified bank
                  transfer or equivalent secure payment method approved by both
                  parties.
                </p>
              </div>
              <div className="p-[10px]">
                <p className="font-[500] text-[20px] text-[#313131] mb-[10px]">
                  Clause 3: Title and Transfer
                </p>
                <p className="font-[400] text-[16px] text-[#515151]">
                  The seller guarantees clear and marketable title to the
                  property, free from all encumbrances except those specifically
                  disclosed. Transfer of ownership will occur upon full payment
                  and completion of all legal documentation. The buyer will
                  receive all original property documents including Certificate
                  of Occupancy, Survey Plan, and Deed of Assignment within 14
                  days of final payment.
                </p>
              </div>
              <div className="flex items-end justify-end px-[29px]">
                 {signatureData ? (
        <img
          src={signatureData}
          alt="Signature Preview"
          className="w-[220px] h-[150px]  rounded-md object-contain"
        />
      ) : (
        <p className="text-red-500">No signature available</p>
      )}
      </div>
            </div>
          </div>
        </div>

        <button
          onClick={onConfirm}
          className="mt-6 flex items-center justify-center gap-[10px] bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)] text-white px-6 py-2 rounded-full max-w-[311px] w-full h-[48px] m-auto"
        >
          Confirm & Proceed
          <Image
            src="/propertydetail/vector.png"
            alt="map"
            width={12}
            height={10}
          />
        </button>
      </div>

      <div className="bg-white py-6 flex items-center px-[146px] w-full">
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 py-2 px-4 rounded-full border border-[#EFD9C7]"
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
          <p className="font-normal text-[18px] text-[#8C8C8C] text-center">
            Step 5 of 7
          </p>
        </div>
      </div>
    </>
  );
};

export default StepFive;
