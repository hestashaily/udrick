
import React from "react";
import Image from "next/image";

interface WithdrawlCardProps {
  title: string;
  location: string;
  amount: string;
  dateTime: string;
  propertyStatus: "sold" | "rented";
  withdrawalStatus: "requested" | "approved" | "rejected";
  rejectionReason?: string;
}

const propertyStatusStyles = {
  sold: {
    text: "Sold",
    bg: "bg-[#9366391A]",
    textColor: "text-[#936639]",
  },
  rented: {
    text: "Rented",
    bg: "bg-[#613EEA1A]",
    textColor: "text-[#613EEA]",
  },
};

const withdrawalStatusStyles = {
  requested: {
    text: "Requested",
    bg: "bg-[#FFF4E5]",
    textColor: "text-[#EF9D30]",
  },
  approved: {
    text: "Approved",
    bg: "bg-[#E6F4EA]",
    textColor: "text-[#0F9D58]",
  },
  rejected: {
    text: "Rejected",
    bg: "bg-[#FEF2F2]",
    textColor: "text-[#AB0712]",
  },
};

const WithdrawlCard: React.FC<WithdrawlCardProps> = ({
  title,
  location,
  amount,
  dateTime,
  propertyStatus,
  withdrawalStatus,
  rejectionReason,
}) => {
  const propertyClass = propertyStatusStyles[propertyStatus];
  const withdrawalClass = withdrawalStatusStyles[withdrawalStatus];

  return (
    <div className="p-[15px] lg:max-w-[544px] max-w-full w-full shadow-[0px_2px_8px_0px_#63636333] rounded-[12px]">
      <div className="flex items-start gap-[16px] md:flex-row flex-col">
        <Image
          src="/seller/wallet/fund-img.png"
          alt="fund-img"
          width={165}
          height={167}
          className="md:w-[165px] w-full h-[167px] rounded-[12px]"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="font-[500] text-[20px] text-[#313131]">{title}</p>
            <button
              className={`py-[5px] px-[23px] rounded-full font-[500] text-[14px] ${propertyClass.bg} ${propertyClass.textColor}`}
            >
              {propertyClass.text}
            </button>
          </div>

          <div className="flex items-center justify-between mt-[10px]">
            <div className="flex items-center gap-[6px]">
              <Image
                src="/seller/wallet/location.png"
                alt="location"
                width={12}
                height={14}
                className="w-[12px] h-[14px]"
              />
              <p className="font-[400] text-[14px] text-[#6E7070]">{location}</p>
            </div>

            <button
              className={`py-[5px] px-[23px] rounded-full font-[500] text-[14px] ${withdrawalClass.bg} ${withdrawalClass.textColor}`}
            >
              {withdrawalClass.text}
            </button>
          </div>

          <div className="flex items-center gap-[16px] mt-[15px]">
            <p className="font-[400] text-[16px] text-[#8C8C8C]">
              Amount Requested:
            </p>
            <span className="font-[700] text-[#936639] text-[20px]">{amount}</span>
          </div>

          <div className="flex items-center gap-[10px] mt-[10px]">
            <p className="font-[400] text-[16px] text-[#8C8C8C]">Date:</p>
            <span className="font-[500] text-[#515151] text-[16px]">{dateTime}</span>
          </div>

          {withdrawalStatus === "rejected" && rejectionReason && (
            <div className="p-[15px] bg-[#FEF2F2] border border-[#FFCECE] mt-[15px] rounded-[10px]">
              <p className="font-[600] text-[14px] text-[#AB0712] mb-[5px]">
                Reason For Rejection
              </p>
              <p className="font-[400] text-[#AB0712] text-[12px]">{rejectionReason}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawlCard;


