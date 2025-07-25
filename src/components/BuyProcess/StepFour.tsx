

"use client";

import React, { useState } from "react";
import Image from "next/image";
import SignatureCanvas from "react-signature-canvas";

interface StepFourProps {
  sigCanvasRef: React.RefObject<SignatureCanvas | null>;
  onConfirm: (signatureData: string) => void;
  onPrevious: () => void;
}


const StepFour: React.FC<StepFourProps> = ({ sigCanvasRef, onConfirm, onPrevious }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const handleBegin = () => {
    setIsDrawing(true);
  };

  const handleClear = () => {
    sigCanvasRef.current?.clear();
    setIsDrawing(false);
  };

  const handleConfirm = () => {
    if (sigCanvasRef.current && !sigCanvasRef.current.isEmpty()) {
      const signatureData = sigCanvasRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      onConfirm(signatureData);
    }
  };

  return (
    <>
      <div className="w-full m-auto bg-[#FAFAFA] px-4 py-6 flex items-center justify-center flex-col">
        <div className="space-y-4 text-center">
          <p className="font-medium text-[28px] text-black">Draw Your Signature</p>
          <p className="font-normal text-[16px] text-[#25384E] mb-16">
            Please sign in the box below to proceed
          </p>
        </div>

        <div className="bg-white shadow-md rounded-[12px] p-7 max-w-[681px] w-full">
          <div className="w-full border-dashed rounded-[12px] border-[#A68A64] border-2 overflow-hidden">
            <SignatureCanvas
              ref={sigCanvasRef}
              onBegin={handleBegin}
              canvasProps={{
                width: 620,
                height: 150,
                className: "w-full h-[150px]",
              }}
            />
          </div>

          <div className="flex gap-12 justify-center mt-4">
            <button
              type="button"
              onClick={handleClear}
              className="font-normal flex items-center gap-2 px-4 py-2 rounded-[15px] text-[16px] text-[#936639] border border-[#936639]"
            >
              Redraw
            </button>

            <button
              type="button"
              onClick={handleConfirm}
              disabled={!isDrawing}
              className={`font-normal flex items-center gap-2 px-4 py-2 rounded-[15px] text-[16px] border border-[#936639] ${
                isDrawing
                  ? "bg-[#936639] text-white"
                  : "bg-[#EFD9C7] text-[#936639] cursor-not-allowed"
              }`}
            >
              Save
            </button>
          </div>
        </div>

        <button
          disabled={!isDrawing}
          onClick={handleConfirm}
          className={`flex max-w-[311px] mt-[30px] items-center w-full justify-center gap-2 text-white rounded-full h-[48px] ${
            isDrawing ? "bg-[#936639]" : "bg-[#A68A64] cursor-not-allowed"
          }`}
        >
          Add Signature to Proceed
          <Image
            src="/propertydetail/vector.png"
            alt="next"
            width={14}
            height={14}
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
            Step 4 of 7
          </p>
        </div>
      </div>
    </>
  );
};

export default StepFour;
