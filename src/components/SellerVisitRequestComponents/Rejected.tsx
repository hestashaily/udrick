

import React from "react";
import SellerVisitRequestCard from "../Seller/VisitRequestCard/SellerVisitRequestCard";

const data = [
  {
    id: 1,
    name: "David Chen",
    avatar: "/seller/visit/user.svg",
    property: "Luxury Family Villa",
    visitDate: "20/12/2025 at 02:00 PM",
    requestedDate: "20/12/2025",
    status: "Rejected",
    rejectionReason: "Property is no longer available for viewing due to maintenance work.",
  },
];

const Rejected = () => {
  return (
    <div>
      <div className="w-full space-y-5    ">
        {data.map((request) => (
          <SellerVisitRequestCard
            key={request.id}
            name={request.name}
            avatar={request.avatar}
            property={request.property}
            visitDate={request.visitDate}
            requestedDate={request.requestedDate}
             rejectionReason={request.rejectionReason} 
            status={request.status as "Pending" | "Accepted" | "Rejected"}
            onAccept={() => console.log("Accepted", request.id)}
            onReject={() => console.log("Rejected", request.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Rejected;
