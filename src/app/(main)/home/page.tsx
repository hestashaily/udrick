import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/LandingPage/Aboutus/AboutUs";
import AllProperties from "@/components/LandingPage/AllProperties/AllProperties";
import ContactUs from "@/components/LandingPage/ContactUsForm/ContactUs";
import NearByListing from "@/components/LandingPage/NearByListing/NearByListing";
import OurService from "@/components/LandingPage/OurServices/OurService";
import YourHomePartner from "@/components/LandingPage/YourHomepartner/YourHomePartner";

export default function HomePage() {
  return (
    <>
    <Hero/>
    <AllProperties/>
      <OurService />
      <NearByListing/>
      <AboutUs />
      <ContactUs />
      <YourHomePartner />
    </>
  );
}
