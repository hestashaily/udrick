"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/MyProfile/ProfileCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PropertyHistoryCard from "./PropertyHistoryCard";
import SellerPropertyHistoryCard from "./SellerPropertyHistoryCard";

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
  paymentDate?: string;
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

const sellerProperties = [
  {
    id: 1,
    image: "/seller/house.svg",
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    price: 36000,
    status: "Available" as const,
    beds: 5,
    baths: 3,
    sqft: 1690,
  },
  {
    id: 2,
    image: "/seller/house.svg",
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    price: 36000,
    status: "Rented" as const,
    baths: 3,
    beds: 5,

    sqft: 1690,
  },
  {
    id: 3,
    image: "/seller/house.svg",
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    price: 36000,
    status: "Sold" as const,
    beds: 5,
    baths: 3,
    sqft: 1690,
  },
];

const PropertyHistory = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleMarkAsRented = (id: number) => {
    alert(`Property ${id} marked as rented!`);
  };
  return (
    <div>
      <ProfileCard />
      {role === "buyer" ? (
        <>
          <div className="my-4">
            <h2 className="font-medium py-4 text-2xl text-[#313131]">
              Property History Preview
            </h2>
            <Card>
              <Tabs defaultValue="all" className="w-full px-4">
                <TabsList className="flex w-full justify-between overflow-x-auto overflow-y-hidden rounded-xl shadow bg-[#F7F7F7] px-4  py-6">
                  <TabsTrigger className="!py-4" value="all">
                    All ({listings.length})
                  </TabsTrigger>
                  <TabsTrigger className="!py-4" value="pending">
                    Pending (1)
                  </TabsTrigger>
                  <TabsTrigger className="!py-4" value="purchased">
                    Purchased (1)
                  </TabsTrigger>
                  <TabsTrigger className="!py-4" value="rented">
                    Rented (1)
                  </TabsTrigger>
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
        </>
      ) : (
        <>
          <div className="my-4">
            <h2 className="font-medium py-4 text-2xl text-[#313131]">
              Property History Preview
            </h2>

            <Card>
              <Tabs defaultValue="listed" className="w-full px-4">
                <TabsList className="flex w-full justify-between overflow-x-auto overflow-y-hidden rounded-xl shadow bg-[#F7F7F7] px-4  py-6">
                  <TabsTrigger className="!py-4" value="listed">
                    Listed ({sellerProperties.length})
                  </TabsTrigger>
                  <TabsTrigger className="!py-4" value="rented">
                    Rented (1)
                  </TabsTrigger>
                  <TabsTrigger className="!py-4" value="sold">
                    Sold (1)
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="listed" className="mt-6 space-y-6">
                  <div className="flex gap-4 justify-start md:justify-centerr  flex-wrap">
                    {sellerProperties.map((item) => (
                      <SellerPropertyHistoryCard
                        key={item.id}
                        property={item}
                        onMarkAsRented={handleMarkAsRented}
                      />
                    ))}
                  </div>
                </TabsContent>

                {["Rented", "Sold"].map((status) => (
                  <TabsContent
                    value={status.toLowerCase()}
                    key={status}
                    className="mt-6 space-y-6"
                  >
                    <div className="flex gap-4 justify-start md:justify-center flex-wrap">
                      {sellerProperties
                        .filter((item) => item.status === status)
                        .map((item) => (
                          <SellerPropertyHistoryCard
                            key={item.id}
                            property={item}
                            onMarkAsRented={handleMarkAsRented}
                          />
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyHistory;
