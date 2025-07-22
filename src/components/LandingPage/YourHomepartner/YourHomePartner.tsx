import Image from "next/image";
import React from "react";

const YourHomePartner = () => {
  return (
    <div className="bg-gradient-to-t from-[#A68A64] to-[#936639] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-medium text-base mb-4 text-white">
              #YourHomePartner
            </p>
            <h2 className="font-bold text-3xl md:text-4xl leading-snug mb-4 text-white">
              Find Property, Schedule Visits,
              Buy or Rent — All in One App
            </h2>
            <p className="text-white font-normal text-base mb-6">
              This app is your complete real estate companion. Explore properties,
              track site visits, sign documents, and make secure payments —
              directly from your phone.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <Image
                src="/landing/apple.svg"
                height={60}
                width={180}
                alt="Apple Store"
                className="object-contain"
              />
              <Image
                src="/landing/playstore.svg"
                height={60}
                width={180}
                alt="Play Store"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Image or Visual */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/landing/homepartner.svg" 
              width={500}
              height={500}
              alt="App Mockup"
              className="mx-auto md:mx-0 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default YourHomePartner;

