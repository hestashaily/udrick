
"use client";
import React, { useState } from "react";
import AccountDetailsPopup from "./AccountDetailsPopup";
import FundCard from "./FundCard";
import Invoice from "./Invoice";
import OriginalDocument from "./OriginalDocument";
import SignatureComponent from "./SignatureComponent";
import SuccessPopup from "./SuccessPopup";

const AvailableFunds = () => {
  const [step, setStep] = useState<
    null | "document" | "signature" | "invoice" | "account" | "success"
  >(null);

  return (
    <div className="flex lg:flex-wrap flex-nowrap gap-[20px]">
      <FundCard label="Sold" onClick={() => setStep("document")} />
      <FundCard label="Purchase" onClick={() => setStep("document")} />

      {step && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
         {step === "document" && (
  <OriginalDocument
    onClose={() => setStep(null)}
    onNext={() => setStep("signature")}  
    onSkip={() => setStep("invoice")}  
  />
)}



          {step === "signature" && (
            <SignatureComponent
              onNext={() => setStep("invoice")}
              onClose={() => setStep(null)}
            />
          )}

          {step === "invoice" && (
            <Invoice
              onNext={() => setStep("account")}
              onClose={() => setStep(null)}
            />
          )}

          {step === "account" && (
            <AccountDetailsPopup
              onNext={() => setStep("success")}
              onClose={() => setStep(null)}
            />
          )}

          {step === "success" && (
            <SuccessPopup onClose={() => setStep(null)} />
          )}
        </div>
      )}
    </div>
  );
};

export default AvailableFunds;
