import React from 'react'
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MultiStepForm from './MultiStepForm';
const BuyPropertyProcess = () => {
  return (
    <div>
        <div className="container mx-auto px-4">
        <Link href="">
          <div className="flex gap-6 py-6 items-center">
            <ArrowLeft size={18} />
            <div className="flex flex-col text-center w-full">
              <h3 className="font-bold text-3xl text-[#0d0d0c]">
                Purchase Process
              </h3>
              <span className="inline-block font-normal text-sm text-[#6D6D6D]">
                Step 1 of 7
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <MultiStepForm/>
      </div>
    </div>
  )
}

export default BuyPropertyProcess


