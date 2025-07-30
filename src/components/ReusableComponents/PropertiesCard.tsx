"use client";

import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import {
  Bath,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Heart,
  SquareDivide,
} from "lucide-react";
import Slider, { CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute top-1/2 right-3 z-10 transform -translate-y-1/2 cursor-pointer  "
    onClick={onClick}
  >
    <ChevronRight size={30} className="text-white " />
  </div>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 cursor-pointer "
    onClick={onClick}
  >
    <ChevronLeft size={30} className="text-white " />
  </div>
);

interface PropertyCardProps {
  id: number;
  images: string[];
  title: string;
  price: string;
  location: string;
  description: string;
  beds: number;
  baths: number;
  size: string;
  agent: string;
  sellType?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  images,
  title,
  price,
  location,
  description,
  beds,
  baths,
  size,
  agent,
  sellType,
}) => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-[450px] w-full bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image Slider */}
      <div className="relative  w-full ">
        <Heart
          size={30}
          className="absolute top-3 cursor-pointer right-3 z-20  text-white  "
        />

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <Image
                src={img}
                alt={`Property ${index}`}
                width={370}
                height={350}
                className="w-full h-[280px] md:h-[340px]  object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Info Section */}
      <div className=" px-4 space-y-2">
        <h3 className="text-[#1A1A1A] text-lg font-semibold">{title}</h3>
        <p className="text-[#B3884B] font-bold text-sm">{price}</p>

        <div className="flex items-center text-sm text-gray-500 gap-1">
          <MdLocationOn className="text-[#B3884B]" />
          {location}
        </div>

        <p className="text-sm text-gray-500 leading-tight line-clamp-2">
          {description}{" "}
          <Link href="/" className="text-[#936639] underline">
            Read More
          </Link>
        </p>

        <div className="flex items-center justify-between text-sm text-gray-700 px-2  rounded-md overflow-hidden mt-2">
          <div className="flex-1 flex items-center justify-start border-gray-300 gap-2 py-2 border-r">
            <BedDouble size={18} />
            {beds} Bed
          </div>
          <div className="flex-1 flex items-center justify-center gap-1 py-2 border-gray-300 border-r">
            <Bath size={18} />
            {baths} Bath
          </div>
          <div className="flex-1 flex items-center justify-end gap-1 py-2">
            <SquareDivide size={18} />
            {size}
          </div>
        </div>
        <hr className="border-gray-300" />

        <div className="flex justify-between items-center py-4">
          <div className="text-sm flex gap-2 items-center text-gray-600 font-medium">
            <Image
              src="/landing/agent.svg"
              alt="agent"
              height={38}
              width={38}
              className="h-8 w-8 rounded-full"
            />
            {agent}
          </div>
          <button
            // onClick={()=>router.push(`/buy-property?${title}/${sellType}/${id}`)}
            onClick={() =>
              router.push(
                `/buy-property?title=${encodeURIComponent(
                  title
                )}&type=${sellType}&id=${id}`
              )
            }
            className="border flex items-center gap-2 border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-100 transition"
          >
            Details <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
