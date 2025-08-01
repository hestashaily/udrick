// SuccessPopup.tsx
import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface SuccessPopupProps {
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose }) => {
  return (
    <div className="relative text-center max-w-[440px] w-full bg-white rounded-[12px] px-4 py-6 md:m-[0] m-[10px]">
     
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

     <Image
                    src="/seller/wallet/success.png"
                    alt="success"
                    width={99}
                    height={99}
                    className="w-[99px] h-[99px] m-auto rounded-[10px]"
                  />
      <h2 className="font-[700] text-[20px] text-[#2A3B4D] mt-[15px]">Withdrawal Request Sent Successfully!</h2>
      <p className="text-[13px] font-[500] text-[#8C8C8C]">
        Your amount will be credited to your account once it has been verified by the admin.
      </p>
      <button
        onClick={onClose}
        className=" flex items-center mt-[60px] max-w-[135px] w-full m-auto gap-[6px] justify-center font-[500] text-[16px] text-[#936639] py-[10px] rounded-[10px]"
      >
            <Image
                    src="/seller/wallet/back-arrow.png"
                    alt="arrow-back"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] "
                  />
       Back to Wallet
      </button>
    </div>
  );
};

export default SuccessPopup;
