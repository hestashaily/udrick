import Image from 'next/image';
import React from 'react';

const OurService = () => {
  return (
    <div
      className="bg-[#F6F3EE] my-2 py-16 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/landing/Background.svg')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-2">
            OUR SERVICES
          </h1>
          <p className="text-[#505050] text-sm sm:text-base md:text-lg">
            Explore Reliable Property Solutions Tailored to You
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Purchase Property',
              desc: 'Explore verified properties for sale',
              icon: '/landing/purchess.png',
              button: 'Browse Property',
            },
            {
              title: 'Rent Property',
              desc: 'Browse affordable rental listings across cities',
              icon: '/landing/rent.svg',
              button: 'Find Rental',
            },
            {
              title: 'List Your Property',
              desc: 'Post property and reach genuine buyers or renters',
              icon: '/landing/sell.svg',
              button: 'See Option',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <Image
                src={item.icon}
                alt={item.title}
                height={130}
                width={130}
                className="object-contain mb-4 w-16 h-16 sm:w-18 sm:h-19 lg:w-32 lg:h-32"
              />
              <h2 className="text-[#313131] font-semibold text-lg sm:text-xl mb-2">{item.title}</h2>
              <p className="text-[#505050] text-sm sm:text-sm lg:text-base">{item.desc}</p>
              <button className="mt-6 inline-flex items-center justify-center gap-2 tracking-wider font-mediumsm:text-sm lg:text-lg border bg-gradient-to-t from-[#A68A64] to-[#936639] text-white py-2 lg:py-3.5 px-6 rounded-xl hover:opacity-90 transition">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
