

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const sampleImages = [
  "/seller/house.svg",
  "/seller/house.svg",
  "/seller/house.svg",
 "/seller/house.svg",
 "/seller/house.svg",
];

interface Props {
  propertyType?: string | null;
  step?: number;
  setStep?: (step: number) => void; 
}

const UnitDetailsUploadDoc = ({ propertyType}: Props) => {
  const [images, setImages] = useState<string[]>(sampleImages);
  const router = useRouter()

  const handelNext = () => {
  router.push(`/add-listing/add-unit-details/review-legal-clauses?type=${propertyType}`);
};


  return (
    <div className="w-full  space-y-6  ">
      {/* Upload Photo Box */}
      <div className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center">
        <UploadCloud className="mx-auto mb-2 h-6 w-6 text-gray-500" />
        <p className="text-base font-medium text-gray-700">Upload Property Photos</p>
        <p className="text-sm font-normal text-gray-500">Drag and drop your images here, or click to browse</p>
        <div className="mt-3">
          <Button variant="outline">Choose Files</Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 flex-wrap">
        {images.map((src, index) => (
          <div key={index} className="relative h-32 w-40 rounded overflow-hidden border">
            <Image src={src} alt={`Preview ${index}`} fill className="object-cover" />
            <button
              onClick={() =>
                setImages((prev) => prev.filter((_, i) => i !== index))
              }
              className="absolute top-2 right-2 bg-[#000000]/80 rounded-full shadow p-1"
            >
              <Trash2 className="h-4 w-4 text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Under Property Document */}
      <div className="space-y-1">
        <label className="text-base font-medium text-gray-700">
          Under Property Document<span className="text-red-500">*</span>
        </label>
        <p className="text-sm font-normal text-gray-500">
          Before publishing your property, review and confirm the legal clauses
          that will be part of your listing agreement.
        </p>
        <Button onClick={handelNext} variant="outline" className="my-3 rounded-3xl border-[#367DC9] text-[#367DC9] hover:text-[#367DC9] !py-5">
          <FileText size={16}/> Review Legal Clauses
        </Button>
      </div>

      {/* Description */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Description</label>
        <textarea
        className="w-full border mt-2 rounded-xl p-4"
          placeholder="Describe your property features, location and what makes it special…"
          rows={4}
          cols={8}
        ></textarea>
      </div>

      {/* Video URL */}
      <div className="space-y-1">
        <label className="text-sm font-medium">
          Upload view 3D exterior and interior view
        </label>
        <Input className="py-3 h-auto mt-2" placeholder="Video URL" />
      </div>
    </div>
  );
}

export default UnitDetailsUploadDoc