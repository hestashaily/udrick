"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

interface SignatureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (signatureDataUrl: string) => void;
}

const SignatureDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: SignatureDialogProps) => {
  const sigCanvasRef = useRef<SignatureCanvas>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      handleClear();
    }
  }, [open]);

  const handleSave = () => {
    if (sigCanvasRef.current?.isEmpty()) {
      return;
    }
    const dataUrl = sigCanvasRef.current?.getTrimmedCanvas().toDataURL();
    if (dataUrl) {
      setSignature(dataUrl);
      setIsSaved(true);
    }
  };

  const handleClear = () => {
    sigCanvasRef.current?.clear();
    setSignature(null);
    setIsSaved(false);
  };

  const handleSubmit = () => {
    if (signature) {
      onSubmit(signature);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-[#000000] font-medium text-3xl">
            Draw Your Signature
          </DialogTitle>
          <p className="text-center text-[#515151] font-normal text-base">
            Please sign in the box below to proceed
          </p>
        </DialogHeader>

        <div className="border p-2 rounded-md shadow-sm">
          <SignatureCanvas
            ref={sigCanvasRef}
            penColor="black"
            canvasProps={{
              width: 400,
              height: 150,
              className: "border border-dashed border-gray-400 w-full",
            }}
          />
        </div>

        <div className="flex gap-2 justify-center mt-4">
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={handleClear}
          >
            Redraw
          </Button>
          <Button onClick={handleSave} className="bg-[#936639] text-white">
            Save Signature
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            disabled={!isSaved}
            onClick={handleSubmit}
            className={`px-6 py-2 rounded-xl ${
              isSaved
                ? "bg-[#936639] text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Add Signature to Proceed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignatureDialog;
