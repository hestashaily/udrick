"use client";
import React from "react";
import ProfileCard from "@/components/MyProfile/ProfileCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PropertyHistoryCard from "./PropertyHistoryCard";

type ListingStatus = "Pending" | "Rented" | "Purchased";

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
    payment: "Paid",
  },
  {
    id: 2,
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    price: "₦50,360,000",
    frequency: "",
    status: "Purchased",
    payment: "Paid",
  },
  {
    id: 3,
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    price: "₦36,000",
    frequency: "/month",
    status: "Pending",
    payment: "Paid",
  },
  {
  id: 4,
  title: "3 Bedroom Apartment",
  location: "Lekki Phase 1, Lagos",
  beds: 3,
  baths: 2,
  size: "1200 sqft",
  price: "₦25,000",
  frequency: "/month",
  status: "Rented",
  payment: "Unpaid",
}
];

const PropertyHistory = () => {
  return (
    <div>
      <ProfileCard />
      <div className="my-4">
        <h2 className="font-medium text-2xl text-[#313131]">
          Property History Preview
        </h2>
        <Card>
          <Tabs defaultValue="all" className="w-full px-4">
            <TabsList className="flex w-full justify-between rounded-xl shadow bg-[#F7F7F7] px-4  py-6">
              <TabsTrigger className="!py-4" value="all">All ({listings.length})</TabsTrigger>
              <TabsTrigger className="!py-4" value="pending">Pending (1)</TabsTrigger>
              <TabsTrigger className="!py-4" value="purchased">Purchased (1)</TabsTrigger>
              <TabsTrigger className="!py-4" value="rented">Rented (1)</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6 space-y-6">
              {listings.map((item) => (
                <PropertyHistoryCard key={item.id} listing={item} />
              ))}
            </TabsContent>

            {["pending", "purchased", "rented"].map((status) => (
              <TabsContent
                value={status}
                key={status}
                className="mt-6 space-y-6"
              >
                {listings
                  .filter((item) => item.status.toLowerCase() === status)
                  .map((item) => (
                    <PropertyHistoryCard key={item.id} listing={item} />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default PropertyHistory;
