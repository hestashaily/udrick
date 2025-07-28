import React from "react";
import { X } from "lucide-react"; 

interface RejectPopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const RejectPopup: React.FC<RejectPopupProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="relative bg-white p-6 rounded-[20px] w-[90%] max-w-[788px] shadow-lg border border-[#ccc]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#888] hover:text-[#000] transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="max-w-[488px] w-full m-auto ">

        <h2 className="text-lg font-semibold text-center text-[#313131] mb-[5px]">
          Reason for Rejection
        </h2>
        <p className="font-[400] text-[16px] text-[#8C8C8C] text-center l">Please provide reason for rejecting this visit request. This will help th ebuyer to understan your decision</p>
       </div>
      <div className="h-[143px] border border-[#936639] p-[15px] rounded-[15px] my-[46px]">
        <textarea className="h-full outline-none font-[400] text-[16px] text-[#8C8C8C] w-full resize-none"  placeholder="|e.g., Property is currently under maintenance, scheduling conflict, etc."></textarea>
      
      </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-full border-[#936639] text-[#936639] bg-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-full bg-[#936639] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectPopup;
