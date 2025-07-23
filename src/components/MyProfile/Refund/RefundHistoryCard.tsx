// components/listings/ListingCard.tsx
"use client";
import { Badge } from "@/components/ui/badge";
import {
  Bath,
  BedSingle,
  CircleCheck,
  CircleX,
  Eye,
  MapPin,
  SquareDivide,
} from "lucide-react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

type RefundStatus = "none" | "requested" | "refunded" | "rejected";

type Transaction = {
  month: string; // e.g. "July 2025"
  paymentDate: string; // e.g. "05/07/2025"
  amount: string; // e.g. "₹10,000"
  status: "Paid" | "Unpaid";
};

export type Listing = {
  id: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  size: string;
  price: string;
  refundStatus?: RefundStatus;
  frequency: string;
  status: "Rented" | "Purchased";
  payment: "Paid" | "Unpaid";
  dueDate?: string;
  paymentDate?: string;
  hugReward?: string;
  transactions?: Transaction[];
};

const statusColors: Record<Listing["status"], string> = {
  Purchased: "bg-[#E7F6EC] text-[#3DA66E]",
  Rented: "bg-[#956EF6]/10 text-[#956EF6]",
};

export default function RefundHistoryCard({
  listing,
  onRequestRefund,
}: {
  listing: Listing;
  onRequestRefund?: (id: number, reason: string) => void;
}) {
  const {
    title,
    location,
    beds,
    baths,
    size,
    price,
    frequency,
    status,
    payment,

    hugReward,
  } = listing;

  const isRented = status === "Rented";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    if (onRequestRefund) {
      onRequestRefund(listing.id, reason);
    }
    setIsDialogOpen(false);
  };

  const statusLabel = () => {
    const statusText = listing.status; // "Rented" or "Purchased"

    if (listing.refundStatus === "requested") {
      return (
        <div className="flex items-center gap-4">
          <span
            className={`text-sm px-6 py-2.5 rounded-full ${statusColors[status]}`}
          >
            {statusText}
          </span>
          <span className="text-sm px-3 py-1 rounded-full text-[#B2762F] border border-[#B2762F] bg-[#FFF6E9]">
            Requested
          </span>
        </div>
      );
    }

    if (listing.refundStatus === "refunded") {
      return (
        <div className="flex gap-4 items-center">
          <span
            className={`text-sm px-6 py-2.5 rounded-full ${statusColors[status]}`}
          >
            {" "}
            {statusText}
          </span>

          <span className="text-sm px-3 py-2 inline-flex gap-2 items-center rounded-full text-white bg-[#34C759] border border-green-200 ">
            <CircleCheck size={16} /> Refunded
          </span>
        </div>
      );
    }

    if (listing.refundStatus === "rejected") {
      return (
        <div className="flex items-center gap-4">
          <span
            className={`text-sm px-6 py-2.5 rounded-full ${statusColors[status]}`}
          >
            {statusText}
          </span>
          <span className="text-sm px-6 py-2.5 rounded-full text-white bg-[#562900]">
            Rejected
          </span>
        </div>
      );
    }

    return (
      <span
        className={`text-sm px-3 py-1 rounded-full ${statusColors[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="flex rounded-2xl border p-4 shadow-sm items-center gap-4">
      {/* Image */}
      <div className="relative w-[208px]  h-[225px] rounded-xl overflow-hidden">
        <Image
          src="/property/house.svg"
          alt="house"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-lg">{title}</h2>


          <div className="flex flex-col items-end">
            {statusLabel()}

            {isRented && hugReward && (
              <span className="mt-1 text-xs px-2 py-0.5 text-white rounded-full">
                {hugReward}
              </span>
            )}
          </div>
        </div>

        {/* Location */}
        <p className="text-sm text-muted-foreground flex gap-2 items-center mt-1">
          <MapPin size={16} /> {location}
        </p>

        {/* Property Details */}
        <div className="text-sm text-gray-700 flex gap-4 mt-2">
          <span className="inline-flex gap-2">
            <BedSingle size={16} /> {beds} Bed
          </span>
          <span className="inline-flex gap-2">
            <Bath size={16} /> {baths} Bath
          </span>
          <span className="inline-flex gap-2">
            <SquareDivide size={16} /> {size}
          </span>
        </div>

        {/* Price + Payment + Due Date */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-[#936639] text-lg">
              <span className="font-bold">{price}</span>{" "}
              <span className="text-sm text-[#5C6368] font-normal">
                {frequency}
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}

        <div className="flex justify-between items-center">
          <p className="text-sm mt-1">
            Payment:{" "}
            <Badge className="bg-green-100 !px-5 py-2 text-green-600">
              {payment}
            </Badge>
          </p>
          <div className={`mt-4 flex justify-end gap-4 items-center flex-wrap`}>
            <button className="flex items-center gap-1 border rounded-2xl px-3 py-2 text-sm">
              <Eye className="w-4 h-4" />
              View Details
            </button>
            {!["requested", "refunded", "rejected"].includes(
              listing.refundStatus || ""
            ) && (
              <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-gradient-to-t from-[#A68A64] to-[#936639] text-white rounded-2xl px-4 py-2 text-sm font-medium"
              >
                Request Refund
              </button>
            )}
          </div>

         
        </div>
         {/* Resson for Rejected */}
          <div>
            {listing.refundStatus === "rejected" && (
              <div className="border border-[#FFCECE] my-2 rounded-2xl bg-[#FFCECE]/45 p-4">
                <div className="flex gap-4">
                  <CircleX color="#FB333C" className="shrink-0" />
                  <div className="flex flex-col space-y-2">
                    <p className="text-[#AB0712] font-medium text-base">
                      Rejection Reason
                    </p>
                    <p className="text-[#AB0712] text-sm font-normal">
                      Your payment has been processed for the seller. It will be completed within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="!w-full !max-w-2xl">
          <DialogHeader>
            <Image
              src="/refund/refund.svg"
              alt="refud"
              height={50}
              width={50}
              className="mx-auto"
            />
            <DialogTitle className="text-xl text-center font-medium">
              Are you sure you want to request a refund?
            </DialogTitle>
            <p className="text-sm text-center text-[#516071] font-normal">
              Once you submit a refund request, it cannot be cancelled. Access
              to the property may be restricted during the refund process.
            </p>
          </DialogHeader>

          <div className="mt-6">
            <h1 className="font-medium text-lg">Reason of Refund</h1>
            <textarea
              cols={15}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border rounded-2xl p-4"
              placeholder="Write the reason here for refund.... "
              rows={5}
            />
          </div>
          <div className="flex justify-around gap-3 items-center">
            <button className="border px-8 py-3 font-medium text-base rounded-2xl w-full">
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="border bg-gradient-to-t from-[#A68A64] to-[#936639] text-white  px-8 py-3 w-full font-medium text-base rounded-2xl"
            >
              Yes, Request Refund
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
