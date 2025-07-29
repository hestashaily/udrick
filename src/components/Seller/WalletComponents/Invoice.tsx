import React from 'react';

const Invoice = () => {
  return (
    <div className="w-full text-center py-6">
      <h2 className="font-[500] text-[28px] text-[#000]">Invoice</h2>
   
      <div className=' max-w-[500px] w-full m-auto flex flex-col gap-[20px]'>
      <div className='flex items-center justify-between'>
        <p className='font-[400] text-[#515151] text-[14px]'>Platform Fee</p>
        <p className='font-[700] text-[14px] text-[#313131]'>₦500</p>
      </div>
        <div className='flex items-center justify-between'>
        <p className='font-[400] text-[#515151] text-[14px]'>Service Charge</p>
        <p className='font-[700] text-[14px] text-[#313131]'>₦500</p>
      </div>
        <div className='flex items-center justify-between'>
        <p className='font-[400] text-[#515151] text-[14px]'>Payment Gateway Charges</p>
        <p className='font-[700] text-[14px] text-[#313131]'>₦500</p>

      </div>
      <button className='py-[14px] flex items-center justify-center gap-[10px] max-w-[310px] w-full m-auto bg-[#936639] rounded-full font-[700] text-[14px] text-white'>Agree & Continue
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.52298 13.2288L13.992 8.7598C14.1689 8.59221 14.2573 8.38273 14.2573 8.13135C14.2573 7.87997 14.1689 7.67048 13.992 7.5029L9.52298 3.0339C9.35539 2.85701 9.14591 2.76856 8.89453 2.76856C8.64315 2.76856 8.43366 2.85701 8.26608 3.0339C8.08918 3.20149 8.00073 3.41098 8.00073 3.66236C8.00073 3.91374 8.08918 4.12322 8.26608 4.29081L11.1989 7.23755H2.63794C2.38656 7.23755 2.17475 7.32367 2.0025 7.49591C1.83026 7.66816 1.74414 7.87997 1.74414 8.13135C1.74414 8.38273 1.83026 8.59454 2.0025 8.76678C2.17475 8.93903 2.38656 9.02515 2.63794 9.02515H11.1989L8.26608 11.9719C8.17297 12.0557 8.10547 12.1534 8.06358 12.2652C8.02168 12.3769 8.00073 12.4886 8.00073 12.6003C8.00073 12.7121 8.02168 12.8238 8.06358 12.9355C8.10547 13.0472 8.17297 13.145 8.26608 13.2288C8.43366 13.4057 8.64315 13.4941 8.89453 13.4941C9.14591 13.4941 9.35539 13.4057 9.52298 13.2288Z" fill="white"/>
</svg>

      </button>
     
    
     </div>
    </div>
  );
};

export default Invoice;
