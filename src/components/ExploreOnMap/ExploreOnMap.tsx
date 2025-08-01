"use client";

import {
  ArrowLeft,
  Building2,
  Home,
  LayoutGrid,
  Map,
  Search,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import PropertyCard from "../ReusableComponents/PropertiesCard";
import ToggleSwitch from "../ReusableComponents/ToggleSwitch";
import FilterSheet from "./FilterSheet";

const data = [
  {
    id: 1,
    images: ["/landing/pro.png", "/landing/pro.png", "/landing/pro.png"],
    title: "5 Bedroom Detached Duplex",
    price: "₦500,000,000",
    location: "Victoria Island (VI), Lagos",
    description:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis...",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    agent: "Emeka Nzerem",
    selltype: "buy",
  },
  {
    id: 2,
    images: ["/landing/pro.png", "/landing/pro.png", "/landing/pro.png"],
    title: "5 Bedroom Detached Duplex",
    price: "₦500,000,000",
    location: "Victoria Island (VI), Lagos",
    description:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis...",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    agent: "Emeka Nzerem",
    selltype: "rent",
  },
  {
    id: 3,
    images: ["/landing/pro.png", "/landing/pro.png", "/landing/pro.png"],
    title: "5 Bedroom Detached Duplex",
    price: "₦500,000,000",
    location: "Victoria Island (VI), Lagos",
    description:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis...",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    agent: "Emeka Nzerem",
    selltype: "rent",
  },
  {
    id: 4,
    images: ["/landing/pro.png", "/landing/pro.png", "/landing/pro.png"],
    title: "5 Bedroom Detached Duplex",
    price: "₦500,000,000",
    location: "Victoria Island (VI), Lagos",
    description:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis...",
    beds: 5,
    baths: 3,
    size: "1690 sqft",
    agent: "Emeka Nzerem",
    selltype: "buy",
  },
];

const ExploreOnMap = () => {
  const [value, setValue] = useState("buy");
  const [lookingfor, setLookingFor] = useState("buy");
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 80]);
  const [SqFeet, setSqFeet] = useState<[number, number]>([20, 80]);
  const [map, setMap] = useState("grid");

  const propertyType = [
    "ApartMent",
    "Duplex",
    "Fully-Detached",
    "Semi-Detached",
    "Bungalows",
    "Empty Land",
    "Shopping Complex",
    "Event Center",
    "Mansion",
    "Penthouse",
    "Office space",
  ];
  const propertyStatus = ["Under Contruction", "Ready to Move"];
  const Amenities = [
    "Parking",
    "Power Backup",
    "Park",
    "Swimming Pool",
    "Lift",
    "Pet Friendly",
    "WheelChair Friendly",
    "24 x 7 Secrity",
  ];

  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 py-4">
          {/* Left Section */}
          <div className="flex flex-1 items-center  gap-4 sm:gap-2  justify-between md:justify-start flex-wrap">
            <Link href="/">
              <div className="flex gap-2 items-center text-[#9c6b3c]">
                <ArrowLeft size={18} />
                <span className="text-sm">Back</span>
              </div>
            </Link>

            <div className="ml-0 md:ml-8">
              <ToggleSwitch
                value={value}
                onChange={setValue}
                options={[
                  { label: "Buy", value: "buy", icon: <Home size={16} /> },
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

          {/* Search Bar */}
          <div className="w-full order-1 md:order-0 md:flex-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                className="w-full border rounded-full pl-10 pr-4 py-2 text-sm"
                placeholder="Search property, location or city"
              />
            </div>
          </div>

          {/* Right Buttons */}
          <div className="w-full md:flex-1 items-center flex flex-wrap md:flex-nowrap gap-3 justify-between md:justify-end">
            {/* Filter Sheet */}

            <FilterSheet
              lookingfor={lookingfor}
              setLookingFor={setLookingFor}
              propertyType={propertyType}
              propertyStatus={propertyStatus}
              Amenities={Amenities}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              SqFeet={SqFeet}
              setSqFeet={setSqFeet}
            />

            {/* Grid/Map Toggle */}
            <ToggleSwitch
              value={map}
              onChange={setMap}
              options={[
                { label: "", value: "grid", icon: <LayoutGrid size={20} /> },
                { label: "", value: "map", icon: <Map size={20} /> },
              ]}
              activeColors={{ from: "#9c6b3c", to: "#b38758" }}
              borderColor="#b38758"
            />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 lg:px-0 my-6">
        {map === "grid" ? (
          <div className="flex flex-col lg:flex-row h-auto  lg:h-[calc(100vh-80px)] gap-4">
            {/* Scrollable Property List */}
            <div className="flex-1 overflow-y-auto pr-0  pb-4 lg:pr-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md::grid-cols-2 gap-4">
                {data.map((property) => (
                  <PropertyCard
                    key={property.id}
                    {...property}
                    sellType={property.selltype}
                  />
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="flex-1 h-64 lg:h-auto">
              <Image
                src="/explore/map.svg"
                alt="map"
                height={1000}
                width={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="h-[calc(100vh-80px)]">
            <Image
              src="/explore/map.svg"
              alt="map"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreOnMap;
