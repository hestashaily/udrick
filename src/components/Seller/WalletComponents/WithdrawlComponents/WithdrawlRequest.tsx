import React, { useState } from 'react';

import AlllWithdrawl from './AlllWithdrawl';
import Rejected from './Rejected';
import Approved from './Approved';
import Requested from './Requested';

const tabs = [
  { label: 'All (4)', value: 'all' },
  { label: 'Requested (2)', value: 'requested' },
  { label: 'Approved (1)', value: 'approved' },
  { label: 'Rejected (1)', value: 'rejected' },
];

const WithdrawlRequest = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div>
      <div className="flex items-center gap-[10px]">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`cursor-pointer border font-[500] md:text-[16px] text-[10px] max-w-[134px] w-full md:p-[15px] p-[6px] rounded-[12px] text-center
              ${
                activeTab === tab.value
                  ? 'border-[#936639] text-white bg-[#936639]'
                  : 'border-[#D1D1D1] text-[#515151]'
              }`}
          >
            <p>{tab.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === 'all' && <div><AlllWithdrawl/></div>}
        {activeTab === 'requested' && <div><Requested/></div>}
        {activeTab === 'approved' && <div><Approved/></div>}
        {activeTab === 'rejected' && <div><Rejected/></div>}
      </div>
    </div>
  );
};

export default WithdrawlRequest;
