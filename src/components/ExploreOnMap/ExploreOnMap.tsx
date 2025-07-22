"use client";

import {
  ArrowLeft,
  Funnel,
  Home,
  LayoutGrid,
  Map,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Slider from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "../ReusableComponents/PropertiesCard";

const data = {
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
};

const ExploreOnMap = () => {
  const [value, setValue] = useState("buy");
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
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Left: Back + Tabs */}
          <div className="flex flex-1 items-center gap-4">
            {/* Back Button */}
            <Link href="/home">
              <div className="flex gap-2 items-center text-[#9c6b3c]">
                <ArrowLeft size={18} />
                <span className="text-sm">Back</span>
              </div>
            </Link>

            {/* Tabs */}
            <div className="relative inline-flex border border-[#b38758] rounded-full p-1 overflow-hidden">
              {/* Sliding Background */}
              <div
                className={clsx(
                  "absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-r from-[#9c6b3c] to-[#b38758] transition-all duration-300",
                  value === "rent"
                    ? "translate-x-[calc(94%+0.5rem)]"
                    : "translate-x-0"
                )}
              />

              <ToggleGroup
                type="single"
                value={value}
                onValueChange={(val) => {
                  if (val) setValue(val);
                }}
                className="relative z-10 flex gap-x-2"
              >
                <ToggleGroupItem
                  value="buy"
                  className={clsx(
                    "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    "data-[state=on]:bg-transparent",
                    value === "buy" ? "text-white" : "text-[#9c6b3c]"
                  )}
                >
                  <Home size={16} />
                  Buy
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="rent"
                  className={clsx(
                    "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    "data-[state=on]:bg-transparent",
                    value === "rent" ? "text-white" : "text-[#9c6b3c]"
                  )}
                >
                  <Home size={16} />
                  Rent
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {/* Middle: Search */}
          <div className="flex-1">
            <div className="relative w-full">
              {/* Search Icon */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />

              {/* Input */}
              <input
                type="text"
                className="w-full border rounded-full pl-10 pr-4 py-2 text-sm"
                placeholder="Search property, location or city"
              />
            </div>
          </div>

          {/* Right: Filter Button */}
          {/* Filter Sheet */}
          <div className="flex-1 flex gap-6 justify-end">
            <Sheet>
              <SheetTrigger asChild className="">
                <button className="px-4  gap-2 text-base flex items-center justify-center rounded-4xl border text-[#515151] border-[#515151] hover:bg-[#f8f4ef]">
                  <Funnel size={16} /> Filter
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="!w-[550px] pb-10 overflow-y-scroll  sm:w-[400px]"
              >
                <h2 className="text-lg font-semibold px-4 pt-4">
                  Property Search Filter
                </h2>
                <hr />
                <div className="space-y-6">
                  <div className=" flex flex-col space-y-2">
                    {/* Search Location */}
                    <Label className="px-4">Search Location</Label>
                    <input
                      type="text"
                      className="px-4 py-2  border-b outline-none"
                      placeholder="Lagos (5 propoerties found)"
                    />
                  </div>
                  <div className="px-4">
                    {/* Search Location */}
                    <Label>Looking For</Label>
                  </div>
                  <div className="px-4">
                    {/* Search Location */}
                    <Label className="py-4">Property Type</Label>
                    <div className="">
                      <RadioGroup
                        defaultValue="ApartMent"
                        className="grid grid-cols-2  gap-4"
                      >
                        {propertyType.map((type) => (
                          <div
                            key={type}
                            className="flex items-center border rounded-3xl p-3 space-x-2"
                          >
                            <RadioGroupItem
                              value={type}
                              id={`property-${type}`}
                              className="text-[#936639]  border-[#936639] [&_svg]:fill-[#936639]"
                            />
                            <Label htmlFor={`property-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="px-4">
                    {/* Search Location */}
                    <Label className="mb-10">Price Range</Label>
                    <Slider
                      value={priceRange}
                      onValueChange={(val: [number, number]) =>
                        setPriceRange(val)
                      }
                      min={0}
                      max={100}
                      step={1}
                      showValue
                      className="h-6"
                      rangeClassName="bg-[#936639]"
                      thumbClassName="bg-white"
                      trackClassName="h-2 bg-[#936639]"
                    />
                  </div>
                  <div className="px-4">
                    {/* Search Location */}
                    <Label className="mb-5">Number Of Bedrooms</Label>
                    <div className="flex gap-4">
                      <div>
                        <p className="mb-2">Min No. Of Bedrooms</p>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <p className="mb-2">Max No. Of Bedrooms</p>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    {/* Search Location */}
                    <Label className="mb-10">Area Aq. ft.</Label>
                    <Slider
                      value={SqFeet}
                      onValueChange={(val: [number, number]) => setSqFeet(val)}
                      min={0}
                      max={100}
                      step={1}
                      showValue
                      rangeClassName="bg-[#936639]"
                      thumbClassName="bg-white"
                      trackClassName="h-2 bg-[#936639]"
                    />
                  </div>
                  <div className="px-4">
                    <Label className="my-6">Property Status</Label>
                    <div className="">
                      <RadioGroup
                        defaultValue="ApartMent"
                        className="grid grid-cols-2  gap-4"
                      >
                        {propertyStatus.map((type) => (
                          <div
                            key={type}
                            className="flex items-center text-sm border rounded-3xl p-3 space-x-2"
                          >
                            <RadioGroupItem
                              value={type}
                              id={`property-${type}`}
                              className="text-[#936639]  border-[#936639] [&_svg]:fill-[#936639]"
                            />
                            <Label
                              className="text-[13px]"
                              htmlFor={`property-${type}`}
                            >
                              {type}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="px-4">
                    {/* Search Location */}
                    <Label className="my-6">Amenities</Label>
                    <div className="">
                      <RadioGroup
                        defaultValue="ApartMent"
                        className="grid grid-cols-2  gap-4"
                      >
                        {Amenities.map((type) => (
                          <div
                            key={type}
                            className="flex items-center border rounded-3xl p-3 space-x-2"
                          >
                            <RadioGroupItem
                              value={type}
                              id={`property-${type}`}
                              className="text-[#936639]  border-[#936639] [&_svg]:fill-[#936639]"
                            />
                            <Label htmlFor={`property-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <div className="flex  border-t pt-6 justify-between px-6 items-center">
                  <button className=" inline-flex items-center justify-center gap-2 tracking-wider font-medium text-sm md:text-base border   py-2 px-6 rounded-4xl  text-[#936639] ">
                    <X /> Remove Filter
                  </button>
                  <button className="  tracking-wider font-medium text-sm md:text-base border bg-gradient-to-t from-[#A68A64] to-[#936639] text-white py-2 px-6 rounded-4xl hover:opacity-90 transition">
                    Apply Filter
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="relative inline-flex border border-[#b38758] rounded-full p-1 overflow-hidden">
              {/* Sliding Background */}
              <div
                className={clsx(
                  "absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-r from-[#9c6b3c] to-[#b38758] transition-all duration-300",
                  map === "map"
                    ? "translate-x-[calc(85%+0.5rem)]"
                    : "translate-x-0"
                )}
              />

              <ToggleGroup
                type="single"
                value={map}
                onValueChange={(val) => {
                  if (val) setMap(val);
                }}
                className="relative z-10 flex gap-x-1"
              >
                <ToggleGroupItem
                  value="grid"
                  className={clsx(
                    "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    "data-[state=on]:bg-transparent",
                    map === "grid" ? "text-white" : "text-[#9c6b3c]"
                  )}
                >
                  <LayoutGrid size={20} />
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="map"
                  className={clsx(
                    "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    "data-[state=on]:bg-transparent",
                    map === "map" ? "text-white" : "text-[#9c6b3c]"
                  )}
                >
                  <Map size={20} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      {/* main */}
      <div className="container mx-auto my-6">
        {map === "grid" ? (
          <div className="flex h-[calc(100vh-80px)] gap-4">
            {/* Scrollable Property List (2 cards per row) */}
            <div className="flex-1 overflow-y-auto pr-4">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <PropertyCard key={index} {...data} />
                ))}
              </div>
            </div>

            {/* Fixed Map Viewport */}
            <div className="flex-1">
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
          // Full width map only
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
