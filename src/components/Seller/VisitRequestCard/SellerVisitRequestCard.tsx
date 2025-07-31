"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Check, X } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { RejectPopup } from "../SellerCommonComponents/RejectPopup";

interface VisitRequestCardProps {
  name: string;
  avatar: string;
  property: string;
  visitDate: string;
  requestedDate: string;
  status: "Pending" | "Accepted" | "Rejected";
  rejectionReason?: string;
  onAccept?: () => void;
  onReject?: (reason: string) => void;
}

export default function SellerVisitRequestCard({
  name,
  avatar,
  property,
  visitDate,
  requestedDate,
  status = "Pending",
  rejectionReason,
  onAccept,
  onReject,
}: VisitRequestCardProps) {
  const [openRejectPopup, setOpenRejectPopup] = useState(false);

  const statusConfig = {
    Pending: { icon: Clock, color: "text-yellow-600 border-yellow-400" },
    Accepted: { icon: Check, color: "text-green-600 border-green-400" },
    Rejected: { icon: X, color: "text-red-600 border-red-400" },
  };

  const Icon = statusConfig[status].icon;

  return (
    <>
      <Card className="rounded-2xl shadow-sm border border-[#EDEDED] w-full">
        <CardContent className="p-4 space-y-4">
          {/*  Responsive Flex Layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
           <div className="flex flex-col items-center md:flex-row gap-4">
             {/*  Left Section - Image */}
            <div className="flex-shrink-0">
              <Image
                src={avatar}
                alt={name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>

            {/*  Middle Section - Details + Buttons */}
            <div className="flex-1 flex flex-col text-center md:text-start w-full">
              <div>
                <h3 className="font-semibold text-base">{name}</h3>
                <p className="text-sm text-gray-600">{property}</p>
                <p className="text-sm text-gray-800 mt-1">{visitDate}</p>
                <p className="text-xs italic text-gray-500 mt-1">
                  Requested {requestedDate}
                </p>
              </div>

              {/* Buttons - Appear below details */}
              {status === "Pending" && (
                <div className="flex gap-3 mt-3">
                  <Button
                    className="bg-gradient-to-r from-[#C69C6D] to-[#936639] text-white flex items-center gap-1 rounded-full px-8 py-2 text-sm "
                    onClick={onAccept}
                  >
                    <Check className="w-4 h-4" />
                    Accept
                  </Button>

                  <Button
                    variant="outline"
                    className="border-[#C69C6D] text-[#936639] flex items-center gap-1 rounded-full px-8 py-2 text-sm "
                    onClick={() => setOpenRejectPopup(true)}
                  >
                    <X className="w-4 h-4" />
                    Reject
                  </Button>
                </div>
              )}

              {/* Show rejection reason if Rejected */}
              {status === "Rejected" && rejectionReason && (
                <div className="p-[15px]  bg-[#FEF2F2] rounded-[12px] border-l-[6px] mt-[12px] border-[#FFCECE]">
                  <p className="font-[400] text-[14px] text-[#AB0712]">
                    <span className="font-[600]">Reason:</span>{" "}
                    {rejectionReason}
                  </p>
                </div>
              )}
            </div>
           </div>
           {/*  Right Section - Status Badge */}
            <div
              className={clsx(
                "flex items-center gap-2 px-2 py-1  border rounded-full text-xs sm:text-xs !font-light tracking-wide self-center md:self-center",
                statusConfig[status].color
              )}
            >
              <Icon className="w-3 h-3" />
              {status}
            </div>

           
          </div>
           
        </CardContent>
      </Card>

      {/* ✅ Reject Popup */}
      <RejectPopup
        open={openRejectPopup}
        onClose={() => setOpenRejectPopup(false)}
        onConfirm={(reason) => {
          if (onReject) onReject(reason);
          setOpenRejectPopup(false);
        }}
      />
    </>
  );
}
