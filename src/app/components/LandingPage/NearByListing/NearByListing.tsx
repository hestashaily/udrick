import React from "react";
import PropertyCard from "../../ReusableComponents/PropertiesCard";
import Link from "next/link";

const NearByListing = () => {
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

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-2">
            Nearby Listings
          </h1>
          <p className="text-[#505050] text-sm sm:text-base md:text-lg mb-6">
            Discover the perfect home that matches your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <PropertyCard key={index} {...data} />
          ))}
        </div>
        <div className="flex justify-center mt-8 items-center">
          <Link href="/view-all-nearby-properties">
            <button className="border px-8 py-2 border-gray-300 rounded-xl">
              View All Propertis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NearByListing;
