import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import RightSideVisitRequest, { VisitRequest } from "./RightSideVisitRequest";
import LeftPanel, { LeftPanelProps } from "./LeftSideRentListing";
import ToggleSwitch from "@/components/ReusableComponents/ToggleSwitch";
import { Building2, Home } from "lucide-react";

const VisitReqCardData: VisitRequest[] = [
  {
    id: 1,
    name: "David Chen",
    avatar: "/seller/visit/user.svg",
    property: "Luxury Family Villa",
    visitDate: "20/12/2025 at 02:00 PM",
    requestedDate: "20/12/2025",
    status: "Pending",
  },
  {
    id: 2,
    name: "Aarav Mehta",
    avatar: "/seller/visit/user.svg",
    property: "Skyline Apartment",
    visitDate: "25/12/2025 at 11:00 AM",
    requestedDate: "24/12/2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sanya Kapoor",
    avatar: "/seller/visit/user.svg",
    property: "Ocean View Bungalow",
    visitDate: "26/12/2025 at 04:30 PM",
    requestedDate: "25/12/2025",
    status: "Pending",
  },
];

const sellerRentListingData: LeftPanelProps[] = [
  {
    id: 1,
    image: "/seller/property.svg",
    title: "5-Bedroom Pavillion",
    location: "Victoria Island (VI), Lagos",
    description:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venentis...",
    price: "₦36,000",
    status: "Available",
    beds: 5,
    baths: 3,
    area: 1690,
  },
  {
    id: 2,
    image: "/seller/property.svg",
    title: "5-Bedroom Pavillion",
    location: "Victoria Island (VI), Lagos",
    description:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venentis...",
    price: "₦36,000",
    status: "Rented",
    beds: 5,
    baths: 3,
    area: 1690,
  },
  {
    id: 3,
    image: "/seller/property.svg",
    title: "5-Bedroom Pavillion",
    location: "Victoria Island (VI), Lagos",
    description:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venentis...",
    price: "₦36,000",
    status: "Pending",
    beds: 5,
    baths: 3,
    area: 1690,
  },
];

const SellerDashBoard = () => {
  const [value, setValue] = useState("sell");
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <div className="bg-white shadow">
          <div className="container mx-auto p-4">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between">
              <div>
                <h1 className="text-2xl md:text-4xl font-medium">
                  Hello, Alex Johnson! 👋
                </h1>
                <p className="text-sm md:text-base font-normal text-[#6D6D6D]">
                  Welcome back to your seller dashboard. Manage your properties
                  and connect with buyers.
                </p>
              </div>

              {/* Stats Section */}
              <div className="py-4 px-6 bg-white flex flex-wrap justify-around items-center gap-6 md:gap-10 shadow rounded-2xl">
                {[
                  { label: "All", color: "#313131" },
                  { label: "Available", color: "#34A853" },
                  { label: "Pending", color: "#EF9D30" },
                  { label: "Rented", color: "#EF9D30" },
                  { label: "Sold", color: "#367DC9" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between flex-col space-y-1"
                  >
                    <p
                      className="h-7 md:h-10 w-7 md:w-10 text-sm md:text-xl flex justify-center items-center rounded-full border"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}20`,
                      }}
                    >
                      0
                    </p>
                    <p className="text-[#6D6D6D] font-normal text-xs md:text-base">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="mt-4 text-sm md:text-base font-semibold">Sell/Rent</div> */}
            <div className="mt-2 lg:mt-0">
              <ToggleSwitch
                value={value}
                onChange={setValue}
                options={[
                  { label: "Sell", value: "sell", icon: <Home size={16} /> },
                  {
                    label: "Rent",
                    value: "rent",
                    icon: <Building2 size={16} />,
                  },
                ]}
                activeColors={{ from: "#9c6b3c", to: "#b38758" }}
                borderColor="#b38758"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-center">
          <div className="container mx-auto py-6">
            <div className="flex flex-col lg:flex-row px-3 sm:px-4  gap-6">
              {/* Left Panel */}
              <LeftPanel listings={sellerRentListingData} />

              {/* Right Panel */}
              <RightSideVisitRequest data={VisitReqCardData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerDashBoard;
