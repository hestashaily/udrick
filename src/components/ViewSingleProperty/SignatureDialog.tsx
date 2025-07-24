import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

interface SignatureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (signatureDataUrl: string) => void; // pass signature to parent
}

const SignatureDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: SignatureDialogProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!open) {
      // Clear state when dialog is closed
      setSignature(null);
      setIsSaved(false);
      clearCanvas();
    }
  }, [open]);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;
    context.beginPath();
    context.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;
    context.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL();
    setSignature(dataUrl);
    setIsSaved(true);
  };

  const handleRedraw = () => {
    clearCanvas();
    setSignature(null);
    setIsSaved(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-[#000000] font-medium text-3xl">Draw Your Signature</DialogTitle>
          <p className="text-center text-[#515151] font-normal text-base">Please sign in the box below to proceed</p>
        </DialogHeader>


        <div className="border p-2 rounded-md shadow-sm">
          <canvas
            ref={canvasRef}
            width={400}
            height={150}
            className="border border-dashed border-gray-400 w-full"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>

        <div className="flex gap-2 justify-center mt-4">
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={handleRedraw}
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
            onClick={() => {
              if (signature) {
                onSubmit(signature);
                onOpenChange(false);
              }
            }}
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
