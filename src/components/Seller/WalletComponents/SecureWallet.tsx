
import React from 'react';
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';

interface SecureWalletProps {
  onSetPin: () => void;
}

const SecureWallet: React.FC<SecureWalletProps> = ({ onSetPin }) => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col">
      <div className="bg-white shadow-[0px_4px_16px_0px_#5A7DBC0D]">
        <div className="container mx-auto">
          <div className="flex gap-6 py-6 px-[30px] items-center">
            <ArrowLeft size={18} />
            <div className="flex items-center gap-[8px] max-w-[200px] m-auto text-center w-full">
              <Image
                src="/seller/wallet/wallet.png"
                alt="wallet"
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded-[10px]"
              />
              <h3 className="font-[500] text-[24px] text-[#936639]">UDRICK Wallet</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center md:m-[0px] m-[10px]">
        <div className="max-w-[412px] w-full shadow-[0px_7px_29px_0px_#64646F33] bg-white rounded-[20px] p-6 text-center  ">
          <Image
            src="/seller/wallet/securewallet.png"
            alt="securewallet"
            width={69}
            height={69}
            className="w-[69px] h-[69px] m-auto "
          />
          <p className="font-[700] text-[18px] text-[#313131]">Secure Your Wallet</p>
          <p className="font-[400] text-[12px] text-[#515151] mt-[4px]">
            Enhance Your Wallet's Security! Create your PIN in just a few simple steps!
          </p>
          <div className="flex justify-center gap-4 mt-[30px]">
            <button className="py-[12px] px-[30px] border border-[#936639] rounded-[12px] font-[600] text-[14px] max-w-[150px] w-full text-[#936639]">
              Maybe Later
            </button>
            <button
              onClick={onSetPin}
              className="py-[12px] px-[30px] border bg-[#936639] border-[#936639] rounded-[12px] font-[600] text-[14px] max-w-[150px] w-full text-white"
            >
              Set PIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureWallet;
