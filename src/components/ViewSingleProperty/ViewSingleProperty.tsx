"use client";
import {
  ArrowDownToLine,
  ArrowLeft,
  CircleAlert,
  Eye,
  FileText,
  PenTool,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../BuyPropertyComponents/ImageSlider";
import ContactSeller from "../BuyPropertyComponents/ContactSeller";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SignatureDialog from "./SignatureDialog";
import AgreementDialog from "./AgreementDialog";

const PropertyDetail = [
  {
    id: 1,
    title: "5 Bedroom Detached Duplex",
    address: "123 Main Street, Lagos, Nigeria",
    status: {
      current: "Paid",
      history: ["Pending Purchase", "Paid"],
    },
    images: [
      "/propertydetail/sliderimage.png",
      "/propertydetail/sliderimage.png",
      "/propertydetail/sliderimage.png",
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1200,
    },
    overview: {
      propertyType: "Apartment",
      sellerType: "Owner",
      furnishing: "Unfurnished",
      builtUpArea: "2,500 Sq. Ft.",
      floorNumber: "3rd Floor",
      roomNumber: "Room 305",
      bathrooms: 4,
      bedrooms: 5,
    },
    amenities: ["Gym", "Pool", "Parking", "Lift"],
    siteVisitAvailability: {
      from: "25 July, 2025",
      to: "15 Aug, 2025",
    },
    description:
      "Beautifully Finished 4 Bedroom Semi Detached Duplex With Bq in Ikota, Lekki, Lagos Apartment with Stunning City Views. Experience upscale living in this beautifully modern residence which offers a spacious open-concept layout, floor-to-ceiling windows, and a private balcony with breathtaking city views.",
    location: {
      mapText: "The Grand Residences, 123 Oak Street, Lagos, Nigeria",
      latitude: 6.5244,
      longitude: 3.3792,
    },
    seller: {
      name: "Olusesan Adeyemi",
      phone: "+1 352-548-4468",
      email: "thesesan45@gmail.com",
      profileImage: "/images/seller.jpg",
    },
    purchaseSummary: {
      transactionId: "TX-14249861",
      amountPaid: "₦50,360,000",
      date: "19/06/2025",
    },
    documents: [
      {
        name: "Purchase Agreement",
        description:
          "Purchase agreement for property ownership. Review, sign, and download the contract.",
        file: "purchase-agreement.pdf",
      },
      {
        name: "Contract",
        file: "contract.pdf",
      },
    ],
  },
];

const ViewSingleProperty = () => {
  const property = PropertyDetail[0];

  const [showAgreement, setShowAgreement] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [signatureImage, setSignatureImage] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const handleStartSigning = () => {
    setShowAgreement(false);
    setShowSignature(true);
  };

  const handleSignatureComplete = (signature: string) => {
    setSignatureImage(signature);
    setShowSignature(false);
    setShowAgreement(true);
  };

  const handleSubmitAgreement = () => {
    console.log("Agreement submitted with signature:", signatureImage);
    setShowAgreement(false);
  };

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <div>
      <div className="shadow">
        <div className="container py-4 mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/profile/property-history">
              <div className="flex items-center gap-2">
                <ArrowLeft size={18} />
                <p className="text-sm">Back To History</p>
              </div>
            </Link>
          </div>

          <div className="flex justify-between flex-wrap  space-y-2 md:space-y-0 items-start mt-4">
            <div>
              <h3 className="font-bold text-xl md:text-3xl text-[#0d0d0c]">
                {property.title}
              </h3>
              <span className="inline-block mt-1 font-normal text-sm text-[#6D6D6D]">
                {property.address}
              </span>
            </div>

            <div className="flex gap-2">
              {property.status.history.map((s, i) => {
                const isActive = s === property.status.current;
                return (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full border ${
                      isActive
                        ? s === "Paid"
                          ? "bg-green-100 text-green-700 border-green-600"
                          : "bg-yellow-100 text-yellow-700 border-yellow-600"
                        : "bg-gray-100 text-gray-600 border-gray-300"
                    }`}
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div>
          <div className="flex gap-6 p-3 flex-col w-full lg:flex-row">
            <div className="w-full lg:w-2/3">
              <ImageSlider images={property.images} />

              <div className="mt-[30px]  flex-wrap flex justify-start  items-center gap-[15px] lg:gap-[30px]">
                <FeatureBox
                  icon="/propertydetail/bedroom.png"
                  label="Bedrooms"
                  value={property.features.bedrooms}
                />
                <FeatureBox
                  icon="/propertydetail/bathroom.png"
                  label="Bathrooms"
                  value={property.features.bathrooms}
                />
                <FeatureBox
                  icon="/propertydetail/squarefeet.png"
                  label="Sq. Ft."
                  value={property.features.areaSqFt}
                />
              </div>

              {/* Overview Section */}
              <div className="border-[#D9D9D9]">
                <div className="p-3 mt-6 flex items-center gap-[18px] lg:flex-row flex-col">
                  <div className="lg:max-w-[80%] max-w-full w-full">
                    <p className="font-bold text-[22px] text-[#161E2D] mb-[13px]">
                      Overview
                    </p>

                    <OverviewRow
                      leftLabel="Property Type"
                      leftValue={property.overview.propertyType}
                      rightLabel="Seller Type"
                      rightValue={property.overview.sellerType}
                    />
                    <OverviewRow
                      leftLabel="Furnishing Type"
                      leftValue={property.overview.furnishing}
                      rightLabel="Built-Up Area"
                      rightValue={property.overview.builtUpArea}
                    />
                    <OverviewRow
                      leftLabel="Floor Number"
                      leftValue={property.overview.floorNumber}
                      rightLabel="Room Number"
                      rightValue={property.overview.roomNumber}
                    />
                    <OverviewRow
                      leftLabel="Bathrooms"
                      leftValue={String(property.overview.bathrooms)}
                      rightLabel="Bedrooms"
                      rightValue={String(property.overview.bedrooms)}
                      isLast
                    />

                    <div className="mt-4">
                      <p className="font-[700] text-[21px] text-[#161E2D]">
                        Address
                      </p>
                      <p className="font-[400] text-[14px] text-[#515151] mt-[6px]">
                        {property.location.mapText}
                      </p>
                    </div>

                    {/* Amenities */}
                    <div className=" my-[20px]">
                      <p className="font-[700] text-[21px] text-[#161E2D] mb-[18px]">
                        Amenities
                      </p>
                      <div className="flex flex-wrap items-center gap-[12px]">
                        {property.amenities.map((amenity, index) => (
                          <button
                            key={index}
                            className="flex gap-[8px] items-center py-[6px] px-[8px] font-[400] text-[14px] text-[#313131]  bg-[#F6F5F3] rounded-full"
                          >
                            <Image
                              src={`/propertydetail/${amenity.toLowerCase()}.png`}
                              alt={amenity}
                              width={20}
                              height={20}
                            />
                            {amenity}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Site Visit */}
                    <div className="my-[20px]">
                      <p className="font-[700] text-[21px] text-[#161E2D]">
                        Site Visit Availability
                      </p>
                      <p className="font-[400] text-[14px] text-[#515151] mt-[6px]">
                        {property.siteVisitAvailability.from} to{" "}
                        {property.siteVisitAvailability.to}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="my-[20px]">
                      <p className="font-[700] text-[21px] text-[#161E2D]">
                        Description
                      </p>
                      <p className="font-[400] text-[14px] text-[#515151] mt-[6px]">
                        {property.description}
                      </p>
                      <span className="font-[700] text-[14px] text-[#161E2D] mt-[6px]">
                        View More
                      </span>
                    </div>

                    {/* Map */}
                    <div>
                      <p className="flex items-center gap-[15px] font-[400] text-[12px] text-[#936639] mb-[6px]">
                        View 3D exterior and interior view
                      </p>
                      <iframe
                        width="100%"
                        height="235"
                        style={{ border: 0, borderRadius: "10px" }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps?q=${property.location.latitude},${property.location.longitude}&hl=en&z=14&output=embed`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Seller Section */}
            <div className="w-full lg:w-1/3 p-3">
              <ContactSeller />

              {/* Purchesd Summary */}
              <div className="shadow-[0px_7.15px_17.88px_0px_#0000000D] rounded-[24px] p-4 my-5  border">
                <p className="mb-4 font-medium text-base">Purchess History</p>
                <div className="space-y-6">
                  <div className="flex justify-between ">
                    <p className="text-[#8C8C8C] font-normal text-base">
                      Transaction Id
                    </p>
                    <p className="font-medium text-base text-[#515151]">
                      {property.purchaseSummary.transactionId}
                    </p>
                  </div>
                  <div className="flex justify-between ">
                    <p className="text-[#8C8C8C] font-normal text-base">
                      Amount Paid:
                    </p>
                    <p className="font-medium text-base text-[#515151]">
                      {property.purchaseSummary.amountPaid}
                    </p>
                  </div>
                  <div className="flex justify-between ">
                    <p className="text-[#8C8C8C] font-normal text-base">
                      Date:
                    </p>
                    <p className="font-medium text-base text-[#515151]">
                      {property.purchaseSummary.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Signed Digital Doc */}
              <div className="shadow-[0px_7.15px_17.88px_0px_#0000000D] rounded-[24px] p-4 my-5  border">
                <p className="mb-4 font-medium text-base">
                  Signed Digital Documents
                </p>
                <div className="space-y-6">
                  <div className="bg-[#936639]/3 p-4 flex justify-between rounded-2xl ">
                    <div className="flex items-start justify-start gap-4">
                      <FileText className="text-[#B99872]" size={30} />
                      <div className="flex flex-col">
                        {" "}
                        <p className="font-normal text-sm">
                          Purchase Agreement
                        </p>
                        <p className="font-normal text-xs text-[#8C8C8C]">
                          purchase agriment.pdf
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center items-start">
                      <Button
                        onClick={() => {
                          if (role === "buyer") {
                            setShowAgreement(true);
                          } else {
                            alert("Only buyers can view this agreement.");
                          }
                        }}
                        id="PurchessAgreement"
                        className="bg-white p-2 hover:bg-white"
                      >
                        <Eye size={25} className="text-[#B99872]" />
                      </Button>
                      {role === "seller" ? (
                        <Button className="bg-white hover:bg-white">
                          <ArrowDownToLine className="text-[#B99872]" />
                        </Button>
                      ) : (
                        <Button className="bg-white hover:bg-white">
                          <PenTool className="text-[#B99872]" />
                        </Button>
                      )}

                      {role === "buyer" && (
                        <Tooltip>
                          <TooltipTrigger>
                            <CircleAlert
                              className="leading-0 text-[#B99872]"
                              size={16}
                            />
                          </TooltipTrigger>
                          <TooltipContent side="left">
                            <p className=" font-normal text-[10px]">
                              The seller hasn&#39;t uploaded the property
                              documents yet.
                              <br /> You&#39;ll be able to view and sign them
                              once they are available.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                  <div className="bg-[#936639]/3 p-4 flex justify-between rounded-2xl ">
                    <div className="flex items-start justify-start gap-4">
                      <FileText className="text-[#B99872]" size={30} />
                      <div className="flex flex-col">
                        {" "}
                        <p className="font-normal text-sm">Contracts & Deeds</p>
                        <p className="font-normal text-xs text-[#8C8C8C]">
                          contract.pdf
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center items-start">
                      <Button className="bg-white hover:bg-white">
                        <Eye className="text-[#B99872]" />
                      </Button>
                      {role === "seller" && (
                        <Button className="bg-white hover:bg-white">
                          <ArrowDownToLine className="text-[#B99872]" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AgreementDialog
        open={showAgreement}
        onOpenChange={setShowAgreement}
        onSignClick={handleStartSigning}
        onSaveAgreement={handleSubmitAgreement}
        signature={signatureImage}
      />

      <SignatureDialog
        open={showSignature}
        onOpenChange={setShowSignature}
        onSubmit={handleSignatureComplete}
      />
    </div>
  );
};

// Reusable Feature Box Component
const FeatureBox = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: number | string;
}) => (
  <div className="max-w-[100px] sm:max-w-[220px] lg:max-w-[250px]  w-full rounded-[15px] bg-[#F8F6F2] flex items-center justify-center h-[112px]">
    <div className="flex items-center flex-col sm:flex-row justify-center gap-[16px]">
      <Image src={icon} alt={label} width={28} height={22} />
      <div className="flex flex-col sm:flex-row sm:block items-center justify-center">
        <p className="font-[500]  text-sm md:text-lg text-[#313131]">{value}</p>
        <p className="font-[400]  text-sm md:text-lg text-[#515151]">{label}</p>
      </div>
    </div>
  </div>
);

// Reusable Overview Row Component

type OverviewRowProps = {
  leftLabel: string;
  leftValue: string;
  rightLabel: string;
  rightValue: string;
  isLast?: boolean; // optional flag to remove border
};
const OverviewRow = ({
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  isLast = false,
}: OverviewRowProps) => (
  <div
    className={`flex items-center gap-[16px] py-[13px] ${
      isLast ? "" : "border-b border-[#E5E8EB]"
    }`}
  >
    <div className="w-[334px]">
      <p className="font-normal text-xs text-[#96734F]">{leftLabel}</p>
      <p className="font-normal text-sm text-[#1C140D]">{leftValue}</p>
    </div>
    <div className="w-[334px]">
      <p className="font-normal text-xs text-[#96734F]">{rightLabel}</p>
      <p className="font-normal text-sm text-[#1C140D]">{rightValue}</p>
    </div>
  </div>
);

export default ViewSingleProperty;
