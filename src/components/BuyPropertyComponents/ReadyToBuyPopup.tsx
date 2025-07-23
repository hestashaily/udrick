"use client";
import React from "react";
import Image from "next/image";

interface ReadyToBuyPopupProps {
  onClose: () => void;
}

const ReadyToBuyPopup: React.FC<ReadyToBuyPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#00000080] bg-opacity-50">
      <div className="bg-white p-6 rounded-[16px] shadow-lg w-[90%] max-w-[279px]">
           <button
          onClick={onClose}
          className="w-full h-[40px] rounded-full flex items-start justify-end  text-white font-[600]"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5917 3.0522C14.0662 2.57771 14.0666 1.80881 13.5926 1.33481C13.1186 0.860814 12.3497 0.86121 11.8752 1.3357L1.71235 11.4986C1.23786 11.9731 1.23747 12.742 1.71146 13.216C2.18546 13.69 2.95436 13.6896 3.42885 13.2151L13.5917 3.0522Z" fill="#2A3B4D"/>
<path d="M11.8736 13.2167C12.3481 13.6912 13.117 13.6916 13.591 13.2176C14.065 12.7436 14.0646 11.9747 13.5901 11.5002L3.42719 1.33735C2.95271 0.862861 2.18381 0.862466 1.70981 1.33646C1.23581 1.81046 1.2362 2.57936 1.71069 3.05385L11.8736 13.2167Z" fill="#2A3B4D"/>
</svg>

        </button>
        <div className="flex items-center flex-col justify-center">

       
         <Image
                       src="/propertydetail/visit-request.png"
                       alt="visit request"
                       width={28}
                       height={22}

                     />
                     <p className="font-[500] text-[16px] text-[#2A3B4D] py-[16px] text-center">Visit Request Sent</p>
                     <p className="font-[400] text-[13px] text-[#0A2948] text-center">Your site visit request has been sent to Rolando Casper. You will receive a confirmation shortly.</p>
                     <button className="mt-[29px] bg-[#A68A64] max-w-[194px] w-full m-auto rounded-full font-[500] text-[14px] text-white h-[43px]">View Schedule Visits</button>
      </div>
      </div>
    </div>
  );
};

export default ReadyToBuyPopup;
