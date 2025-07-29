import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
interface SetPinProps {
  onSetPinComplete: () => void; 
}

const SetPin: React.FC<SetPinProps> = ({ onSetPinComplete }) => {

  const [otp, setOtp] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
   const isPinValid = otp.length === 4 && confirmPin.length === 4 && otp === confirmPin;

  const handleSetPin = () => {
    if (isPinValid) {
      onSetPinComplete(); 
    }
  };
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
              <h3 className="font-[500] text-[24px] text-[#936639]">
                UDRICK Wallet
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-[412px] w-full shadow-[0px_7px_29px_0px_#64646F33] bg-white rounded-[20px] p-6 text-start">
          <Image
            src="/seller/wallet/securewallet.png"
            alt="securewallet"
            width={69}
            height={69}
            className="w-[69px] h-[69px] m-auto"
          />

        
          <div className="mt-[15px]">
            <p className="font-[700] text-[16px] text-[#313131]">
              Create a 4-digit PIN
            </p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => (
                <div className="relative w-[72px] h-[44px] border-b-2 border-b-brown-600 mr-[10px] text-center">
                  {!props.value && (
                    <img
                      src="/seller/wallet/placeholder.png"
                      alt="placeholder"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] pointer-events-none"
                    />
                  )}
                  <input
                    {...props}
                    className="w-[72px] h-[44px] text-center text-lg bg-transparent focus:outline-none"
                  />
                </div>
              )}
            />
          </div>

     
          <div className="mt-[15px]">
            <p className="font-[700] text-[16px] text-[#313131]">
              Confirm PIN
            </p>
            <OtpInput
              value={confirmPin}
              onChange={setConfirmPin}
              numInputs={4}
              renderInput={(props) => (
                <div className="relative w-[72px] h-[44px] border-b-2 border-b-brown-600 mr-[10px] text-center">
                  {!props.value && (
                    <img
                      src="/seller/wallet/placeholder.png"
                      alt="placeholder"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] pointer-events-none"
                    />
                  )}
                  <input
                    {...props}
                    className="w-[72px] h-[44px] text-center text-lg bg-transparent focus:outline-none"
                  />
                </div>
              )}
            />
          </div>

   <button
        onClick={handleSetPin}
        className={`mt-[20px] w-full text-center bg-[#936639] h-[43px] rounded-[12px] font-[700] text-white text-[14px] transition-all duration-200 ${
          isPinValid ? "" : "opacity-50 pointer-events-none"
        }`}
        disabled={!isPinValid}
      >
        Set PIN
      </button>

        </div>
      </div>
    </div>
  );
};

export default SetPin;
