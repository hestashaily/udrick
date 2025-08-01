

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import OtpInput from "react-otp-input";
// import Link from "next/link";

// interface Props {
//   email: string;
//   onVerify: () => void;
// }

// const VerifyPhoneNumber: React.FC<Props> = ({ email, onVerify }) => {
//   const [otp, setOtp] = useState("");

//   return (
//     <>
//     <Link href="/auth/forgotphone">
//       <div className="flex pl-[28px] items-center gap-[7px] justify-start pb-[40px]">
//         <Image src="/auth-images/back.png" alt="back" width={18} height={18} />
//         <p className="font-[500] text-[16px] text-[#313131]">Back</p>
//       </div>
// </Link>
//       <div className="max-w-[428px] w-full m-auto flex flex-col items-center">
//         <Image src="/auth-images/verify-otp.png" alt="otp" width={100} height={100} />

//         <div className="text-center mt-[50px]">
//           <p className="font-[500] text-[16px] text-[#313131]">Verify Your Email</p>
//           <p className="font-[400] text-[14px] text-[#8C8C8C] mt-2">
//             Enter 6 digit verification code.
//           </p>
//           <div className="mt-4">
//             <OtpInput
//               value={otp}
//               onChange={setOtp}
//               numInputs={6}
//               inputStyle={{
//                 width: "52px",
//                 height: "52px",
//                 margin: "0 6px",
//                 fontSize: "20px",
//                 borderRadius: "8px",
//                 border: "1px solid #B4B4B4",
//                 textAlign: "center",
//                 outline: "none",
//                 background: "transparent",
//                 color: "#313131",
//               }}
//               renderInput={(props) => <input {...props} />}
//             />
//           </div>
//         </div>

//         <p className="mt-[5px] font-[400] text-[14px] text-[#8C8C8C]">
//           Didn’t get the code?{" "}
//           <span className="text-[#007AFF] font-[700] cursor-pointer">Resend</span>
//         </p>

//         <button
//           onClick={onVerify}
//           disabled={otp.length !== 6}
//           className={`mt-[15px] w-full py-[16px] rounded-md font-[500] text-[16px] text-white transition-all duration-200 ${
//             otp.length === 6
//               ? "bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]"
//               : "bg-gray-300 cursor-not-allowed"
//           }`}
//         >
//           Continue
//         </button>
//       </div>
//     </>
//   );
// };

// export default VerifyPhoneNumber;
"use client";

import React, { useState } from "react";
import Image from "next/image";
import OtpInput from "react-otp-input";
import Link from "next/link";

interface Props {
  onVerify: () => void;
    phone: string;
}

const VerifyPhoneNumber: React.FC<Props> = ({ onVerify }) => {
  const [otp, setOtp] = useState("");

  return (
    <>
      <Link href="/auth/forgotphone">
        <div className="flex pl-[28px] items-center gap-[7px] justify-start pb-[40px]">
          <Image src="/auth-images/back.png" alt="back" width={18} height={18} />
          <p className="font-[500] text-[16px] text-[#313131]">Back</p>
        </div>
      </Link>

      <div className="max-w-[428px] w-full m-auto flex flex-col items-center">
        <Image src="/auth-images/verify-otp.png" alt="otp" width={100} height={100} />

        <div className="text-center mt-[50px]">
          <p className="font-[500] text-[16px] text-[#313131]">Verify Your Email</p>
          <p className="font-[400] text-[14px] text-[#8C8C8C] mt-2">
            Enter 6 digit verification code.
          </p>

          <div className="mt-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                width: "52px",
                height: "52px",
                margin: "0 6px",
                fontSize: "20px",
                borderRadius: "8px",
                border: "1px solid #B4B4B4",
                textAlign: "center",
                outline: "none",
                background: "transparent",
                color: "#313131",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </div>

        <p className="mt-[5px] font-[400] text-[14px] text-[#8C8C8C]">
          Didn’t get the code?{" "}
          <span className="text-[#007AFF] font-[700] cursor-pointer">Resend</span>
        </p>

        <button
          onClick={onVerify}
          disabled={otp.length !== 6}
          className={`mt-[15px] w-full py-[16px] rounded-md font-[500] text-[16px] text-white transition-all duration-200 ${
            otp.length === 6
              ? "bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default VerifyPhoneNumber;
