import React from "react";
import Image from "next/image";
import NotificationsTabs from "./NotificationsTabs";

const Sellernotification = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="bg-[white] shadow-md mt-[76px]">
        <div className="container m-auto">
          <div className="flex items-center justify-between p-[26px]">
            <div>
              <p className="font-[500] text-[24px] text-[#313131]">Notifications</p>
              <p className="font-[500] text-[16px] text-[#515151] mt-[9px]">Stay updated with your property activities</p>
            </div>
            <Image
              src="/seller/notification/setting.png"
              alt="reject"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1152px] w-full m-auto">
      <NotificationsTabs/>
      </div>
    </div>
  );
};

export default Sellernotification;
