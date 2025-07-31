import React from 'react'
import WithdrawlCard from './WithdrawlCard'

const Approved = () => {
  return (
 
             <div className="flex items-start flex-wrap gap-[20px]">
   <WithdrawlCard
  title="5 Bedroom Detached Duplex"
  location="Victoria Island (VI), Lagos"
  amount="₦4,800,000"
  dateTime="April 24, 2025 | 04:00 PM"
  propertyStatus="sold"
  withdrawalStatus="approved"
  rejectionReason="Your bank account was not verified. Please update and resubmit."
/>





    </div>
   
  )
}

export default Approved