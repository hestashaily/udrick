"use client";
import React, { useState } from "react";
import ResetViaPhone from "./SubComponents/ResetViaPhone";
import VerifyPhoneNumber from "./SubComponents/VerifyPhoneNumber";
import SetPasswordViaPhone from "./SubComponents/SetPasswordViaPhone";
import SuccessPassword from "../ForgotMailComponents/SubComponents/SuccessPassword";

const Phone = () => {
  const [step, setStep] = useState<"reset" | "verify" | "setpassword" | "success">("reset");
  const [phone, setPhone] = useState("");

  const handleContinue = (enteredPhone: string) => {
    setPhone(enteredPhone);
    setStep("verify");
  };

  const handleVerify = () => {
    setStep("setpassword");
  };

  const handlePasswordSuccess = () => {
    setStep("success");
  };

  return (
    <>
      {step === "reset" && <ResetViaPhone onContinue={handleContinue} />}
      {step === "verify" && (
        <VerifyPhoneNumber phone={phone} onVerify={handleVerify} />

      )}
      {step === "setpassword" && (
        <SetPasswordViaPhone phone={phone} onSuccess={handlePasswordSuccess} />
      )}
      {step === "success" && <SuccessPassword />}
    </>
  );
};

export default Phone;
