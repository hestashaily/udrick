import NotificationCard from "@/components/NotificationComponents/notificationCard";

import React from "react";

// const data = {
//   images: ["/landing/pro.png", "/landing/pro.png", "/landing/pro.png"],
//   title: "5 Bedroom Detached Duplex",
//   price: "₦500,000,000",
//   location: "Victoria Island (VI), Lagos",
//   description:
//     "Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis...",
//   beds: 5,
//   baths: 3,
//   size: "1690 sqft",
//   agent: "Emeka Nzerem",
// };
const Notification = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container mx-auto px-4">
         
            <div className="flex gap-6 py-6 items-center">
              <div className="flex flex-col">
                <h3 className="font-bold text-3xl text-[#0d0d0c]">
                  Notifications
                </h3>
                <span className="inline-block font-normal text-sm text-[#6D6D6D]">
                  Stay updated with your property activities
                </span>
              </div>
            </div>
         
        </div>
      </div>
      <div className="container mx-auto mt-6 mb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full w-full flex flex-col gap-[25px]">
          <NotificationCard
            title="New Message from Sarah Johnson"
            description="Hi! I have some great properties that match your criteria. Would you like to schedule a call?"
            time="30 Min ago"
            image="/Notification/newmessage.png"
          />
           <NotificationCard
            title="Price Drop Alert"
            description="Modern Downtown Apartment price reduced by ₦25,000. Now ₦425,000!"
            time="30 Min ago"
            image="/Notification/notificationperson.png"
          />
           <NotificationCard
            title="Price Drop Alert"
            description="Modern Downtown Apartment price reduced by ₦25,000. Now ₦425,000!"
            time="30 Min ago"
            image="/Notification/notificationperson.png"
          />
             <NotificationCard
            title="Account Security"
            description="Your password was successfully updated. If this wasnt you, please contact support."
            time="30 Min ago"
            image="/Notification/notification.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
