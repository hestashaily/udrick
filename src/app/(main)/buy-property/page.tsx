import BuyProperty from '@/components/BuyPropertyComponents/BuyProperty'
import React from 'react'

const samplePropertyData = {
  images: [
    "/propertydetail/sliderimage.png",
    "/propertydetail/sliderimage.png",
    "/propertydetail/sliderimage.png",
  ],
  typeTags: ["Apartment", "For Sale"],
  title: "Modern Downtown Apartment",
  price: "₦4,800,000",
  unit: "4 BHK Flat",
  bedrooms: 2,
  bathrooms: 2,
  size: 1200,
  overview: {
    propertyType: "Apartment",
    sellerType: "Owner",
    furnishing: "Unfurnished",
    area: "2,500 Sq. Ft.",
    floor: "3rd Floor",
    room: "Room 305",
  },
  address: "The Grand Residences, 123 Oak Street, Lagos, Nigeria",
  amenities: ["Gym", "Pool", "Parking", "Lift"],
  visitAvailability: "25 July, 2025 to 15 Aug, 2025",
  description:
    "Exquisitely Finished 4 Bedroom Semi Detached Duplex With Bq. in Ikota, Lekki, Lagos Apartment with Stunning City Views. Experience upscale living in this beautifully modern residence which offers a spacious open-concept layout, floor-to-ceiling windows, and a private balcony with breath taking city views. ",
};

const page = () => {
  return (
    <div>
         <BuyProperty propertyData={samplePropertyData} />;
    </div>
  )
}

export default page