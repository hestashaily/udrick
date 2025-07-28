
"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import ThreeTabs from "./ThreeTabs";
import NoRequest from "./NoRequest";

const SellerVisitRequest = () => {
  const [showRequests, setShowRequests] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowRequests(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="bg-white shadow-[0px_4px_16px_0px_#5A7DBC0D]">
        <div className="container mx-auto">
          <div className="flex gap-6 py-6 px-[30px] items-center">
            <ArrowLeft size={18} />
            <div className="flex flex-col text-center w-full">
              <h3 className="font-bold text-3xl text-[#0d0d0c]">
                Visit Requests
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[997px] w-full m-auto py-6 px-[10px]">
        {showRequests ? (
          <ThreeTabs />
        ) : (
          <div className="text-center text-lg text-gray-500 mt-12">
            <NoRequest/>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerVisitRequest;

