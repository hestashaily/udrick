"use client";
import React, { useState } from "react";
import AllNotifications from "./AllNotifications";
import Unread from "./Unread";
import Visit from "./Visit";
import Inquires from "./Inquires";
import Action from "./Action";

const NotificationsTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");


  const tabs = [
    { id: "tab1", label: "All", count: 12, content: <AllNotifications/> },
    { id: "tab2", label: "Unread", count: 4, content: <Unread/> },
    { id: "tab3", label: "Visit ", count: 3, content: <Visit/> },
    { id: "tab4", label: "Action ", count: 2, content: <Action/> },
    { id: "tab5", label: "Inquiries", count: 1, content: <Inquires/> },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between mx-[10px] my-[30px] p-[4px] bg-[#EEE9E1] rounded-[15px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center justify-center gap-[10px] flex-1 min-w-[100px] py-2 text-center font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-[#000000] bg-[#FFFFFF] rounded-[15px]"
                : "text-[#936639]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.label}</span>
            <span
              className={`text-sm px-2 py-0.5 rounded-full ${
                activeTab === tab.id
                  ? "bg-[#A68A64] text-white"
                  : "bg-[white] text-[#936639]"
              }`}
            >
              {tab.count}
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

export default NotificationsTabs;
