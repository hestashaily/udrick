import React from "react";
// import Image from "next/image";
import VisitRequestCard from "../Seller/VisitRequestCard/SellerVisitRequestCard";



const data = [
  {
    id: 1,
    name: "David Chen",
    avatar: "/seller/visit/user.svg",
    property: "Luxury Family Villa",
    visitDate: "20/12/2025 at 02:00 PM",
    requestedDate: "20/12/2025",
    status: "Accepted",
  },
 
   
];
const Accepted = () => {
  return (
    <div>
      <div className="w-full space-y-5 ">
        {/* <Image
          src="/seller/visit-request/seller.png"
          alt="map"
          width={60}
          height={60}
          className="w-[60] h-[60] rounded-full"
        />
        <div className="w-full">
          <div className="w-full">
            <div className="flex items-center justify-between mb-[9px] w-full">
              <p className="font-[500] text-[16px] text-[#313131]">
                Sarah Mitchell
              </p>
              <button className="py-[4px] px-[15px] rounded-full flex items-center bg-[#14CD5E1A] gap-[12px] font-[400] text-[16px] text-[#14CD5E]">
                <Image
                  src="/seller/visit-request/accepted.png"
                  alt="map"
                  width={18}
                  height={16}
                  className="w-[18] h-[16] "
                />
                Accepted
              </button>
            </div>
            <p className="font-[400] text-[14px] text-[#515151]">David Chen</p>
            <div className="flex items-center gap-[10px] py-[5px] ">
              <Image
                src="/seller/visit-request/date.png"
                alt="map"
                width={16}
                height={16}
                className="w-[16] h-[16] "
              />
              <p className="font-[400] text-[14px] text-[#515151]">
                Wednesday, December 25, 2025
              </p>
            </div>
            <div className="flex items-center gap-[10px] ">
              <Image
                src="/seller/visit-request/time.png"
                alt="map"
                width={16}
                height={16}
                className="w-[16] h-[16] "
              />
              <p className="font-[400] text-[14px] text-[#515151]">02:00 PM</p>
            </div>
            <p className="italic font-[400] text-[14px] text-[#8C8C8C] mt-[10px]">
              Requested 20/12/2025
            </p>
          </div>
        </div> */}
        {/* <VisitRequestCard/> */}
        {
          data.map((request) => (

            <VisitRequestCard
              key={request.id}
              name={request.name}
              avatar={request.avatar}
              property={request.property}
              visitDate={request.visitDate}
              requestedDate={request.requestedDate}
              status={request.status as "Pending" | "Accepted" | "Rejected"}
              onAccept={() => console.log("Accepted", request.id)}
              onReject={() => console.log("Rejected", request.id)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Accepted;
