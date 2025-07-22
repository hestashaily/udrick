"use client";
import { CircleCheckBig, CircleX, Clock4 } from "lucide-react";
import React from "react";
import { VisitRequestCard } from "../ReusableComponents/VisitRequestCard";

type VisitStatus = "Confirmed" | "Pending" | "Cancelled";

type VisitData = {
  title: string;
  seller: string;
  location: string;
  date: string;
  time: string;
  requestedDate: string;
  status: VisitStatus;
  imageUrl: string;
};

const Data: VisitData[] = [
  {
    title: "5 Bedroom Detached Duplex",
    seller: "John Duo",
    location: "Victoria Island (VI), Lagos",
    date: "Wednesday, December 25, 2025",
    time: "02:00 PM",
    requestedDate: "20/12/2025",
    status: "Confirmed",
    imageUrl: "/visit/visit.jpg",
  },
  {
    title: "3 Bedroom Apartment",
    seller: "Anita Sharma",
    location: "Lekki Phase 1, Lagos",
    date: "Monday, December 30, 2025",
    time: "11:00 AM",
    requestedDate: "22/12/2025",
    status: "Pending",
    imageUrl: "/visit/visit.jpg",
  },
  {
    title: "Luxury Studio Flat",
    seller: "Samuel King",
    location: "Ikeja GRA, Lagos",
    date: "Friday, January 3, 2026",
    time: "01:30 PM",
    requestedDate: "24/12/2025",
    status: "Cancelled",
    imageUrl: "/visit/visit.jpg",
  },
  {
    title: "2 Bedroom Condo",
    seller: "Grace Okoro",
    location: "Surulere, Lagos",
    date: "Saturday, January 5, 2026",
    time: "10:00 AM",
    requestedDate: "25/12/2025",
    status: "Confirmed",
    imageUrl: "/visit/visit.jpg",
  },
];
const VisitRequest = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="font-medium text-2xl text-[#313131]">Visit Requests</h1>
        <p className="font-normal text-base text-[#515151]">
          View all your visit requests update here.
        </p>
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
  {/* Pending Request */}
  <div className="border rounded-2xl flex flex-col justify-center items-center space-y-2 border-[#D4CABC] p-6">
    <Clock4 color="#F1B409" />
    <p className="font-medium text-lg text-[#000000]">2</p>
    <p className="font-normal text-base text-[#515151] text-center">
      Pending Request
    </p>
  </div>

  {/* Confirmed Visits */}
  <div className="border rounded-2xl flex flex-col justify-center items-center space-y-2 border-[#D4CABC] p-6">
    <CircleCheckBig color="#14CD5E" />
    <p className="font-medium text-lg text-[#000000]">2</p>
    <p className="font-normal text-base text-[#515151] text-center">
      Confirmed Visits
    </p>
  </div>

  {/* Rejected Requests */}
  <div className="border rounded-2xl flex flex-col justify-center items-center space-y-2 border-[#D4CABC] p-6">
    <CircleX color="#FB333C" />
    <p className="font-medium text-lg text-[#000000]">2</p>
    <p className="font-normal text-base text-[#515151] text-center">
      Rejected Requests
    </p>
  </div>
</div>


      <div className="my-4">
        {Data.map((item, index) => (
          <div key={index} className="my-4">
            <VisitRequestCard
              title={item.title}
              seller={item.seller}
              location={item.location}
              date={item.date}
              time={item.time}
              requestedDate={item.requestedDate}
              status={item.status}
              imageUrl={item.imageUrl}
              onView={() => console.log("View clicked")}
              onContact={() => console.log("Contact clicked")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitRequest;
