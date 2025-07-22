
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NotificationCardProps {
  title: string;
  description: string;
  time: string;
  image: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  description,
  time,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-start justify-start gap-[15px] border-[2px] rounded-[20px] p-[20px] transition-colors duration-200 cursor-pointer ${
        isHovered ? "border-[#007BFF] bg-[#E6F0FF]" : "border-[#E8E0D4]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
     

      <Image src={image} alt="notification" width={48} height={48} />
      <div className="pl-[5px]">
        <p className="font-[500] text-[18px] text-[#313131]">{title}</p>
        <p className="font-[400] text-[16px] text-[#515151] mb-[18px]">
          {description}
        </p>
        <span className="font-[400] text-[16px] text-[#515151]">{time}</span>
      </div>
       {isHovered && (
        <span className="absolute top-[15px] right-[30px] w-[14px] h-[14px] bg-[#007BFF] rounded-full" />
      )}
    </div>
  );
};

export default NotificationCard;
