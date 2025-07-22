import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="px-4 py-8 container mx-auto sm:py-16 lg:p-24 w-full">
        {/* switch at 640px instead of 768px */}
        <div className="flex flex-col-reverse sm:flex-row w-full gap-8 sm:gap-10 items-center">
          
          {/* Form */}
          <div className="flex-1 w-full sm:px-6">
            <form className="space-y-6">
              {/* name + email fields */}
              <div className="flex flex-col gap-6 lg:flex-row">
                {/* Name */}
                <div className="relative w-full lg:flex-1">
                  <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-700">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2 border-2 border-[#936639] rounded-md shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#936639]/10"
                    />
                    <FaRegUser
                      size={18}
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="relative w-full lg:flex-1">
                  <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full pl-10 pr-4 py-2 border-2 border-[#936639] rounded-md shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#936639]/10"
                    />
                    <MdOutlineEmail
                      size={18}
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border-2 border-[#936639] rounded-md shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#936639]/10"
                />
              </div>

              {/* Submit */}
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-t from-[#A68A64] to-[#936639] py-3.5 px-4 font-bold text-lg text-white tracking-wider hover:opacity-90 transition">
                Send Message
                <BiSolidRightArrow />
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="flex-1 w-full flex justify-center sm:justify-end">
            <Image
              src="/landing/lady.svg"
              alt="lady"
              width={570}
              height={540}
              className="w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
