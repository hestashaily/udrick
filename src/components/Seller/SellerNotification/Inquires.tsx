"use client";
import React, { useState } from "react";
import Image from "next/image";
import RejectPopup from "../SellerCommonComponents/RejectPopup";

const Inquires = () => {
  const [showRejectPopup, setShowRejectPopup] = useState(false);

  const handleReject = () => {
    setShowRejectPopup(true);
  };

  const handleClose = () => {
    setShowRejectPopup(false);
  };

  const handleConfirmReject = () => {
   
    console.log("Request Rejected");
    setShowRejectPopup(false);
  };

  return (
    <div className="flex flex-col gap-[25px] p-[10px]">
  <div className="group py-[20px] w-full flex items-start gap-[15px] px-[15px] border border-[#E8E0D4] bg-white hover:bg-[#F4F8FC] rounded-[20px] hover:border-[#367DC9] transition-all">
        <Image
          src="/seller/notification/new-visit.png"
          alt="reject"
          width={48}
          height={48}
          className="w-[48px] h-[48px]"
        />
        <div className="w-full">
          <div className="w-full">
            <div className="flex md:items-center items-start justify-between w-full md:flex-row flex-col">
              <p className="font-[500] text-[18px] text-[#313131]">
                New Visit Request
              </p>
              <div className="flex items-center gap-[30px]">
                <span className="font-[400] text-[16px] text-[#515151]">
                  30 Min ago
                </span>
                  <div className="h-[14px] w-[14px] min-w-[14px] rounded-full bg-[blue] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            </div>

            <p className="font-[400] text-[16px] text-[#515151]">
              Sarah Mitchell wants to schedule a viewing for your Modern
              Downtown Apartment
            </p>
            <div className="mt-[12px]">
              <div className="flex gap-[12px]  items-center">
                <Image
                  src="/seller/notification/flat.png"
                  alt="reject"
                  width={56}
                  height={56}
                  className="w-[56px] h-[56px] rounded-[10px]"
                />
                <div className="flex flex-col gap-[9px]">
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src="/seller/notification/location.png"
                      alt="location"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                    <p className="font-[400] text-[16px] text-[#313131]">
                      5 Bedroom Detached Duplex
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src="/seller/notification/user.png"
                      alt="user"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px]"
                    />
                    <p className="font-[400] text-[16px] text-[#515151]">
                      Buyer: Sarah Mitchell
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[12px] mt-[18px]">
                <button className="bg-[#936639]  font-[400] text-[16px] text-[#FFFFFF] h-[42px] py-[13px] px-[25px] rounded-full flex items-center gap-[13px]">
                  <Image
                    src="/seller/visit-request/check.png"
                    alt="accept"
                    width={16}
                    height={16}
                  />
                  Accept
                </button>
                <button
                  onClick={handleReject}
                  className="bg-[white] font-[400] text-[16px] text-[#936639] border border-[#936639] h-[42px] py-[13px] px-[25px] rounded-full flex items-center gap-[13px]"
                >
                  <Image
                    src="/seller/visit-request/cross.png"
                    alt="reject"
                    width={9}
                    height={9}
                    className="w-[9px] h-[9px]"
                  />
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showRejectPopup && (
        <RejectPopup onClose={handleClose} onConfirm={handleConfirmReject} />
      )}
    </div>
  );
};

export default Inquires;
