"use client";
import React, { useRef, useState } from "react";
import ProfileCard from "../ProfileCard";
import { Card } from "@/components/ui/card";
import { UploadCloud, Loader2, FileText, Download } from "lucide-react";

type UploadStep = "initial" | "uploading" | "uploaded";

const UploadDocument = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStep, setUploadStep] = useState<UploadStep>("initial");
  console.log(uploadedFile);
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadStep("uploading");
      // Simulate upload delay
      setTimeout(() => {
        setUploadedFile(file);
        setUploadStep("uploaded");
      }, 2000);
    } else {
      // If user cancels file picker
      setUploadStep("initial");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleBrowseClick = () => {
    // Start fresh: show first UI and open input
    setUploadStep("initial");

    setTimeout(() => {
      triggerFileInput();
    }, 100);
  };

  const handleDownload = () => {
    if (!uploadedFile) return;

    const url = URL.createObjectURL(uploadedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = uploadedFile.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <ProfileCard />
      <div className="my-4">
        <h2 className="font-medium mb-4 text-2xl text-[#313131]">
          Upload ID Proof
        </h2>
        <Card className="my-2 p-4 gap-0">
            {
                uploadedFile ==null && (
                     <div>
             <p className="text-[#313131] font-medium text-lg">Upload ID/NIN</p>
          <p className="font-normal text-[14px] text-[#8C8C8C]">
            Verify Your Identity & Buy/Rent Properties Securely. Ensuring a
            trusted marketplace by verifying buyer credentials before purchasing
            or renting properties.
          </p>
         </div>

                )
            }
        

          {/* === Step 1: Initial Upload UI === */}
          {uploadStep === "initial" && (
            <div  onClick={triggerFileInput} className="border-2 cursor-pointer my-4 border-dashed border-[#D6BCA2] rounded-xl p-6 w-full max-w-md text-center shadow-sm bg-white">
              <div className="flex justify-center mb-3">
                <UploadCloud className="h-10 w-10 text-[#B99872]" />
              </div>
              <h3 className="font-semibold text-[16px] text-[#1F2937]">
                Upload ID or NIN
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats are <code>.jpg</code>, <code>.png</code>,{" "}
                <code>.pdf</code>
              </p>
              <button
               
                className="text-sm text-blue-600 underline mt-2 hover:text-blue-800"
              >
                Browse
              </button>
            </div>
          )}

          {/* === Step 2: Uploading Loader UI === */}
          {uploadStep === "uploading" && (
            <div className="border-2 my-4 border-dashed border-[#D6BCA2] rounded-xl p-6 w-full max-w-md text-center shadow-sm bg-white">
              <div className="flex justify-center mb-3">
                <Loader2 className="h-10 w-10 animate-spin text-[#B99872]" />
              </div>
              <h3 className="font-semibold text-[16px] text-[#1F2937]">
                Uploading...
              </h3>
              <p className="text-sm text-gray-500 mt-1">Please wait...</p>
            </div>
          )}

          {/* === Step 3: Uploaded Preview UI === */}
          {uploadStep === "uploaded" && uploadedFile && (
            <div className="my-4 w-full max-w-md">
              <p className="text-sm font-medium mb-2 text-[#313131]">
                Your ID/NIN
              </p>
              <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#B99872] bg-[#FDF9F6]">
                <div className="flex items-center gap-2">
                  <FileText className="text-[#B99872]" size={20} />
                  <span className="text-sm text-[#313131] font-medium">
                    {uploadedFile.name}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-md border text-sm text-[#313131] border-[#313131]"
                >
                  <Download size={16} /> Download
                </button>
                <button
                  onClick={handleBrowseClick}
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#F2F0ED] text-sm text-[#313131]"
                >
                  <UploadCloud size={16} /> Replace
                </button>
              </div>
            </div>
          )}

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".jpg,.png,.pdf"
            className="hidden"
          />
        </Card>
      </div>
    </div>
  );
};

export default UploadDocument;
