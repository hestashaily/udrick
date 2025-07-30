"use client";
import React, { useState } from "react";
import ProfileCard from "../ProfileCard";
import RefundHistoryCard from "./RefundHistoryCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ListingStatus = "Rented" | "Purchased";
type RefundStatus = "none" | "requested" | "refunded" | "rejected";

const listings: Array<{
  id: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  size: string;
  price: string;
  frequency: string;
  status: ListingStatus;
  payment: "Paid" | "Unpaid";
  paymentDate?: string;
  refundReason?: string;
  refundStatus?: RefundStatus;
  dueDate?: string;
  transactions?: Array<{
    month: string;
    paymentDate: string;
    amount: string;
    status: "Paid" | "Unpaid";
  }>;
}> = [
  {
    id: 1,
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    price: "₦36,000",
    frequency: "/month",
    status: "Rented",
    dueDate: "30/08/2025",
    paymentDate: "18/07/2025",
    refundStatus: "none",
    payment: "Paid",
    transactions: [
      {
        month: "June 2025",
        paymentDate: "05/06/2025",
        amount: "₦30,000",
        status: "Paid",
      },
      {
        month: "July 2025",
        paymentDate: "05/07/2025",
        amount: "₦20,000",
        status: "Paid",
      },
      {
        month: "August 2025",
        paymentDate: "",
        amount: "",
        status: "Unpaid",
      },
    ],
  },
  {
    id: 2,
    title: "5 Bedroom Detached Duplex1",
    location: "Victoria Island (VI), Lagos",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    price: "₦50,360,000",
    refundStatus: "rejected",
    frequency: "",
    status: "Purchased",
    payment: "Paid",
  },
  {
    id: 3,
    title: "5 Bedroom Detached Duplex2",
    location: "Victoria Island (VI), Lagos",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    price: "₦36,000",
    frequency: "/month",
    refundStatus: "requested",

    status: "Purchased",
    payment: "Paid",
  },
  {
    id: 4,
    title: "3 Bedroom Apartment3",
    location: "Lekki Phase 1, Lagos",
    beds: 3,
    baths: 2,
    size: "1200 sqft",
    price: "₦25,000",
    frequency: "/month",
    status: "Rented",
    refundStatus: "refunded",

    payment: "Paid",
    paymentDate: "15/07/2025",
    dueDate: "21/05/2025",
    transactions: [
      {
        month: "June 2025",
        paymentDate: "05/06/2025",
        amount: "₦10,000",
        status: "Paid",
      },
      {
        month: "July 2025",
        paymentDate: "05/07/2025",
        amount: "₦10,000",
        status: "Paid",
      },
      {
        month: "August 2025",
        paymentDate: "",
        amount: "",
        status: "Unpaid",
      },
    ],
  },
];
const Refund = () => {
  const [listingsData, setListingsData] = useState(listings);
  const [activeTab, setActiveTab] = useState("all");

  const handleRequestRefund = (listingId: number, reason: string) => {
    setListingsData((prev) =>
      prev.map((listing) =>
        listing.id === listingId
          ? { ...listing, refundStatus: "requested", refundReason: reason }
          : listing
      )
    );
    setActiveTab("requested");
  };
  return (
    <div>
      <ProfileCard />
      <div className="my-4">
        <h2 className="font-medium text-2xl my-4 text-[#313131]">Refund Requests</h2>
        <Card>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full px-4"
          >
            <TabsList className="flex w-full justify-between overflow-x-auto overflow-y-hidden rounded-xl shadow bg-[#F7F7F7] px-2  py-6">
              <TabsTrigger className="!py-4 !px-4" value="all">
                Properties (
                {
                  listingsData.filter(
                    (listing) => listing.refundStatus === "none"
                  ).length
                }
                )
              </TabsTrigger>
              <TabsTrigger className="!py-5" value="requested">
                Requested (
                {
                  listingsData.filter((l) => l.refundStatus === "requested")
                    .length
                }
                )
              </TabsTrigger>
              <TabsTrigger className="!py-5" value="refunded">
                Refunded (
                {
                  listingsData.filter((l) => l.refundStatus === "refunded")
                    .length
                }
                )
              </TabsTrigger>
              <TabsTrigger className="!py-5" value="rejected">
                Rejected (
                {
                  listingsData.filter((l) => l.refundStatus === "rejected")
                    .length
                }
                )
              </TabsTrigger>
            </TabsList>

            {/* <TabsContent value="all" className="mt-6 space-y-6">
              {listings.map((item) => (
                <RefundHistoryCard key={item.id} listing={item} />
              ))}
            </TabsContent>

            {["purchased", "rented"].map((status) => (
              <TabsContent
                value={status}
                key={status}
                className="mt-6 space-y-6"
              >
                {listings
                  .filter((item) => item.status.toLowerCase() === status)
                  .map((item) => (
                    <RefundHistoryCard key={item.id} listing={item} />
                  ))}
              </TabsContent>
            ))} */}
            <TabsContent value="all">
              {listingsData
                .filter((item) => item.refundStatus === "none") // only show items that haven't been requested
                .map((item) => (
                  <RefundHistoryCard
                    key={item.id}
                    listing={item}
                    onRequestRefund={handleRequestRefund}
                  />
                ))}
            </TabsContent>

            <TabsContent value="requested">
              {listingsData
                .filter((item) => item.refundStatus === "requested")
                .map((item) => (
                  <RefundHistoryCard
                    key={item.id}
                    listing={item}
                    onRequestRefund={handleRequestRefund}
                  />
                ))}
            </TabsContent>
            <TabsContent value="refunded">
              {listingsData
                .filter((item) => item.refundStatus === "refunded")
                .map((item) => (
                  <RefundHistoryCard key={item.id} listing={item} />
                ))}
            </TabsContent>

            <TabsContent value="rejected">
              {listingsData
                .filter((item) => item.refundStatus === "rejected")
                .map((item) => (
                  <RefundHistoryCard key={item.id} listing={item} />
                ))}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Refund;
