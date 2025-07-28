import React from 'react'
import Image from 'next/image'

const Visit = () => {
  return (
    <div className="flex flex-col gap-[25px] p-[10px]">
        
  <div className="group py-[20px] w-full flex items-start gap-[15px] px-[15px] border border-[#E8E0D4] bg-white hover:bg-[#F4F8FC] rounded-[20px] hover:border-[#367DC9] transition-all">
           <Image
             src="/seller/notification/new-visit.png"
             alt="reject"
             width={48}
             height={48}
             className="w-[48px] h-[48px]"
           />
           <div className="w-full">
             <div className="w-full">
               <div className="flex md:items-center items-start justify-between w-full md:flex-row flex-col">
                 <p className="font-[500] text-[18px] text-[#313131]">
                 Visit Request Reminder
                 </p>
                 <div className="flex items-center gap-[30px]">
                   <span className="font-[400] text-[16px] text-[#515151]">
                     30 Min ago
                   </span>
                   <div className="h-[14px] w-[14px] min-w-[14px] rounded-full bg-[blue] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                 </div>
               </div>
   
               <p className="font-[400] text-[16px] text-[#515151]">
              Upcoming viewing with Michael Johnson tomorrow at 11:00 AM
               </p>
               <div className="mt-[12px] bg-[#F5F5F5] py-[8px] px-[10px] rounded-[12px]">
                 <div className="flex gap-[12px]  items-center">
                   <Image
                     src="/seller/notification/flat.png"
                     alt="reject"
                     width={56}
                     height={56}
                     className="w-[56px] h-[56px] rounded-[10px]"
                   />
                   <div className="flex flex-col gap-[9px]">
                     <div className="flex items-center gap-[6px]">
                       <Image
                         src="/seller/notification/location.png"
                         alt="location"
                         width={20}
                         height={20}
                         className="w-[20px] h-[20px]"
                       />
                       <p className="font-[400] text-[16px] text-[#313131]">
                         5 Bedroom Detached Duplex
                       </p>
                     </div>
                  
                   </div>
                 </div>
             
               </div>
             </div>
           </div>
         </div>
        
       </div>
  )
}

export default Visit