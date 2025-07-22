"use client";

import React, { useState } from "react";
import {  Logs, MapPin, Search } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");

  return (
    <div
      className="py-20 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/landing/hero.png')" }}
    >
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight">
          Looking for Your Dream <br /> House?
        </h1>
        <p className="text-white mt-4 max-w-2xl text-lg">
          Discover the perfect home that matches your lifestyle and budget.
          Browse thousands of verified properties or explore our interactive
          map.
        </p>

        {/* Search Card */}
        <div className="bg-white mt-10 w-full max-w-4xl rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b justify-start px-6 pb-1 pt-4 gap-8">
            {["buy", "rent"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "buy" | "rent")}
                className={`relative pb-2 text-sm font-semibold capitalize ${
                  activeTab === tab ? "text-[#5C3A1E]" : "text-gray-400"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-[50px] bg-[#5C3A1E]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Filter Inputs */}
          <div className="flex flex-wrap items-center gap-2 p-4">
            <select
              className="px-4 py-2   text-sm text-gray-600 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Property Type
              </option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="studio">Studio</option>
            </select>

            <select
              className="px-4 py-2  text-sm text-gray-600 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                City
              </option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
            </select>

            <input
              type="text"
              placeholder="Search 1 BHK in Lagos"
              className="flex-1 px-4 py-2  text-sm outline-none"
            />
            <button className="inline-flex items-center justify-center gap-2 tracking-wider font-medium text-sm md:text-lg border bg-gradient-to-t from-[#A68A64] to-[#936639] text-white py-2 px-6 rounded-xl hover:opacity-90 transition">
              <Search/> Search
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 my-10">
          <Link href="explore-on-map">
          <button className="flex items-center gap-2 bg-[#3264e0] hover:bg-[#2c57c5] text-white px-6 py-2 rounded-full text-sm font-medium shadow">
            <MapPin/> Explore on Map
          </button>
          </Link>
          <button className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-sm font-medium shadow border">
            <Logs/> Browse Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
