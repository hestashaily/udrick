"use client";
import React, { useState } from "react";
import AvailableFunds from "./AvailableFunds";


const  WalletTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Available funds", content: <AvailableFunds/> },
    { id: "tab2", label: "Withdrawal Requests", content: "dsedx"  },
    { id: "tab3", label: "Transactions", content: "iswjisjwjisji" },
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
          </button>
        ))}
      </div>

      <div className="">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default WalletTabs;
