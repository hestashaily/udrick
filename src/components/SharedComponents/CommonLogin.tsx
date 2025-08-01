
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// interface Props {
//   role: "buyer" | "seller";
//   onBack: () => void;
// }

export default function CommonLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const isFormValid =
    email.trim() !== "" && password.trim() !== "" && rememberMe;

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <p className="font-[500] text-[16px] text-[#313131] mb-[8px]">
        Welcome Back! Log in to your Account
      </p>
   

      <p className="font-[400] text-[14px] text-[#8C8C8C]">
        Enter your email and password details to continue
      </p>

      <form className="w-full mt-[20px]">
        <div className="flex items-start flex-col w-full">
          <label className="font-[500] text-[16px] text-[#313131]">Email</label>
          <div className="flex items-center mt-[5px] p-[18px] gap-[13px] shadow-[0px_1px_3px_0px_#0000001A] rounded-[12px] w-full">
            {/* Email Icon */}
           <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.925 0.807617H15.075C15.8221 0.80757 16.5409 1.08548 17.084 1.58433C17.6271 2.08318 17.9532 2.76516 17.9955 3.49037L18 3.65137V11.9639C18 12.6902 17.7142 13.3891 17.2011 13.9171C16.688 14.445 15.9865 14.7621 15.2406 14.8032L15.075 14.8076H2.925C2.17788 14.8077 1.45905 14.5298 0.915992 14.0309C0.37293 13.5321 0.0467988 12.8501 0.00450011 12.1249L6.27767e-09 11.9639V3.65137C-4.89121e-05 2.925 0.285799 2.22614 0.798905 1.69817C1.31201 1.17019 2.01347 0.853116 2.7594 0.811992L2.925 0.807617ZM16.65 5.50899L9.315 9.26274C9.23218 9.30528 9.14115 9.33059 9.04772 9.33707C8.95429 9.34355 8.86049 9.33105 8.7723 9.30037L8.6859 9.26362L1.35 5.50987V11.9639C1.35001 12.3482 1.49865 12.7184 1.76641 13.0011C2.03417 13.2838 2.40147 13.4582 2.7954 13.4899L2.925 13.4951H15.075C15.4704 13.4951 15.8513 13.3505 16.1421 13.09C16.4329 12.8294 16.6123 12.4721 16.6446 12.089L16.65 11.9639V5.50899ZM15.075 2.12012H2.925C2.52973 2.12013 2.14891 2.26464 1.85815 2.52496C1.56738 2.78528 1.38793 3.14238 1.3554 3.52537L1.35 3.65137V4.02674L9 7.94149L16.65 4.02587V3.65137C16.65 3.26694 16.5012 2.89658 16.2333 2.61387C15.9653 2.33116 15.5978 2.15678 15.2037 2.12537L15.075 2.12012Z" fill="#8C8C8C"/>
