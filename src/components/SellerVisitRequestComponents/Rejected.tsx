import React from 'react'
import Image from 'next/image'

const Rejected = () => {
  return (
    <div>
        <div className="w-full flex gap-[15px] py-[20px] px-[15px] border-2 border-[#E8E0D4]  rounded-[20px] ">
                <Image
                  src="/seller/visit-request/seller.png"
                  alt="map"
                  width={60}
                  height={60}
                  className="w-[60] h-[60] rounded-full"
                />
                <div className="w-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-[9px] w-full">
                      <p className="font-[500] text-[16px] text-[#313131]">
                        Sarah Mitchell
                      </p>
                      <button className="py-[4px] px-[15px] rounded-full flex items-center bg-[#EB43351A] gap-[12px] font-[400] text-[16px] text-[#EB4335]">
                        <Image
                          src="/seller/visit-request/rejected.png"
                          alt="map"
                          width={9}
                          height={9}
                          className="w-[9px] h-[9px] "
                        />
                       Rejected
                      </button>
                    </div>
                    <p className="font-[400] text-[14px] text-[#515151]">
                      David Chen
                    </p>
                    <div className="flex items-center gap-[10px] py-[5px] ">
                      <Image
                        src="/seller/visit-request/date.png"
                        alt="map"
                        width={16}
                        height={16}
                        className="w-[16] h-[16] "
                      />
                      <p className="font-[400] text-[14px] text-[#515151]">
                        Wednesday, December 25, 2025
                      </p>
                    </div>
                    <div className="flex items-center gap-[10px] ">
                      <Image
                        src="/seller/visit-request/time.png"
                        alt="map"
                        width={16}
                        height={16}
                        className="w-[16] h-[16] "
                      />
                      <p className="font-[400] text-[14px] text-[#515151]">02:00 PM</p>
                    </div>
                    <p className="italic font-[400] text-[14px] text-[#8C8C8C] mt-[10px]">
                      Requested 20/12/2025
                    </p>
               <div className="p-[20px] bg-[#FEF2F2] rounded-[16px] border-l-[7px] mt-[10px] border-[#FFCECE]">
                <p className="font-[400] text-[14px] text-[#AB0712]"> <span className="font-[600]">Reason:</span> Property is no longer available for viewing due to maintenance work.</p>
               </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Rejected