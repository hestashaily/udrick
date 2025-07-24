// components/SellerDashboard/LeftPanel.tsx
import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SellerRentListingCard from "../SellerRentListingCard/SellerRentListingCard";

export interface LeftPanelProps {
 
    id: number;
    image: string;
    title: string;
    location: string;
    description: string;
    price: string;
    status: "Available" | "Rented" | "Pending";
    beds: number;
    baths: number;
    area: number;
  
}
interface LeftSideVisitRequestsProps {
  listings: LeftPanelProps[];
}

const LeftPanel: React.FC<LeftSideVisitRequestsProps> = ({ listings }) => {
  return (
    <div className="w-full md:w-2/3 rounded-xl">
      {listings.length > 0 && (
        <div className="mb-4 flex justify-between px-2">
          <h2 className="text-[#313131] font-bold text-xl">
            Your Rental Listings
          </h2>
          <Button
            variant="default"
            className="bg-gradient-to-r from-[#C69C6D] to-[#936639] text-white flex items-center gap-1 rounded-xl px-6 py-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Listing
          </Button>
        </div>
      )}
      {listings.length > 0 ? (
        <div className="flex flex-col space-y-3">
          {listings.map((item) => (
            <SellerRentListingCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center h-full">
          <Image
            src="/seller/Nolist.svg"
            alt="No Listings"
            height={80}
            width={80}
            className="object-cover mb-4"
          />
          <p className="font-bold text-[#313131] text-base">No Listings Yet!</p>
          <p className="font-normal text-sm text-[#515151] mt-2">
            You haven’t added any properties for rent yet.
            <br />
            Start listing now to attract potential buyers and maximize your
            reach.
          </p>
          <button className="px-6 flex items-center py-2 mt-2 text-sm font-normal rounded-2xl bg-gradient-to-t from-[#A68A64] to-[#936639] text-white">
            Add a Listing
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
