// import React from "react";
// import { X } from "lucide-react"; 

// interface RejectPopupProps {
//   onClose: () => void;
//   onConfirm: () => void;
// }

// const RejectPopup: React.FC<RejectPopupProps> = ({ onClose, onConfirm }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
//       <div className="relative bg-white p-6 rounded-[20px] w-[90%] max-w-[788px] shadow-lg border border-[#ccc]">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-[#888] hover:text-[#000] transition"
//           aria-label="Close"
//         >
//           <X className="w-5 h-5" />
//         </button>
//         <div className="max-w-[488px] w-full m-auto ">

//         <h2 className="text-lg font-semibold text-center text-[#313131] mb-[5px]">
//           Reason for Rejection
//         </h2>
//         <p className="font-[400] text-[16px] text-[#8C8C8C] text-center l">Please provide reason for rejecting this visit request. This will help th ebuyer to understan your decision</p>
//        </div>
//       <div className="h-[143px] border border-[#936639] p-[15px] rounded-[15px] my-[46px]">
//         <textarea className="h-full outline-none font-[400] text-[16px] text-[#8C8C8C] w-full resize-none"  placeholder="|e.g., Property is currently under maintenance, scheduling conflict, etc."></textarea>
      
//       </div>
//         <div className="flex justify-end gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm border rounded-full border-[#936639] text-[#936639] bg-white"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className="px-4 py-2 text-sm rounded-full bg-[#936639] text-white"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RejectPopup;
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface RejectPopupProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}

export function RejectPopup({ open, onClose, onConfirm }: RejectPopupProps) {
  const [reason, setReason] = useState("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            Reason for Rejection
          </DialogTitle>
          <p className="text-center text-sm text-gray-500">
            Please provide a reason for rejecting this visit request. This will help the buyer understand your decision.
          </p>
        </DialogHeader>

        {/* <div className="border border-[#936639] p-3 rounded-xl"> */}
          <Textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="e.g., Property is under maintenance, scheduling conflict, etc."
            className="h-32 text-gray-700"
          />
        {/* </div> */}

        <DialogFooter className="flex justify-end gap-3">
          <Button variant="outline" className="border-[#936639] text-[#936639]" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-[#936639] text-white"
            onClick={() => {
              onConfirm(reason);
              setReason("");
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

