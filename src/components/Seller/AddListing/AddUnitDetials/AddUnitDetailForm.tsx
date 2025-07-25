"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface Props {
  propertyType?: string | null;
}

const AddUnitDetailForm = ({ propertyType }: Props) => {
  const [date, setDate] = useState<Date>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const isLand = propertyType === "EmptyLand";
  const isShopping = propertyType === "ShoppingComplex";
  const isEvent = propertyType === "Eventcentre";
  const isOffice = propertyType === "officeSpace";
  const isFull =
    propertyType === "apartment" ||
    propertyType === "semiDetached" ||
    propertyType === "Bungalows" ||
    propertyType === "fullydetached" ||
    propertyType === "duplex" ||
    propertyType === "Penthouse" ||
    propertyType === "house" ||
    propertyType === "Mansion";

  return (
    <div className="w-full space-y-4">
      {/* Unit Name */}
      <div>
        <label className="text-sm font-medium">Unit Name</label>
        <Input className="py-3 h-auto mt-2" placeholder="Enter unit name" />
      </div>

      {/* Asking Price */}
      <div>
        <label className="text-sm font-medium">Asking Price</label>
        <Input className="py-3 h-auto mt-2" placeholder="Enter asking price" />
      </div>

      {/* Built Up Area */}
      {(isLand || isShopping || isEvent || isOffice || isFull) && (
        <div>
          <label className="text-sm font-medium">Built Up Area Sq. Ft.</label>
          <Input className="py-3 h-auto mt-2" placeholder="Enter built up area" />
        </div>
      )}

      {/* Rental Period (Only for Event Centre) */}
      {isEvent && (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-sm font-medium">Rental Start Date</label>
            <Popover>
              <PopoverTrigger className="py-3 mt-2" asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Select Start Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-full">
            <label className="text-sm font-medium">Rental End Date</label>
            <Popover>
              <PopoverTrigger className="py-3 mt-2" asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>Select End Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}

      {/* Rental Frequency (Only for Event Centre) */}
      {isEvent && (
        <div>
          <label className="text-sm font-medium">Rental Frequency</label>
          <Select>
            <SelectTrigger className="w-full mt-2 py-5 h-auto">
              <SelectValue placeholder="Select rental frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Unit / Hall Number */}
      {(isShopping || isEvent || isOffice || isFull) && (
        <div>
          <label className="text-sm font-medium">Unit / Hall Number</label>
          <Input className="py-3 h-auto mt-2" placeholder="Enter unit or hall number" />
        </div>
      )}

      {/* Amenities */}
      {(isShopping || isEvent || isOffice || isFull) && (
        <div>
          <label className="text-sm font-medium">Amenities</label>
          <Select>
            <SelectTrigger className="w-full mt-2 py-5 h-auto">
              <SelectValue placeholder="Select Amenities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="parking">Parking</SelectItem>
              <SelectItem value="pool">Swimming Pool</SelectItem>
              <SelectItem value="gym">Gym</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Property Status & Furnishing (Only for full detail types) */}
      {isFull && (
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <label className="text-sm font-medium">Property Status</label>
            <Select>
              <SelectTrigger className="w-full mt-2 py-5 h-auto">
                <SelectValue placeholder="Select property status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ready">Ready to move</SelectItem>
                <SelectItem value="under-construction">Under Construction</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <label className="text-sm font-medium">Furnishing Type</label>
            <Select>
              <SelectTrigger className="w-full mt-2 py-5 h-auto">
                <SelectValue placeholder="Select Furnishing Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="furnished">Furnished</SelectItem>
                <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                <SelectItem value="unfurnished">Unfurnished</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Floor & Room Number (Only for full detail types) */}
      {isFull && (
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <label className="text-sm font-medium">Floor Number</label>
            <Input className="py-3 h-auto mt-2" placeholder="Enter Floor Number" />
          </div>
          <div className="w-full">
            <label className="text-sm font-medium">Room Number</label>
            <Input className="py-3 h-auto mt-2" placeholder="Enter Room Number" />
          </div>
        </div>
      )}

      {/* Bedrooms & Bathrooms (Only for full detail types) */}
      {isFull && (
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <label className="text-sm font-medium">Number of Bedrooms</label>
            <Select>
              <SelectTrigger className="w-full mt-2 py-5 h-auto">
                <SelectValue placeholder="Select number of Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((val) => (
                  <SelectItem key={val} value={val.toString()}>
                    {val}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <label className="text-sm font-medium">Number of Bathrooms</label>
            <Select>
              <SelectTrigger className="w-full py-5 mt-2 h-auto">
                <SelectValue placeholder="Select Number of Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4].map((val) => (
                  <SelectItem key={val} value={val.toString()}>
                    {val}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Schedule Site Visit (Shown for all) */}
      <div>
        <label className="text-sm font-medium">Schedule site visit</label>
        <Popover>
          <PopoverTrigger className="py-5 mt-2" asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Schedule Site Visit</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default AddUnitDetailForm;
