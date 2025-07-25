

"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SignatureCanvas from "react-signature-canvas"; 
import home from "../../../public/auth-images/home.svg";
import uploadid from "../../../public/auth-images/uploadid.svg";
import agreement from "../../../public/auth-images/agreement.svg";
import signature from "../../../public/auth-images/signature.svg";
import review from "../../../public/auth-images/review.svg";
import checkout from "../../../public/auth-images/checkout.svg";
import confirmation from "../../../public/auth-images/confirmation.svg";

const steps = [
  "Purchase Overview",
  "Upload ID",
  "Agreement",
  "Signature",
  "Review",
  "Checkout",
  "Confirmation",
];

const stepIcons = [
  home,
  uploadid,
  agreement,
  signature,
  review,
  checkout,
  confirmation,
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const sigCanvasRef = useRef<SignatureCanvas>(null); 

  const resetForm = () => setStep(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: new Set<string>(),
    resume: null as File | null,
    experience: "",
    education: "",
    availability: "",
    signatures: [] as string[],
  });

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSkill = (skill: string) => {
    const updatedSkills = new Set(formData.skills);
    updatedSkills.has(skill)
      ? updatedSkills.delete(skill)
      : updatedSkills.add(skill);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = {
      ...formData,
      skills: Array.from(formData.skills),
    };
    console.log("Submitted:", formatted);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-[rgb(250,250,250)] rounded shadow-md mx-auto">
      <div className="bg-white mx-auto px-4">
        <div className="container mx-auto">
          <div className="flex gap-6 py-6 items-center">
            <ArrowLeft size={18} />
            <div className="flex flex-col text-center w-full">
              <h3 className="font-bold text-3xl text-[#0d0d0c]">
                Purchase Process
              </h3>
              <span className="inline-block font-normal text-sm text-[#6D6D6D]">
                Step {step + 1} of {steps.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center border-t border-[#43475545] bg-white shadow-md justify-between px-[182px] py-4 overflow-x-auto">
        {steps.map((label, index) => (
          <div key={index} className="flex gap-[10px] items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full z-10 overflow-hidden
              ${
                index <= step
                  ? "bg-[#34A853] border-white"
                  : "bg-white border-black"
              } 
              border-[2px]`}
            >
              <Image
                src={stepIcons[index]}
                alt={`Step ${index + 1}`}
                width={24}
                height={24}
                className={`object-contain ${
                  index <= step ? "invert brightness-0" : ""
                }`}
              />
            </div>

            <span className="text-[10px] text-center mt-1">{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 0 && <StepOne onConfirm={handleNext} />}
        {step === 1 && <StepTwo onConfirm={handleNext} />}
        {step === 2 && (
          <StepThree onConfirm={handleNext} onPrevious={handleBack} />
        )}
      {step === 3 && (
        <StepFour
          sigCanvasRef={sigCanvasRef} 
          onConfirm={(signatureData) => {
            setFormData((prev) => ({
              ...prev,
              signatures: [...prev.signatures, signatureData],
            }));
            setStep(step + 1);
          }}
          onPrevious={handleBack}
        />
      )}
        {step === 4 && (
          <StepFive
            onConfirm={handleNext}
            onPrevious={handleBack}
            signatureData={
              formData.signatures[formData.signatures.length - 1] || ""
            }
          />
        )}
        {step === 5 && (
          <StepSix onConfirm={handleNext} onPrevious={handleBack} />
        )}
        {step === 6 && (
          <StepSeven
            onReset={resetForm}
            onConfirm={handleNext}
            onPrevious={handleBack}
          />
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
