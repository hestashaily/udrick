import Hero from "@/app/components/Hero/Hero";
import AboutUs from "@/app/components/LandingPage/Aboutus/AboutUs";
import AllProperties from "@/app/components/LandingPage/AllProperties/AllProperties";
import ContactUs from "@/app/components/LandingPage/ContactUsForm/ContactUs";
import NearByListing from "@/app/components/LandingPage/NearByListing/NearByListing";
import OurService from "@/app/components/LandingPage/OurServices/OurService";
import YourHomePartner from "@/app/components/LandingPage/YourHomepartner/YourHomePartner";

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
