"use client";
import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Funnel, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import ToggleSwitch from "@/components/ReusableComponents/ToggleSwitch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Slider from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



type FilterSheetProps = {
  lookingfor: string;
  setLookingFor: (val: string) => void;
  propertyType: string[];
  propertyStatus: string[];
  Amenities: string[];
  priceRange: [number, number];
  setPriceRange: (val: [number, number]) => void;
  SqFeet: [number, number];
  setSqFeet: (val: [number, number]) => void;
};

const FilterSheet: React.FC<FilterSheetProps> = ({
  lookingfor,
  setLookingFor,
  propertyType,
  propertyStatus,
  Amenities,
  priceRange,
  setPriceRange,
  SqFeet,
  setSqFeet,
}) => {
  return (
    <Sheet>
      <SheetTrigger className="!h-auto" asChild>
        <div className="px-4 cursor-pointer text-sm gap-2 !h-auto !rounded-3xl py-2 flex items-center justify-center border text-[#515151] border-[#CDC7C1] hover:bg-[#f8f4ef]">
          <Funnel size={16} color="#515151" />
          <span className="hidden md:block text-[#515151]">Filter</span>
        </div>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:w-[400px] md:w-[500px] pb-10 overflow-y-auto"
      >
        <h2 className="text-lg tracking-wider font-semibold px-4 pt-4">
          Property Search Filter
        </h2>
        <hr />

        <div className="space-y-6">
          {/* Location Input */}
          <div className="flex flex-col space-y-2 px-4">
            <Label className="font-medium text-[#313131] text-base">
              Search Location
            </Label>
            <input
              type="text"
              className="px-4 py-2 border-b outline-none"
              placeholder="Lagos (5 properties found)"
            />
          </div>

          {/* Looking For */}
          <div className="px-4">
            <Label className="mb-4 font-medium text-[#313131] text-base">
              Looking For
            </Label>
            <ToggleSwitch
              value={lookingfor}
              onChange={setLookingFor}
              options={[
                { label: "Buy", value: "buy", icon: "" },
                { label: "Rent", value: "rent", icon: "" },
              ]}
              activeColors={{ from: "#9c6b3c", to: "#b38758" }}
              borderColor="#b38758"
            />
          </div>

          {/* Property Type */}
          <div className="px-4">
            <Label className="mb-4 font-medium text-[#313131] text-base">
              Property Type
            </Label>
            <RadioGroup defaultValue="Apartment" className="flex gap-4 flex-wrap">
              {propertyType.map((type) => (
                <div
                  key={type}
                  className="flex items-center border cursor-pointer rounded-3xl py-2 px-3 space-x-2"
                >
                  <RadioGroupItem
                    value={type}
                    id={`property-${type}`}
                    className="text-[#936639] cursor-pointer border-[#936639] [&_svg]:fill-[#936639]"
                  />
                  <Label
                    className="cursor-pointer font-normal text-sm tracking-wider"
                    htmlFor={`property-${type}`}
                  >
                    {type}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Price Range */}
          <div className="px-4">
            <Label className="mb-10 font-medium text-[#313131] text-base">
              Price Range
            </Label>
            <Slider
              value={priceRange}
              onValueChange={(val: [number, number]) => setPriceRange(val)}
              min={0}
              max={3000}
              step={50}
              trackClassName="bg-gray-200 h-2 rounded-full"
              rangeClassName="bg-gradient-to-r from-[#C19A6B] to-[#936639] h-2 rounded-full"
              thumbClassName="h-5 w-5 border-2 border-white bg-white shadow"
            />
          </div>

          {/* Bedrooms */}
          <div className="px-4">
            <Label className="mb-5 font-medium text-[#313131] text-base">
              Number Of Bedrooms
            </Label>
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <p className="mb-2 font-normal text-sm text-[#515151]">
                  Min No. Of Bedrooms
                </p>
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
                <p className="mb-2 font-normal text-sm text-[#515151]">
                  Max No. Of Bedrooms
                </p>
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

          {/* Sq Feet */}
          <div className="px-4">
            <Label className="mb-10 font-medium text-[#313131] text-base">
              Area Sq. ft.
            </Label>
            <Slider
              value={SqFeet}
              onValueChange={(val: [number, number]) => setSqFeet(val as [number, number])}
              min={0}
              max={100}
              step={1}
              trackClassName="bg-gray-200 h-2 rounded-full"
              rangeClassName="bg-gradient-to-r from-[#C19A6B] to-[#936639] h-2 rounded-full"
              thumbClassName="h-5 w-5 border-2 border-white bg-white shadow"
            />
          </div>

          {/* Property Status */}
          <div className="px-4">
            <Label className="my-6 font-medium text-[#313131] text-base">
              Property Status
            </Label>
            <RadioGroup
              defaultValue="Under Construction"
              className="flex gap-4 flex-wrap"
            >
              {propertyStatus.map((type) => (
                <div
                  key={type}
                  className="flex items-center cursor-pointer text-sm border rounded-3xl py-2 px-3 space-x-2"
                >
                  <RadioGroupItem
                    value={type}
                    id={`property-${type}`}
                    className="text-[#936639] cursor-pointer border-[#936639] [&_svg]:fill-[#936639]"
                  />
                  <Label
                    className="text-[13px] cursor-pointer"
                    htmlFor={`property-${type}`}
                  >
                    {type}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Amenities */}
          <div className="px-4">
            <Label className="my-6 font-medium text-[#313131] text-base">
              Amenities
            </Label>
            <RadioGroup defaultValue="Parking" className="flex gap-4 flex-wrap">
              {Amenities.map((type) => (
                <div
                  key={type}
                  className="flex items-center cursor-pointer border rounded-3xl py-2 px-3 space-x-2"
                >
                  <RadioGroupItem
                    value={type}
                    id={`property-${type}`}
                    className="text-[#936639] cursor-pointer border-[#936639] [&_svg]:fill-[#936639]"
                  />
                  <Label className="cursor-pointer" htmlFor={`property-${type}`}>
                    {type}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex border-t pt-6 justify-between px-6 items-center">
          <button className="inline-flex items-center justify-center gap-2 tracking-wider font-medium text-sm border py-2 px-6 rounded-4xl text-[#936639]">
            <X /> Remove Filter
          </button>
          <button className="tracking-wider font-medium text-sm border bg-gradient-to-t from-[#A68A64] to-[#936639] text-white py-2 px-6 rounded-4xl hover:opacity-90">
            Apply Filter
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
