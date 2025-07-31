"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import AddListingForm from "./AddListingForm";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSelectedOption } from "@/redux/Slices/selectedListingSlice";

const AddListing = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (state: RootState) => state.selectedListing.selectedOption
  );

  return (
    <div className="bg-gray-50">
      <div className=" bg-white shadow p-4 ">
        <div className="container flex items-center mx-auto">
          <Link href="/">
            <div className="flex justify-center items-center">
              <ArrowLeft size={18} />
            </div>
          </Link>
          <div className="flex  flex-1 flex-col justify-center items-center">
            <h2 className="text-[#313131] text-xl md:text-2xl font-medium">Add Listing</h2>
            <p className="text-[#8C8C8C] text-sm md:text-lg font-normal">
              Please fill the details of property you want to sell or rent
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl bg-whi mx-auto pb-24 p-4">
        <div className=" rounded-md my-5 bg-white border-gray-100 border shadow py-6 px-8">
          <div>
            <p className="font-medium text-sm text-[#313131] p-2">Looking to</p>
            <div className="flex gap-4">
              <button
                onClick={() => dispatch(setSelectedOption("sell"))}
                className={`px-8 py-2 rounded-3xl transition ${
                  selectedOption === "sell"
                    ? "bg-[#936639] text-white"
                    : "border text-gray-700"
                }`}
              >
                Sell
              </button>

              <button
                onClick={() => dispatch(setSelectedOption("rent"))}
                className={`px-8 py-2 rounded-3xl transition ${
                  selectedOption === "rent"
                    ? "bg-[#936639] text-white"
                    : "border text-gray-700"
                }`}
              >
                Rent
              </button>
            </div>
          </div>
          <AddListingForm />
        </div>
        <div className="flex justify-end items-end">
          <button
            disabled
            className="flex justify-center items-center gap-2 px-4 py-3 rounded-3xl bg-gradient-to-r from-[#C69C6D] to-[#936639] text-white "
          >
            Publish Property <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
