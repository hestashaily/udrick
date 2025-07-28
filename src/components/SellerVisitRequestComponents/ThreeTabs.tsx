"use client";
import React, { useState } from "react";
import Allrequest from "./Allrequest";
import Accepted from "./Accepted";
import Rejected from "./Rejected";

const ThreeTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "All Requests", content: <Allrequest /> },
    { id: "tab2", label: "Accepted", content: <Accepted/>  },
    { id: "tab3", label: "Rejected", content: <Rejected/> },
  ];

  return (
    <div className="w-full  ">
      <div className="flex my-[30px] p-[4px] bg-[#EEE9E1] rounded-[15px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center md:text-[16px] text-[14px] justify-center gap-[10px] flex-1 py-2 text-center font-medium transition-colors duration-200 ${
              activeTab === tab.id ? "text-[#000000] bg-[#FFFFFF] rounded-[15px]" : "text-[#936639]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.label}</span>
            <span
              className={`md:text-sm  text-[14px] px-2 py-0.5 rounded-full ${
                activeTab === tab.id
                  ? "bg-[#A68A64] text-white"
                  : "bg-[white] text-[#936639]"
              }`}
            >
              5
            </span>
          </button>
        ))}
      </div>

      <div className="pb-[30px]">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default ThreeTabs;
