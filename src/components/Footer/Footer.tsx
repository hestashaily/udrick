import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { LiaYoutube } from "react-icons/lia";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#162A35] text-white">
      {/* Top Border Section */}
      <div className="border-y  border-white/20 px-4 py-6 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/footer/logo.svg" alt="Logo" width={125} height={50} />
        </div>

        {/* Links */}

        <a href="#" className="hover:underline text-base font-normal text-[#D5D8DA]">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline text-[#D5D8DA] text-base font-normal">
          Terms of Service
        </a>
        <div className="flex items-center gap-2 text-sm">
          <MdOutlineMail className="text-lg" />
          <a href="#" className="hover:underline text-[#D5D8DA] text-base font-normal">
            Contact Us
          </a>
        </div>

        {/* Contact */}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-center items-center py-6 gap-4 text-center">
        {/* Follow us */}
        <div className="flex items-center gap-4">
          <span className="font-semibold text-[#D5D8DA] tracking-widest text-base">Follow us</span>
          <div className="flex gap-2">
            <div className="bg-[#D5D8DA] text-black rounded-full h-8 w-8 flex items-center justify-center text-lg">
              <CiTwitter />
            </div>
            <div className="bg-[#D5D8DA] text-black rounded-full h-8 w-8 flex items-center justify-center text-lg">
              <LiaYoutube />
            </div>
            <div className="bg-[#D5D8DA] text-black rounded-full h-8 w-8 flex items-center justify-center text-lg">
              <FiInstagram />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-base  text-[#D5D8DA] tracking-widest font-normal">
          © 2025 Udrick. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
