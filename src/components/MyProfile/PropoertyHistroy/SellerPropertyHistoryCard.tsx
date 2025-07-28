"use client";

import Image from "next/image";
import {
  MapPin,
  Bath,
  BedSingle,
  Square,
  Eye,
  CircleCheckBig,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type Property = {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  status: "Available" | "Rented" | "Sold";
  beds: number;
  baths: number;
  sqft: number;
};

interface PropertyCardProps {
  property: Property;
  onMarkAsRented: (id: number) => void;
}

const statusColors: Record<Property["status"], string> = {
  Available: "bg-[#E7F6EC] text-[#3DA66E]",
  Sold: "bg-[#FDF1DB] text-[#E6A23C]",
  Rented: "bg-[#F3E8FF] text-[#7C3AED]",
};

export default function SellerPropertyHistoryCard({
  property,
  onMarkAsRented,
}: PropertyCardProps) {
  const router = useRouter();
  const handleViewDetails = () => {
    router.push(`/view-property?id=${property.id}`);
  };
  return (
    <Card className="rounded-2xl p-0 shadow-md overflow-hidden w-[360px]">
      {/* Image + Status */}
      <div className="relative w-full rounded-2xl  h-[250px]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover rounded-2xl p-4"
        />
        <span
          className={`absolute top-6 right-6 text-sm font-medium px-3 py-1 rounded-full ${
            statusColors[property.status]
          }`}
        >
          {property.status}
        </span>
      </div>

      <CardContent className="">
        <h2 className="text-lg font-semibold">{property.title}</h2>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>

        {/* Details */}
        <div className="flex items-center justify-between mt-3 text-gray-700 text-sm">
          <div className="flex items-center">
            <BedSingle className="w-4 h-4 mr-1" /> Bed {property.beds}
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" /> Bath {property.baths}
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" /> {property.sqft} sqft
          </div>
        </div>

        {/* Price */}
        <div className="mt-3 text-lg font-semibold text-[#936639]">
          ₦{property.price.toLocaleString()}/
          <span className="text-gray-500 text-sm">month</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 my-4">
          {property.status === "Available" && (
            <Button
              className="bg-gradient-to-t from-[#A68A64] to-[#936639]  text-white w-1/2 rounded-full"
              onClick={() => onMarkAsRented(property.id)}
            >
              <CircleCheckBig /> Mark as Rented
            </Button>
          )}

          <Button
            onClick={handleViewDetails}
            variant="outline"
            className={`rounded-full border-gray-300 ${
              property.status === "Available" ? "w-1/2" : "w-full"
            }`}
          >
            <Eye />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
