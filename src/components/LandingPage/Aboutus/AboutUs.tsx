import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#F6F3EE]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left: Image */}
           <div className="flex-1 w-full">
            <div className="relative w-full h-auto">
              <Image
                src="/landing/about.svg"
                alt="About"
                width={650}
                height={538}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-4xl mb-6">About Us</h1>
            <p className="text-[#6E7070] font-normal text-base md:text-lg leading-relaxed">
              UDRICK is your trusted real estate partner, connecting buyers,
              renters, and sellers with verified listings. Our mission is to
              make every property journey easier, faster, and more transparent.
            </p>
            <p className="text-[#6E7070] font-normal text-base md:text-lg leading-relaxed mt-6">
              With years of experience in the Nigerian real estate market, we
              understand the unique challenges and opportunities that come with
              finding the perfect property. Our platform combines cutting-edge
              technology with local expertise to deliver exceptional results.
            </p>
            <Link href="/">
            <button className="mt-6 inline-flex items-center justify-center gap-2 tracking-wider font-medium text-base md:text-lg border bg-gradient-to-t from-[#A68A64] to-[#936639] text-white py-3.5 px-6 rounded-xl hover:opacity-90 transition">
              <Eye color="white" /> See More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
