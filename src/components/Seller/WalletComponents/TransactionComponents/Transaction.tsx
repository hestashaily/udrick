// import React from "react";
// import Image from "next/image";

// const Transaction = () => {
//   return (
//     <div className="flex flex-col gap-[20px]">
//       <div
//         className="py-[10px] flex items-center justify-between px-[15px] border border-[#D5D5D5] shadow-[0px_3px_5px_0px_#0000000A]
//         rounded-[12px]"
//       >
//         <div className="flex items-center gap-[15px]">
//           <Image
//             src="/seller/wallet/transaction-profile.png"
//             alt="transaction-profile"
//             width={50}
//             height={50}
//             className="w-[50px] h-[50px] rounded-full"
//           />
//           <div>
//             <p className="font-[500] text-[16px] text-[#3B4755]">
//               Emeka Nzerem
//             </p>
//             <p className="font-[400] text-[12px] text-[#606A76]">
//               12 Mar 2025 | 10:00 PM
//             </p>
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center gap-[4px]">
//             <p className="font-[700] text-[14px] text-[#3B4755]">₦4,800,000</p>
//             <Image
//               src="/seller/wallet/red-arrow.png"
//               alt="red-arrow"
//               width={18}
//               height={18}
//               className="w-[18px] h-[18px]"
//             />
//           </div>
//         </div>
//       </div>
//        <div
//         className="py-[10px] flex items-center justify-between px-[15px] border border-[#D5D5D5] shadow-[0px_3px_5px_0px_#0000000A]
//         rounded-[12px]"
//       >
//         <div className="flex items-center gap-[15px]">
//           <Image
//             src="/seller/wallet/transaction-profile.png"
//             alt="transaction-profile"
//             width={50}
//             height={50}
//             className="w-[50px] h-[50px] rounded-full"
//           />
//           <div>
//             <p className="font-[500] text-[16px] text-[#3B4755]">
//               Emeka Nzerem
//             </p>
//             <p className="font-[400] text-[12px] text-[#606A76]">
//               12 Mar 2025 | 10:00 PM
//             </p>
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center gap-[4px]">
//             <p className="font-[700] text-[14px] text-[#3B4755]">₦4,800,000</p>
//             <Image
//               src="/seller/wallet/green-arrow.png"
//               alt="green-arrow"
//               width={18}
//               height={18}
//               className="w-[18px] h-[18px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transaction;
import React from "react";
import Image from "next/image";

interface TransactionItem {
  name: string;
  date: string;
  time: string;
  amount: string;
  type: "credit" | "debit"; // credit = green-arrow, debit = red-arrow
}

const transactions: TransactionItem[] = [
  {
    name: "Emeka Nzerem",
    date: "12 Mar 2025",
    time: "10:00 PM",
    amount: "₦4,800,000",
    type: "debit",
  },
  {
    name: "Chinwe Okeke",
    date: "15 Mar 2025",
    time: "03:30 PM",
    amount: "₦2,100,000",
    type: "credit",
  },
   {
    name: "Emeka Nzerem",
    date: "12 Mar 2025",
    time: "10:00 PM",
    amount: "₦4,800,000",
    type: "debit",
  },
  {
    name: "Chinwe Okeke",
    date: "15 Mar 2025",
    time: "03:30 PM",
    amount: "₦2,100,000",
    type: "credit",
  },
   {
    name: "Emeka Nzerem",
    date: "12 Mar 2025",
    time: "10:00 PM",
    amount: "₦4,800,000",
    type: "debit",
  }
 
];

const Transaction: React.FC = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {transactions.map((txn, index) => (
        <div
          key={index}
          className="py-[10px] flex items-center justify-between px-[15px] border border-[#D5D5D5] shadow-[0px_3px_5px_0px_#0000000A] rounded-[12px]"
        >
          <div className="flex items-center gap-[15px]">
            <Image
              src="/seller/wallet/transaction-profile.png"
              alt="transaction-profile"
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full"
            />
            <div>
              <p className="font-[500] text-[16px] text-[#3B4755]">
                {txn.name}
              </p>
              <p className="font-[400] text-[12px] text-[#606A76]">
                {txn.date} | {txn.time}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <p className="font-[700] text-[14px] text-[#3B4755]">
              {txn.amount}
            </p>
            <Image
              src={
                txn.type === "credit"
                  ? "/seller/wallet/green-arrow.png"
                  : "/seller/wallet/red-arrow.png"
              }
              alt={`${txn.type}-arrow`}
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transaction;
