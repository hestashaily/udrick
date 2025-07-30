import React from "react";
import Image from "next/image";

interface FundCardProps {
  label: "Sold" | "Purchase";
  onClick: () => void;
}

const FundCard: React.FC<FundCardProps> = ({ label, onClick }) => {
  return (
    <div className="max-w-[544px] w-full rounded-[12px] shadow-[0px_2px_8px_0px_#63636333] p-[15px]">
      <Image
        src="/seller/wallet/fund-img.png"
        alt="fund-img"
        width={510}
        height={226}
        className="w-[510px]  md:h-[226px] h-[120px] rounded-[10px] cursor-pointer"
      />
      <div className="mt-[17px]">
        <div className="flex items-center justify-between">
          <p className="font-[500] text-[20px] text-[#313131]">
            5 Bedroom Detached Duplex
          </p>
          <button
          
            className="py-[5px] px-[12px] bg-[#9366391A] rounded-full font-[500] text-[14px] text-[#936639]"
          >
            {label}
          </button>
        </div>

        <div className="flex items-center mt-[8px] gap-[8px]">
          <Image
            src="/seller/wallet/location.png"
            alt="location"
            width={10}
            height={14}
            className="w-[14px] h-[14px] rounded-[10px] cursor-pointer"
          />
          <p className="font-[400] text-[14px] text-[#6E7070]">
            Victoria Island (VI), Lagos
          </p>
        </div>

        <div>
          <div className="flex items-center gap-[16px] mt-[15px]">
            <p className="font-[400] text-[16px] text-[#8C8C8C]">
              Amount Received:
            </p>
            <span className="font-[700] text-[20px] text-[#936639]">
              ₦36,000
            </span>
          </div>

          <div className="flex items-center gap-[16px] mt-[10px]">
            <p className="font-[400] text-[16px] text-[#8C8C8C]">Date:</p>
            <span className="font-[500] text-[16px] text-[#515151]">
              April 24, 2025 | 04:00 PM
            </span>
          </div>

          <button
            onClick={onClick} 
           className="flex items-center justify-center gap-[6px] mt-[20px] w-full p-[14px] font-[500] text-[12px] text-white rounded-[15px] bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]">
            <Image
              src="/seller/wallet/download.png"
              alt="download"
              width={20}
              height={20}
              className="w-[20px] h-[20px] rounded-[10px] cursor-pointer"
            />
            Request Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
