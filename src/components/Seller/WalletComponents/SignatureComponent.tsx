import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Invoice from "./Invoice";
import { X } from "lucide-react";
import Image from "next/image";

interface SignatureComponentProps {
  onNext: () => void;
  onClose: () => void;
}

const SignatureComponent: React.FC<SignatureComponentProps> = ({
  onNext,
  onClose,
}) => {
  const signatureRef = useRef<SignatureCanvas | null>(null);
  const [showInvoice, setShowInvoice] = useState(false);

  const handleRedraw = () => {
    signatureRef.current?.clear();
  };

  const handleAddSignature = () => {
    if (signatureRef.current?.isEmpty()) {
      alert("Please add your signature before proceeding.");
    } else {
      setShowInvoice(true);
    }
  };

  if (showInvoice) return <Invoice onNext={onNext} onClose={onClose} />;

  return (
    <div className="relative md:w-[630px] w-[360px] bg-white rounded-[12px] p-2">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div>
        <p className="text-center font-[500] text-[28px] text-[#000000]">
          Draw Your Signature
        </p>
        <p className="text-center font-[400] text-[#515151] text-[16px] mb-[30px]">
          Please sign in the box below to proceed
        </p>

        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
            width: 580,
            height: 150,
            className:
              "md:w-[580px] w-[320px] m-auto h-[150px] border rounded-[12px] border-[#A68A64] border-dashed",
          }}
        />

        <div className="max-w-[280px] mt-[16px] w-full flex items-center m-auto gap-[50px]">
          <button
            onClick={handleRedraw}
            className="max-w-[120px] flex gap-[10px] items-center justify-center rounded-[15px] w-full border border-[#936639] text-[#936639] py-2"
          >
            <Image
              src="/seller/wallet/redraw.png"
              alt="redraw"
              width={18}
              height={18}
              className="w-[18px] h-[18px] "
            />
            Redraw
          </button>

          <button
            onClick={() => {
              const dataURL = signatureRef.current?.toDataURL();
              console.log("Signature image:", dataURL);
            }}
            className="max-w-[120px] flex items-center justify-center gap-[10px] w-full bg-[#936639] rounded-[15px] text-white py-2"
          >
            <Image
              src="/seller/wallet/save.png"
              alt="save"
              width={18}
              height={18}
              className="w-[18px] h-[18px] "
            />
            Save
          </button>
        </div>

        <div className="w-full flex justify-center items-center mt-[30px]">
          <button
            onClick={handleAddSignature}
            className="max-w-[300px] w-full flex items-center justify-center gap-[10px] m-auto bg-[#936639] font-[700] text-[14px] text-white py-2 rounded-full h-[48px]"
          >
            Add Signature to Proceed
            <Image
              src="/seller/wallet/next.png"
              alt="next"
              width={12}
              height={12}
              className="w-[12px] h-[12px] "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureComponent;
