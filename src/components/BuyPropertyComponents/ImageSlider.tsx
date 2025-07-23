
"use client";

import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute top-1/2 right-3 z-10 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <ChevronRight size={30} className="text-white" />
  </div>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeft size={30} className="text-white" />
  </div>
);

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`Property ${index}`}
              width={370}
              height={648}
              className="w-full md:h-[648px] h-[330px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
