
"use client";

import React, { useRef, useState } from "react";
interface Props {
  onNext: () => void;
}

const SignProfilePicture: React.FC<Props> = ({ onNext }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className="max-w-[388px] w-full">
      <div className="max-w-[269px] w-full m-auto">
        <div
          className="rounded-full max-w-[175px] h-[175px] m-auto w-full  border-2 border-dashed border-[#9D9D9D] cursor-pointer overflow-hidden flex items-center justify-center"
          onClick={handleBrowseClick}
        >
          {preview ? (
            <img
              src={preview}
              alt="Profile Preview"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <svg
              width="83"
              height="82"
              viewBox="0 0 83 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M82.0682 73.8449C82.0682 78.3542 78.4139 82.0032 73.8981 82.0032H8.53733C4.0215 82.0032 0.367188 78.3542 0.367188 73.8449C0.367188 56.6678 13.35 42.428 30.0177 40.4107C33.3451 42.25 37.1479 43.318 41.2179 43.318C45.2879 43.318 49.0909 42.25 52.4181 40.4107C69.0849 42.428 82.0682 56.6678 82.0682 73.8449ZM38.5736 40.1439C39.4352 40.2922 40.3265 40.3516 41.2177 40.3516C42.1089 40.3516 43.0003 40.2922 43.8618 40.1439C53.6654 38.8682 61.271 30.4722 61.271 20.3268C61.271 9.2909 52.269 0.301758 41.2169 0.301758C30.1648 0.301758 21.1628 9.29071 21.1628 20.3268C21.1628 30.4731 28.7685 38.868 38.5721 40.1439H38.5736Z"
                fill="#9D9D9D"
              />
            </svg>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <div className="mt-[20px]">
          <p className="font-[500] text-[16px] text-center text-[#313131]">
            Set Profile Picture
          </p>
          <p className="font-[400] text-[14px] text-center mt-[4px] text-[#8C8C8C]">
            Add a profile picture to make your experience more personal.
          </p>
          <p
            className="text-center font-[600] text-[16px] cursor-pointer text-[#2A60F1] mt-[20px]"
            onClick={handleBrowseClick}
          >
            Browse
          </p>
        </div>
      </div>

      <div className="mt-[20px] flex items-center gap-[26px]">
        <button className="max-w-[182px] px-[43px] w-full border border-[#A68A64] py-[16px] rounded-[12px] font-[500] text-[16px] text-[#9B754B]">
          Skip for Now
        </button>
        <button
          style={{
            background:
              "linear-gradient(360deg, #EFD9C7 -62.61%, #A68A64 25.65%, #936639 113.91%)",
          }}
            onClick={onNext}
          className="max-w-[180px] w-full border border-[#A68A64] py-[16px] rounded-[12px] font-[500] text-[16px] text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SignProfilePicture;
