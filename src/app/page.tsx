// "use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/LandingPage/Aboutus/AboutUs";
import AllProperties from "@/components/LandingPage/AllProperties/AllProperties";
import ContactUs from "@/components/LandingPage/ContactUsForm/ContactUs";
import NearByListing from "@/components/LandingPage/NearByListing/NearByListing";
import OurService from "@/components/LandingPage/OurServices/OurService";
import YourHomePartner from "@/components/LandingPage/YourHomepartner/YourHomePartner";

// import AuthLayout from "./auth/layout";

// import UserTypePage from "./auth/usertype/page";

// export default function HomePage() {
//   return (
//     <AuthLayout>
//       <UserTypePage />
//     </AuthLayout>
//   );
// }
// src/app/page.tsx

export default function RootPage() {
  return (
    <>
      <Header />

      <Hero />
      <AllProperties />
      <OurService />
      <NearByListing />
      <AboutUs />
      <ContactUs />
      <YourHomePartner />
    </>
  );
}
