import React from "react";
import Image from "next/image";

const NoRequest = () => {
  return (
    <div className="w-full max-w-[389px] m-auto">
      <div>
        <Image
          src="/seller/visit-request/norequest.png"
          alt="norequest"
          width={80}
          height={80}
          className="w-[80px] h-[80px] m-auto"
        />
        <p className="font-[700] text-[18px] text-[#313131] mt-[24px]">
          No Visit Requests Yet!
        </p>
        <p className="mt-[10px] font-[400] text-[14px] text-[#515151]">
          Manage all visit requests from potential buyers – accept, reject, or
          view details easily.
        </p>
      </div>
    </div>
  );
};

export default NoRequest;
