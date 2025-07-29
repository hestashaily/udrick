"use client";

import React, { useState } from "react";

import SuccessPassword from "./SubComponents/SuccessPassword";
import ResetEmail from "./SubComponents/ResetEmail";
import OtpEmail from "./SubComponents/OtpEmail";
import SetPassword from "./SubComponents/setpass";



const ForgotMail = () => {
  const [step, setStep] = useState<"email" | "otp" | "setpass" | "success">("email");
  const [email, setEmail] = useState("");

  const goToOtp = (email: string) => {
    setEmail(email);
    setStep("otp");
  };

  const goToSetPassword = () => setStep("setpass");

  const goToSuccess = () => setStep("success");

  return (
    <div className="max-w-full w-full px-[50px]">
      {step === "email" && <ResetEmail onContinue={goToOtp} />}
      {step === "otp" && <OtpEmail email={email} onVerify={goToSetPassword} />}
      {step === "setpass" && <SetPassword email={email} onSuccess={goToSuccess} />}
      {step === "success" && <SuccessPassword />}
    </div>
  );
};

export default ForgotMail;
