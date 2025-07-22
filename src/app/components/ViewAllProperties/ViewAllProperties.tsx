import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
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
const ViewAllProperties = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container mx-auto px-4">
        <Link href="/home">
          <div className="flex gap-6 py-6 items-center">
            <ArrowLeft size={18} />
            <div className="flex flex-col">
              <h3 className="font-bold text-3xl text-[#0d0d0c]">
                All Properties
              </h3>
              <span className="inline-block font-normal text-sm text-[#6D6D6D]">
                Discover the perfect home that matches your lifestyle
              </span>
            </div>
          </div>
        </Link>
      </div>
      </div>

      <div className="container mx-auto mt-6 mb-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3,4,5,6].map((item, index) => (
            <PropertyCard key={index} {...data} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ViewAllProperties;