</svg>

            <input
              type="email"
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none w-full font-[400] text-[14px] text-[#8C8C8C]"
            />
          </div>
        </div>

        <div className="flex items-start flex-col w-full mt-[15px]">
          <label className="font-[500] text-[16px] text-[#313131]">
            Password
          </label>
          <div className="flex items-center mt-[5px] p-[18px] gap-[13px] shadow-[0px_1px_3px_0px_#0000001A] rounded-[12px] w-full">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 10.4245C17.7274 10.4245 18.1849 10.6142 18.5225 10.9518C18.86 11.2894 19.0498 11.7469 19.0498 12.2243V19.2243C19.0498 19.7017 18.86 20.1592 18.5225 20.4967C18.1849 20.8343 17.7274 21.0241 17.25 21.0241H6.75C6.27261 21.0241 5.8151 20.8343 5.47754 20.4967C5.13997 20.1592 4.9502 19.7017 4.9502 19.2243V12.2243C4.9502 11.7469 5.13997 11.2894 5.47754 10.9518C5.8151 10.6142 6.27261 10.4245 6.75 10.4245H17.25ZM6.75 11.6911C6.60855 11.6911 6.47307 11.7473 6.37305 11.8473C6.27303 11.9473 6.2168 12.0828 6.2168 12.2243V19.2243C6.2168 19.3657 6.27303 19.5012 6.37305 19.6012C6.47307 19.7012 6.60855 19.7575 6.75 19.7575H17.25C17.3914 19.7575 17.5269 19.7012 17.627 19.6012C17.727 19.5012 17.7832 19.3657 17.7832 19.2243V12.2243C17.7832 12.0828 17.727 11.9473 17.627 11.8473C17.5269 11.7473 17.3914 11.6911 17.25 11.6911H6.75Z" fill="#A3A3A3" stroke="#A3A3A3" strokeWidth="0.1"/>
<path d="M11.999 13.3411C12.1669 13.3412 12.3276 13.408 12.4463 13.5267C12.565 13.6454 12.6317 13.8061 12.6318 13.974V17.474C12.6318 17.6419 12.5651 17.8034 12.4463 17.9222C12.3276 18.0408 12.1668 18.1077 11.999 18.1077C11.8311 18.1077 11.6696 18.041 11.5508 17.9222C11.432 17.8034 11.3652 17.6419 11.3652 17.474V13.974C11.3653 13.8062 11.4322 13.6454 11.5508 13.5267C11.6696 13.4079 11.8311 13.3411 11.999 13.3411ZM11.999 4.59114C13.2498 4.59123 14.4495 5.08763 15.334 5.972C16.2185 6.85655 16.7158 8.057 16.7158 9.30794V11.6908H7.28223V9.30794C7.28223 8.057 7.77854 6.85655 8.66309 5.972C9.54763 5.08745 10.7481 4.59114 11.999 4.59114ZM11.999 5.85774C11.084 5.85774 10.2066 6.22148 9.55957 6.86848C8.91257 7.51548 8.54883 8.39294 8.54883 9.30794V10.4241H15.4482V9.30794C15.4482 8.39309 15.0853 7.51545 14.4385 6.86848C13.7916 6.22156 12.9139 5.85783 11.999 5.85774Z" fill="#A3A3A3" stroke="#A3A3A3" strokeWidth="0.1"/>
</svg>


            <div className="flex justify-between items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-none w-full font-[400] text-[14px] text-[#8C8C8C]"
              />
              <span onClick={togglePassword} className="cursor-pointer">
                {showPassword ? (
                  // Eye icon
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.50033 0C13.4791..." fill="#515151" fillOpacity="0.5" />
                  </svg>
                ) : (
                  // Eye-off icon
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.25 3.02361..." fill="#A8A8A8" />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[10px] flex items-center justify-between">
          <div className="flex gap-[8px]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ accentColor: "#A68A64" }}
            />
            <p className="font-[400] text-[14px] text-[#8C8C8C]">Remember me</p>
          </div>

          <Link href="/auth/forgetpass" passHref>
            <span className="font-[500] text-[14px] text-[#9A7449] cursor-pointer">
              Forgot Password?
            </span>
          </Link>
        </div>

        <Link href="/">
          <button
            disabled={!isFormValid}
            className={`py-[16px] font-[600] text-[16px] text-white w-full rounded-[12px] mt-[25px] transition-all duration-200 ${
              isFormValid
                ? "bg-[#936639] cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </Link>

        <div className="flex items-center justify-center py-[30px] gap-2">
          <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
          <span className="font-[400] text-[16px] text-[#9CA3AF]">Or</span>
          <p className="bg-[#E6EAF5] h-[1px] w-[50%]"></p>
        </div>

        <div className="flex items-center gap-[15px] justify-center">
          <button className="flex items-center justify-center gap-[10px] font-[400] text-[14px] text-[#8C8C8C] border border-[#DDDDDD] rounded-full p-[14px] cursor-pointer">
            <Image
              src="/auth-images/google.png"
              alt="google"
              width={24}
              height={24}
            />
            Sign In with Google
          </button>
          <button className="flex items-center justify-center gap-[10px] font-[400] text-[14px] text-[#8C8C8C] border border-[#DDDDDD] rounded-full p-[14px] cursor-pointer">
            <Image
              src="/auth-images/apple.png"
              alt="apple"
              width={24}
              height={24}
            />
            Sign In with Apple
          </button>
        </div>

        <div className="max-w-[226px] w-full m-auto pt-[30px]">
          <p className="font-[400] text-[14px] text-[#6A6A6A]">
            Don’t have an account yet?{" "}
            <Link href="/auth/signup">
              <span className="font-[500] text-[#9A7449]">SignUp</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
