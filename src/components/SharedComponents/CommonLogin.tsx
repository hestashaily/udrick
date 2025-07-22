"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  role: "buyer" | "seller";
  onBack: () => void;
}

export default function CommonLogin({ role, onBack }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const isFormValid =
    email.trim() !== "" && password.trim() !== "" && rememberMe;

  const title = role === "buyer" ? "Buyer Login" : "Seller Login";
  const buttonText = role === "buyer" ? "Login as Buyer" : "Login as Seller";

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
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.925 0.807617H15.075C15.8221 0.80757 16.5409 1.08548 17.084 1.58433C17.6271 2.08318 17.9532 2.76516 17.9955 3.49037L18 3.65137V11.9639C18 12.6902 17.7142 13.3891 17.2011 13.9171C16.688 14.445 15.9865 14.7621 15.2406 14.8032L15.075 14.8076H2.925C2.17788 14.8077 1.45905 14.5298 0.915992 14.0309C0.37293 13.5321 0.0467988 12.8501 0.00450011 12.1249L0 11.9639V3.65137C-4.89121e-05 2.925 0.285799 2.22614 0.798905 1.69817C1.31201 1.17019 2.01347 0.853116 2.7594 0.811992L2.925 0.807617ZM16.65 5.50899L9.315 9.26274C9.23218 9.30528 9.14115 9.33059 9.04772 9.33707C8.95429 9.34355 8.86049 9.33105 8.7723 9.30037L8.6859 9.26362L1.35 5.50987V11.9639C1.35001 12.3482 1.49865 12.7184 1.76641 13.0011C2.03417 13.2838 2.40147 13.4582 2.7954 13.4899L2.925 13.4951H15.075C15.4704 13.4951 15.8513 13.3505 16.1421 13.09C16.4329 12.8294 16.6123 12.4721 16.6446 12.089L16.65 11.9639V5.50899ZM15.075 2.12012H2.925C2.52973 2.12013 2.14891 2.26464 1.85815 2.52496C1.56738 2.78528 1.38793 3.14238 1.3554 3.52537L1.35 3.65137V4.02674L9 7.94149L16.65 4.02587V3.65137C16.65 3.26694 16.5012 2.89658 16.2333 2.61387C15.9653 2.33116 15.5978 2.15678 15.2037 2.12537L15.075 2.12012Z"
                fill="#8C8C8C"
              />
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
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.25 6.42447C13.7274 6.42447 14.1849 6.61425 14.5225 6.95181C14.86 7.28938 15.0498 7.74688 15.0498 8.22427V15.2243C15.0498 15.7017 14.86 16.1592 14.5225 16.4967C14.1849 16.8343 13.7274 17.0241 13.25 17.0241H2.75C2.27261 17.0241 1.8151 16.8343 1.47754 16.4967C1.13997 16.1592 0.950195 15.7017 0.950195 15.2243V8.22427C0.950195 7.74688 1.13997 7.28938 1.47754 6.95181C1.8151 6.61425 2.27261 6.42447 2.75 6.42447H13.25ZM2.75 7.69107C2.60855 7.69107 2.47307 7.7473 2.37305 7.84732C2.27303 7.94734 2.2168 8.08282 2.2168 8.22427V15.2243C2.2168 15.3657 2.27303 15.5012 2.37305 15.6012C2.47307 15.7012 2.60855 15.7575 2.75 15.7575H13.25C13.3914 15.7575 13.5269 15.7012 13.627 15.6012C13.727 15.5012 13.7832 15.3657 13.7832 15.2243V8.22427C13.7832 8.08282 13.727 7.94734 13.627 7.84732C13.5269 7.7473 13.3914 7.69107 13.25 7.69107H2.75Z"
                fill="#A3A3A3"
                stroke="#A3A3A3"
                strokeWidth="0.1"
              />
              <path
                d="M7.99902 9.34114C8.16688 9.34123 8.32759 9.40799 8.44629 9.52669C8.56499 9.64538 8.63175 9.8061 8.63184 9.97395V13.474C8.63184 13.6419 8.56506 13.8034 8.44629 13.9222C8.32761 14.0408 8.1668 14.1077 7.99902 14.1077C7.83105 14.1077 7.66955 14.041 7.55078 13.9222C7.43201 13.8034 7.36523 13.6419 7.36523 13.474V9.97395C7.36532 9.80618 7.43219 9.64537 7.55078 9.52669C7.66955 9.40791 7.83105 9.34114 7.99902 9.34114ZM7.99902 0.591141C9.24977 0.591227 10.4495 1.08763 11.334 1.972C12.2185 2.85655 12.7158 4.057 12.7158 5.30794V7.69075H3.28223V5.30794C3.28223 4.057 3.77854 2.85655 4.66309 1.972C5.54763 1.08745 6.74809 0.591141 7.99902 0.591141ZM7.99902 1.85774C7.08403 1.85774 6.20657 2.22148 5.55957 2.86848C4.91257 3.51548 4.54883 4.39294 4.54883 5.30794V6.42415H11.4482V5.30794C11.4482 4.39309 11.0853 3.51545 10.4385 2.86848C9.79155 2.22156 8.9139 1.85783 7.99902 1.85774Z"
                fill="#A3A3A3"
                stroke="#A3A3A3"
                strokeWidth="0.1"
              />
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
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.50033 0C13.4791 0 16.9249 3.01758 18.454 4.62503L18.4573 4.62753C19.1808 5.39836 19.1808 6.60168 18.4581 7.37332L18.4548 7.37582C16.925 8.98247 13.4791 12 9.50031 12C5.52153 12 2.07569 8.98242 0.545832 7.37497L0.543346 7.37247C-0.180977 6.60164 -0.180977 5.39832 0.542517 4.62668L0.545832 4.62418C2.07567 3.01753 5.52155 0 9.50033 0ZM9.50033 2.66665C7.67131 2.66665 6.18539 4.15997 6.18539 5.99995C6.18539 7.83994 7.67131 9.33326 9.50033 9.33326C11.3294 9.33326 12.8153 7.83994 12.8153 5.99995C12.8153 4.15997 11.3294 2.66665 9.50033 2.66665ZM9.50033 3.99997C10.5976 3.99997 11.4893 4.89579 11.4893 5.99995C11.4893 7.10412 10.5976 7.99994 9.50033 7.99994C8.40308 7.99994 7.51137 7.10412 7.51137 5.99995C7.51137 4.89579 8.40308 3.99997 9.50033 3.99997Z"
                      fill="#515151"
                      fill-opacity="0.5"
                    />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 3.02361L3.02337 2.25024L15.75 14.9769L14.9767 15.7503L2.25 3.02361ZM9.11749 6.75316L11.2469 8.88258C11.2173 8.32742 10.9835 7.80281 10.5904 7.4097C10.1973 7.01659 9.67265 6.78274 9.11749 6.75316ZM8.88265 11.2468L6.75323 9.11742C6.78282 9.67258 7.01666 10.1972 7.40977 10.5903C7.80289 10.9834 8.32749 11.2173 8.88265 11.2468Z"
                      fill="#A8A8A8"
                    />
                    <path
                      d="M9 12.375C8.48079 12.375 7.96856 12.2553 7.50319 12.025C7.03782 11.7948 6.63185 11.4603 6.31686 11.0475C6.00187 10.6347 5.78635 10.1549 5.68709 9.64525C5.58782 9.13561 5.60748 8.60994 5.74453 8.10914L3.31629 5.68055C2.32453 6.58898 1.37953 7.77445 0.5625 9C1.49133 10.5469 2.76187 12.1373 4.08516 13.0493C5.6032 14.0948 7.25379 14.625 8.99156 14.625C9.94123 14.6256 10.8838 14.4615 11.7773 14.1398L9.89262 12.2555C9.60177 12.3351 9.30155 12.3753 9 12.375ZM9 5.625C9.51921 5.62497 10.0314 5.74474 10.4968 5.97499C10.9622 6.20523 11.3682 6.53975 11.6831 6.9525C11.9981 7.36525 12.2136 7.84512 12.3129 8.35475C12.4122 8.86439 12.3925 9.39006 12.2555 9.89086L14.7396 12.375C15.7644 11.4521 16.7108 10.2108 17.4375 9C16.5101 7.47316 15.2262 5.88656 13.8804 4.96336C12.3434 3.90937 10.6984 3.375 8.99156 3.375C8.05234 3.37633 7.121 3.5465 6.24199 3.87738L8.10914 5.74453C8.39942 5.66506 8.69904 5.62486 9 5.625Z"
                      fill="#A8A8A8"
                    />
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
