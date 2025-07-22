
"use client";
import { useState } from "react";

import SignUp from "@/components/SignComponents/SignUp";
import SignProfilePicture from "@/components/SignComponents/SignProfilePicture";
import CompleteProfile from "@/components/SignComponents/CompleteProfile";
import ContactInfo from "@/components/SignComponents/ContactInfo";
import EmailPhnVerify from "@/components/SignComponents/EmailPhnVerify";
import SuccessPassword from "@/components/ForgotMailComponents/SubComponents/SuccessPassword";

export default function SignUpPage() {
  const [step, setStep] = useState<
    "signup" | "profile" | "complete" | "contact" | "verify" | "success"
  >("signup");

  const [verificationMethod, setVerificationMethod] = useState<"phone" | "email" | "">("");

  return (
    <>
      {step === "signup" && (
        <SignUp onContinue={() => setStep("profile")} />
      )}

      {step === "profile" && (
        <SignProfilePicture onNext={() => setStep("complete")} />
      )}

      {step === "complete" && (
        <CompleteProfile onComplete={() => setStep("contact")} />
      )}

      {step === "contact" && (
        <ContactInfo
          onContinue={(method) => {
            setVerificationMethod(method as "phone" | "email");
            setStep("verify");
          }}
        />
      )}

      {step === "verify" && verificationMethod && (
        <EmailPhnVerify
          method={verificationMethod}
          onVerifyComplete={() => {
            setStep("success");
          }}
        />
      )}

      {step === "success" && <SuccessPassword />}
    </>
  );
}
