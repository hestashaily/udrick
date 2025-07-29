import Image from "next/image";
import React, { useRef, useState } from "react";
import SignatureComponent from "./SignatureComponent";

interface OriginalDocumentProps {
  onClose: () => void;
}

const OriginalDocument: React.FC<OriginalDocumentProps> = ({ onClose }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showSignature, setShowSignature] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Only PDF files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB.");
        return;
      }
      setUploadedFile(file);
      setError(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-[15px] p-[20px] w-[90%] shadow-lg relative transition-all duration-300 ${
          showSignature ? "max-w-[681px]" : "max-w-[336px]"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[18px] text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {!showSignature ? (
          <>
            <h2 className="text-[18px] text-center font-semibold mb-4 text-[#313131]">
              Upload Original Signed Property Documents
            </h2>

            {!uploadedFile && (
              <p className="font-[400] text-[12px] text-[#25384E] max-w-[145px] w-full m-auto text-center">
                Accepted formats are .pdf (Size: Upto 5mb)
              </p>
            )}

            {error && (
              <p className="text-red-500 text-[12px] text-center mt-2">{error}</p>
            )}

            <input
              type="file"
              accept=".pdf"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />

            {!uploadedFile && (
              <button
                onClick={handleUploadClick}
                className="bg-[#F8F7F6] mt-[15px] w-full flex items-center gap-[10px] justify-center border border-[#936639] border-dashed font-[400] text-[#936639] text-[12px] h-[43px] rounded-[12px]"
              >
                <Image
                  src="/seller/wallet/upload.png"
                  alt="upload"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] rounded-[10px]"
                />
                Upload
              </button>
            )}

            {uploadedFile && (
              <>
                <p className="text-center text-[12px] text-[#25384E] mt-3 truncate border border-[#DBDBDB] max-w-[212px] w-full m-auto rounded-[30px] py-[10px] px-[15px]">
                  📄 {uploadedFile.name}
                </p>

                <button
                  className="mt-4 w-full bg-[#936639] text-white text-[14px] font-medium py-2 rounded-[10px] hover:bg-[#7c552e] transition"
                  onClick={() => setShowSignature(true)}
                >
                  Next
                </button>
              </>
            )}
          </>
        ) : (
          <SignatureComponent />
        )}
      </div>
    </div>
  );
};

export default OriginalDocument;
