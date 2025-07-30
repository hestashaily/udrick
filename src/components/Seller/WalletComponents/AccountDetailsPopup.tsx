import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface AccountDetailsPopupProps {
  onClose: () => void;
  onNext: () => void;
}

const AccountDetailsPopup: React.FC<AccountDetailsPopupProps> = ({
  onClose,
  onNext,
}) => {
  return (
    <div className="relative max-w-[641px] w-full p-2 bg-white rounded-lg md:m-0 m-[10px]">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="text-center px-2 py-4">
        <h2 className="font-[500] text-[28px] text-[#000000]">
          Enter Account Details
        </h2>
        <p className="text-gray-600 mb-6">
          Your account information goes here.
        </p>
        <div className="flex flex-col items-center gap-[15px] w-full">
          <div className="py-[15px] w-full px-[22px] flex items-center justify-between border border-[#D4D4D4] rounded-[12px]">
            <input
              type="text"
              placeholder="Bank Name"
              className="outline-none w-full font-[400] text-[14px] text-[#25384ECC]"
            />
            <Image
              src="/seller/wallet/bank.png"
              alt="bank"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="py-[15px] w-full px-[22px] flex items-center justify-between border border-[#D4D4D4] rounded-[12px]">
            <input
              type="number"
              placeholder="Account Number"
              className="outline-none w-full font-[400] text-[14px] text-[#25384ECC]"
            />
            <Image
              src="/seller/wallet/account.png"
              alt="account"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="py-[15px] w-full px-[22px] flex items-center justify-between border border-[#D4D4D4] rounded-[12px]">
            <input
              type="number"
              placeholder="Confirm Account Number"
              className="outline-none w-full font-[400] text-[14px] text-[#25384ECC]"
            />
            <Image
              src="/seller/wallet/account.png"
              alt="account"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="py-[15px] w-full px-[22px] flex items-center justify-between border border-[#D4D4D4] rounded-[12px]">
            <input
              type="text"
              placeholder="Account Holder Name"
              className="outline-none w-full font-[400] text-[14px] text-[#25384ECC]"
            />
            <Image
              src="/seller/wallet/account-holder.png"
              alt="account-holder"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />
          </div>
          <button
            onClick={onNext}
            className="w-full rounded-[12px] h-[43px] bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)] font-[500] text-[14px] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsPopup;
