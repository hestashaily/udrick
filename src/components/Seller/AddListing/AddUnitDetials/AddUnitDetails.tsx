"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ProgressBar } from "../ProgressBar";
import AddUnitDetailForm from "./AddUnitDetailForm";
import { useSearchParams, useRouter } from "next/navigation";
import UnitDetailsUploadDoc from "./UnitDetailsUploadDoc";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setStep } from "@/redux/Slices/StepSlice";

const AddUnitDetails = () => {
  const searchParams = useSearchParams();
  const propertyType = searchParams.get("type");
  const router = useRouter();

  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const { step } = useAppSelector((state) => state.step);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    if (step === 1) {
      const nextStep = 2;
      dispatch(setStep(nextStep));
      router.push(
        `/add-listing/add-unit-details?type=${propertyType}&step=${nextStep}`
      );
    } else {
      setShowDialog(true);
    }
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        router.push("/add-listing");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading, router]);

  return (
    <div className="bg-gray-50 relative min-h-screen">
      {/* Header */}
      <div className="bg-white shadow p-4">
        <div className="container flex items-center mx-auto">
          <Link
            href={
              step === 2
                ? `/add-listing/add-unit-details?type=${propertyType}&step=1`
                : "/add-listing"
            }
            onClick={(e) => {
              if (step === 2) {
                e.preventDefault(); 
                dispatch(setStep(1));
                router.push(
                  `/add-listing/add-unit-details?type=${propertyType}&step=1`
                );
              }
            }}
          >
            <div className="flex justify-center items-center">
              <ArrowLeft size={18} />
            </div>
          </Link>
          <div className="flex flex-1 flex-col justify-center items-center">
            <h2 className="text-[#313131] text-xl md:text-2xl font-medium">
              Add Listing
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto pb-24 p-4">
        <ProgressBar currentStep={step} totalSteps={2} />

        <div className="rounded-md my-5 bg-white border-gray-100 border shadow py-6 px-8">
          {step === 1 ? (
            <AddUnitDetailForm propertyType={propertyType} />
          ) : (
            <UnitDetailsUploadDoc
              propertyType={propertyType}
              step={step}
              setStep={setStep}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div
          className={`flex ${
            step === 2 ? "justify-between" : "justify-end"
          } items-end`}
        >
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="flex justify-center items-center gap-2 px-8 py-2 rounded-3xl border text-[#515151] border-[#EFD9C7]"
            >
              <ArrowLeft /> Previous
            </button>
          )}

          <button
            onClick={handleNext}
            className="flex justify-center items-center gap-2 px-8 py-2 rounded-3xl bg-gradient-to-r from-[#C69C6D] to-[#936639] text-white"
          >
            {step === 1 ? "Next" : "Submit"} <ArrowRight />
          </button>
        </div>
      </div>

      {/* Dialog: Success Message */}
      <Dialog
        open={showDialog}
        onOpenChange={(open) => {
          setShowDialog(open);
          if (!open) {
            setLoading(true); // show loader
          }
        }}
      >
        <DialogContent className="sm:max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="text-lg text-center font-semibold">
              Unit Details Added
              <br /> Successfully!
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
          <Loader2 className="animate-spin text-[#936639]" size={40} />
        </div>
      )}
    </div>
  );
};

export default AddUnitDetails;
