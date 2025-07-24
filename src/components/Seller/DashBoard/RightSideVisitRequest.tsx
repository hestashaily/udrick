"use client";

import { CalendarDays } from "lucide-react";
import Image from "next/image";
import React from "react";
import VisitRequestCard from "../VisitRequestCard/SellerVisitRequestCard";

export interface VisitRequest {
  id: number;
  name: string;
  avatar: string;
  property: string;
  visitDate: string;
  requestedDate: string;
  status: "Pending" | "Accepted" | "Rejected";
}

interface RightSideVisitRequestsProps {
  data: VisitRequest[];
}

const RightSideVisitRequest: React.FC<RightSideVisitRequestsProps> = ({ data }) => {
  return (
    <div className="w-full md:w-1/3 bg-white min:h-[600px] rounded-2xl shadow-md border p-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="flex gap-3 items-center mb-4 text-base font-semibold">
          <CalendarDays /> Visit Requests
        </h2>
        {data.length > 0 && (
          <button className="px-6 py-2 border rounded-3xl shadow">
            View All
          </button>
        )}
      </div>

      {data.length > 0 ? (
        <div className="space-y-4">
          {data.map((request) => (
            <VisitRequestCard
              key={request.id}
              name={request.name}
              avatar={request.avatar}
              property={request.property}
              visitDate={request.visitDate}
              requestedDate={request.requestedDate}
              
              status={request.status}
              onAccept={() => console.log("Accepted", request.id)}
              onReject={() => console.log("Rejected", request.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center h-full">
          <Image
            src="/seller/NoVisit.svg"
            alt="No Visit"
            height={60}
            width={60}
            className="object-cover mb-4"
          />
          <p className="font-bold text-[#313131] text-base">
            No Visit Requests Yet!
          </p>
          <p className="font-normal text-sm text-[#515151] mt-2">
            List your property to start receiving visit requests from interested buyers.
          </p>
        </div>
      )}
    </div>
  );
};

export default RightSideVisitRequest;
