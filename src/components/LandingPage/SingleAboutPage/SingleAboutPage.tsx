"use client";

import { ArrowLeft, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleAboutPage = () => {
  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4">
        <Link href="/">
          <div className="flex gap-2 py-6 items-center">
            <ArrowLeft size={18} />
            <span className="inline-block font-normal text-sm text-[#515151]">
              Back to History
            </span>
          </div>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-[#F4F1ED] py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1 space-y-5 text-center md:text-left">
              <h1 className="font-bold text-3xl md:text-5xl leading-tight">
                Transforming Real Estate in 
                <br className="hidden md:block" />
                <span className="text-[#936639]">Nigeria</span>
              </h1>
              <p className="font-normal text-base md:text-lg text-[#6E7070]">
                UDRICK is your trusted real estate partner, connecting buyers,
                renters, and sellers with verified listings across Nigeria. Our
                mission is to make every property journey easier, faster, and
                more transparent.
              </p>
              <div>
                <button className="inline-flex items-center justify-center gap-2 tracking-wider font-medium text-base md:text-lg border bg-gradient-to-t from-[#A68A64] to-[#936639] text-white py-3 px-6 rounded-xl hover:opacity-90 transition">
                  <House size={18} /> Visit Homepage
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <Image
                src="/about/nigeria.svg"
                height={565}
                width={540}
                alt="nig"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 my-8">
        <div className="w-full">
          <Image
            src="/about/home.svg"
            alt="home"
            width={1920}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <h1 className="my-6 font-bold text-3xl md:text-4xl text-center md:text-left px-2">
          Our Story
        </h1>

        <div className="text-[#6E7070] space-y-6 text-base leading-relaxed px-2">
          <p>
            Founded in 2025 in the vibrant city of Lagos, Nigeria, Udrick is
            revolutionizing the real estate sector by placing unwavering
            emphasis on trust, transparency, and exceptional customer
            engagement. Our establishment emerged from a clear recognition of
            the inefficiencies and complexities that often plague real estate
            transactions and property management. Driven by our founder’s
            vision, we have crafted a powerful solution designed to tackle these
            persistent challenges head-on.
          </p>

          <p>
            Udrick connects landlords, property agents, buyers, sellers and
            tenants through a robust platform that fosters seamless
            communication within the application. This not only streamlines
            property management but also elevates the overall user experience to
            new heights.
          </p>

          <p>
            Our foundation is bolstered by a skilled team of legal professionals
            with specialized expertise in property law and documentation
            verification. This ensures rigorous compliance with regulatory
            standards and provides comprehensive protection for our clients
            interests throughout every transaction. We offer more than just
            basic transactional support; we are your strategic partners
            throughout the entire real estate journey—whether it involves
            acquisitions, sales, or leasing agreements. From initial inquiries
            to deal finalization, our mission is to guarantee a smooth,
            efficient, and rewarding experience.
          </p>

          <p>
            Today, Udrick stands as one of Nigeria’s premier real estate
            platforms, serving thousands of clients across major urban areas. We
            set ourselves apart not as a simple property listing service, but as
            essential allies in one of life’s most significant endeavors:
            securing the perfect residential solution. We invite you to embrace
            a modern approach to real estate that prioritizes informed
            decision-making and operational excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleAboutPage;
