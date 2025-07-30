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
  month: string;
  paymentDate: string;
  amount: string;
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
  const { title, location, beds, baths, size, price, frequency, status, payment, hugReward } =
    listing;

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
    const statusText = listing.status;

    if (listing.refundStatus === "requested") {
      return (
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <span className={`text-sm px-4 py-1.5 rounded-full ${statusColors[status]}`}>
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
        <div className="flex flex-wrap gap-2 md:gap-4 items-center">
          <span className={`text-sm px-4 py-1.5 rounded-full ${statusColors[status]}`}>
            {statusText}
          </span>
          <span className="text-sm px-3 py-1 inline-flex gap-2 items-center rounded-full text-white bg-[#34C759]">
            <CircleCheck size={16} /> Refunded
          </span>
        </div>
      );
    }
    if (listing.refundStatus === "rejected") {
      return (
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <span className={`text-sm px-4 py-1.5 rounded-full ${statusColors[status]}`}>
            {statusText}
          </span>
          <span className="text-sm px-4 py-1.5 rounded-full text-white bg-[#562900]">
            Rejected
          </span>
        </div>
      );
    }
    return (
      <span className={`text-sm px-3 py-1 rounded-full ${statusColors[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row rounded-2xl border p-4 shadow-sm gap-4">
      {/* Image */}
      <div className="relative w-full sm:w-[250px] md:w-[200px] h-[200px] rounded-xl overflow-hidden">
        <Image
          src="/property/house.svg"
          alt="house"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <h2 className="font-semibold text-lg">{title}</h2>

          <div className="flex flex-col items-start sm:items-end">
            {statusLabel()}
            {isRented && hugReward && (
              <span className="mt-1 text-xs px-2 py-0.5 bg-[#936639] text-white rounded-full">
                {hugReward}
              </span>
            )}
          </div>
        </div>

        {/* Location */}
        <p className="text-sm text-muted-foreground flex gap-2 items-center mt-1 flex-wrap">
          <MapPin size={16} /> {location}
        </p>

        {/* Property Details */}
        <div className="text-sm text-gray-700 flex flex-wrap gap-4 mt-2">
          <span className="inline-flex gap-1">
            <BedSingle size={16} /> {beds} Bed
          </span>
          <span className="inline-flex gap-1">
            <Bath size={16} /> {baths} Bath
          </span>
          <span className="inline-flex gap-1">
            <SquareDivide size={16} /> {size}
          </span>
        </div>

        {/* Price + Payment */}
        <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
          <p className="text-[#936639] text-lg">
            <span className="font-bold">{price}</span>{" "}
            <span className="text-sm text-[#5C6368]">{frequency}</span>
          </p>
          <p className="text-sm">
            Payment:{" "}
            <Badge className="bg-green-100 !px-4 py-1.5 text-green-600">
              {payment}
            </Badge>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="flex items-center justify-center gap-1 border rounded-2xl px-3 py-2 text-sm w-full sm:w-auto">
            <Eye className="w-4 h-4" />
            View Details
          </button>

          {!["requested", "refunded", "rejected"].includes(listing.refundStatus || "") && (
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-gradient-to-t from-[#A68A64] to-[#936639] text-white rounded-2xl px-4 py-2 text-sm font-medium w-full sm:w-auto"
            >
              Request Refund
            </button>
          )}
        </div>

        {/* Rejected Reason */}
        {listing.refundStatus === "rejected" && (
          <div className="border border-[#FFCECE] my-3 rounded-2xl bg-[#FFCECE]/45 p-4">
            <div className="flex gap-3">
              <CircleX color="#FB333C" className="shrink-0" />
              <div>
                <p className="text-[#AB0712] font-medium">Rejection Reason</p>
                <p className="text-[#AB0712] text-sm">
                  Your payment has been processed for the seller. It will be completed within 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="!w-[95%] sm:!w-full sm:!max-w-2xl">
          <DialogHeader>
            <Image src="/refund/refund.svg" alt="refund" height={50} width={50} className="mx-auto" />
            <DialogTitle className="text-lg sm:text-xl text-center font-medium">
              Are you sure you want to request a refund?
            </DialogTitle>
            <p className="text-sm text-center text-[#516071]">
              Once you submit a refund request, it cannot be cancelled.
            </p>
          </DialogHeader>

          <div className="mt-4">
            <h1 className="font-medium text-base sm:text-lg">Reason for Refund</h1>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border rounded-2xl p-3"
              placeholder="Write your reason..."
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="border px-6 py-3 rounded-2xl w-full"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="bg-gradient-to-t from-[#A68A64] to-[#936639] text-white px-6 py-3 rounded-2xl w-full"
            >
              Yes, Request Refund
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
