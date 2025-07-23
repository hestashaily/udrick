import React from 'react'
import Image from 'next/image'

const ContactSeller = () => {
  return (
    <>
         <div className="max-w-full w-full shadow-[0px_7.15px_17.88px_0px_#0000000D] rounded-[24px]">
            <div className="p-[27px] border-[2px] border-[#E4E4E4] rounded-[24px]">
              <p className="font-[600] text-[22px] text-[#161E2D] mb-[26px]">
                Contact Seller
              </p>
              <div className="flex items-center gap-[18px]">
                <Image
                  src="/propertydetail/seller.png"
                  alt="seller"
                  width={89}
                  height={89}
                  className="rounded-full"
                />
                <div>
                  <p className="font-[600] text-[#161E2D] text-[16px] mb-[10px]">
                    Oluwaseun Adeyemi
                  </p>
                  <div className="flex items-center gap-[4px]">
                    <Image
                      src="/propertydetail/phone.png"
                      alt="phone"
                      width={10}
                      height={10}
                      className="rounded-full"
                    />
                    <p className="font-[400] text-[12px] text-[#5C6368]">
                      1-333-345-6868
                    </p>
                  </div>
                  <div className="flex items-center gap-[4px] mt-[5px]">
                    <Image
                      src="/propertydetail/email.png"
                      alt="phone"
                      width={12}
                      height={12}
                      className="rounded-full"
                    />
                    <p className="font-[400] text-[12px] text-[#5C6368]">
                      themesflat@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <button className=" mt-[34px] rounded-full h-[48px] justify-center gap-[12px] font-[700] text-[14px] text-white bg-[linear-gradient(360deg,_#EFD9C7_-62.61%,_#A68A64_25.65%,_#936639_113.91%)] flex items-center w-full">
                <Image
                  src="/propertydetail/chat.png"
                  alt="chat"
                  width={24}
                  height={24}
                />
                Chat with seller
              </button>
            </div>
          </div>
    </>
  )
}

export default ContactSeller