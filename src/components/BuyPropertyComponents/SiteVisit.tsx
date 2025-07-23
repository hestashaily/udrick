// "use client";
// import { useState } from "react";
// import React from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// const SiteVisit = () => {
//   const [value, onChange] = useState<Value>(new Date());
//   return (
//     <div>
//       <div className="mt-[15px] py-[19px] px-[9px] border-[2px] border-[#E4E4E4] max-w-full w-full shadow-[0px_7.15px_17.88px_0px_#0000000D] rounded-[24px]">
//         <p className="font-[700] text-[21px] text-[#161E2D]">
//           Schedule Site Visit
//         </p>
//         <p className="mt-[15px] font-[400] text-[14px] text-[#8C8C8C]">
//           Pick a convenient date for your visit between 10th–13th March.
//         </p>
//         <input
//           type="number"
//           className="border border-[#E4E4E4] font-[400] text-[12px] text-[#2A2F3B] p-[12px] rounded-[6px] w-full my-[15px]"
//           placeholder="10th March - 13th March"
//         />
//         <Calendar
//           onChange={onChange}
//           value={value}
//           next2Label={null}
//           prev2Label={null}
//         />
//         <div>
//             <p className="font-[500] text-[16px] text-[#000000] py-[15px]">Enter Time</p>
//             <input type="time" className="p-[12px] border-[2px] border-[#EDEDED] rounded-[6px] w-full"/>
//             <div className="flex items-center gap-[15px] mt-[16px]">
//                 <input type="checkbox" style={{ accentColor: '#A48374' }} />
//                 <p className="font-[500] text-[11px] text-[#000000]">Please accept our Privacy Policy and Terms & Conditions.</p>
//             </div>
//         </div>
        
//       </div>
//       <button className="mt-[15px] w-full h-[48px] rounded-full font-[700] text-[14px] text-white bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]">Schedule Site Visit</button>
//       <button className="mt-[15px] w-full h-[48px] rounded-full font-[700] text-[14px] text-white bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]">Ready to Buy</button>

//     </div>
//   );
// };

// export default SiteVisit;
"use client";
import { useState } from "react";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReadyToBuyPopup from "./ReadyToBuyPopup";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const SiteVisit = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="mt-[15px] py-[19px] px-[9px] border-[2px] border-[#E4E4E4] max-w-full w-full shadow-[0px_7.15px_17.88px_0px_#0000000D] rounded-[24px]">
        <p className="font-[700] text-[21px] text-[#161E2D]">Schedule Site Visit</p>
        <p className="mt-[15px] font-[400] text-[14px] text-[#8C8C8C]">
          Pick a convenient date for your visit between 10th–13th March.
        </p>
        <input
          type="number"
          className="border border-[#E4E4E4] font-[400] text-[12px] text-[#2A2F3B] p-[12px] rounded-[6px] w-full my-[15px]"
          placeholder="10th March - 13th March"
        />
        <Calendar
          onChange={onChange}
          value={value}
          next2Label={null}
          prev2Label={null}
        />
        <div>
          <p className="font-[500] text-[16px] text-[#000000] py-[15px]">Enter Time</p>
          <input type="time" className="p-[12px] border-[2px] border-[#EDEDED] rounded-[6px] w-full" />
          <div className="flex items-center gap-[15px] mt-[16px]">
            <input type="checkbox" style={{ accentColor: '#A48374' }} />
            <p className="font-[500] text-[11px] text-[#000000]">Please accept our Privacy Policy and Terms & Conditions.</p>
          </div>
        </div>
      </div>

      <button className="mt-[15px] w-full h-[48px] rounded-full font-[700] text-[14px] text-white bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]">
        Schedule Site Visit
      </button>

      <button
        className="mt-[15px] w-full h-[48px] rounded-full font-[700] text-[14px] text-white bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)]"
        onClick={() => setShowPopup(true)}
      >
        Ready to Buy
      </button>

      {showPopup && <ReadyToBuyPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default SiteVisit;
