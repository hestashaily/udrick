// components/listings/ListingCard.tsx
'use client'
import { Badge } from "@/components/ui/badge";
import { Bath, BedSingle, Eye, MapPin, SquareDivide } from "lucide-react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog";
import { useState } from "react";


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
  frequency: string;
  status: "Rented" | "Purchased" | "Pending";
  payment: "Paid" | "Unpaid";
  dueDate?: string;
  paymentDate?: string;
  hugReward?: string;
   transactions?: Transaction[];
};

const statusColors: Record<Listing["status"], string> = {
  Purchased: "bg-[#E7F6EC] text-[#3DA66E]",
  Pending: "bg-[#FDF1DB] text-[#D09B28]",
  Rented: "bg-[#956EF6]/10 text-[#956EF6]",
};

export default function PropertyHistoryCard({ listing }: { listing: Listing }) {
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
    dueDate,

    hugReward,
  } = listing;

  const isRented = status === "Rented";
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex rounded-2xl border p-4 shadow-sm items-center gap-4">
      {/* Image */}
      <div className="relative w-[208px] h-[217px] rounded-xl overflow-hidden">
        <Image
          src="/property/house.svg"
          alt="house"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-lg">{title}</h2>

          {/* Status + Hug Reward (only for rented) */}
          {isRented ? (
            <div className="flex flex-col items-end">
              <span className="text-sm px-3 py-1 rounded-full text-[#9363E6] border  border-[#9363E6]">
                Rented
              </span>
              <span className="mt-1 text-xs px-2 py-0.5  text-white rounded-full">
                {hugReward}
              </span>
            </div>
          ) : (
            <span
              className={`text-sm px-3 py-1 rounded-full ${statusColors[status]}`}
            >
              {status}
            </span>
          )}
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
            <p className="text-sm mt-1">
              Payment:{" "}
              <Badge className="bg-green-100 !px-5 py-2 text-green-600">
                {payment}
              </Badge>
            </p>
          </div>

          {status === "Rented" &&
            dueDate &&
            (() => {
              const [day, month, year] = dueDate.split("/");
              const due = new Date(`${year}-${month}-${day}`);
              const now = new Date();

              // Remove time part for accurate comparison
              due.setHours(0, 0, 0, 0);
              now.setHours(0, 0, 0, 0);

              return due < now ? (
                <span className="text-sm text-red-500 font-medium">
                  Overdue
                </span>
              ) : (
                <span className="text-sm text-[#0057B8] font-medium">
                  Due: <span className="underline">{dueDate}</span>
                </span>
              );
            })()}
        </div>

        {/* Action Buttons */}
        <div className={`mt-4 flex justify-between items-center flex-wrap`}>
          {isRented ? (
            <>
              {/* Left side: View Details */}
              <button className="flex items-center gap-1 border rounded-2xl px-3 py-2 text-sm">
                <Eye className="w-4 h-4" />
                View Details
              </button>

              {/* Right side: View Transactions + Renew Rent */}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="border text-[#936639] border-[#936639] rounded-2xl px-4 py-2 text-sm font-medium"
                >
                  View Transactions
                </button>
                <button className="bg-gradient-to-t from-[#A68A64] to-[#936639] text-white rounded-2xl px-4 py-2 text-sm font-medium">
                  Renew Rent
                </button>
              </div>
            </>
          ) : (
            <div className="ml-auto">
              <button className="flex items-center gap-1 border rounded-2xl px-3 py-2 text-sm">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogContent className="max-w-md">
    <DialogHeader>
      <DialogTitle className="text-lg text-center font-medium">
        Transaction History
      </DialogTitle>
      <p className="text-sm text-center font-normal">
        Your Rent Payment History for the property <br />
        <span className="text-[#936639] font-medium">{listing.title}</span>
      </p>
    </DialogHeader>

    {/* Overall Info */}
    <div className="space-x-3 p-4 border-b flex justify-between items-end text-sm">
      <p>
        <span className="font-normal text-[12px] text-[#8C8C8C]">Last Payment Date:</span> <br />
        <span className="font-normal text-base">{listing.paymentDate || "N/A"}</span>
      </p>
      <p>
        <span className="font-normal text-base">✅ {listing.payment}</span>
      </p>
      <p>
        <span className="font-normal text-base">{listing.price}</span>
      </p>
    </div>

    {/* Monthly Transactions */}
    <div className="mt-4 space-y-3 px-2">
      {listing.transactions?.map((txn, idx) => {
        const isOverdue = txn.status === "Unpaid" && new Date() > new Date(listing.dueDate || "");
        return (
          <div
            key={idx}
            className="border p-3 rounded-lg flex justify-between items-center bg-[#F9F9F9]"
          >
            <div>
              <p className="text-sm font-medium">{txn.month}</p>
              <p className="text-xs text-[#777]">
                Payment Date: {txn.paymentDate || "—"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">{txn.amount || "—"}</p>
              <p
                className={`text-xs ${
                  txn.status === "Paid"
                    ? "text-green-600"
                    : isOverdue
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {txn.status === "Paid"
                  ? "Paid"
                  : isOverdue
                  ? "Overdue"
                  : `Due: ${listing.dueDate}`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </DialogContent>
</Dialog>

    </div>
  );
}
