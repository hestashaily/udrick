"use client";
import React, { useEffect } from "react";
import PropertyCard from "../../ReusableComponents/PropertiesCard";
import Link from "next/link";

const data = [
  {
    id: 1,
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
    selltype: "buy",
  },
  {
    id: 2,
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
    selltype: "buy",
  },
  {
    id: 3,
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
    selltype: "buy",
  },
  {
    id: 4,
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
    selltype: "buy",
  },
];

const AllProperties = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-2">
            All Properties
          </h1>
          <p className="text-[#505050] text-sm sm:text-base md:text-lg mb-6">
            Discover the perfect home that matches your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {[1, 2, 3].map((item, index) => (
            <PropertyCard key={index} {...data} sellType={data.selltype} />

            
          ))} */}
          {/* // If you going to acces data from APi please add state ex : properties taking array and
            // map it liek that for APi usE
            //   {properties.map((property) => (
            //   <PropertyCard key={property.id} {...property} />
            // ))} */}
          {data.slice(0, isDesktop ? 3 : data.length).map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              sellType={property.selltype}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 items-center">
          <Link href="/view-all-properties">
            {/* <Link href="/"> */}

            <button className="border px-8 py-2 border-gray-300 rounded-xl">
              View All Propertis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
