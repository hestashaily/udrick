import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import WalletTabs from "./WalletTabs";

const WalletBalance = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className=" bg-white shadow-[0px_4px_16px_0px_#5A7DBC0D] ">
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
              <h3 className="font-[500] text-[24px] text-[#936639]">
                UDRICK Wallet
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[20px] bg-[#FAFAFA] ">
      <div className="max-w-[1152px] w-full m-auto p-[16px] bg-white rounded-[12px] py-[12px]">
        <div className="bg-[url('/seller/wallet/wallet-bg.png')] h-[266px] bg-cover p-[40px] rounded-[25px]">
          <div className="flex items-end justify-end flex-col mt-[4px]">
            <div className="relative group">
              <Image
                src="/seller/wallet/setting.png"
                alt="setting"
                width={24}
                height={24}
                className="w-[24px] h-[24px] rounded-[10px] cursor-pointer"
              />
              <button className="w-[157px] font-[400] text-[14px] text-[#313131] py-[14px] px-[25px] rounded-[10px] shadow-[0px_2px_8px_0px_#63636333] absolute top-[120%] right-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Reset Wallet PIN
              </button>
            </div>
          </div>

          <div className="mt-[40px]">
            <p className="font-[400] text-[18px] text-[#FFFFFFE5]">Total Available Balance</p>
            <p className="font-[700] text-[32px] text-[#FFFFFF]">₦4,800,000</p>
            <div className="flex  gap-[6px] items-center">
              <Image
                src="/seller/wallet/i-icon.png"
                alt="wallet"
                width={12}
                height={12}
                className="w-[12px] h-[12px] rounded-[10px]"
              />
              <p className="font-[400] text-[13px] text-[#FFFFFF]">
                Total of all cleared payments. Withdrawals are
                property-specific.
              </p>
            </div>
          </div>
        </div>
        <WalletTabs/>
      </div>
      </div>
    </div>
  );
};

export default WalletBalance;

