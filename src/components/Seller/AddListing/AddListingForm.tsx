"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Files, Info, PenLine, Plus, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {  useAppSelector } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";



export default function AddListingForm() {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState<string | undefined>("");
   const {  step } = useAppSelector((state) => state.step);
   const selectedOption = useSelector(
     (state: RootState) => state.selectedListing.selectedOption
    );
    console.log(selectedOption);
   

  const handleNavigate = () => {
    if (!propertyType) {
      alert("Please select a property type.");
      return;
    }
    router.push(`/add-listing/add-unit-details?type=${propertyType}&step=${step}`);
  };

  return (
    <div className="w-full mt-4 space-y-5 ">
      {/* Seller Type */}
      <div className="">
        <label className="text-sm font-medium">{selectedOption === "sell" ? "Seller Type" :"Landlord Type" }</label>
        <Select>
          <SelectTrigger className="w-full py-5 mt-2 h-auto">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="owner">Owner</SelectItem>
            <SelectItem value="realtor">{selectedOption === "sell" ? "Realtor" :"Agent" }</SelectItem>
            <SelectItem value="developer">{selectedOption === "sell" ? "Developer" :"Propert Manager" }</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Property Type */}
      <div className="">
        <label className="text-sm font-medium">Property Type</label>
        <Select required onValueChange={(value) => setPropertyType(value)}>
          <SelectTrigger className="w-full mt-2 py-5 h-auto  ">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="duplex">Duplex</SelectItem>
            <SelectItem value="fullydetached">Fully-Detached</SelectItem>

            <SelectItem value="semiDetached">Semi-Detached</SelectItem>

            <SelectItem value="Bungalows">Bungalows</SelectItem>

            <SelectItem value="EmptyLand">Empty Land</SelectItem>

            <SelectItem value="ShoppingComplex">Shopping Complex</SelectItem>
            <SelectItem value="Eventcentre">Event Centre</SelectItem>

            <SelectItem value="Mansion">Mansion</SelectItem>

            <SelectItem value="Penthouse">Penthouse</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Building or Project Name */}
      <div className="">
        <label className="text-sm font-medium">Building or Project Name</label>
        <Input
          className="py-3 h-auto mt-2"
          placeholder="Enter building or project name"
        />
      </div>

      {/* Address */}
      <div className="">
        <label className="text-sm font-medium">Address</label>
        <Input className="py-3 h-auto mt-2" placeholder="Enter Address" />
      </div>

      {/* City and State */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <div className="w-full ">
          <label className="text-sm font-medium">City</label>
          <Input className="py-3 h-auto mt-2" placeholder="Enter city name" />
        </div>
        <div className="w-full ">
          <label className="text-sm font-medium">State</label>
          <Input className="py-3 h-auto mt-2" placeholder="Enter state name" />
        </div>
      </div>

      {/* Add Unit Details Button */}
      <div
        onClick={handleNavigate}
        className="mt-2 w-full cursor-pointer flex px-4 rounded-xl py-2 h-auto justify-between border-2 border-[#b88b4a] text-[#b88b4a] hover:bg-[#f3ece3] hover:text-[#b88b4a]"
      >
        <span className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger>
              <Info size={16} className="mr-1" />
            </TooltipTrigger>
            <TooltipContent className="max-w-2xs">
              <p>
                Add details for each apartment unit individually. Click the plus
                icon to enter unit-specific information like floor number, unit
                size, and availability. All added units will be listed below.
              </p>
            </TooltipContent>
          </Tooltip>
          Add Unit Details
        </span>

        <Plus className="h-5 w-5" />
      </div>

      {/* Unit Name will show when i add unit */}
      <div className="mt-2 w-full flex px-4 rounded-xl py-2 h-auto justify-between border-2 border-[#b88b4a] text-[#b88b4a] hover:bg-[#f3ece3] hover:text-[#b88b4a]">
        <p>Unit Name</p>
        <div className="flex gap-2">
          <PenLine size={20} color="#4B8AD3"/>
          <Files size={20} color="#4B8AD3"/>
          <Trash2 size={20} color="#EB4335"/>

        </div>

      </div>
    </div>
  );
}


