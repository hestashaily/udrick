// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// const ContactInfo = () => {
//   const router = useRouter();
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleOptionChange = (value: string) => {
//     setSelectedOption(value);
//   };



//   return (
//     <div className="flex flex-col max-w-full w-full">
//       <div className="flex items-center gap-[7px] justify-start pl-[28px]">
//         <Link href="" className="flex gap-[7px] items-center">
//           <Image
//             src="/auth-images/back.png"
//             alt="back"
//             width={18}
//             height={18}
//           />
//           <p className="font-[500] text-[16px] text-[#313131]">Back</p>
//         </Link>
//       </div>
//     <div className="max-w-[428px] w-full m-auto">
    

//       <div className="max-w-[428px] w-full flex items-center justify-center flex-col">
//         <div className="w-full m-auto flex items-center justify-center flex-col">
//           <Image
//             src="/auth-images/verify-otp.png"
//             alt="verify otp"
//             width={100}
//             height={100}
//           />
//           <div className="flex items-center justify-center flex-col">
//             <p className="text-center font-[500] text-[16px] text-[#313131]">
//               Verify Your Contact Info
//             </p>
//             <p className="text-center font-[400] text-[14px] text-[#8C8C8C]">
//             Enter 6 digit verification code.
//             </p>
//           </div>
//         </div>

//         <div className="max-w-[388px] px-[24px] py-[10px] mt-[40px] rounded-md w-full flex items-center justify-between shadow-[0px_5px_8px_0px_#D4C3FF4F]">
//           <div className="flex items-center justify-center gap-[10px]">
//             <Image
//               src="/auth-images/phone.png"
//               alt="phone"
//               width={26}
//               height={26}
//             />
//             <div>
//               <p className="font-[500] text-[16px] text-[#313131]">
//                 Verify via phone number
//               </p>
//               <p className="font-[400] text-[14px] text-[#8C8C8C]">
//                OTP will be sent to your registered mobile number.
//               </p>
//             </div>
//           </div>
//           <input
//             type="radio"
//             className="w-[23px] h-[23px] accent-[#9A7449]"
//             name="resetOption"
//             value="phone"
//             checked={selectedOption === "phone"}
//             onChange={() => handleOptionChange("phone")}
//           />
//         </div>

//         <div className="flex w-full items-center justify-center py-[15px] gap-2">
//           <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
//           <span className="font-[400] text-[16px] text-[#9CA3AF]">Or</span>
//           <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
//         </div>
//         <div className="max-w-[388px] px-[24px] py-[10px] rounded-md w-full flex items-center justify-between shadow-[0px_5px_8px_0px_#D4C3FF4F]">
//           <div className="flex items-center justify-center gap-[10px]">
//             <Image
//               src="/auth-images/message.png"
//               alt="email"
//               width={26}
//               height={26}
//             />
//             <div>
//               <p className="font-[500] text-[16px] text-[#313131]">
//                 Verify via Mail
//               </p>
//               <p className="font-[400] text-[14px] text-[#8C8C8C]">
//                 OTP will be sent to your registered email address.
//               </p>
//             </div>
//           </div>
//           <input
//             type="radio"
//             className="w-[23px] h-[23px] accent-[#9A7449]"
//             name="resetOption"
//             value="email"
//             checked={selectedOption === "email"}
//             onChange={() => handleOptionChange("email")}
//           />
//         </div>

//         <button
//           disabled={!selectedOption}
//           className={`mt-[15px] rounded-md py-[16px] max-w-[388px] font-[500] text-[16px] text-white w-full transition-all duration-200 ${
//             selectedOption
//               ? "bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]"
//               : "bg-gray-300 cursor-not-allowed"
//           }`}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ContactInfo;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ContactInfo = ({ onContinue }: { onContinue: (method: string) => void }) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex flex-col max-w-full w-full">
      <div className="flex items-center gap-[7px] justify-start pl-[28px]">
        <Link href="" className="flex gap-[7px] items-center">
          <Image
            src="/auth-images/back.png"
            alt="back"
            width={18}
            height={18}
          />
          <p className="font-[500] text-[16px] text-[#313131]">Back</p>
        </Link>
      </div>

      <div className="max-w-[428px] w-full m-auto">
        <div className="max-w-[428px] w-full flex items-center justify-center flex-col">
          <div className="w-full m-auto flex items-center justify-center flex-col">
            <Image
              src="/auth-images/verify-otp.png"
              alt="verify otp"
              width={100}
              height={100}
            />
            <div className="flex items-center justify-center flex-col">
              <p className="text-center font-[500] text-[16px] text-[#313131]">
                Verify Your Contact Info
              </p>
              <p className="text-center font-[400] text-[14px] text-[#8C8C8C]">
                Enter 6 digit verification code.
              </p>
            </div>
          </div>

          <div className="max-w-[388px] px-[24px] py-[10px] mt-[40px] rounded-md w-full flex items-center justify-between shadow-[0px_5px_8px_0px_#D4C3FF4F]">
            <div className="flex items-center justify-center gap-[10px]">
              <Image
                src="/auth-images/phone.png"
                alt="phone"
                width={26}
                height={26}
              />
              <div>
                <p className="font-[500] text-[16px] text-[#313131]">
                  Verify via phone number
                </p>
                <p className="font-[400] text-[14px] text-[#8C8C8C]">
                  OTP will be sent to your registered mobile number.
                </p>
              </div>
            </div>
            <input
              type="radio"
              className="w-[23px] h-[23px] accent-[#9A7449]"
              name="resetOption"
              value="phone"
              checked={selectedOption === "phone"}
              onChange={() => handleOptionChange("phone")}
            />
          </div>

          <div className="flex w-full items-center justify-center py-[15px] gap-2">
            <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
            <span className="font-[400] text-[16px] text-[#9CA3AF]">Or</span>
            <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
          </div>

          <div className="max-w-[388px] px-[24px] py-[10px] rounded-md w-full flex items-center justify-between shadow-[0px_5px_8px_0px_#D4C3FF4F]">
            <div className="flex items-center justify-center gap-[10px]">
              <Image
                src="/auth-images/message.png"
                alt="email"
                width={26}
                height={26}
              />
              <div>
                <p className="font-[500] text-[16px] text-[#313131]">
                  Verify via Mail
                </p>
                <p className="font-[400] text-[14px] text-[#8C8C8C]">
                  OTP will be sent to your registered email address.
                </p>
              </div>
            </div>
            <input
              type="radio"
              className="w-[23px] h-[23px] accent-[#9A7449]"
              name="resetOption"
              value="email"
              checked={selectedOption === "email"}
              onChange={() => handleOptionChange("email")}
            />
          </div>

          <button
            disabled={!selectedOption}
            onClick={() => onContinue(selectedOption)}
            className={`mt-[15px] rounded-md py-[16px] max-w-[388px] font-[500] text-[16px] text-white w-full transition-all duration-200 ${
              selectedOption
                ? "bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
