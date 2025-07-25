import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import RightSideVisitRequest, { VisitRequest } from "./RightSideVisitRequest";
import LeftPanel, { LeftPanelProps } from "./LeftSideRentListing";

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
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <div className="bg-white shadow">
          <div className="container mx-auto p-4">
            <div className="flex gap-6 justify-between pr-6">
              <div>
                <h1 className="text-4xl font-medium">
                  Hello, Alex Johnson! 👋
                </h1>
                <p className="text-base font-normal text-[#6D6D6D]">
                  Welcome back to your seller dashboard. Manage your properties
                  and connect with buyers.
                </p>
              </div>
              <div className="py-4 px-8 bg-white flex justify-around items-center gap-10 shadow rounded-2xl">
                <div className=" flex items-center justify-between flex-col space-y-2">
                  <p className="h-10 text-xl text-[#313131] bg-[#313131]/10 w-10 flex justify-center items-center rounded-full border">
                    0
                  </p>
                  <p className="text-[#6D6D6D] font-normal text-base">All</p>
                </div>
                <div className=" flex items-center justify-between flex-col space-y-2">
                  <p className="h-10 w-10 text-xl text-[#34A853]  bg-[#34A853]/10 flex justify-center items-center rounded-full border">
                    0
                  </p>
                  <p className="text-[#6D6D6D] font-normal text-base">
                    Available
                  </p>
                </div>
                <div className=" flex items-center justify-between flex-col space-y-2">
                  <p className="h-10 w-10 text-xl text-[#EF9D30] bg-[#EF9D30]/10 flex justify-center items-center rounded-full border">
                    0
                  </p>
                  <p className="text-[#6D6D6D] font-normal text-base">
                    Pending
                  </p>
                </div>
                <div className=" flex items-center justify-between flex-col space-y-2">
                  <p className="h-10 w-10 text-xl text-[#EF9D30] bg-[#EF9D30]/10 flex justify-center items-center rounded-full border">
                    0
                  </p>
                  <p className="text-[#6D6D6D] font-normal text-base">Rented</p>
                </div>
                <div className=" flex items-center justify-between flex-col space-y-2">
                  <p className="h-10 w-10 text-xl text-[#367DC9] bg-[#367DC9]/10 flex justify-center items-center rounded-full border">
                    0
                  </p>
                  <p className="text-[#6D6D6D] font-normal text-base">Sold</p>
                </div>
              </div>
            </div>
            <div>Sell/Rent</div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="container  mx-auto py-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Left box */}

              <LeftPanel listings={sellerRentListingData} />

              {/* Right box */}

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
