// components/SellerDashboard/LeftPanel.tsx
import { CloudUpload, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SellerRentListingCard from "../SellerRentListingCard/SellerRentListingCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const router = useRouter()
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full lg:w-[65%] rounded-xl">
      {listings.length > 0 && (
        <div className="mb-4 flex justify-between px-2">
          <h2 className="text-[#313131] font-bold text-xl">
            Your Rental Listings
          </h2>
          <Button
            variant="default"
            onClick={()=>router.push("/add-listing")}
          
            className="bg-gradient-to-r from-[#C69C6D] to-[#936639] text-white flex items-center gap-1 rounded-xl px-6 py-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Listing
          </Button>
        </div>
      )}
      {listings.length > 0 ? (
        <div className="flex flex-col space-y-5">
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
          <button   onClick={() => setOpen(true)} className="px-6 flex items-center py-2 mt-2 text-sm font-normal rounded-2xl bg-gradient-to-t from-[#A68A64] to-[#936639] text-white">
            Add a Listing
          </button>
        </div>
      )}



      {/* Diloage for upload docuemnt */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-xl !py-15 px-12 rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center">
              Upload business licenses & ID for verification
            </DialogTitle>
          </DialogHeader>
          <p className="text-center text-sm text-gray-500">
            Verify Your Identity & List Properties Securely. Ensuring a trusted marketplace by verifying seller credentials before listing properties.
          </p>

          <div className=" rounded-xl shadow-md p-4 flex flex-col items-center gap-2 mt-4">
            <div className="text-4xl text-[#936639]"><CloudUpload size={50}/></div>
            <p className="font-medium text-base">Upload business licenses & ID for verification</p>
            <p className="text-[13px] font-normal  text-[#8C8C8C]">Accepted formats are .jpg, .png, .pdf</p>
          </div>

          <Button className="w-full font-medium tracking-wider text-base py-6 bg-gradient-to-r from-[#C69C6D] to-[#936639] text-white  mt-4">
            Submit for Approval
          </Button>

          <Button
            variant="outline"
            className="w-full py-6 font-medium text-base "
            onClick={() => setOpen(false)}
          >
            Skip
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeftPanel;
