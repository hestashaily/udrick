"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/MyProfile/ProfileCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PropertyHistoryCard from "./PropertyHistoryCard";
import SellerPropertyHistoryCard from "./SellerPropertyHistoryCard";

type ListingStatus = "Pending" | "Rented" | "Purchased";

const listings = [
  {
    id: 1,
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    price: "₦36,000",
    frequency: "/month",
    status: "Rented" as ListingStatus,
    dueDate: "30/08/2025",
    paymentDate: "18/07/2025",
    payment: "Paid" as const,
    transactions: [
      { month: "June 2025", paymentDate: "05/06/2025", amount: "₦30,000", status: "Paid" as const },
      { month: "July 2025", paymentDate: "05/07/2025", amount: "₦20,000", status: "Paid" as const },
      { month: "August 2025", paymentDate: "", amount: "", status: "Unpaid" as const },
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
    status: "Purchased" as ListingStatus,
    payment: "Paid" as const,
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
    status: "Pending" as ListingStatus,
    payment: "Paid" as const,
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
    status: "Rented" as ListingStatus,
    payment: "Paid" as const,
    paymentDate: "15/07/2025",
    dueDate: "21/05/2025",
    transactions: [
      { month: "June 2025", paymentDate: "05/06/2025", amount: "₦10,000", status: "Paid" as const },
      { month: "July 2025", paymentDate: "05/07/2025", amount: "₦10,000", status: "Paid" as const },
      { month: "August 2025", paymentDate: "", amount: "", status: "Unpaid" as const },
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
    actionType: "sell" as const,
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
  {
    id: 4,
    image: "/seller/house.svg",
    title: "5 Bedroom Detached Duplex",
    location: "Victoria Island (VI), Lagos",
    price: 36000,
    status: "Available" as const,
    beds: 5,
    baths: 3,
    sqft: 1690,
    actionType: "rent" as const,
  },
];

const PropertyHistory = () => {
  const [role, setRole] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [selleractiveTab, setSellerActiveTab] = useState("listed");




  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    setRole(savedRole); 

    setActiveTab("all");
    setSellerActiveTab("listed");
  }, []);
  
 
  
  if (role === null) {
    return null;
  }
   const handleBuyerTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleSellerTabChange = (value: string) => {
    setSellerActiveTab(value);
  };

  const handleMarkAsRented = (id: number) => {
    alert(`Property ${id} marked as rented!`);
  };
  const handleMarkAsSold = (id: number) => {
    alert(`Property ${id} marked as sold!`);
  };

  return (
    <div>
      <ProfileCard />
      {role === "buyer" ? (
        <div className="my-4">
          <h2 className="font-medium py-4 text-2xl text-[#313131]">
            Property History Preview
          </h2>
          <Card>
            <Tabs value={activeTab} onValueChange={handleBuyerTabChange} className="w-full px-4">
              <TabsList className="flex w-full justify-between overflow-x-auto overflow-y-hidden   rounded-xl shadow bg-[#F7F7F7] px-4 py-6">
                <TabsTrigger value="all" className="py-5">All ({listings.length})</TabsTrigger>
                <TabsTrigger value="pending" className="py-5">Pending (1)</TabsTrigger>
                <TabsTrigger value="purchased" className="py-5">Purchased (1)</TabsTrigger>
                <TabsTrigger value="rented" className="py-5">Rented (1)</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6 space-y-6">
                {listings.map((item) => (
                  <PropertyHistoryCard key={item.id} listing={item} />
                ))}
              </TabsContent>

              {["pending", "purchased", "rented"].map((status) => (
                <TabsContent key={status} value={status} className="mt-6 space-y-6">
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
      ) : (
        <div className="my-4">
          <h2 className="font-medium py-4 text-2xl text-[#313131]">
            Property History Preview
          </h2>
          <Card>
            <Tabs value={selleractiveTab} onValueChange={handleSellerTabChange} className="w-full px-4">
              <TabsList className="flex w-full justify-between overflow-x-auto overflow-y-hidden rounded-xl shadow bg-[#F7F7F7] px-4 py-6">
                <TabsTrigger value="listed" className="py-5">Listed ({sellerProperties.length})</TabsTrigger>
                <TabsTrigger value="rented" className="py-5">Rented (1)</TabsTrigger>
                <TabsTrigger value="sold" className="py-5">Sold (1)</TabsTrigger>
              </TabsList>

              <TabsContent value="listed" className="mt-6 space-y-6">
                <div className="flex gap-4 justify-start sm:justify-center md:justify-start flex-wrap">
                  {sellerProperties.map((item) => (
                    <SellerPropertyHistoryCard
                      key={item.id}
                      property={item}
                      onMarkAsRented={handleMarkAsRented}
                      onMarkAsSold={handleMarkAsSold}
                    />
                  ))}
                </div>
              </TabsContent>

              {["Rented", "Sold"].map((status) => (
                <TabsContent key={status} value={status.toLowerCase()} className="mt-6 space-y-6">
                  <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                    {sellerProperties
                      .filter((item) => item.status === status)
                      .map((item) => (
                        <SellerPropertyHistoryCard
                          key={item.id}
                          property={item}
                          onMarkAsRented={handleMarkAsRented}
                          onMarkAsSold={handleMarkAsSold}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PropertyHistory;
