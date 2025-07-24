
"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const steps = [
  "Purchase Overview",
  "Upload ID",
  "Agreement",
  "Signature",
  "Review",
  "Checkout",
  "Confirmation",
];

const skillsList = ["JavaScript", "Python", "React", "Node.js", "AWS", "Docker"];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: new Set<string>(),
    resume: null as File | null,
    experience: "",
    education: "",
    availability: "",
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
    <div className="bg-[#FAFAFA] rounded shadow-md mx-auto">
      <div className="relative mb-8 shadow-md py-[16px] bg-white">
        <div className="flex justify-between mb-2 max-w-[1116px] w-full m-auto">
          {steps.map((label, index) => (
            <div
              key={label}
              className="flex gap-[10px] items-center justify-center text-xs w-full relative"
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full z-10 ${
                  index === step
                    ? "bg-blue-600 text-white"
                    : index < step
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <p className="font-[400] text-[12px] text-[#25384E]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 0 && <StepOne onConfirm={handleNext} />}

       
        {step === 1 && <StepTwo onConfirm={handleNext} />}
      
        {step === 2 && <StepThree onConfirm={handleNext} onPrevious={handleBack} />}
        {step === 3 && <StepFour onConfirm={handleNext} onPrevious={handleBack} />}



        {step === 4 && (
          <div className="space-y-4">
            <textarea
              name="education"
              placeholder="Enter your educational background"
              className="w-full p-2 border rounded"
              rows={4}
              value={formData.education}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <input
              type="text"
              name="availability"
              placeholder="e.g., Immediately, 1 Month Notice"
              className="w-full p-2 border rounded"
              value={formData.availability}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {step === 6 && (
          <div className="text-sm space-y-2 text-gray-800">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Skills:</strong> {Array.from(formData.skills).join(", ")}
            </p>
            <p>
              <strong>Resume:</strong> {formData.resume?.name}
            </p>
            <p>
              <strong>Experience:</strong> {formData.experience}
            </p>
            <p>
              <strong>Education:</strong> {formData.education}
            </p>
            <p>
              <strong>Availability:</strong> {formData.availability}
            </p>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center">
          {}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
