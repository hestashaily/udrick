
'use client';

import React from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import ContactSeller from "./ContactSeller";
import SiteVisit from "./SiteVisit";

interface OverviewType {
  propertyType: string;
  sellerType: string;
  furnishing: string;
  area: string;
  floor: string;
  room: string;
}

interface PropertyData {
  images: string[];
  typeTags: string[];
  title: string;
  price: string;
  unit: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  overview: OverviewType;
  address: string;
  amenities: string[];
  visitAvailability: string;
  description: string;
}

interface BuyPropertyProps {
  propertyData: PropertyData | null;
}

const amenityIcons: Record<string, string> = {
  Gym: "/propertydetail/gym.png",
  Pool: "/propertydetail/pool.png",
  Parking: "/propertydetail/parking.png",
  Lift: "/propertydetail/lift.png",
};

const BuyProperty: React.FC<BuyPropertyProps> = ({ propertyData }) => {
  if (!propertyData) {
    return <div className="p-10 text-center text-red-600">Property data not available.</div>;
  }

  return (
    <div>
      <ImageSlider images={propertyData.images} />

      <div className="p-[32px]">
        <div className="flex items-center gap-[10px]">
          {propertyData.typeTags.map((tag, idx) => (
            <button key={idx} className="py-[10px] px-[15px] rounded-[12px] bg-[#367DC9] text-white">
              {tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-[10px]">
          <p className="text-[36px] font-medium text-[#313131]">{propertyData.title}</p>
          <span className="text-[32px] font-bold text-[#936639]">{propertyData.price}</span>
        </div>

        <p className="text-[16px] text-[#617284] mt-[14px]">Unit: {propertyData.unit}</p>

        <div className="mt-[30px] flex lg:flex-row flex-col items-center gap-[30px]">
          {[
            { label: "Bedrooms", value: propertyData.bedrooms, icon: "bedroom" },
            { label: "Bathrooms", value: propertyData.bathrooms, icon: "bathroom" },
            { label: "Sq. Ft.", value: propertyData.size, icon: "squarefeet" },
          ].map((item) => (
            <div key={item.label} className="max-w-[430px] w-full rounded-[15px] bg-[#F8F6F2] h-[112px] flex items-center justify-center">
              <div className="flex items-center gap-[10px]">
                <Image src={`/propertydetail/${item.icon}.png`} alt={item.label} width={28} height={22} />
                <div>
                  <p className="text-[18px] font-medium text-[#313131]">{item.value}</p>
                  <p className="text-[18px] font-normal text-[#515151]">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-[2px] border-[#D9D9D9]">
        <div className="p-[34px] flex lg:flex-row flex-col gap-[18px]">
          <div className="lg:max-w-[70%] w-full">
            <p className="text-[22px] font-bold text-[#161E2D] mb-[13px]">Overview</p>
            <div className="flex flex-wrap gap-[16px]  pb-[13px]">
              <div className="border-b border-b-[#E5E8EB] gap-[20px] flex md:flex-row flex-col pb-[12px]">
              <div className="w-[334px] ">
                <p className="text-[12px] text-[#96734F]">Property Type</p>
                <p className="text-[14px] text-[#1C140D]">{propertyData.overview.propertyType}</p>
              </div>
              <div className="w-[334px] ]">
                <p className="text-[12px] text-[#96734F]">Seller Type</p>
                <p className="text-[14px] text-[#1C140D]">{propertyData.overview.sellerType}</p>
              </div>
              </div>
              <div className="border-b border-b-[#E5E8EB] md:flex-row flex-col gap-[20px] flex pb-[12px]">
              <div className="w-[334px]">
                <p className="text-[12px] text-[#96734F]">Furnishing</p>
                <p className="text-[14px] text-[#1C140D]">{propertyData.overview.furnishing}</p>
              </div>
              <div className="w-[334px]">
                <p className="text-[12px] text-[#96734F]">Built-Up Area</p>
                <p className="text-[14px] text-[#1C140D]">{propertyData.overview.area}</p>
              </div>
              </div>
              <div className="w-[334px]">
                <p className="text-[12px] text-[#96734F]">Floor</p>
                <p className="text-[14px] text-[#1C140D]">{propertyData.overview.floor}</p>
              </div>
              <div className="w-[334px]">
                <p className="text-[12px] text-[#96734F]">Room Number</p>
                <p className="text-[14px] text-[#1C140D]">{propertyData.overview.room}</p>
              </div>
            </div>

            <div className="mt-[20px]">
              <p className="text-[21px] font-bold text-[#161E2D]">Address</p>
              <p className="text-[14px] text-[#515151] mt-[6px]">{propertyData.address}</p>
            </div>

            <div className="mt-[20px]">
              <p className="text-[21px] font-bold text-[#161E2D] mb-[18px]">Amenities</p>
              <div className="flex flex-wrap gap-[12px]">
                {propertyData.amenities.map((item) => (
                  <div key={item} className="flex items-center gap-[8px] py-[6px] px-[10px] bg-[#F6F5F3] rounded-full text-[14px] text-[#313131]">
                    <Image src={amenityIcons[item] || "/placeholder.png"} alt={item} width={20} height={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[20px]">
              <p className="text-[21px] font-bold text-[#161E2D]">Site Visit Availability</p>
              <p className="text-[14px] text-[#515151] mt-[6px]">{propertyData.visitAvailability}</p>
            </div>

            <div className="mt-[20px]">
              <p className="text-[21px] font-bold text-[#161E2D]">Description</p>
              <p className="text-[14px] text-[#515151] mt-[6px]">{propertyData.description}</p>
               <span className="font-[700] text-[14px] text-[#161E2D]">View More</span>
            </div>

            <div className="mt-[20px]">
              <p className="text-[12px] text-[#936639] mb-[6px]">View 3D exterior and interior view</p>
              <Image src="/propertydetail/map.png" alt="map" width={900} height={235} />
            </div>
          </div>

          <div className="lg:max-w-[30%] w-full">
            <ContactSeller />
            <SiteVisit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProperty;
