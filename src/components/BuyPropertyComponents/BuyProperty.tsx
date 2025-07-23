import React from "react";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import ContactSeller from "./ContactSeller";
import SiteVisit from "./SiteVisit";
const sampleImages = [
  "/propertydetail/sliderimage.png",
  "/propertydetail/sliderimage.png",
  "/propertydetail/sliderimage.png",
];
const BuyProperty = () => {
  return (
    <div>
      <ImageSlider images={sampleImages} />
      <div className="p-[32px]">
        <div className="flex items-center gap-[10px]">
          <button className="py-[10px] px-[15px] rounded-[12px] bg-[#367DC9] font-[400] text-[16px] text-white">
            Apartment
          </button>
          <button className="py-[10px] px-[15px] rounded-[12px] bg-[#367DC9] font-[400] text-[16px] text-white">
            For Sale
          </button>
        </div>
        <div>
          <div className="flex lg:items-center items-start lg:flex-row flex-col w-full justify-between">
            <p className="font-[500] text-[36px] text-[#313131] mt-[10px]">
              Modern Downtown Apartment
            </p>
            <span className="font-[700] text-[32px] text-[#936639]">
              ₦4,800,000
            </span>
          </div>

          <p className="font-[400] text-[16px] text-[#617284] mt-[14px]">
            Unit: 4 BHK Flat
          </p>
        </div>
        <div className="mt-[30px] flex lg:flex-row flex-col items-center gap-[30px]">
          <div className="max-w-[430px] w-full rounded-[15px] bg-[#F8F6F2] flex items-center justify-center h-[112px]">
            <div className="flex items-center justify-center gap-[10px]">
              <Image
                src="/propertydetail/bedroom.png"
                alt="bedroom"
                width={28}
                height={22}
              />
              <div>
                <p className="font-[500] text-[18px] text-[#313131]">2</p>
                <p className="font-[400] text-[18px] text-[#515151]">
                  Bedrooms
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[430px] w-full rounded-[15px] bg-[#F8F6F2] flex items-center justify-center h-[112px]">
            <div className="flex items-center justify-center gap-[10px]">
              <Image
                src="/propertydetail/bathroom.png"
                alt="bedroom"
                width={28}
                height={22}
              />
              <div>
                <p className="font-[500] text-[18px] text-[#313131]">2</p>
                <p className="font-[400] text-[18px] text-[#515151]">
                  Bathrooms
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[430px] w-full rounded-[15px] bg-[#F8F6F2] flex items-center justify-center h-[112px]">
            <div className="flex items-center justify-center gap-[10px]">
              <Image
                src="/propertydetail/squarefeet.png"
                alt="bedroom"
                width={28}
                height={22}
              />
              <div>
                <p className="font-[500] text-[18px] text-[#313131]">1200</p>
                <p className="font-[400] text-[18px] text-[#515151]">Sq. Ft.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-[#D9D9D9]">
        <div className="p-[34px] flex items-center gap-[18px] lg:flex-row flex-col">
          <div className="lg:max-w-[70%] max-w-full w-full">
            <p className="font-[700] text-[22px] text-[#161E2D] mb-[13px]">
              Overview
            </p>
            <div className="flex items-center gap-[16px] border-b border-[#E5E8EB] pb-[13px]">
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Property Type
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">
                  Apartment
                </p>
              </div>
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Seller Type
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">Owner</p>
              </div>
            </div>
            <div className="flex items-center gap-[16px] border-b border-[#E5E8EB] py-[13px]">
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Furnishing Type
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">
                  Unfurnished
                </p>
              </div>
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Built-Up Area
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">
                  2,500 Sq. Ft.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[16px] border-b border-[#E5E8EB] py-[13px]">
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Floor Number
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">
                  3rd Floor
                </p>
              </div>
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Room Number
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">
                  Room 305
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[16px] py-[13px]">
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Bathrooms
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">4</p>
              </div>
              <div className="w-[334px]">
                <p className="font-[400] text-[12px] text-[#96734F]">
                  Bedrooms
                </p>
                <p className="font-[400] text-[14px] text-[#1C140D]">5</p>
              </div>
            </div>
            <div>
              <p className="font-[700] text-[21px] text-[#161E2D]">Address</p>
              <p className="font-[400] text-[14px] text-[#515151] mt-[6px]">
                The Grand Residences, 123 Oak Street, Lagos, Nigeria
              </p>
            </div>
            <div className=" my-[20px] ">
              <p className="font-[700] text-[21px] text-[#161E2D] mb-[18px]">
                Amenities
              </p>
              <div className="flex items-center gap-[12px]">
                <button className="flex gap-[8px] items-center py-[6px] px-[8px] font-[400] text-[14px] text-[#313131]  bg-[#F6F5F3] rounded-full">
                  <Image
                    src="/propertydetail/gym.png"
                    alt="gym"
                    width={20}
                    height={20}
                  />
                  Gym
                </button>
                <button className="flex gap-[8px] items-center py-[6px] px-[8px] font-[400] text-[14px] text-[#313131]  bg-[#F6F5F3] rounded-full">
                  <Image
                    src="/propertydetail/pool.png"
                    alt="gym"
                    width={20}
                    height={20}
                  />
                  pool
                </button>
                <button className="flex gap-[8px] items-center py-[6px] px-[8px] font-[400] text-[14px] text-[#313131]  bg-[#F6F5F3] rounded-full">
                  <Image
                    src="/propertydetail/parking.png"
                    alt="parking"
                    width={20}
                    height={20}
                  />
                  Parking
                </button>
                <button className="flex gap-[8px] items-center py-[6px] px-[8px] font-[400] text-[14px] text-[#313131]  bg-[#F6F5F3] rounded-full">
                  <Image
                    src="/propertydetail/lift.png"
                    alt="lift"
                    width={20}
                    height={20}
                  />
                  Lift
                </button>
              </div>
            </div>
            <div className=" my-[20px]">
              <p className="font-[700] text-[21px] text-[#161E2D]">
                Site Visit Availability
              </p>
              <p className="font-[400] text-[14px] text-[#515151] mt-[6px]">
                25 July, 2025 to 15 Aug, 2025
              </p>
            </div>
            <div className=" my-[20px]">
              <p className="font-[700] text-[21px] text-[#161E2D]">
                Description
              </p>
              <p className="font-[400] text-[14px] text-[#515151] mt-[6px]">
                Exquisitely Finished 4 Bedroom Semi Detached Duplex With Bq. in
                Ikota, Lekki, Lagos Apartment with Stunning City Views.
                Experience upscale living in this beautifully modern residence
                which offers a spacious open-concept layout, floor-to-ceiling
                windows, and a private balcony with breath taking city views.
              </p>
              <span className="font-[700] text-[14px] text-[#161E2D] mt-[6px]">
                View More
              </span>
            </div>
            <div>
              <p className="flex items-center gap-[15px] font-[400] text-[12px] text-[#936639] mb-[6px]">
                View 3D exterior and interior view{" "}
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.26611 4.3427C8.30688 4.38525 8.33923 4.43578 8.3613 4.49141C8.38337 4.54703 8.39473 4.60665 8.39473 4.66686C8.39473 4.72708 8.38337 4.7867 8.3613 4.84232C8.33923 4.89794 8.30688 4.94848 8.26611 4.99103L4.75756 8.65651C4.71681 8.69908 4.66844 8.73285 4.6152 8.75589C4.56196 8.77892 4.5049 8.79078 4.44727 8.79078C4.38965 8.79078 4.33258 8.77892 4.27935 8.75589C4.22611 8.73285 4.17773 8.69908 4.13698 8.65651C4.09624 8.61394 4.06391 8.5634 4.04186 8.50778C4.01981 8.45216 4.00846 8.39255 4.00846 8.33234C4.00846 8.27214 4.01981 8.21253 4.04186 8.1569C4.06391 8.10128 4.09624 8.05075 4.13698 8.00818L7.64553 4.3427C7.68626 4.3001 7.73463 4.2663 7.78787 4.24324C7.84111 4.22019 7.89818 4.20832 7.95582 4.20832C8.01345 4.20832 8.07052 4.22019 8.12376 4.24324C8.17701 4.2663 8.22537 4.3001 8.26611 4.3427ZM11.0039 1.48248C10.7188 1.18462 10.3803 0.948343 10.0079 0.787141C9.63537 0.625939 9.23614 0.542969 8.83296 0.542969C8.42977 0.542969 8.03054 0.625939 7.65805 0.787141C7.28557 0.948343 6.94712 1.18462 6.66204 1.48248L5.01412 3.20354C4.93183 3.28951 4.8856 3.40612 4.8856 3.5277C4.8856 3.64929 4.93183 3.76589 5.01412 3.85187C5.09641 3.93784 5.20803 3.98614 5.32441 3.98614C5.44079 3.98614 5.5524 3.93784 5.6347 3.85187L7.28262 2.13367C7.69536 1.71194 8.25064 1.47728 8.82795 1.4806C9.40527 1.48392 9.95805 1.72496 10.3663 2.15142C10.7746 2.57787 11.0054 3.15533 11.0087 3.75847C11.012 4.36161 10.7874 4.94177 10.3838 5.37304L8.73537 7.09467C8.65308 7.18057 8.60682 7.2971 8.60677 7.41863C8.60672 7.54017 8.65288 7.65674 8.7351 7.74272C8.81732 7.82869 8.92886 7.87702 9.04519 7.87707C9.16152 7.87713 9.27311 7.8289 9.3554 7.743L11.0039 6.01851C11.289 5.72068 11.5151 5.3671 11.6694 4.97795C11.8237 4.5888 11.9032 4.17171 11.9032 3.75049C11.9032 3.32928 11.8237 2.91219 11.6694 2.52304C11.5151 2.13389 11.289 1.78031 11.0039 1.48248ZM6.76839 9.14677L5.12047 10.8684C4.91768 11.085 4.67577 11.2575 4.40874 11.3757C4.14172 11.494 3.85489 11.5558 3.56486 11.5574C3.27483 11.5591 2.98736 11.5007 2.71911 11.3855C2.45085 11.2703 2.20714 11.1006 2.00207 10.8863C1.797 10.6721 1.63466 10.4174 1.52445 10.1371C1.41423 9.85686 1.35833 9.55653 1.35998 9.25353C1.36162 8.95053 1.42079 8.65088 1.53405 8.37193C1.64731 8.09299 1.81241 7.84028 2.0198 7.62846L3.66717 5.9074C3.74946 5.82142 3.79569 5.70482 3.79569 5.58323C3.79569 5.46165 3.74946 5.34504 3.66717 5.25907C3.58487 5.17309 3.47326 5.12479 3.35688 5.12479C3.2405 5.12479 3.12889 5.17309 3.04659 5.25907L1.39922 6.9807C0.82346 7.58221 0.5 8.39804 0.5 9.24871C0.5 10.0994 0.82346 10.9152 1.39922 11.5167C1.97498 12.1182 2.75588 12.4562 3.57014 12.4562C4.38439 12.4562 5.16529 12.1182 5.74105 11.5167L7.38897 9.79452C7.47119 9.70855 7.51735 9.59197 7.5173 9.47044C7.51725 9.34891 7.47099 9.23238 7.38869 9.14648C7.3064 9.06058 7.19482 9.01235 7.07849 9.01241C6.96216 9.01246 6.85062 9.06079 6.76839 9.14677Z"
                    fill="#A48374"
                  />
                </svg>
              </p>
              <Image
                src="/propertydetail/map.png"
                alt="map"
                width={900}
                height={235}
              />
            </div>
          </div>
           <div className="lg:max-w-[30%] max-w-full w-full ">
         <ContactSeller/>
         <SiteVisit/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProperty;
