// "use client";

// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Bath, BedSingle, MapPin, SquarePen, SquarePercent } from "lucide-react";

// type SellerRentListingCardProps = {
//   image: string;
//   title: string;
//   location: string;
//   description: string;
//   price: string;
//   status: "Available" | "Rented" | "Pending";
//   beds: number;
//   baths: number;
//   area: number;
// };

// export default function SellerRentListingCard({
//   image,
//   title,
//   location,
//   description,
//   price,
//   status,
//   beds,
//   baths,
//   area,
// }: SellerRentListingCardProps) {
//   return (
//     <div className="flex bg-white rounded-2xl border shadow-md overflow-hidden p-4 gap-4 w-full ">
//       {/* Left: Image */}
//       <div className="w-[300px] h-[200px] relative rounded-xl overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Right: Content */}
//       <div className="flex flex-col justify-between w-full">
//         <div className="flex justify-between items-start">
//           <div>
//             <h2 className="text-lg font-semibold text-[#2A2C3F]">
//               {title}
//             </h2>
//             <p className="text-sm flex items-center gap-2 text-gray-500 mt-1"><MapPin size={18}/> {location}</p>
//           </div>
//           <div className="text-right">
//             <p className="text-[#936639] font-semibold text-sm">
//               {price} <span className="text-xs text-gray-500">/month</span>
//             </p>
//             <Badge
//               className={`mt-1 px-4 py-2 ${
//                 status === "Available"
//                   ? "bg-green-100 text-green-700"
//                   : status ==="Pending" ? "bg-[#EF9D30]/10 text-[#EF9D30]"
//                   : "bg-[#367DC9]/10 text-[#367DC9]"
//               }`}
//             >
//               {status}
//             </Badge>
//           </div>
//         </div>

//         <p className="text-sm text-gray-600 mt-2 line-clamp-2">
//           {description}{" "}
//           <span className="text-[#936639] font-medium cursor-pointer">
//             Read more
//           </span>
//         </p>

//         <div className="border-t pt-3 mt-3 flex justify-between items-center">
//           <div className="flex gap-6 text-sm text-gray-600">
//             <span className="flex items-center gap-1">
//               <BedSingle size={18}/> Bed {beds}
//             </span>
//             <span className="flex items-center gap-1">
//               <Bath size={18}/> {baths}
//             </span>
//             <span className="flex items-center gap-1">
//               <SquarePercent size={18}/> {area} sqft
//             </span>
//           </div>

//           <button className="text-[#936639] hover:opacity-80">
//             <SquarePen size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Bath, BedSingle, MapPin, SquarePen, SquarePercent } from "lucide-react";

type SellerRentListingCardProps = {
  image: string;
  title: string;
  location: string;
  description: string;
  price: string;
  status: "Available" | "Rented" | "Pending";
  beds: number;
  baths: number;
  area: number;
};

export default function SellerRentListingCard({
  image,
  title,
  location,
  description,
  price,
  status,
  beds,
  baths,
  area,
}: SellerRentListingCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl border shadow-md overflow-hidden p-4 gap-4 w-full">
      {/* Left: Image */}
      <div className="relative w-full md:w-[300px] h-[150px] md:h-[200px]  rounded-xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-[#2A2C3F]">
              {title}
            </h2>
            <p className="text-sm flex items-center gap-2 text-gray-500 mt-1">
              <MapPin size={16} /> {location}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[#936639] font-semibold text-sm md:text-base">
              {price} <span className="text-xs text-gray-500">/month</span>
            </p>
            <Badge
              className={`mt-1 px-3 py-1 text-xs md:text-sm ${
                status === "Available"
                  ? "bg-green-100 text-green-700"
                  : status === "Pending"
                  ? "bg-[#EF9D30]/10 text-[#EF9D30]"
                  : "bg-[#367DC9]/10 text-[#367DC9]"
              }`}
            >
              {status}
            </Badge>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {description}{" "}
          <span className="text-[#936639] font-medium cursor-pointer">
            Read more
          </span>
        </p>

        <div className="border-t pt-3 mt-3 flex flex-wrap justify-between items-center gap-2">
          <div className="flex gap-4 md:gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <BedSingle size={16} /> {beds} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath size={16} /> {baths} Baths
            </span>
            <span className="flex items-center gap-1">
              <SquarePercent size={16} /> {area} sqft
            </span>
          </div>

          <button className="text-[#936639] hover:opacity-80">
            <SquarePen size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

