import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/LandingPage/Aboutus/AboutUs";
// import AllProperties from "@/components/LandingPage/AllProperties/AllProperties";
import ContactUs from "@/components/LandingPage/ContactUsForm/ContactUs";
// import NearByListing from "@/components/LandingPage/NearByListing/NearByListing";
import OurService from "@/components/LandingPage/OurServices/OurService";
import YourHomePartner from "@/components/LandingPage/YourHomepartner/YourHomePartner";

const LandingPage = () => {
  return (
    <div>
      <Header />

      <Hero />
      {/* <AllProperties /> */}
      <OurService />
      {/* <NearByListing /> */}
      <AboutUs />
      <ContactUs />
      <YourHomePartner />
      <Footer />
    </div>
  );
};

export default LandingPage;
