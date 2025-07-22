"use client";

import React, { useState } from "react";
import ResetEmail from "@/app/components/ForgotMailComponents/SubComponents/ResetEmail";
import OtpEmail from "@/app/components/ForgotMailComponents/SubComponents/OtpEmail";
import SetPassword from "@/app/components/ForgotMailComponents/SubComponents/setpass";
import SuccessPassword from "./SubComponents/SuccessPassword";

const SuccessComponent = () => (
  <div className="text-center mt-20">
    <h2 className="text-2xl font-bold text-green-600">Password Set Successfully!</h2>
    <p className="mt-4 text-gray-600">You can now log in with your new password.</p>
  </div>
);

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
