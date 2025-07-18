// "use client"
// import { useState } from "react";

// import SignUp from "@/app/components/SignComponents/SignUp";
// import SignProfilePicture from "@/app/components/SignComponents/SignProfilePicture";
// import CompleteProfile from "@/app/components/SignComponents/CompleteProfile";
// import ContactInfo from "@/app/components/SignComponents/ContactInfo";

// export default function SignUpPage() {
//   const [step, setStep] = useState<"signup" | "profile" | "complete" | "contact">("signup");

//   return (
//     <>
//       {step === "signup" && <SignUp onContinue={() => setStep("profile")} />}
//       {step === "profile" && <SignProfilePicture onNext={() => setStep("complete")} />}
//       {step === "complete" && <CompleteProfile onComplete={() => setStep("contact")} />}
//       {step === "contact" && <ContactInfo />}
//     </>
//   );
// }
"use client";
import { useState } from "react";

import SignUp from "@/app/components/SignComponents/SignUp";
import SignProfilePicture from "@/app/components/SignComponents/SignProfilePicture";
import CompleteProfile from "@/app/components/SignComponents/CompleteProfile";
import ContactInfo from "@/app/components/SignComponents/ContactInfo";
import EmailPhnVerify from "@/app/components/SignComponents/EmailPhnVerify";

export default function SignUpPage() {
  const [step, setStep] = useState<
    "signup" | "profile" | "complete" | "contact" | "verify"
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
            console.log("✅ OTP verified successfully");
            // You can now redirect to dashboard or next step
            // router.push("/dashboard") or setStep("nextStep");
          }}
        />
      )}
    </>
  );
}
